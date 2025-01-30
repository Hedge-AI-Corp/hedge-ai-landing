// app/blog/page.tsx
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { client } from '@/sanity/lib/client'
import { urlForImage } from "@/sanity/lib/image"
import Image from 'next/image'

async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] {
      title,
      slug,
            mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      author->{
        name
      },
      publishedAt,
      body
    }
  `)
}

export default async function BlogPage() {
  const posts = await getPosts()
  console.log(posts)
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {posts.map((post: any) => (
        <Card 
          key={post.slug.current}
          className="w-full overflow-hidden transition-all hover:shadow-lg"
        >
          <CardHeader className="p-0">
          {post.mainImage?.asset?.url ? (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {post.title}
                </h3>
                <div className="flex gap-2 items-center text-sm text-gray-500">
                  {post.author && <span>By {post.author.name}</span>}
                  <span>•</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6">
            <a 
              href={`/blog/${post.slug.current}`}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Read more →
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}