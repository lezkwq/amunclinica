import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { site, waLink } from '../data/site';
import { WhatsAppIcon } from './BrandIcons';
export function Nav() {
  const [aberto, setAberto] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && aberto) { setAberto(false); toggle.current?.focus(); }
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [aberto]);
  return (
    <motion.header className="site-header" initial={reduce ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
      <div className="shell header-inner">
        <a href="#inicio" className="wordmark" aria-label={site.marca + ' — início'} onClick={() => setAberto(false)}>
          <img className="wordmark-image" src={site.logo.src} alt={site.logo.alt} width={site.logo.largura} height={site.logo.altura} /><small>CLÍNICA ODONTOLÓGICA</small>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {site.nav.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-contact" href={waLink()} target="_blank" rel="noreferrer">Vamos conversar <WhatsAppIcon size={18} /></a>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={aberto} aria-controls="mobile-nav" aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => setAberto(!aberto)}><span>{aberto ? 'Fechar' : 'Menu'}</span><span aria-hidden="true">{aberto ? '×' : '☰'}</span></button>
      </div>
      {aberto && <nav id="mobile-nav" className="mobile-nav shell" aria-label="Navegação celular">
        {site.nav.map(link => <a key={link.href} href={link.href} onClick={() => setAberto(false)}>{link.label}<span aria-hidden="true">↗</span></a>)}
        <a href={waLink()} target="_blank" rel="noreferrer" onClick={() => setAberto(false)}>Conversar no WhatsApp <WhatsAppIcon size={22} /></a>
      </nav>}
    </motion.header>
  );
}

