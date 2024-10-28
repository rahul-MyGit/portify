import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "Chatme - real time chatting applications",
    href: "https://github.com/rahul-MyGit/Chat-me",
    dates: "Aug 2024 - Oct 2024",
    featured: true,
    description:
      "Chatme is an application that lets you talk with other person in real time. It provides a video calling feature while user can share files/pictures and also use @gpt to ask questions to AI, and many more",
    technologies: [
      "Next.js",
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
    title: "Acter - Ai to convert your ideas into UI",
    href: "https://acter.devwtf.in",
    // dates: "Mar 2024 - May 2024",
    featured: true,
    active: true,
    description:
      "Acter is an Ai tool which will help you to convert your ideas into great UI and it supports a huge number of popular UI libraries and frameworks which will make your work easier to modify any existing code from any library. And also you can generate your UI using a particular framework and UI library.",
    technologies: [
      "Next.js",
      "Typescript",
      "Xata DB",
      "RAG",
      "Vercel ai sdk",
      "Postgress",
    ],
    links: [
      {
        type: "Website",
        href: "https://acter.devwtf.in",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://l.devwtf.in/acter",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/JwDi96s.png",
    video: "",
  },
  {
    title: "Evently - Chromium extension for event auditing",
    href: "https://evently.devwtf.in",
    dates: "Sept 2024 - Sept 2024",
    featured: false,
    description:
      "Your essential companion for event auditing. It features a straightforward countdown timer that can be displayed in new tabs within Chromium-based browsers, providing users with a simple yet effective way to track time until their event.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://evently.devwtf.in",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://git.new/ESRt29k",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/JI752LF.png",
    video: "",
  },
  {
    title: "FPC - Freelancer Price Calculator",
    href: "https://freelance-price-calculator.devwtf.in/",
    dates: "Sept 2024 - Sept 2024",
    featured: false,
    description:
      "A powerful and intuitive tool for freelancers to calculate project prices and convert currencies realtime.",
    technologies: [
      "Next.js",
      "Currency Api",
      "Typescript",
      "React",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://freelance-price-calculator.devwtf.in/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://git.new/tValGOy",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/1zeZewW.png",
    video: "",
  },
  {
    title: "Telegram Member Adder",
    // href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
    dates: "Apr 2023 - Apr 2023",
    featured: false,
    archived: true,
    description:
      "A python code to scrap telegram group members data and adds them to another telegram group..",
    technologies: [
      "Scrapping",
      "Telegram API",
      "Python",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Sputnik - My first python discord bot",
    dates: "Oct 2022 - Sept 2023",
    featured: false,
    archived: true,
    description:
      "All in one python discord bot. Source code was migrated from Replit to Github later.",
    technologies: [
      "Discord.py",
      "Discord API",
      "Python",
      "Replit",
      "Json DB",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/SkidGod4444/Sputnik",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
];