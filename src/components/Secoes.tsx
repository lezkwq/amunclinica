import { motion, useReducedMotion } from "motion/react";
import { site, waLink } from "../data/site";
import { WhatsAppIcon, InstagramIcon } from "./BrandIcons";
import "../sections.css";

const ease = [0.16, 1, 0.3, 1] as const;
function useReveal() {
  const reducedMotion = useReducedMotion();
  return {
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reducedMotion ? 0 : 0.8, ease },
  } as const;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.4" />
  </svg>;
}

export function Servicos() {
  const reveal = useReveal();
  const s = site.servicos;
  return <section id="servicos" className="services-section">
    <div className="shell">
      <motion.div {...reveal} className="services-heading">
        <div><p className="eyebrow">{s.titulo}</p><h2 className="editorial-title">{s.chamada}</h2></div>
        <p className="services-intro">{s.intro}</p>
      </motion.div>
      <div className="services-layout">
        <motion.figure {...reveal} className="service-figure">
          <img src={s.imagem} alt={s.alt} loading="lazy" decoding="async" />
        </motion.figure>
        <ol className="service-list">
          {s.itens.map((item, i) => <motion.li key={item.titulo} {...reveal}>
            <a className="service-row" href={waLink(`Olá! Gostaria de saber mais sobre ${item.titulo.toLowerCase()} na ${site.marca}.`)} target="_blank" rel="noopener noreferrer" aria-label={`Conversar sobre ${item.titulo} pelo WhatsApp`}>
              <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
              <div className="service-description"><h3>{item.titulo}</h3><p>{item.texto}</p></div>
              <span className="service-arrow"><Arrow diagonal /></span>
            </a>
          </motion.li>)}
        </ol>
      </div>
    </div>
  </section>;
}

export function Destaques() {
  const reveal = useReveal();
  const e = site.essencia;
  return <section id="destaques" className="highlights-section">
    <div className="shell essence-layout">
      <motion.div {...reveal} className="essence-copy">
        <p className="eyebrow">{e.eyebrow}</p>
        <h2 className="editorial-title">{e.titulo}</h2>
        <div className="essence-paragraphs">{e.paragrafos.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="essence-phrase">{e.frase}</p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-link">Converse com a Amún <Arrow /></a>
      </motion.div>
      <motion.figure {...reveal} className="essence-figure">
        <img src={e.imagem} alt={e.alt} loading="lazy" decoding="async" />
      </motion.figure>
    </div>
  </section>;
}

export function Etapas() {
  const reveal = useReveal();
  const e = site.etapas;
  if (e.itens.length === 0) return null;
  return <section id="etapas" className="steps-section">
    <div className="shell">
      <motion.h2 {...reveal} className="editorial-title">{e.titulo}</motion.h2>
      <ol className="steps-list">{e.itens.map((item, i) => <motion.li key={item.titulo} {...reveal}>
        <span className="eyebrow">0{i + 1}</span><h3>{item.titulo}</h3><p>{item.texto}</p>
      </motion.li>)}</ol>
    </div>
  </section>;
}

export function Depoimentos() {
  const reveal = useReveal();
  const reviews = site.depoimentos;
  if (reviews.length === 0) return null;
  const rating = site.avaliacoes;
  return <section id="depoimentos" className="reviews-section">
    <div className="shell">
      <motion.div {...reveal} className="reviews-heading">
        <div><p className="eyebrow">Palavras de quem confia</p><h2 className="editorial-title">Quem vem,<br /><em>sente.</em></h2></div>
        <a className="reviews-rating" href={rating.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${rating.total} avaliações no ${rating.fonte}, nota ${rating.nota} de 5`}>
          <span className="rating-value">{rating.nota}<span>/ 5</span></span>
          <span className="review-stars" aria-hidden="true">★★★★★</span>
          <span>{rating.total} avaliações no {rating.fonte} <span aria-hidden="true">↗</span></span>
        </a>
      </motion.div>
      <div className="reviews-grid">{reviews.map((review) => <motion.figure key={review.nome} {...reveal} className="review-quote">
        <p className="review-stars" aria-label="5 de 5 estrelas">★★★★★</p>
        <blockquote>“{review.texto}”</blockquote>
        <figcaption><span className="review-initial" aria-hidden="true">{review.nome.charAt(0)}</span><span><strong>{review.nome}</strong><span className="review-detail">{review.detalhe || rating.fonte}</span></span></figcaption>
      </motion.figure>)}</div>
    </div>
  </section>;
}

export function CtaFinal() {
  const reveal = useReveal();
  const c = site.ctaFinal;
  return <section id="contato" className="contact-section">
    <div className="shell">
      <motion.div {...reveal} className="contact-copy">
        <div><p className="eyebrow">O próximo passo é seu</p><h2 className="editorial-title">{c.titulo}</h2></div>
        <div className="contact-action"><p className="contact-description">{c.texto}</p><a href={waLink()} target="_blank" rel="noopener noreferrer" className="button contact-primary">{c.botao}</a></div>
      </motion.div>
      <div className="contact-location">
        <motion.figure {...reveal} className="location-figure"><img src={site.endereco.imagem} alt={site.endereco.alt} loading="lazy" decoding="async" /></motion.figure>
        <motion.div {...reveal} className="contact-details">
          <div className="contact-detail">
            <p className="eyebrow">Esperamos por você</p>
            <h3 className="location-title">Seu caminho<br />até a Amún.</h3>
            <address>{site.endereco.linha1}<br />{site.endereco.linha2}<br />{site.cidade}</address>
            <a className="text-link" href={site.endereco.mapsUrl} target="_blank" rel="noopener noreferrer">Traçar rota <Arrow diagonal /></a>
          </div>
          <div className="contact-detail contact-hours">
            <p className="eyebrow">Horário de atendimento</p>
            <p>{site.horarios.semana}</p>
            <p>{site.horarios.sabado}</p>
            <p>{site.horarios.urgencias}</p>
          </div>
          <div className="contact-detail contact-phone">
            <p className="eyebrow">Vamos conversar</p>
            <div className="contact-social-icons">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Conversar no WhatsApp" title="Conversar no WhatsApp"><WhatsAppIcon size={21} /></a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Abrir Instagram da Amún" title="Abrir Instagram da Amún"><InstagramIcon size={21} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-main">
      <a className="footer-brand" href="#inicio" aria-label={`${site.marca}, voltar ao início`}><img src={site.logo.src} alt={site.logo.alt} width={site.logo.largura} height={site.logo.altura} loading="lazy" decoding="async" /></a>
      <p>{site.cidade}</p>
      <div className="footer-links">
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Conversar no WhatsApp" title="Conversar no WhatsApp"><WhatsAppIcon size={21} /></a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Abrir Instagram da Amún" title="Abrir Instagram da Amún"><InstagramIcon size={21} /></a>
      </div>
    </div>
    {site.previa && <p className="preview-disclaimer">Prévia de apresentação. Fotografias reais da clínica.</p>}
  </div></footer>;
}
