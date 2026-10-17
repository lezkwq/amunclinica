import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = { linhas: string[]; className?: string; style?: CSSProperties; atraso?: number };

// Revela cada linha inteira com opacidade e um pequeno deslocamento.
export function WordReveal({ linhas, className, style, atraso = 0.25 }: Props) {
  const reduce = useReducedMotion();
  return (
    <h1 className={className} style={style} aria-label={linhas.join(" ")}>
      {linhas.map((linha, index) => (
        <motion.span
          key={index}
          className="block"
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 1.15, delay: reduce ? 0 : atraso + index * 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {linha}
        </motion.span>
      ))}
    </h1>
  );
}
