import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    title: "SmartKnower",
    role: "Machine learning Intern",
    dates: "Jan - Mar, 2021",
    location: "Remote, Bangalore (India)",
    description:
      "I performed an ELT operation on a dataset given to me and made it compatible with the algorithm that the company was using to predict the courses that students might want to take in specific places.",
    image: "",
    mlh: "",
    links: [
      {
        title: "Website",
        href: "",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://www.linkedin.com/in/rahul-mylink1/",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "100xDevs",
    role: "Full Stack Developer",
    dates: "Sep 2023 – Jan 2024",
    location: "Noida, DEL",
    description:
      "Delivered three end-to-end projects for clients on Toptal. Scaled an e-commerce application from MVP to production and deployed it on Kubernetes. Integrated a fault-tolerant transcoding service with worker failure recovery using RabbitMQ and S3. Developed an AI-powered meeting recorder using Puppeteer and ChatGPT API.",
    image: "",
    mlh: "",
    links: [
      {
        title: "Website",
        href: "https://100xdevs.com",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://www.linkedin.com/in/rahul-mylink1/",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "QuickSaaS",
    role: "Product Lead",
    dates: "Jan 2024 – Present",
    location: "Remote, UAE",
    description:
      "Led a team of 2 to build and scale a multi-tenant website builder SaaS, serving 500+ users. Enabled businesses to launch custom websites on subdomains and custom domains. Implemented Redis-backed autosave for real-time canvas editing and utilized a CDN for efficient multi-tenant JSON caching.",
    image: "",
    mlh: "",
    links: [
      {
        title: "Website",
        href: "https://quicksaas.io",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://www.linkedin.com/in/rahul-mylink1/",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  }
];
