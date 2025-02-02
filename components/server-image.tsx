import Image from "next/image"
import { cn } from "../lib/utils"

interface ServerImageProps {
  src: string
  alt: string
  className?: string
}

export function ServerImage({ src, alt, className }: ServerImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
    </div>
  )
}

