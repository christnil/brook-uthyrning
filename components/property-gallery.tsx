import type { PropertyImage } from "../types/property"
import { ServerImage } from "./server-image"
import { AnimatedImage } from "./animated-image"

interface PropertyGalleryProps {
  images: PropertyImage[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ServerImage
          key={index}
          src={image.url || "/placeholder.svg"}
          alt={image.alt}
          className="aspect-[4/3] rounded-lg"
        />
      ))}
      {images.map((image, index) => (
        <AnimatedImage
          key={index}
          src={image.url || "/placeholder.svg"}
          alt={image.alt}
          className="aspect-[4/3] rounded-lg hidden js-only:block"
        />
      ))}
    </div>
  )
}

