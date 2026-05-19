const projects = [
  {
    id: 1,
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
        src: "/foodiegram/foodiegram_lightmode.webp",
        alt: "Foodiegram landing page in light theme",
      },
      {
        src: "/foodiegram/landing-dark.png",
        alt: "Foodiegram landing page in dark theme",
      },
      {
        src: "/foodiegram/login.png",
        alt: "Foodiegram login page",
      },
      {
        src: "/foodiegram/profile-settings.png",
        alt: "Foodiegram profile page",
      },
      {
        src: "/foodiegram/feed.png",
        alt: "Foodiegram posts feed page",
      },
      {
        src: "/foodiegram/search.png",
        alt: "Foodiegram feed page with search",
      },
      {
        src: "/foodiegram/single-post.png",
        alt: "Foodiegram single post page",
      },
    ],
  },
  {
    id: 2,
    title: "FJELL-LMS.",
    tagline: "A learning management system.",
    desc: "This is a multi-tenant web based learning management application, where you can manage departments with role-based access, courses (modules → lessons → quizzes), progress tracking, and admin/author tooling.",
    tech: "React, TypeScript, Next.js, NextAuth, Prisma ORM, PostgreSQL, Tailwind and Bunny Storage",
    urls: [
      {
        title: "View FJELL-LMS",
        src: "https://www.fjell-lms.no",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/fjell-lms",
      },
    ],
    media: [
      {
        src: "/fjell-lms/user-profile.png",
        alt: "User profile",
      },
      {
        src: "/fjell-lms/user-profile-darkmode.png",
        alt: "User profile in dark mode",
      },
      {
        src: "/fjell-lms/signin.png",
        alt: "Sign in page",
      },
      {
        src: "/fjell-lms/dept-hierarchy-list.png",
        alt: "Department hierarchy list",
      },
      {
        src: "/fjell-lms/author-dashboard.png",
        alt: "Author dashboard",
      },
      {
        src: "/fjell-lms/dept-config.png",
        alt: "Department configuration",
      },
      {
        src: "/fjell-lms/dept-management.png",
        alt: "Department management",
      },
      {
        src: "/fjell-lms/dept-reports.png",
        alt: "Department reports",
      },
      {
        src: "/fjell-lms/dept-reports-detailed.png",
        alt: "Detailed department reports",
      },
      {
        src: "/fjell-lms/faq.png",
        alt: "FAQ",
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
        src: "/grammofon/collection.png",
        alt: "Grammofon collection page",
      },
      {
        src: "/grammofon/pagination.png",
        alt: "Grammofon collection list see more",
      },
      {
        src: "/grammofon/new-entry.png",
        alt: "Grammofon add new entry page",
      },
      {
        src: "/grammofon/wishlist.png",
        alt: "Grammofon wishlist page",
      },
    ],
  },
  {
    id: 4,
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
        src: "/bits-auctions/bits-landing.png",
        alt: "Bits Auctions landing page dark theme",
      },
      {
        src: "/bits-auctions/landing.png",
        alt: "Bits Auctions landing page light theme",
      },
      {
        src: "/bits-auctions/listings.png",
        alt: "Bits Auctions listings page",
      },
      {
        src: "/bits-auctions/overview.png",
        alt: "Bits Auctions overview page",
      },
      {
        src: "/bits-auctions/single-listing.png",
        alt: "Bits Auctions single listing page",
      },
      {
        src: "/bits-auctions/account.png",
        alt: "Bits Auctions account page",
      },
      {
        src: "/bits-auctions/create-listing.png",
        alt: "Bits Auctions create new listing modal",
      },
    ],
  },
  {
    id: 5,
    title: "GAMEHUB.",
    tagline: "Ecommerce Gaming platform.",
    desc: "Ecommerce Gaming platform where users can buy and sell games, learn and get connected.",
    tech: "Javascript, HTML, CSS, Wordpress, WooCommerce API",
    urls: [
      {
        title: "View Gamehub",
        src: "https://gamehub.telecasternilsen.com",
      },
      {
        title: "View Code",
        src: "https://github.com/telecasteren/gamehub/blob/main/ReadMe.md",
      },
    ],
    media: [
      {
        src: "/gamehub/gamehub-blob.webp",
        alt: "Gamehub landing page",
      },
      {
        src: "/gamehub/article-modal.png",
        alt: "Gamehub open article modal",
      },
      {
        src: "/gamehub/game-view-top.png",
        alt: "Gamehub single game view",
      },
      {
        src: "/gamehub/games-list.png",
        alt: "Gamehub list of games",
      },
      {
        src: "/gamehub/checkout-top.png",
        alt: "Gamehub checkout top view",
      },
      {
        src: "/gamehub/checkout-bottom.png",
        alt: "Gamehub checkout bottom view",
      },
    ],
  },
];

export default projects;
