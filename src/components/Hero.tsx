import { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { site, waLink } from '../data/site';
import { WordReveal } from './WordReveal';
import { Nav } from './Nav';
import { useAtivo } from '../hooks';
import { WhatsAppIcon } from './BrandIcons';
const ease = [.16, 1, .3, 1] as const;
export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const ativo = useAtivo(ref);
  const rodando = ativo && !reduce;
  const h = site.hero;
  const fade = (delay: number) => ({ initial: reduce ? false as const : { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: .8, delay: reduce ? 0 : delay, ease } });
  return <section ref={ref} id="inicio" className="amun-hero">
    <motion.div className="hero-scene" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8, ease }}>
      <picture className="hero-ken-burns" style={{ animationPlayState: rodando ? 'running' : 'paused' }}><source media="(max-width: 900px)" srcSet={h.fundoMobile} /><img src={h.fundo} alt={h.alt} fetchPriority="high" decoding="async" /></picture>
    </motion.div>
    <div className="hero-readability" aria-hidden="true" />
    <Nav />
    <div className="shell hero-content">
      <motion.p className="eyebrow hero-eyebrow" {...fade(.2)}><span aria-hidden="true" className="little-line" />{h.etiqueta}</motion.p>
      <WordReveal linhas={h.linhas} className="hero-title font-display" atraso={.3} />
      <motion.p className="hero-subtitle" {...fade(1.25)}>{h.subtitulo}</motion.p>
      <motion.div className="hero-actions" {...fade(1.45)}><a className="button" href={waLink()} target="_blank" rel="noreferrer">{h.ctaPrimario}<WhatsAppIcon size={20} /></a><a className="hero-secondary hero-scroll-float" style={{ animationPlayState: rodando ? 'running' : 'paused' }} href={h.ctaSecundario.href}>{h.ctaSecundario.label}<span aria-hidden="true">↓</span></a></motion.div>
    </div>
    <motion.div className="hero-bottom shell" {...fade(1.4)}>
      <a href={site.avaliacoes.url} target="_blank" rel="noreferrer" className="hero-rating"><span className="rating-value">{site.avaliacoes.nota}</span><span><span className="stars" aria-label="5 de 5 estrelas">★★★★★</span><small>{site.avaliacoes.total} avaliações no Google</small></span></a>
      <span className="hero-caption">{h.assinatura}</span>
    </motion.div>
    <a className="scroll-cue" href="#servicos" aria-label="Conhecer os cuidados"><span aria-hidden="true">↓</span></a>
  </section>;
}


