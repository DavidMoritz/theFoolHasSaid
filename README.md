# The Fool Says

A modern website built with Next.js and Sanity CMS to present evidence for intelligent design and examine evolutionary theory.

> "The fool says in his heart, 'There is no God.'" - Psalm 14:1

## Features

- **Content Management**: Easy-to-use Sanity Studio CMS for creating and managing articles
- **Interactive Quizzes**: Engaging quizzes to test knowledge about intelligent design and creation science
- **Comment System**: GitHub Discussions-powered comments via Giscus
- **SEO Optimized**: Built-in metadata and Open Graph support
- **Responsive Design**: Beautiful, mobile-friendly interface
- **Fast Performance**: Server-side rendering with Next.js for optimal speed

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Comments**: Giscus (GitHub Discussions)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Sanity.io account (free tier available)
- (Optional) GitHub account for comments

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd theFoolSays
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Sanity CMS**

   a. Create a Sanity account at [sanity.io](https://www.sanity.io/)

   b. Initialize Sanity in your project:
   ```bash
   npx sanity init --env
   ```

   c. Follow the prompts:
   - Login to Sanity
   - Create a new project or use existing
   - Use default dataset configuration (production)
   - Say **NO** to adding sample data

   d. Copy your Project ID and update `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   ```

4. **Configure environment variables**

   Update the `.env.local` file with your actual values:
   - Sanity Project ID (from step 3)
   - Giscus configuration (see "Setting Up Comments" below)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Setting Up Comments (Optional)

To enable the Giscus comment system:

1. Go to your GitHub repository settings
2. Enable "Discussions" under Features
3. Visit [giscus.app](https://giscus.app/)
4. Enter your repository name (e.g., `username/thefoolsays`)
5. Follow the configuration wizard
6. Copy the generated values to `.env.local`

If you don't want to set up comments right away, the site will work fine without them - the comment section just won't display.

## Project Structure

```
theFoolSays/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── articles/           # Article list and detail pages
│   │   ├── quizzes/            # Quiz list and detail pages
│   │   ├── about/              # About page
│   │   ├── studio/             # Sanity Studio (CMS)
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── Header.tsx          # Site header/navigation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Comments.tsx        # Giscus comment component
│   │   ├── QuizPlayer.tsx      # Interactive quiz component
│   │   └── PortableText.tsx    # Article content renderer
│   ├── lib/                    # Utilities
│   │   └── sanity.ts           # Sanity client configuration
│   └── types/                  # TypeScript type definitions
│       └── sanity.ts           # Content type definitions
├── sanity/
│   └── schemas/                # Sanity schema definitions
│       ├── article.ts          # Article content type
│       ├── quiz.ts             # Quiz content type
│       ├── author.ts           # Author content type
│       └── category.ts         # Category content type
├── .env.local                  # Environment variables
└── sanity.config.ts            # Sanity configuration
```

## Using the CMS

### Accessing Sanity Studio

1. Start the development server (`npm run dev`)
2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
3. Sign in with your Sanity account

### Creating Content

See the `SANITY_GUIDE.md` file for detailed instructions on:
- Creating your first author profile
- Writing and publishing articles
- Creating interactive quizzes
- Managing categories
- Using the rich text editor

## Deployment

### Deploying to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Add environment variables from `.env.local`
   - Click "Deploy"

3. **Configure your domain**
   - In Vercel dashboard, go to Settings > Domains
   - Add `thefoolsays.com`
   - Follow Vercel's instructions to update your GoDaddy DNS settings

### Environment Variables for Production

Make sure to add these in your Vercel project settings:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_GISCUS_REPO` (if using comments)
- `NEXT_PUBLIC_GISCUS_REPO_ID` (if using comments)
- `NEXT_PUBLIC_GISCUS_CATEGORY` (if using comments)
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID` (if using comments)

## Content Types

### Articles
- Title, slug, and excerpt
- Rich text body with formatting, images, and links
- Author attribution
- Categories/tags
- Publication date
- Featured article toggle
- SEO metadata

### Quizzes
- Title and description
- Multiple questions with:
  - Question text
  - Answer options (2-6 choices)
  - Correct answer
  - Optional explanation
- Category tags
- Interactive quiz player with scoring

### Authors
- Name and bio
- Profile image

### Categories
- Title and slug
- Description

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Support and Documentation

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity**: [sanity.io/docs](https://www.sanity.io/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Giscus**: [giscus.app](https://giscus.app/)

## License

This project is private and proprietary.

## Acknowledgments

Built with Next.js, Sanity, and modern web technologies to share the truth of intelligent design.
