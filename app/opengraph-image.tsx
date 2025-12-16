import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = "Erfan Noor Mahin - Portfolio"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a0a2e 50%, #0d0d1a 100%)',
          position: 'relative',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #a78bfa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-2px',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Erfan Noor Mahin
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              fontWeight: 300,
            }}
          >
            Portfolio
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)',
          }}
        />
        
        {/* Corner accents */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '40px',
            height: '40px',
            borderLeft: '2px solid rgba(139, 92, 246, 0.3)',
            borderTop: '2px solid rgba(139, 92, 246, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '40px',
            height: '40px',
            borderRight: '2px solid rgba(139, 92, 246, 0.3)',
            borderTop: '2px solid rgba(139, 92, 246, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            width: '40px',
            height: '40px',
            borderLeft: '2px solid rgba(139, 92, 246, 0.3)',
            borderBottom: '2px solid rgba(139, 92, 246, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '40px',
            height: '40px',
            borderRight: '2px solid rgba(139, 92, 246, 0.3)',
            borderBottom: '2px solid rgba(139, 92, 246, 0.3)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
