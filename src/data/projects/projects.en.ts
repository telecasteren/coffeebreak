const projects = [
  {
    id: 1,
    title: "HAIKU COFFEE.",
    tagline: "A storefront for a coffeeshop.",
    desc: "Haiku Coffee is a storefront for a coffeeshop, where users can browse products, create an account and manage order history.",
    tech: "React, Typescript, Next.js, Tailwind CSS, REST API",
    urls: [
      {
        title: "View Haiku Coffee",
        src: "",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/haiku_frontend",
      },
    ],
    media: [
      {
        src: "/projects/haiku-coffee/haiku_home.png",
        alt: "Haiku Coffee home page",
      },
      {
        src: "/projects/haiku-coffee/haiku_signup.png",
        alt: "Haiku Coffee signup page",
      },
      {
        src: "/projects/haiku-coffee/haiku_shop_merch.png",
        alt: "Haiku Coffee shop merch page",
      },
      {
        src: "/projects/haiku-coffee/haiku_shop_beans.png",
        alt: "Haiku Coffee shop beans page",
      },
    ],
  },
  {
    id: 2,
    title: "ODA HELEN NILSEN.",
    tagline: "A content-driven site for an independent artist.",
    desc: "A content-driven site for an independent artist built for updates on new releases, tour dates and showcase work, videos and press. Designed and built to feel like a curated artist page rather than a template, with type-safe data validation end-to-end.",
    tech: "React, Typescript, MUI, Zod, Netlify",
    urls: [
      {
        title: "View website",
        src: "https://odahelen.no",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/odahelen",
      },
    ],
    media: [
      {
        src: "/projects/odahelen/odahelen_hero.png",
        alt: "Oda Helen Nilsen hero",
      },
      {
        src: "/projects/odahelen/odahelen_eventer.png",
        alt: "Oda Helen Nilsen event side",
      },
      {
        src: "/projects/odahelen/odahelen_galleri.png",
        alt: "Oda Helen Nilsen galleri",
      },
    ],
  },
  {
    id: 3,
    title: "GRAMMOFON.",
    tagline: "A music catalogue.",
    desc: "I struggled with getting an overview of my LP records, so I built this online music library. It handles searching through the collection, sorting the table by column header, and I added a wishlist feature, so I can add the LPs I'm missing.",
    tech: "React, Typescript, MUI, Prisma ORM, Neon database",
    urls: [
      {
        title: "View Grammofon",
        src: "https://grammofon.telecasternilsen.com",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/music_catalogue/blob/main/README.md",
      },
    ],
    media: [
      {
        src: "/projects/grammofon/collection.png",
        alt: "Grammofon collection page",
      },
      {
        src: "/projects/grammofon/pagination.png",
        alt: "Grammofon collection list see more",
      },
      {
        src: "/projects/grammofon/new-entry.png",
        alt: "Grammofon add new entry page",
      },
      {
        src: "/projects/grammofon/wishlist.png",
        alt: "Grammofon wishlist page",
      },
    ],
  },
  {
    id: 4,
    title: "FJELL-LMS.",
    tagline: "A learning management system.",
    desc: "This is a multi-tenant web based learning management application, where you can manage departments with role-based access, courses (modules → lessons → quizzes), progress tracking, and admin/author tooling.",
    tech: "React, TypeScript, Next.js, NextAuth, Prisma ORM, PostgreSQL, Tailwind and Bunny Storage",
    urls: [
      {
        title: "View FJELL-LMS",
        src: "",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/fjell-lms",
      },
    ],
    media: [
      {
        src: "/projects/fjell-lms/user-profile.png",
        alt: "User profile",
      },
      {
        src: "/projects/fjell-lms/user-profile-darkmode.png",
        alt: "User profile in dark mode",
      },
      {
        src: "/projects/fjell-lms/signin.png",
        alt: "Sign in page",
      },
      {
        src: "/projects/fjell-lms/dept-hierarchy-list.png",
        alt: "Department hierarchy list",
      },
      {
        src: "/projects/fjell-lms/author-dashboard.png",
        alt: "Author dashboard",
      },
      {
        src: "/projects/fjell-lms/dept-config.png",
        alt: "Department configuration",
      },
      {
        src: "/projects/fjell-lms/dept-management.png",
        alt: "Department management",
      },
      {
        src: "/projects/fjell-lms/dept-reports.png",
        alt: "Department reports",
      },
      {
        src: "/projects/fjell-lms/dept-reports-detailed.png",
        alt: "Detailed department reports",
      },
    ],
  },
  {
    id: 5,
    title: "FOODIEGRAM.",
    tagline: "A social media platform for foodies.",
    desc: "A SoMe platform built intentionally for foodies. Providing a space to share recipes, restaurant and food tips, without the modern noise of conventional social media platforms.",
    tech: "Javascript, HTML, CSS, Tailwind CSS, Noroff REST API",
    urls: [
      {
        title: "View Foodiegram",
        src: "",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/social-app-noroff/tree/js2",
      },
    ],
    media: [
      {
        src: "/projects/foodiegram/foodiegram_lightmode.webp",
        alt: "Foodiegram landing page in light theme",
      },
      {
        src: "/projects/foodiegram/landing-dark.png",
        alt: "Foodiegram landing page in dark theme",
      },
      {
        src: "/projects/foodiegram/login.png",
        alt: "Foodiegram login page",
      },
      {
        src: "/projects/foodiegram/profile-settings.png",
        alt: "Foodiegram profile page",
      },
      {
        src: "/projects/foodiegram/feed.png",
        alt: "Foodiegram posts feed page",
      },
      {
        src: "/projects/foodiegram/search.png",
        alt: "Foodiegram feed page with search",
      },
      {
        src: "/projects/foodiegram/single-post.png",
        alt: "Foodiegram single post page",
      },
    ],
  },
  {
    id: 6,
    title: "BITS AUCTIONS.",
    tagline: "Online auction platform.",
    desc: "An auction platform where you can view site listings, create an account and sell or bid on items.",
    tech: "Typescript, Vite, Tailwind CSS, Noroff REST API.",
    urls: [
      {
        title: "View Bits Auctions",
        src: "https://bits.telecasternilsen.com",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/bits-auctions/blob/main/README.md",
      },
    ],
    media: [
      {
        src: "/projects/bits-auctions/bits-landing.png",
        alt: "Bits Auctions landing page dark theme",
      },
      {
        src: "/projects/bits-auctions/landing.png",
        alt: "Bits Auctions landing page light theme",
      },
      {
        src: "/projects/bits-auctions/listings.png",
        alt: "Bits Auctions listings page",
      },
      {
        src: "/projects/bits-auctions/overview.png",
        alt: "Bits Auctions overview page",
      },
      {
        src: "/projects/bits-auctions/single-listing.png",
        alt: "Bits Auctions single listing page",
      },
      {
        src: "/projects/bits-auctions/account.png",
        alt: "Bits Auctions account page",
      },
      {
        src: "/projects/bits-auctions/create-listing.png",
        alt: "Bits Auctions create new listing modal",
      },
    ],
  },
];

export default projects;
