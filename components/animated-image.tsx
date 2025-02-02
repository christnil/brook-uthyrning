"use client"

import Image from "next/image"
import { useInView } from "../hooks/use-in-view"
import { cn } from "../lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedImage({ src, alt, className }: AnimatedImageProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", isInView ? "animate-zoom-fade-in" : "opacity-0", className)}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn("object-cover transition-transform duration-700", isInView && "scale-105")}
      />
    </div>
  )
}

