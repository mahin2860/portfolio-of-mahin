"use client"

import Image from "next/image"
import { useState } from "react"

interface ProtectedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
}

export function ProtectedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className = "",
  fill = false
}: ProtectedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div 
      className={`relative ${fill ? 'w-full h-full' : ''} ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        fill={fill}
        className={`${fill ? 'object-cover' : ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoadingComplete={() => setIsLoaded(true)}
        draggable={false}
      />
      
      {/* Overlay to prevent right-click and dragging */}
      <div 
        className="absolute inset-0 w-full h-full"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  )
}