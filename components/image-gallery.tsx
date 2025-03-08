"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSprings, animated } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import type { PropertyImage } from "../types/property"
import { Button } from "@/components/ui/button"
import { cn } from "../lib/utils"

interface ImageGalleryProps {
  images: PropertyImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [index, setIndex] = useState(0)

  const [props, api] = useSprings(
    images.length,
    (i) => ({
      x: i * window.innerWidth,
      scale: 1,
      display: "block",
    }),
    [images.length],
  )

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > window.innerWidth / 2) {
      setIndex((i) => clamp(i + (xDir > 0 ? -1 : 1), 0, images.length - 1))
      cancel()
    }
    api.start((i) => {
      if (i < index - 1 || i > index + 1) return { display: "none" }
      const x = (i - index) * window.innerWidth + (active ? mx : 0)
      const scale = active ? 1 - distance / window.innerWidth / 2 : 1
      return { x, scale, display: "block" }
    })
  })

  const goToPrevious = () => setIndex((i) => clamp(i - 1, 0, images.length - 1))
  const goToNext = () => setIndex((i) => clamp(i + 1, 0, images.length - 1))

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {props.map(({ x, display, scale }, i) => (
        <animated.div
          {...bind()}
          key={i}
          style={{
            display,
            x,
            scale,
            position: "absolute",
            width: "100%",
            height: "100%",
            willChange: "transform",
          }}
        >
          <Image src={images[i].url || "/placeholder.svg"} alt={images[i].alt} fill className="object-cover" />
        </animated.div>
      ))}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex bg-white/80 hover:bg-white"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="hidden md:flex bg-white/80 hover:bg-white" onClick={goToNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-colors duration-300",
                index === i ? "bg-white" : "bg-white/50",
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function clamp(number: number, lower: number, upper: number) {
  return Math.min(Math.max(number, lower), upper)
}

