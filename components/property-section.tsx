"use client"

import type { Property } from "../types/property"
import { ImageGallery } from "./image-gallery"
import { useInView } from "../hooks/use-in-view"
import { cn } from "../lib/utils"

interface PropertySectionProps {
  property: Property
  imagePosition?: "left" | "right"
}

export function PropertySection({ property, imagePosition = "right" }: PropertySectionProps) {
  const { ref, isInView } = useInView()

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start py-12">
      <div
        ref={ref}
        className={cn(
          isInView ? "animate-fade-in-up" : "opacity-0",
          imagePosition === "right" ? "order-1 md:order-1" : "order-1 md:order-2",
        )}
      >
        <h2 className="text-2xl font-semibold mb-4">{property.title}</h2>
        <p className="text-gray-600 mb-6">{property.description}</p>
        <ul className="space-y-2">
          {property.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className={imagePosition === "right" ? "order-2 md:order-2" : "order-2 md:order-1"}>
        <ImageGallery images={property.images} />
      </div>
    </div>
  )
}

