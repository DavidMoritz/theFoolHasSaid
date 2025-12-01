# Next Steps - Getting Your Website Live

Congratulations! Your website is built and ready to be configured. Here's what you need to do next:

## Step 1: Set Up Sanity CMS (Required)

The CMS (Content Management System) is where your dad will create and manage articles and quizzes.

### 1a. Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click "Get started"
3. Sign up with Google, GitHub, or email
4. Verify your email if needed

### 1b. Initialize Sanity

In your terminal, run:

```bash
npx sanity init --env
```

Follow the prompts:
- **Login**: Use the account you just created
- **Create new project**: Yes
- **Project name**: "The Fool Says" (or your preferred name)
- **Use default dataset configuration?**: Yes
- **Project output path**: Just press Enter (use default)
- **Select project template**: Choose "Clean project"
- **Add sample data?**: No

### 1c. Update Environment Variables

After initialization, you'll get a **Project ID**. Copy it!

Open the `.env.local` file and replace:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
```

With your actual project ID:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
```

### 1d. Test Your Setup

Start the development server:
```bash
npm run dev
```

Open your browser and go to:
- **Website**: http://localhost:3000
- **CMS Studio**: http://localhost:3000/studio

You should be able to sign into the Studio and start creating content!

---

## Step 2: Set Up Comments (Optional)

The comment system uses GitHub Discussions. This is optional - the site works fine without it.

### 2a. Enable GitHub Discussions

1. Create a GitHub repository for this project (if you haven't already)
2. Go to your repository on GitHub
3. Click **Settings** (tab at the top)
4. Scroll down to **Features**
5. Check the box for **Discussions**

### 2b. Configure Giscus

1. Visit [giscus.app](https://giscus.app/)
2. Enter your repository name (e.g., `yourusername/thefoolsays`)
3. Scroll through the configuration:
   - **Page ↔ Discussions Mapping**: Choose "pathname"
   - **Discussion Category**: Choose "General" or create a new category
4. Scroll to the bottom where it says "Enable giscus"
5. Copy the configuration values

### 2c. Update Environment Variables

In `.env.local`, update these values with what you got from Giscus:

```env
NEXT_PUBLIC_GISCUS_REPO=yourusername/thefoolsays
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDOxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOxxxxxx
```

Restart your dev server to see the changes.

---

## Step 3: Create Your First Content

Now that Sanity is set up, create some content!

### 3a. Create an Author Profile

1. Go to http://localhost:3000/studio
2. Click **Author** in the left sidebar
3. Click the **+** button
4. Fill in:
   - Name
   - Bio (optional)
   - Image (optional)
5. Click **Publish**

### 3b. Create Some Categories

Create a few categories like:
- Intelligent Design
- Creation Science
- Critique of Evolution
- Biblical Foundations

See the **SANITY_GUIDE.md** file for detailed instructions.

### 3c. Write Your First Article

1. Click **Article** in the left sidebar
2. Click the **+** button
3. Fill in all the fields
4. Write your article body
5. Click **Publish**

Check out your live article at http://localhost:3000/articles

---

## Step 4: Deploy to Production (Going Live!)

Once you're happy with the site and have some content, deploy it to the internet.

### 4a. Push to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - The Fool Says website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/thefoolsays.git
git branch -M main
git push -u origin main
```

### 4b. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Import your repository
5. **IMPORTANT**: Add your environment variables:
   - Click on "Environment Variables"
   - Add all the variables from your `.env.local` file:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`
     - (Optional) All the `NEXT_PUBLIC_GISCUS_*` variables
6. Click **Deploy**

Wait 2-3 minutes for deployment to complete!

### 4c. Add Your Custom Domain

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add `thefoolsays.com`
4. Vercel will show you DNS records to add
5. Go to GoDaddy:
   - Sign in to your GoDaddy account
   - Go to **My Products** → **Domains**
   - Click **DNS** next to your domain
   - Add the DNS records Vercel gave you
6. Wait 24-48 hours for DNS to propagate

Your site will be live at **https://thefoolsays.com**!

---

## Step 5: Configure Sanity for Production

Once deployed, you need to allow your production domain in Sanity:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Click **API** in the left sidebar
4. Under **CORS Origins**, click **Add CORS origin**
5. Add your domains:
   - `https://thefoolsays.com`
   - `https://www.thefoolsays.com` (if using www)
   - `http://localhost:3000` (for local development)
6. Check **Allow credentials**
7. Click **Save**

Now your production site can access Sanity!

---

## Ongoing Management

### Adding New Content

Your dad can:
1. Go to **yourdomain.com/studio** (or localhost:3000/studio locally)
2. Sign in with Sanity
3. Create articles and quizzes
4. Content appears immediately on the site!

### Making Code Changes

If you need to update the website code:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically deploys the changes!

---

## Helpful Resources

- **SANITY_GUIDE.md**: Detailed guide for creating content (give this to your dad!)
- **README.md**: Technical documentation and project overview
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

## Troubleshooting

### "Dataset not found" errors
- Make sure you ran `npx sanity init --env`
- Check that your `.env.local` has the correct project ID
- Restart the dev server after changing `.env.local`

### Changes not showing up
- Did you click "Publish" in Sanity Studio?
- Try refreshing the page
- Check the browser console for errors (F12 → Console tab)

### Comments not working
- Make sure GitHub Discussions is enabled
- Check that your Giscus environment variables are correct
- Comments require a GitHub account - that's by design!

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Delete `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check for TypeScript errors: `npm run build`

---

## Need Help?

If you run into issues:
1. Check the error message carefully
2. Review the relevant guide (README.md or SANITY_GUIDE.md)
3. Search for the error message online
4. Ask for help with the specific error message

---

## You're Ready!

✅ Build a website: **Done**
✅ Set up CMS: **In Progress** (follow Step 1)
✅ Create content: **Next** (follow Step 3)
✅ Deploy to production: **When ready** (follow Step 4)

Good luck with your website!
