import Image from "next/image"
import type { PropertyImage } from "../types/property"

interface HeroSectionProps {
  title?: string
  heroImage: PropertyImage
}

export function HeroSection({ heroImage, title }: HeroSectionProps) {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px]">
      <Image src={heroImage.url || "/placeholder.svg"} alt={heroImage.alt} fill className="object-cover" priority />
      {title && (
        <>
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
            </div>
        </>
        )}
    </div>
  )
}

