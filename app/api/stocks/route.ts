// app/api/stocks/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');

    if (!symbol) {
      return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
    }



    const response = await axios.get(
      `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev`,
      {
        params: {
          apiKey: process.env.POLYGON_API_KEY
        }
      }
    );

    console.log('Polygon Response:', response.data);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Full error:', error);
    
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { 
          error: error.response?.data || 'Failed to fetch stock data',
          message: error.message
        }, 
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}