import { motion, useReducedMotion } from "motion/react";
import type { Ambiente } from "../data/site";

type Props = { itens: Ambiente[]; camada: "atras" | "frente"; ativo: boolean; className?: string };

// Camada de movimento ambiente. Tudo automático, sem scroll, só transform/opacity.
// Limite: poucos elementos por vez (cada um é um loop infinito). Desmonta quando fora da tela.
export function Ambient({ itens, camada, ativo, className = "" }: Props) {
  const reduce = useReducedMotion();
  const lista = itens.filter((i) => i.camada === camada);
  if (reduce || !ativo || lista.length === 0) return null;

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {lista.map((item, n) => {
        if (item.tipo === "luz") {
          return <motion.div key={n} className="window-light" initial={{ opacity: .04, x: '-4%' }} animate={{ opacity: [.04, .2, .04], x: ['-4%', '4%', '-4%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />;
        }
        if (item.tipo === "drift") {
          return (
            <motion.img
              key={n}
              src={item.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute left-0 max-w-none will-change-transform"
              style={{ top: `${item.topo}%`, width: item.largura, opacity: item.opacidade ?? 1 }}
              initial={{ x: "-35vw" }}
              animate={{ x: "135vw" }}
              transition={{
                duration: item.duracao,
                delay: item.atraso ?? 0.6,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          );
        }
        if (item.tipo === "float") {
          return (
            <motion.img
              key={n}
              src={item.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute max-w-none will-change-transform"
              style={{ left: `${item.esq}%`, top: `${item.topo}%`, width: item.largura }}
              animate={{ y: [0, -16, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: item.duracao ?? 6, ease: "easeInOut", repeat: Infinity }}
            />
          );
        }
        const total = Math.min(item.quantidade, 14);
        return (
          <div key={n} className="absolute inset-0">
            {Array.from({ length: total }).map((_, p) => (
              <motion.span
                key={p}
                className="absolute bottom-[-4%] block rounded-full bg-accent will-change-transform"
                style={{
                  left: `${(p * 100) / total + 3}%`,
                  width: 3 + (p % 3) * 2,
                  height: 3 + (p % 3) * 2,
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: "-110svh", opacity: [0, 0.9, 0] }}
                transition={{
                  duration: 7 + (p % 5) * 1.6,
                  delay: (p % 7) * 0.9,
                  ease: "easeOut",
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
