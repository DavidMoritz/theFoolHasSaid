# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website with Sanity CMS for content management, built to present articles and interactive quizzes about intelligent design and creation science. The site uses the App Router architecture with TypeScript and Tailwind CSS.

## Development Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000
                     # Studio accessible at localhost:3000/studio

# Build & Deploy
npm run build        # Production build (validates TypeScript)
npm start            # Run production build locally
npm run lint         # Run ESLint

# Sanity Setup (first time only)
npx sanity init --env  # Initialize Sanity project, get project ID
```

## Architecture

### Dual Application Pattern

This codebase runs TWO applications simultaneously:
1. **Next.js frontend** (main site at `/`)
2. **Sanity Studio** (CMS at `/studio`)

The Studio is embedded via `src/app/studio/[[...tool]]/page.tsx` using the `NextStudio` component from `next-sanity`.

### Content Flow Architecture

```
Sanity CMS (sanity.io cloud)
    ↓
Sanity Client (src/lib/sanity.ts)
    ↓
Server Components (src/app/*/page.tsx)
    ↓
React Components (src/components/*)
```

Content is fetched server-side using GROQ queries in page components, then passed to client/server components for rendering.

### Key Files

- **`sanity.config.ts`**: Sanity Studio configuration, defines CMS base path (`/studio`)
- **`src/lib/sanity.ts`**: Sanity client initialization, exports `client` and `urlFor()` helper
- **`src/types/sanity.ts`**: TypeScript interfaces for all content types
- **`sanity/schemas/`**: Sanity schema definitions (article, quiz, author, category)

### Content Types & Relationships

Four primary content types with references:

```
Author ←─── Article ───→ Category
              ↓
         PortableText Body

Category ───→ Quiz
              ↓
         QuizQuestion[]
```

- **Articles** reference Author (required) and Categories (optional)
- **Quizzes** reference Categories (optional) and contain embedded QuizQuestion objects
- All use slug-based routing

### Important Architectural Decisions

**Sanity Image URL Builder Import**
Use named import `createImageUrlBuilder` (NOT default import):
```typescript
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
```

**Error Handling for Missing Sanity Setup**
All data fetching functions use try-catch blocks that return empty arrays on error. This allows the build to succeed even without Sanity configuration:
```typescript
try {
  return await client.fetch<Article[]>(query)
} catch (error) {
  console.error('Error fetching articles:', error)
  return []
}
```

**Client vs Server Components**
- Pages (`src/app/*/page.tsx`): Server components, fetch data with async functions
- Interactive components (`Comments.tsx`, `QuizPlayer.tsx`): Client components with `'use client'`
- Layout components (`Header.tsx`, `Footer.tsx`): Server components (no state)

**PortableText Rendering**
Article bodies use Sanity's Portable Text format. Custom renderer in `src/components/PortableText.tsx` provides styling for all block types (headings, paragraphs, images, blockquotes, links).

## Environment Variables

Required for development (`.env.local`):
```
NEXT_PUBLIC_SANITY_PROJECT_ID    # From `npx sanity init --env`
NEXT_PUBLIC_SANITY_DATASET       # Usually "production"
NEXT_PUBLIC_SANITY_API_VERSION   # Format: YYYY-MM-DD
```

Optional (for comments):
```
NEXT_PUBLIC_GISCUS_REPO          # GitHub repo (owner/repo)
NEXT_PUBLIC_GISCUS_REPO_ID       # From giscus.app
NEXT_PUBLIC_GISCUS_CATEGORY      # Discussion category name
NEXT_PUBLIC_GISCUS_CATEGORY_ID   # From giscus.app
```

All variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Sanity Schema Patterns

### Slug Generation
All content types with public URLs use the slug pattern:
```typescript
{
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',  // Auto-generate from title field
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
}
```

### Quiz correctAnswer Field
Quiz questions use zero-based indexing for correct answers:
- First option = 0
- Second option = 1
- Third option = 2, etc.

This is critical to document for content creators (see SANITY_GUIDE.md).

### Reference Fields
References use Sanity's reference type:
```typescript
{
  name: 'author',
  type: 'reference',
  to: [{ type: 'author' }],  // Array allows multiple target types
}
```

## GROQ Query Patterns

Common patterns for fetching content:

**Fetch with references expanded:**
```groq
*[_type == "article"] {
  _id,
  title,
  slug,
  author->{      // Use -> to expand reference
    name,
    image
  },
  categories[]->{  // Use []-> for arrays of references
    title,
    slug
  }
}
```

**Filter and order:**
```groq
*[_type == "article" && featured == true] | order(publishedAt desc)[0...3]
```

**Single document by slug:**
```groq
*[_type == "article" && slug.current == $slug][0]
```

## Deployment Considerations

### Vercel Deployment
- All environment variables must be added to Vercel project settings
- Automatic deployments on push to main branch
- Studio is accessible at `yoursite.com/studio` in production

### Sanity CORS Configuration
After deploying, add production domain to Sanity CORS origins:
1. Go to sanity.io/manage → select project → API → CORS Origins
2. Add production URLs (e.g., `https://thefoolhassaid.com`)
3. Enable "Allow credentials"

Without CORS configuration, Studio will fail to authenticate in production.

### Build Validation
The build process validates:
- TypeScript compilation
- All imports resolve correctly
- Environment variables are properly typed (uses `!` assertion)

Build succeeds even with invalid Sanity credentials (graceful degradation).

## Common Tasks

### Adding a New Content Type

1. Create schema in `sanity/schemas/newtype.ts`
2. Export from `sanity/schemas/index.ts`
3. Add TypeScript interface to `src/types/sanity.ts`
4. Create page route in `src/app/newtype/`
5. Add navigation link to `src/components/Header.tsx`

### Modifying Sanity Schemas

Schema changes are reflected immediately in Studio (hot reload). However, existing content may need migration if field requirements change.

### Updating PortableText Styles

Modify `src/components/PortableText.tsx` to change how article content renders. The components object defines renderers for:
- `types`: Custom block types (e.g., images)
- `block`: Standard blocks (h1-h4, normal paragraphs, blockquotes)
- `marks`: Inline formatting (links, bold, italic, underline)

## Data Fetching Patterns

All pages use Server Components with async data fetching:

```typescript
async function getData() {
  const query = `*[_type == "article"]`
  const data = await client.fetch<Article[]>(query)
  return data
}

export default async function Page() {
  const data = await getData()
  return <div>{/* render */}</div>
}
```

Use `Promise.all()` for parallel fetches when multiple queries are needed.

## Related Documentation

- **SANITY_GUIDE.md**: Non-technical guide for content creators
- **NEXT_STEPS.md**: Initial setup and deployment instructions
- **README.md**: Full project documentation and commands
