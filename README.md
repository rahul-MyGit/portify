<div align="center">

# Rahul Gujjar | Portfolio

[![Website](https://img.shields.io/badge/Website-irahul.in-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.irahul.in)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rahul--mylink1-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rahul-mylink1)
[![GitHub](https://img.shields.io/badge/GitHub-rahul--MyGit-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rahul-MyGit)
[![X](https://img.shields.io/badge/X-@rahul__meX-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/rahul_meX)
[![YouTube](https://img.shields.io/badge/Podcast-Harkirat_Singh-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/SweexyXMYYc)

**24-year-old tech enthusiast, sports lover and open source contributor.**

Full Stack Developer specializing in TypeScript, Python, Rust, Next.js and MERN stack.

[View Resume](https://dub.sh/jMDsbKE) • [Watch Podcast with Harkirat Singh](https://youtu.be/SweexyXMYYc) • [Contact Me](mailto:rahul.mymail1@gmail.com)

</div>

---

## 👨‍💻 About Me

I'm a full stack developer with 1.5+ year of experiance from **Haryana, India**, passionate about building impactful products that leverage technology to make a difference. I actively look to open source codebases and explore ideas in AI and web3.

Online, I'm known as **kovachi** - a name that reflects my roots, starting as a shell (gem) used for crafting.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, Next.js, TypeScript, Tailwind CSS |
| **Backend** | Node.js, FastAPI, Python |
| **Database** | PostgreSQL, Prisma |
| **DevOps** | Docker, Kubernetes, AWS |
| **Full Stack** | MERN Stack |

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light mode** with next-themes
- ✍️ **MDX Blog** with syntax highlighting
- 📱 **Fully responsive** design
- 🔍 **SEO optimized** with meta tags, sitemap, and JSON-LD
- 🎭 **Framer Motion** animations
- 📊 **Dynamic OG images** for social sharing

## 📁 Project Structure

```
portify/
├── public/                    # Static assets
│   ├── assets/
│   │   ├── blogs/            # Blog post images
│   │   └── projects/         # Project screenshots
│   └── *.jpg, *.svg          # Public images
│
├── content/                   # MDX blog posts
│   └── *.mdx
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog pages
│   │   │   └── [slug]/      # Dynamic blog post
│   │   ├── projects/        # Projects page
│   │   ├── api/             # API routes
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Homepage
│   │   ├── sitemap.ts       # Dynamic sitemap
│   │   └── robots.ts        # Robots.txt config
│   │
│   ├── components/
│   │   ├── ui/              # Shadcn/ui components
│   │   ├── magicui/         # Magic UI components
│   │   ├── acernityui/      # Aceternity UI components
│   │   └── *.tsx            # Custom components
│   │
│   ├── data/
│   │   ├── config/
│   │   │   ├── site.config.tsx      # Site metadata & personal info
│   │   │   ├── projects.config.tsx  # Projects data
│   │   │   ├── work.config.tsx      # Work experience
│   │   │   ├── skill.config.tsx     # Skills data
│   │   │   ├── client.config.tsx    # Client works
│   │   │   └── nav.config.tsx       # Navigation config
│   │   └── blog.ts          # Blog utilities
│   │
│   └── lib/
│       └── utils.ts         # Utility functions
│
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rahul-MyGit/portify.git

# Navigate to the project
cd portify

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

All personal data is centralized in `src/data/config/site.config.tsx`:

```typescript
export const DATA = {
  name: "Your Name",
  url: "https://yourwebsite.com",
  description: "Your description",
  location: "Your Location",
  skills: ["Skill1", "Skill2"],
  contact: {
    email: "your@email.com",
    social: { /* social links */ }
  },
  // ... more config
}
```

## 📝 Adding Blog Posts

Create a new `.mdx` file in the `content/` directory:

```mdx
---
title: "Your Blog Title"
publishedAt: "2024-01-01"
summary: "Blog summary"
icon: "/path/to/icon.jpg"
featured: true
readTime: "5 min read"
---

Your content here...
```
</div>
