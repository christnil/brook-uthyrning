import type { PropertyListing, Property } from "../types/property"

export const mainProperty: PropertyListing = {
  heroImage: {
    url: "/images/hero.jpeg",
    alt: "Exterior view of the property",
  },
  generalInfo: [
    'Vid Kinnerstugan, ca 1,5 mil norr om Visby, bor du med havet och naturen utanför ytterdörren. Här kan du njuta av de mest spektakulära solnedgångar, gå ner för ett morgondopp i havet, ta en löptur eller en promenad på de olika motionsspåren. Du har ävennära till Lummelundagrottan, Salthamn och Krusmyntagården. Kanske har du, när du besöker Kinnerstugan, med dig en SUP eller kajak och ger dig ut och utforskar kustremsan.',
    'Förutom själva Kinnerstugan (storstugan) som går att hyra för fest och event finns här två stugor samt 5 lägenheter som är förlagda i en huslänga. Alla med fantastisk havsutsikt och storslagen natur runt omkring. Det finns flera grillplatser, både vid stugområdet och nere vid stranden.',
    'Vid Kinnserstugans nedre platå finns plats för camping för både husvagn, husbil och tält. Elstolpar för husvagn/husbil. I Kinnerstugans bottenvåning hittar du tvättstuga och toaletter. Strax intill ligger omklädningsrummen med duschar, toalett och bastu. Du hittar anslag på området med hur du betalar för användandet av förnödenheter och camping.',
  ],
};

export const accomodations: Property[] = [
  {
    id: "stuga-6",
    title: "Sune - Stuga sex personer",
    description:
      "Stugan har ett sovrum med två enkelsängar som kan sättas ihop till dubbelsäng, ett sovrum med våningssäng, stugan har bäddsoffa i vardagsrummet. Köksutrustning till sex personer, veranda med enklare utemöbel.",
    features: [
      "Egen stuga",
      "Veranda",
    ],
    images: [
      {
        url: "/images/sune/sune9.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune1.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune2.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune3.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune4.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune5.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune6_1.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune7.jpg",
        alt: "",
      },
      {
        url: "/images/sune/sune8.jpg",
        alt: "",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Main view of the property",
    },
  },
  {
    id: "stuga-4",
    title: "Ville - Stuga fyra personer",
    description:
      "Stugan har ett sovrum med två enkelsängar som kan sättas ihop till dubbelsäng, ett sovrum med våningssäng. Köksutrustning till sex personer, veranda med enklare utemöbel.",
    features: [
      "Egen stuga",
      "Veranda",
    ],
    images: [
      {
        url: "/images/ville/ville10.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville1.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville2.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville3.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville4.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville5.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville6.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville7.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville8.jpg",
        alt: "",
      },
      {
        url: "/images/ville/ville9.jpg",
        alt: "",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Exterior view of apartments",
    },
  },
  {
    id: "lagenhet-4",
    title: "Lägenhet fyra personer - Änget, Sojdet, Rauken, Klinten, Väten",
    description:
      "Lägenheterna har ett sovrum med 2 sängar samt en bäddsoffa i vardagsrummet. Köksutrustning till fyra personer, eget badrum med dusch och toalett.",
    features: [
    ],
    images: [
      {
        url: "/images/anget/anget4.jpg",
        alt: "Kök i lägenheten Änget",
      },
      {
        url: "/images/klinten/klinten2.jpg",
        alt: "Badrum i lägenheten Klinten",
      },
      {
        url: "/images/klinten/klinten3.jpg",
        alt: "Sovrum i lägenheten Klinten",
      },
      {
        url: "/images/klinten/klinten5.jpg",
        alt: "Vardagsrum i lägenheten Klinten",
      },
      {
        url: "/images/rauken/rauken5.jpg",
        alt: "Kök i lägenheten Rauken",
      },
      {
        url: "/images/vaten/vaten4.jpg",
        alt: "Sovrum i lägenheten Väten",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Exterior view of apartments",
    },
  },
];
