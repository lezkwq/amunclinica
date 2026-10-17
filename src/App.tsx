import { useEffect, type CSSProperties } from "react";
import { site } from "./data/site";
import { Hero } from "./components/Hero";
import { Servicos, Destaques, Etapas, Depoimentos, CtaFinal, Footer } from "./components/Secoes";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  useEffect(() => {
    document.title = site.marca;
  }, []);
  const t = site.tema;
  const vars = {
    "--c-bg": t.bg,
    "--c-fg": t.fg,
    "--c-surface": t.surface,
    "--c-accent": t.accent,
    "--c-accent-fg": t.accentFg,
    "--c-muted": t.muted,
    "--f-display": t.fonteDisplay,
    "--f-body": t.fonteCorpo,
  } as CSSProperties;

  return (
    <div style={vars} className="min-h-screen bg-bg text-fg">
      <Hero />
      <Destaques />
      <Servicos />
      <Etapas />
      <Depoimentos />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
