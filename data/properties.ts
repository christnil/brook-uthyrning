import type { PropertyListing, Property } from "../types/property"

export const mainProperty: PropertyListing = {
  heroImage: {
    url: "/images/kinner.jpg",
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
    title: "Stuga sex personer",
    description:
      "Stugan har ett sovrum med två enkelsängar som kan sättas ihop till dubbelsäng, ett sovrum med våningssäng, stugan har bäddsoffa i vardagsrummet. Köksutrustning till sex personer, veranda med enklare utemöbel.",
    features: [
      "Egen stuga",
      "Veranda",
    ],
    images: [
      {
        url: "/images/kinner.jpg",
        alt: "Exterior view of the room entrance",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Cozy bedroom interior",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Modern bathroom",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Comfortable bed setup",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Breakfast setting",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Main view of the property",
    },
  },
  {
    id: "stuga-4",
    title: "Stuga fyra personer",
    description:
      "Stugan har ett sovrum med två enkelsängar som kan sättas ihop till dubbelsäng, ett sovrum med våningssäng. Köksutrustning till sex personer, veranda med enklare utemöbel.",
    features: [
      "Egen stuga",
      "Veranda",
    ],
    images: [
      {
        url: "/images/kinner.jpg",
        alt: "Living room area",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Kitchen space",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Master bedroom",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Exterior view of apartments",
    },
  },
  {
    id: "gavellagenhet-4",
    title: "Lägenhet fyra personer",
    description:
      "Gavellägenheterna har ett sovrum med två enkelsängar, bäddsoffa med plats för två personer i vardagsrum/kök. Eget badrum med dusch och toalett. Köksutrustning till sex personer, veranda med enklare utemöbel.",
    features: [
    ],
    images: [
      {
        url: "/images/kinner.jpg",
        alt: "Living room area",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Kitchen space",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Master bedroom",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Exterior view of apartments",
    },
  },
  {
    id: "lagenhet-6",
    title: "Lägenhet sex personer",
    description:
      "Lägenheten har ett sovrum med två våningssängar, bäddsoffa med plats för två personer i vardagsrum/kök. Eget badrum med dusch och toalett. Köksutrustning till sex personer",
    features: [
    ],
    images: [
      {
        url: "/images/kinner.jpg",
        alt: "Living room area",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Kitchen space",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Master bedroom",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Exterior view of apartments",
    },
  },
  {
    id: "lagenhet-4",
    title: "Lägenhet fyra personer",
    description:
      "Lägenheten har ett sovrum med två våningssängar Eget badrum med dusch och toalett. Köksutrustning",
    features: [
    ],
    images: [
      {
        url: "/images/kinner.jpg",
        alt: "Living room area",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Kitchen space",
      },
      {
        url: "/images/kinner.jpg",
        alt: "Master bedroom",
      },
    ],
    mainImage: {
      url: "/images/kinner.jpg",
      alt: "Exterior view of apartments",
    },
  },
];
