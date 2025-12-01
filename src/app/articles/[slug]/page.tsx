import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'
import { Article } from '@/types/sanity'
import PortableText from '@/components/PortableText'
import Comments from '@/components/Comments'
import { Metadata } from 'next'
import Image from 'next/image'

// Revalidate this page every 60 seconds
export const revalidate = 60

async function getArticle(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    mainImage,
    author->{
      name,
      bio,
      image
    },
    categories[]->{
      title,
      slug
    }
  }`

  try {
    const article = await client.fetch<Article>(query, { slug })
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | The Fool Says`,
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/articles" className="hover:text-blue-600">Articles</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>

          {/* Categories */}
          {article.categories && article.categories.length > 0 && (
            <div className="flex gap-2 mb-4">
              {article.categories.map((category) => (
                <span
                  key={category._id}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {article.title}
          </h1>

          {/* Author and Date */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            {article.author.image && (
              <Image
                src={urlFor(article.author.image).width(64).height(64).url()}
                alt={article.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <div className="font-semibold text-gray-900">{article.author.name}</div>
              <time dateTime={article.publishedAt} className="text-sm text-gray-600">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>

          {/* Main Image */}
          {article.mainImage && (
            <div className="mb-8">
              <Image
                src={urlFor(article.mainImage).width(1200).url()}
                alt={article.title}
                width={1200}
                height={675}
                className="rounded-lg w-full"
                priority
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={article.body} />
          </div>

          {/* Author Bio */}
          {article.author.bio && (
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">About the Author</h3>
              <p className="text-gray-700">{article.author.bio}</p>
            </div>
          )}

          {/* Comments */}
          <Comments />

          {/* Back to Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/articles"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to Articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
