const projects = [
  {
    id: 1,
    title: "HAIKU COFFEE.",
    tagline: "En nettbutikk for en kaffebar.",
    desc: "Haiku Coffee er en nettbutikk for en kaffebar, der brukere kan blaa produkter, opprette konto og spore ordrehistorikk.",
    tech: "React, Typescript, Next.js, Tailwind CSS, REST API",
    urls: [
      {
        title: "Se Haiku Coffee",
        src: "",
      },
      {
        title: "Se koden",
        src: "https://github.com/telecasteren/haiku_frontend",
      },
    ],
    media: [
      {
        src: "/haiku-coffee/haiku_home.png",
        alt: "Haiku Coffee home page",
      },
      {
        src: "/haiku-coffee/haiku_signup.png",
        alt: "Haiku Coffee signup page",
      },
      {
        src: "/haiku-coffee/haiku_shop_merch.png",
        alt: "Haiku Coffee shop merch page",
      },
      {
        src: "/haiku-coffee/haiku_shop_beans.png",
        alt: "Haiku Coffee shop beans page",
      },
    ],
  },
  {
    id: 2,
    title: "ODA HELEN NILSEN.",
    tagline: "En innholds-dreven nettside for en selvstendig artist.",
    desc: "En innholds-dreven nettside for en selvstendig artist for oppdatering av nye utgivelser, turne datoer og showcases, videoer og presse. Designet og bygget for å føles som en kuratert artist-side, og ikke bare en template, med type-sikker datavalidering hele veien.",
    tech: "React, Typescript, MUI, Zod, Netlify",
    urls: [
      {
        title: "Se nettsiden",
        src: "https://odahelen.no",
      },
      {
        title: "Se koden",
        src: "https://github.com/telecasteren/odahelen",
      },
    ],
    media: [
      {
        src: "/odahelen/odahelen_hero.png",
        alt: "Oda Helen Nilsen hero",
      },
      {
        src: "/odahelen/odahelen_eventer.png",
        alt: "Oda Helen Nilsen event side",
      },
      {
        src: "/odahelen/odahelen_galleri.png",
        alt: "Oda Helen Nilsen galleri",
      },
    ],
  },
  {
    id: 3,
    title: "GRAMMOFON.",
    tagline: "En musikkatalog for LP plater.",
    desc: "Jeg ønsket å få oversikt over LP-samlingen min, så jeg bygde et digitalt musikkbibliotek. Det håndterer søk i samlingen, sortering av tabellen, og så la jeg til en ønskeliste-funksjon slik at jeg kan registrere LP-ene jeg mangler.",
    tech: "React, Typescript, MUI, Prisma ORM, Neon database",
    urls: [
      {
        title: "Se Grammofon",
        src: "https://grammofon.telecasternilsen.com",
      },
      {
        title: "Se koden",
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
    title: "FJELL-LMS.",
    tagline: "En læringsplattform og kursverktøy.",
    desc: "Dette er en flerselskaps (tenants), nettbasert læringsplattform der du kan administrere avdelinger med rollebasert tilgang, kurs (moduler → leksjoner → quizer), fremdriftssporing, samt verktøy for administratorer og innholdsforfattere.",
    tech: "React, TypeScript, Next.js, NextAuth, Prisma ORM, PostgreSQL, Tailwind and Bunny Storage",
    urls: [
      {
        title: "Se FJELL-LMS",
        src: "",
      },
      {
        title: "Se kode",
        src: "https://github.com/telecasteren/fjell-lms",
      },
    ],
    media: [
      {
        src: "/fjell-lms/user-profile.png",
        alt: "Bruker profil",
      },
      {
        src: "/fjell-lms/user-profile-darkmode.png",
        alt: "Bruker profil i mørk modus",
      },
      {
        src: "/fjell-lms/signin.png",
        alt: "Innlogging",
      },
      {
        src: "/fjell-lms/dept-hierarchy-list.png",
        alt: "Avdelingshierarki liste",
      },
      {
        src: "/fjell-lms/author-dashboard.png",
        alt: "Forfatter dashboard",
      },
      {
        src: "/fjell-lms/dept-config.png",
        alt: "Avdeling konfigurasjon",
      },
      {
        src: "/fjell-lms/dept-management.png",
        alt: "Avdeling administrering",
      },
      {
        src: "/fjell-lms/dept-reports.png",
        alt: "Avdeling rapporter",
      },
      {
        src: "/fjell-lms/dept-reports-detailed.png",
        alt: "Detaljert avdeling rapporter",
      },
      {
        src: "/fjell-lms/faq.png",
        alt: "FAQ",
      },
    ],
  },
  {
    id: 5,
    title: "FOODIEGRAM.",
    tagline: "En sosiale medier-plattform for foodies.",
    desc: "En SoMe-plattform bygget spesielt for foodies. En plass for å dele oppskrifter, restaurant- og mattips, uten støyen fra dagens tradisjonelle sosiale medier-plattformer.",
    tech: "Javascript, HTML, CSS, Tailwind CSS, Noroff REST API",
    urls: [
      {
        title: "Se Foodiegram",
        src: "",
      },
      {
        title: "Se kode",
        src: "https://github.com/telecasteren/social-app-noroff/tree/js2",
      },
    ],
    media: [
      {
        src: "/foodiegram/foodiegram_lightmode.webp",
        alt: "Foodiegram landingsside i lyst tema",
      },
      {
        src: "/foodiegram/landing-dark.png",
        alt: "Foodiegram landingsside i mørkt tema",
      },
      {
        src: "/foodiegram/login.png",
        alt: "Foodiegram innloggingsside",
      },
      {
        src: "/foodiegram/profile-settings.png",
        alt: "Foodiegram profilsiden",
      },
      {
        src: "/foodiegram/feed.png",
        alt: "Foodiegram feed-side med innlegg",
      },
      {
        src: "/foodiegram/search.png",
        alt: "Foodiegram feed-side med søk",
      },
      {
        src: "/foodiegram/single-post.png",
        alt: "Foodiegram side for enkeltinnlegg",
      },
    ],
  },
  {
    id: 6,
    title: "BITS AUCTIONS.",
    tagline: "En moderne auksjonsplattform.",
    desc: "En auksjonsplattform der du kan se annonser, opprette konto og selge eller by på andres annonser.",
    tech: "Typescript, Vite, Tailwind CSS, Noroff REST API.",
    urls: [
      {
        title: "Se Bits Auctions",
        src: "https://bits.telecasternilsen.com",
      },
      {
        title: "Se kode",
        src: "https://github.com/telecasteren/bits-auctions/blob/main/README.md",
      },
    ],
    media: [
      {
        src: "/bits-auctions/bits-landing.png",
        alt: "Bits Auctions landingsside i mørkt tema",
      },
      {
        src: "/bits-auctions/landing.png",
        alt: "Bits Auctions landingsside i lyst tema",
      },
      {
        src: "/bits-auctions/listings.png",
        alt: "Bits Auctions annonseoversikt",
      },
      {
        src: "/bits-auctions/overview.png",
        alt: "Bits Auctions oversiktsside",
      },
      {
        src: "/bits-auctions/single-listing.png",
        alt: "Bits Auctions side for enkeltannonse",
      },
      {
        src: "/bits-auctions/account.png",
        alt: "Bits Auctions kontoside",
      },
      {
        src: "/bits-auctions/create-listing.png",
        alt: "Bits Auctions modal for å opprette ny annonse",
      },
    ],
  },
  ];

export default projects;
