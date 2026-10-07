---
name: shaders
description: WebGPU shader components from shader-effects-inc/shaders for high-performance visual effects in React and Next.js.
license: MIT
---

# Shaders Component Library

WebGPU declarative shader components for Next.js and React.

## Installation
```bash
npm install shaders
```

## Usage in React / Next.js
Keep `<Shader>` in client components (`'use client'`):
```tsx
'use client'
import { Shader, MeshGradient, SimplexNoise, CursorTrail } from 'shaders/react'

export function HeroShader() {
  return (
    <Shader className="absolute inset-0 -z-10">
      <MeshGradient colorA="#07090E" colorB="#0e2a47" speed={0.4} />
      <SimplexNoise scale={2.5} opacity={0.08} blendMode="softLight" />
      <CursorTrail colorA="#00f2fe" colorB="#4facfe" radius={0.25} opacity={0.4} />
    </Shader>
  )
}
```
Always provide graceful HTML5 canvas WebGL/2D fallback for browsers/devices without WebGPU support.
