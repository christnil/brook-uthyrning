import type { Property } from "../types/property"

export const properties: Property[] = [
  {
    id: "double-room",
    title: "Double Room with Breakfast",
    description:
      "Welcome to our cozy double room with a delightful breakfast included. Each room is uniquely designed to provide maximum comfort during your stay. All rooms come with modern amenities and beautiful garden views.",
    features: [
      "2 bedrooms: 15 m², 1-2 persons with shared bathroom",
      "2 bedrooms: 15 m², private bathroom included",
      "2 bedrooms with stunning forest views",
    ],
    images: [
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Exterior view of the room entrance",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Cozy bedroom interior",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Modern bathroom",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Comfortable bed setup",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Breakfast setting",
      },
    ],
    mainImage: {
      url: "/placeholder.svg?height=600&width=800",
      alt: "Main view of the property",
    },
  },
  {
    id: "apartment-4-6",
    title: "Apartment for 4-6 persons",
    description:
      "Our spacious apartments are perfect for families or groups. Located in a serene area with beautiful surroundings, each apartment offers modern amenities and comfortable living spaces.",
    features: [
      "Apartment 4-6 persons: 45 m², 2 rooms with 2 extra beds in living room",
      "Apartment 6 persons: 48 m², 2 rooms with 2 extra beds and additional sleeping area",
      "All apartments include fully equipped kitchens",
    ],
    images: [
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Living room area",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Kitchen space",
      },
      {
        url: "/placeholder.svg?height=400&width=600",
        alt: "Master bedroom",
      },
    ],
    mainImage: {
      url: "/placeholder.svg?height=600&width=800",
      alt: "Exterior view of apartments",
    },
  },
]

