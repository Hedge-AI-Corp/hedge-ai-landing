"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Building2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'

export default function InvestorForm() {
  const [investorType, setInvestorType] = useState<'individual' | 'firm' | null>(null)
  const [investmentRange, setInvestmentRange] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const investmentRanges = [
    { value: "100-500K", label: "$100K - $500K" },
    { value: "500-2M", label: "$500K - $2M" },
    { value: "2-5M", label: "$2M - $5M" },
    { value: "5M+", label: "$5M+" }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      organization: formData.get('organization'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      investmentRange,
      investorType
    }

    try {
      const response = await fetch('/api/send/investor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen font-inter">
      {/* Left side - Form */}
      <div className="w-1/2 p-12">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Connect with our team</h1>
            <p className="text-gray-500">
              Interested in investing? We'd love to share our vision and discuss potential opportunities for partnership.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">First name</label>
                <Input 
                  name="firstName"
                  placeholder="First name" 
                  className="border-gray-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Last name</label>
                <Input 
                  name="lastName"
                  placeholder="Last name" 
                  className="border-gray-200"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Organization/Firm</label>
              <Input 
                name="organization"
                placeholder="Your investment firm" 
                className="border-gray-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Work email</label>
              <Input 
                name="email"
                type="email" 
                placeholder="you@company.com" 
                className="border-gray-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Phone number</label>
              <div className="flex">
                <select className="px-3 py-2 border border-r-0 border-gray-200 rounded-l-md bg-white text-sm">
                  <option value="US">🇺🇸 US</option>
                  <option value="UK">🇬🇧 UK</option>
                  <option value="CA">🇨🇦 CA</option>
                </select>
                <Input 
                  name="phone"
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="border-gray-200 rounded-l-none flex-1"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Investment Range</label>
              <Select value={investmentRange} onValueChange={setInvestmentRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select investment range" />
                </SelectTrigger>
                <SelectContent>
                  {investmentRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Investor Type</label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant={investorType === 'individual' ? 'default' : 'outline'}
                  className="h-auto p-4 justify-start space-y-2"
                  onClick={() => setInvestorType('individual')}
                >
                  <div className="flex flex-col items-start text-left">
                    <div className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      <span className="font-medium">Individual Investor</span>
                    </div>
                    <span className="text-xs text-gray-500 font-normal mt-1">
                      I'm investing as an individual
                    </span>
                  </div>
                </Button>
                
                <Button
                  type="button"
                  variant={investorType === 'firm' ? 'default' : 'outline'}
                  className="h-auto p-4 justify-start space-y-2"
                  onClick={() => setInvestorType('firm')}
                >
                  <div className="flex flex-col items-start text-left">
                    <div className="flex items-center">
                      <Building2 className="mr-2 h-5 w-5" />
                      <span className="font-medium">Investment Firm</span>
                    </div>
                    <span className="text-xs text-gray-500 font-normal mt-1">
                      I represent an investment firm
                    </span>
                  </div>
                </Button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Schedule a call"}
            </Button>
          </form>
        </div>
      </div>

      {/* Right side - Testimonial */}
      <div className="w-1/2 relative bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/mockup.webp"
            alt="Testimonial"
            fill
            className="object-cover opacity-50"
          />
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <p className="text-3xl font-medium mb-6">
            Our AI-powered platform has shown exceptional growth, with a 300% increase in user acquisition and $2M ARR in just 18 months. We're now seeking strategic partners to accelerate our expansion into enterprise markets.
          </p>
          <div>
            <p className="font-semibold text-xl">Aydin Joshi</p>
            <p className="text-gray-200">Founder & CEO</p>
          </div>
          <div className="absolute right-0 bottom-0">
            <img
              src="/file.svg"
              alt="Company Logo"
              className="h-8 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}