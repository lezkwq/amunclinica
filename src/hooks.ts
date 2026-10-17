import { useEffect, useState, type RefObject } from "react";
import { useInView } from "motion/react";

// "Ativo" = o elemento está na tela E a aba está visível.
// Loops decorativos só rodam enquanto ativo, para não pesar o scroll nem a bateria.
export function useAtivo(ref: RefObject<Element | null>) {
  const naTela = useInView(ref, { amount: 0.05 });
  const [abaVisivel, setAbaVisivel] = useState(true);
  useEffect(() => {
    const f = () => setAbaVisivel(document.visibilityState === "visible");
    f();
    document.addEventListener("visibilitychange", f);
    return () => document.removeEventListener("visibilitychange", f);
  }, []);
  return naTela && abaVisivel;
}
