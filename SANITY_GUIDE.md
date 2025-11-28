# Sanity Studio Guide for Content Creators

This guide will help you create and manage content for The Fool Has Said website using the Sanity Studio CMS (Content Management System).

## Table of Contents

1. [Getting Started](#getting-started)
2. [Creating Your First Author Profile](#creating-your-first-author-profile)
3. [Creating Categories](#creating-categories)
4. [Writing and Publishing Articles](#writing-and-publishing-articles)
5. [Creating Interactive Quizzes](#creating-interactive-quizzes)
6. [Tips and Best Practices](#tips-and-best-practices)

---

## Getting Started

### Accessing Sanity Studio

1. Make sure the website is running (ask David to run `npm run dev`)
2. Open your web browser
3. Go to: **http://localhost:3000/studio**
4. Sign in with your Sanity account

You'll see a sidebar on the left with different content types:
- **Article** - Blog posts and articles
- **Quiz** - Interactive quizzes
- **Author** - Author profiles
- **Category** - Topic categories

---

## Creating Your First Author Profile

Before writing articles, you need to create an author profile:

1. **Click "Author" in the left sidebar**
2. **Click the "+" button** (top right) or "Create new Author"
3. **Fill in the fields:**
   - **Name**: Your full name (e.g., "John Smith")
   - **Bio**: A short description about yourself (optional)
   - **Image**: Click to upload a profile photo (optional)
4. **Click "Publish"** (bottom right)

✅ **You're done!** Your author profile is ready to use.

---

## Creating Categories

Categories help organize your content by topic. Here are some suggested categories:

- Intelligent Design
- Creation Science
- Critique of Evolution
- Biblical Foundations
- Scientific Evidence
- Apologetics

### How to Create a Category:

1. **Click "Category" in the left sidebar**
2. **Click the "+" button** to create a new category
3. **Fill in the fields:**
   - **Title**: Category name (e.g., "Intelligent Design")
   - **Slug**: Click "Generate" - this creates a URL-friendly version
   - **Description**: Brief description of what this category covers (optional)
4. **Click "Publish"**

---

## Writing and Publishing Articles

### Step 1: Create a New Article

1. **Click "Article" in the left sidebar**
2. **Click the "+" button** to create a new article
3. You'll see a blank article form

### Step 2: Fill in Article Information

#### Required Fields:

**Title**
- Enter your article title (e.g., "The Complexity of DNA: Evidence for Design")
- Make it clear and compelling

**Slug**
- Click "Generate" after entering your title
- This creates the article's URL
- Example: "the-complexity-of-dna-evidence-for-design"

**Author**
- Click the dropdown
- Select your author profile
- If you don't see yourself, create an author profile first

**Published At**
- This is automatically set to today
- You can change it if needed by clicking the date

#### Optional but Recommended:

**Main Image**
- Click "Select" to upload a featured image
- Best size: 1200x630 pixels
- Use relevant, high-quality images

**Categories**
- Click "Add item"
- Select relevant categories (you can add multiple)
- Example: "Intelligent Design" + "Scientific Evidence"

**Excerpt**
- Write a 1-2 sentence summary
- This appears in article previews and search results
- Keep it under 160 characters for best SEO

**Featured Article**
- Toggle ON if you want this to appear prominently on the homepage
- Only feature your best, most important articles

### Step 3: Write Your Article Body

The **Body** field is where you write your main content. It's a rich text editor with many formatting options:

#### Formatting Text:

- **Bold**: Select text, click **B** button
- **Italic**: Select text, click *I* button
- **Underline**: Select text, click U button

#### Headings:

Click the paragraph style dropdown to choose:
- **Normal**: Regular paragraphs
- **H1**: Main section headers (use sparingly)
- **H2**: Major section headers
- **H3**: Subsection headers
- **H4**: Minor headers
- **Quote**: For blockquotes or highlighted text

#### Adding Links:

1. Select the text you want to link
2. Click the link icon (🔗)
3. Enter the URL
4. Click "Apply"

Example: "According to [this study](https://example.com), DNA complexity..."

#### Adding Images:

1. Click where you want the image
2. Click the image icon or type `/` and select "Image"
3. Upload your image or select from existing
4. Images will appear full-width in your article

#### Using Blockquotes:

Perfect for highlighting important quotes:
1. Click the paragraph style dropdown
2. Select "Quote"
3. Type your quote

Example:
> "The heavens declare the glory of God; the skies proclaim the work of his hands." - Psalm 19:1

### Step 4: Preview and Publish

1. **Review your article** - scroll through and check for typos
2. **Click "Publish"** (bottom right) when ready
3. ✅ **Your article is now live!**

### Editing Published Articles:

1. Find your article in the Article list
2. Click it to open
3. Make your changes
4. Click "Publish" again to update

---

## Creating Interactive Quizzes

Quizzes are a great way to engage readers and test their knowledge!

### Step 1: Create a New Quiz

1. **Click "Quiz" in the left sidebar**
2. **Click the "+" button**
3. You'll see a blank quiz form

### Step 2: Quiz Information

**Title**
- Enter your quiz title (e.g., "Test Your Knowledge: Intelligent Design Basics")

**Slug**
- Click "Generate" after entering the title

**Description** (optional but recommended)
- Write a short description of what the quiz covers
- Example: "Test your understanding of the fundamental principles of intelligent design."

**Categories** (optional)
- Select relevant categories

### Step 3: Add Questions

This is where you build your quiz! Each quiz can have multiple questions.

#### Adding Your First Question:

1. In the **Questions** section, click "Add item"
2. A question form will appear

**Question Field:**
- Type your question
- Example: "What is irreducible complexity?"

**Answer Options:**
- Click "Add item" for each answer choice
- You need at least 2 options, maximum 6
- Example options:
  - "A system where removing any part causes it to stop functioning"
  - "A complex system that evolved over time"
  - "A system with many interacting parts"
  - "A system that can be simplified"

**Correct Answer:**
- Enter the index number (position) of the correct answer
- **Important**: Counting starts at 0!
  - First option = 0
  - Second option = 1
  - Third option = 2
  - Fourth option = 3
- In our example, if the first option is correct, enter: **0**

**Explanation** (optional but recommended):
- Write a brief explanation of why the answer is correct
- Example: "Irreducible complexity refers to systems where all parts are necessary for function. Michael Behe used this concept to argue against gradual evolution."
- This shows after the user answers

#### Adding More Questions:

1. Click "Add item" under Questions again
2. Repeat the process
3. You can have as many questions as you want!

### Step 4: Publish Your Quiz

1. Review all your questions
2. Double-check the correct answer numbers
3. **Click "Publish"**
4. ✅ **Your quiz is now live!**

---

## Tips and Best Practices

### Writing Great Articles:

✅ **Do:**
- Write clear, compelling titles
- Use headings to organize long articles
- Include relevant images
- Add an excerpt for better previews
- Cite sources with links
- Proofread before publishing

❌ **Avoid:**
- Very long paragraphs (break them up!)
- Too many featured articles (3-5 max)
- Publishing without an excerpt
- Forgetting to select an author

### Creating Effective Quizzes:

✅ **Do:**
- Write clear, unambiguous questions
- Make wrong answers plausible (not obviously wrong)
- Provide explanations to teach
- Keep quizzes focused on one topic
- Test your quiz before publishing
- Use 5-10 questions for best engagement

❌ **Avoid:**
- Trick questions
- Too many answer options (stick to 3-4)
- Forgetting to set the correct answer
- Using wrong index numbers (remember: start at 0!)

### General Tips:

- **Save your work**: Sanity auto-saves, but click "Publish" to make it live
- **Drafts**: You can work on content and publish it later
- **Unpublish**: You can unpublish articles/quizzes by clicking the three dots (...) menu
- **Delete**: Be careful! Deleted content can't be recovered
- **Search**: Use the search bar (top) to find existing content quickly

### SEO Best Practices:

- Write descriptive titles (50-60 characters)
- Always add excerpts (under 160 characters)
- Use headings (H2, H3) to structure content
- Add alt text to images when possible
- Include relevant keywords naturally

---

## Getting Help

If you have questions:

1. **Check this guide first**
2. **Ask David** for technical help
3. **Sanity Documentation**: [sanity.io/docs](https://www.sanity.io/docs)

---

## Quick Reference: Quiz Answer Indexes

When setting the correct answer for quiz questions, remember:

| Position | Index Number |
|----------|--------------|
| 1st option | 0 |
| 2nd option | 1 |
| 3rd option | 2 |
| 4th option | 3 |
| 5th option | 4 |
| 6th option | 5 |

**Example:**
If your options are:
1. Wrong answer
2. Wrong answer
3. **Correct answer** ← This is what you want
4. Wrong answer

You would enter **2** as the correct answer (because it's the 3rd item, and counting starts at 0).

---

## You're Ready!

You now have everything you need to create compelling content for The Fool Has Said. Start with:

1. ✅ Create your author profile
2. ✅ Create a few categories
3. ✅ Write your first article
4. ✅ Create your first quiz

Happy writing!
