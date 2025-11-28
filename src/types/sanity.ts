import { PortableTextBlock } from '@portabletext/react'

export interface Author {
  _id: string
  name: string
  bio?: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Article {
  _id: string
  title: string
  slug: {
    current: string
  }
  author: Author
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  categories?: Category[]
  publishedAt: string
  excerpt?: string
  body: PortableTextBlock[]
  featured?: boolean
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface Quiz {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  questions: QuizQuestion[]
  categories?: Category[]
}
