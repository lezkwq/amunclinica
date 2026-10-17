import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { waLink } from "../data/site";
import { WhatsAppIcon } from "./BrandIcons";
export function WhatsAppFloat() {
 const [visivel, setVisivel] = useState(false);
 const reduce = useReducedMotion();
 useEffect(() => {
  const onScroll = () => setVisivel(window.scrollY > window.innerHeight * .6);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, []);
 return <AnimatePresence>{visivel && <motion.a href={waLink()} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp" title="Conversar no WhatsApp" className="fixed bottom-4 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-fg shadow-lg md:hidden" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : 20 }} transition={{ duration: reduce ? 0 : .2 }}><WhatsAppIcon size={26} /></motion.a>}</AnimatePresence>;
}

