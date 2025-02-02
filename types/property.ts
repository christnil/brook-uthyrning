export interface PropertyImage {
  url: string
  alt: string
}

export interface PropertyFeature {
  title: string
  description: string
}

export interface Property {
  id: string
  title: string
  description: string
  features: string[]
  images: PropertyImage[]
  mainImage: PropertyImage
}

