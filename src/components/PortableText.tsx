import { PortableText as BasePortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null

      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Article image'}
            className="rounded-lg w-full"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">{value.caption}</p>
          )}
        </div>
      )
    },
    video: ({ value }: any) => {
      if (!value?.url) return null

      const url = value.url
      let embedUrl = url

      // Convert YouTube URLs to embed format
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]?.split('&')[0]
        embedUrl = `https://www.youtube.com/embed/${videoId}`
      } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0]
        embedUrl = `https://www.youtube.com/embed/${videoId}`
      } else if (url.includes('youtube.com/shorts/')) {
        const videoId = url.split('shorts/')[1]?.split('?')[0]
        embedUrl = `https://www.youtube.com/embed/${videoId}`
      } else if (url.includes('vimeo.com/')) {
        const videoId = url.split('vimeo.com/')[1]?.split('?')[0]
        embedUrl = `https://player.vimeo.com/video/${videoId}`
      }

      // Check if it's an embeddable URL (YouTube/Vimeo)
      const isEmbed = embedUrl !== url

      return (
        <div className="my-8">
          {isEmbed ? (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              src={url}
              controls
              className="w-full rounded-lg"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          )}
          {value.caption && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">{value.caption}</p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold mt-6 mb-3 text-gray-900">{children}</h4>
    ),
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 py-2 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 hover:text-blue-700 underline"
          target={!value.href.startsWith('/') ? '_blank' : undefined}
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <span className="underline">{children}</span>,
  },
}

export default function PortableText({ value }: { value: PortableTextBlock[] }) {
  return <BasePortableText value={value} components={components} />
}
