import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "HLS Transcoder - Video Processing with AWS & FFmpeg",
    href: "https://github.com/rahul-MyGit/hls-transcoding",
    dates: "Dec 2024 - Dec 2024",
    featured: true,
    active: true,
    description:
      "A scalable HLS transcoding system that processes videos using AWS S3, FFmpeg, and RabbitMQ. Supports multipart video uploads, background processing with child processes as workers, and efficient queue management for fault-tolerant transcoding.",
    technologies: [
      "Node.js",
      "React.js",
      "FFmpeg",
      "AWS S3",
      "RabbitMQ",
      "Child Process",
      "HLS Streaming"
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "",
      //   icon: <Icons.globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/hls-transcoding",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "botai - A bot that'll give you summary of your video call",
    href: "https://github.com/rahul-MyGit/botai",
    dates: "Nov 2024 - Nov 2024",
    featured: true,
    active: true,
    description:
      "User can paste a meet link then the bot will automatically join the meeting. It'll record the session also generate the AI summary of the session",
    technologies: [
      "Nextjs",
      "Typescript",
      "WisperAPI",
      "open-ai",
      "authjs",
      "Prisma",
      "puppeteer"
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://vizu-orpin.vercel.app/",
      //   icon: <Icons.globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/botai",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/4cwEYAU.png",
    video: "",
  },
  {
    title: "vizu - A platform where you can give ai generated mcq test based on video",
    href: "https://github.com/rahul-MyGit/vizu",
    dates: "Nov 2024 - Nov 2024",
    featured: true,
    active: true,
    description:
      "User can paste a YT link and give the quiz based on the video. Also user can upload a video without subtitle, then the subtitle will get generated using ffmpeg and wisper ai. Then the ai model will generate the tets for user",
    technologies: [
      "Nextjs",
      "Typescript",
      "WisperAPI",
      "google-gemini",
      "authjs",
      "Prisma"
    ],
    links: [
      {
        type: "Website",
        href: "https://vizu-orpin.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/vizu",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/B3ExXKY.png",
    video: "",
  },
  {
    title: "livestream - A platform where you can liveStream your device . Also can use excelidraw, chatbox",
    href: "https://github.com/rahul-MyGit/livestream",
    // dates: "Nov 2024 - developing ...",
    featured: true,
    active: true,
    description:
      "User can livestream and get recorded stream using livekit.User can use intigrated excelidraw or chatbox for live chat",
    technologies: [
      "Nextjs",
      "Typescript",
      "livekit",
      "excelidraw",
      "websocket",
      "Prisma"
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "",
      //   icon: <Icons.globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/livestream",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "ytStream - Upload a video, and share the url to watch it with your friends",
    href: "https://github.com/rahul-MyGit/ytStream",
    dates: "Oct 2024 - Oct 2024",
    featured: true,
    active: true,
    description:
      "Upload a video of your choice. It'll get transcoded using ffmpeg and then you'll receive the url. Share that url to watch it with your friend",
    technologies: [
      "Nodejs",
      "Typescript",
      "websocket",
      "ffmpeg",
      "presignUrl",
      "Prisma"
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "",
      //   icon: <Icons.globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/ytStream",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "doubtgreek - A place where dev enthusiast can ask questions",
    href: "https://github.com/rahul-MyGit/greekdoubts",
    // dates: "Oct 2024 - developing ...",
    featured: false,
    active: true,
    archived: true,
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
      // {
      //   type: "Website",
      //   href: "",
      //   icon: <Icons.globe className="size-3" />,
      // },
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
    title: "datingPlace - A place where you can swipe left/right on your preference date",
    href: "https://github.com/rahul-MyGit/datingPlace",
    dates: "Oct 2024 - Nov 2024",
    featured: false,
    active: false,
    archived: true,
    description:
      "Your ultimate matchmaking platform designed for meaningful connections. This app provides an engaging swipe experience, enabling users to connect with ease. With real-time chat powered by WebSocket and a modern MERN stack foundation, it offers seamless interactions, creating a dynamic and responsive dating environment.",
    technologies: [
      "Reactjs",
      "Typescript",
      "Nodejs",
      "jwt-cookies",
      "tailwind",
      "daisyUI",
      "MongoDB",
      "websocket",
      "cloudinary",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "",
      //   icon: <Icons.globe className="size-3" />,
      // },
      {
        type: "Source",
        href: "https://github.com/rahul-MyGit/greekdoubts",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/DbLGw4w.png",
    video: "",
  },
  {
    title: "Chatme - real time chatting applications",
    href: "https://github.com/rahul-MyGit/Chat-me",
    dates: "Aug 2024 - Oct 2024",
    featured: false,
    active: false,
    archived: true,
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
    title: "Magical arena - My first typeScript CLI Game",
    href: "https://github.com/rahul-MyGit/magical-arena",
    dates: "Feb 2024 -Feb 2024",
    featured: false,
    archived: true,
    description:
      "A CLI-based battle simulator built with TypeScript, leveraging OOP principles for seamless player management and combat scenarios. Manage players, start wars, and exit the arena, with robust testing ensured through the Vitest library.",
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