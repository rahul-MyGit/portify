import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "doubtgreek - A place where dev enthusiast can ask questions",
    href: "https://github.com/rahul-MyGit/greekdoubts",
    // dates: "Oct 2024 - developing ...",
    featured: true,
    active: true,
    description:
      "Your go-to platform for resolving coding doubts and technical queries. It offers a seamless Q&A experience, empowering users to ask, answer, and explore solutions collaboratively",
    technologies: [
      "Next.js",
      "Typescript",
      "Prisma",
      "next-auth",
      "Shadcn UI",
      "vitest"
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/greekdoubts",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Chatme - real time chatting applications",
    href: "https://github.com/rahul-MyGit/Chat-me",
    dates: "Aug 2024 - Oct 2024",
    featured: true,
    active: false,
    description:
      "Chatme is an application that lets you talk with other person in real time. It provides a video calling feature while user can share files/pictures and also use @gpt to ask questions to AI, and many more",
    technologies: [
      "Next.js",
      "convex BaaS",
      "Typescript",
      "Postgres",
      "GPT and DALL-E-3",
      "Shadcn UI",
      "Prisma",
      "Clerk",
      "Webhook",
      "Zustang",
      "ZEGOCLOUD",
    ],
    links: [
      {
        type: "Website",
        href: "https://chat-me-lilac.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/Chat-me",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/tae7jBv.png",
    video: "",
  },
  {
    title: "MoneyPay - a website for Paytm App",
    href: "https://github.com/rahul-MyGit/MoneyPay",
    dates: "June 2024 - July 2024",
    featured: false,
    description:
      "A robust payment platform enabling seamless money transfers, wallet management, and card-based transactions. Powered by Next.js, Express, and Prisma, it ensures fast, secure operations with 50% improved data protection and streamlined CICD deployment",
    technologies: [
      "Turborepo",
      "Next.js",
      "webhook",
      "Typescript",
      "CICD",
      "redis",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/MoneyPay",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "2Twing - Social media application",
    href: "https://github.com/rahul-MyGit/Twing-Twing",
    dates: "Mar 2024 - May 2024",
    featured: false,
    description:
      "2Twing is a social media app with Cloudinary for image storage, Zod for validation, JWT cookie for authentication, and core features like posting, following, comments, and interactions. Enhanced performance by usin react-query for global state.",
    technologies: [
      "Reactjs",
      "Typescript",
      "MongoDB",
      "JWT cookies",
      "React Query",
      "Nodejs",
      "Mongoose",
      "cloudinary"
    ],
    links: [
      {
        type: "Website",
        href: "https://twing-twing.onrender.com/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/Twing-Twing",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/39kUnJr.png",
    video: "",
  },
  {
    title: "Blogies",
    href: "https://github.com/rahul-MyGit/Notion-Blog",
    dates: "Apr 2023 - Apr 2023",
    featured: false,
    archived: true,
    description:
      "A serverless blogging platform built with React, Hono, and Prisma, delivering fast and efficient post creation and browsing. Features JWT-based authentication and TypeScript throughout, achieving 60% improved performance and 90% faster hosting.",
    technologies: [
      "Reactjs",
      "Hono.js",
      "Prisma",
      "TypeScript",
      "cloudflare"
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/Notion-Blog",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/MkJZcOB.png",
    video: "",
  },
  {
    title: "Maical arena - My first typeScript CLI Game",
    href: "https://github.com/rahul-MyGit/magical-arena",
    dates: "Feb 2024 -Feb 2024",
    featured: false,
    archived: true,
    description:
      "All in one python discord bot. Source code was migrated from Replit to Github laterA CLI-based battle simulator built with TypeScript, leveraging OOP principles for seamless player management and combat scenarios. Manage players, start wars, and exit the arena, with robust testing ensured through the Vitest library.",
    technologies: [
      "TypeScript",
      "OOPS",
      "vitest",
      "CLI",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/magical-arena",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
];