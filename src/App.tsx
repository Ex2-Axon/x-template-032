import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    delay: Math.random() * 10 + 's',
    duration: Math.random() * 20 + 10 + 's',
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle animate-drift"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            background: Math.random() > 0.5 ? '#00ff88' : '#7c3aed',
            boxShadow: `0 0 ${p.size * 4}px currentColor`,
          }}
        />
      ))}
    </div>
  )
}

function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'scale(1.6) rotate(10deg)'
    el.style.color = '#00ff88'
    el.style.textShadow = '0 0 30px #00ff88, 0 0 60px #7c3aed'
    const t = setTimeout(() => {
      el.style.transform = 'scale(1) rotate(0deg)'
      el.style.color = ''
      el.style.textShadow = ''
    }, 300)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span ref={ref} className="inline-block transition-all duration-300 font-black text-3xl">
      {value}
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen flex flex-col p-4 md:p-8 lg:p-12">
      <div className="aurora-bg" />
      <Particles />
      
      {/* Intense Header */}
      <header className="z-10 flex justify-between items-center mb-12 animate-float">
        <div className="flex items-center gap-4 bg-surface/50 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-[0_0_15px_#00ff88]" />
          <span className="font-heading text-sm tracking-[0.3em] text-primary">AURORA STATUS: PEAK</span>
        </div>
        <div className="bg-surface/50 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20 text-xs font-heading text-text uppercase tracking-widest">
          v1.32.0 // NORTH_POLE_LINK
        </div>
      </header>

      {/* Extreme Bento Grid */}
      <main className="z-10 flex-grow grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto w-full">
        
        {/* Main Title Card */}
        <section className="md:col-span-8 bento-card flex flex-col justify-end min-h-[400px] group">
          <div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110">
            <img src={heroImg} className="w-80 h-80 animate-float" alt="" />
          </div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-md bg-primary/10 border border-primary/30 text-[10px] font-heading text-primary mb-4">
              LIGHTS FROM THE NORTH
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-4 neon-text leading-none italic">
              AURORA
            </h1>
            <p className="text-2xl md:text-3xl font-body text-text/80 max-w-xl font-light leading-relaxed">
              Experience the ethereal dance of light in a <span className="text-primary font-bold">Bento-powered</span> interface.
            </p>
          </div>
        </section>

        {/* Counter Card - High Energy */}
        <section className="md:col-span-4 bento-card flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 group">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative p-8 rounded-full bg-surface border-2 border-primary/50 text-primary animate-pulse-glow">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
              </svg>
            </div>
          </div>
          <h2 className="text-lg font-heading mb-8 text-primary tracking-widest">GLOW CORE</h2>
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="glow-btn group-hover:scale-110 transition-transform cursor-pointer"
          >
            GLOW_ <CounterNum value={count} />
          </button>
        </section>

        {/* Tech Stack Card */}
        <section className="md:col-span-4 bento-card group overflow-hidden">
          <h2 className="text-xl mb-8 flex items-center gap-4 text-primary font-heading">
            <span className="w-3 h-3 bg-accent rounded-full animate-ping" />
            STACK
          </h2>
          <div className="space-y-6">
            <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-3xl bg-background/50 border border-white/5 hover:border-primary/50 transition-all group/item">
              <img src={viteLogo} className="w-12 h-12 group-hover/item:scale-125 transition-transform" alt="Vite" />
              <div className="flex flex-col">
                <span className="font-heading text-sm text-primary">VITE 8.0</span>
                <span className="text-xs text-text/50 uppercase tracking-tighter">Fast Build Tool</span>
              </div>
            </a>
            <a href="https://react.dev/" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-3xl bg-background/50 border border-white/5 hover:border-accent/50 transition-all group/item">
              <img src={reactLogo} className="w-12 h-12 animate-spin-slow group-hover/item:rotate-180 transition-transform" alt="React" />
              <div className="flex flex-col">
                <span className="font-heading text-sm text-accent">REACT 19</span>
                <span className="text-xs text-text/50 uppercase tracking-tighter">UI Library</span>
              </div>
            </a>
          </div>
        </section>

        {/* Community Card */}
        <section className="md:col-span-8 bento-card relative">
          <h2 className="text-xl mb-8 text-primary font-heading tracking-widest">NETWORK_NODES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: 'GitHub', url: 'https://github.com/Ex2-Axon/x-template', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'Discord', url: 'https://discord.gg/8Zeq8VCU', icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z' },
              { name: 'X.com', url: 'https://x.com/Microtronic2', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
              { name: 'Bluesky', url: 'https://bsky.app/profile/microtronic.bsky.social', icon: 'M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C3.405 1.447 2 2.18 2 4.022c0 1.081.54 4.545 1.2 5.57.8 1.246 2.308 1.768 3.5 1.637-2.228.328-4.7.77-4.7 3.57 0 2.8 1.405 3.553 3.202 3.553 2.752 0 5.711-3.94 6.798-6.054 1.087 2.114 4.046 6.053 6.798 6.053 1.797 0 3.202-.753 3.202-3.554 0-2.8-2.472-3.242-4.7-3.57 1.192.13 2.7.39 3.5-1.637.66-1.025 1.2-4.489 1.2-5.57 0-1.841-1.405-2.575-3.202-1.217-2.752 1.942-5.711 5.881-6.798 7.995z' },
            ].map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 rounded-3xl bg-background/60 hover:text-primary transition-all hover:scale-110 border border-white/5 hover:border-primary/40 group hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
                <svg className="w-10 h-10 mb-4 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon}/></svg>
                <span className="text-[10px] font-heading uppercase tracking-[0.2em]">{social.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Intense Footer */}
      <footer className="z-10 mt-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-text/30 text-[10px] font-heading tracking-[0.5em]">
            © 2026 MICROTRONIC. NORTHERN LIGHTS EDITION.
          </p>
          <div className="flex gap-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="w-2 h-2 rounded-full bg-accent animate-ping delay-75" />
            <span className="w-2 h-2 rounded-full bg-primary animate-ping delay-150" />
          </div>
        </div>
        <div className="flex gap-12 bg-surface/30 backdrop-blur-md px-10 py-4 rounded-full border border-white/5">
          <div className="flex flex-col items-center">
            <span className="text-primary text-[10px] font-heading tracking-widest">ENCRYPTED</span>
            <span className="text-text/40 text-[8px] font-heading">AES-256-GCM</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-accent text-[10px] font-heading tracking-widest">STABLE</span>
            <span className="text-text/40 text-[8px] font-heading">UPTIME 99.9%</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
