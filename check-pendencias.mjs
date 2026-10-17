// Lista tudo que ainda é marcador de preenchimento (PREENCHER, PREENCHER_WHATSAPP).
// Sai com erro (código 1) se achar algo. Rode antes de mostrar o site: npm run pendencias
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const alvos = ["src", "index.html"];
const achados = [];

function varrer(caminho) {
  const st = statSync(caminho);
  if (st.isDirectory()) {
    for (const f of readdirSync(caminho)) varrer(join(caminho, f));
    return;
  }
  if (!/\.(tsx?|css|html)$/.test(caminho)) return;
  readFileSync(caminho, "utf8")
    .split("\n")
    .forEach((linha, i) => {
      if (linha.includes("PREENCHER") && !linha.trim().startsWith("//")) {
        achados.push(`${caminho}:${i + 1}: ${linha.trim()}`);
      }
    });
}

alvos.forEach(varrer);

if (achados.length) {
  console.error(`Pendências (${achados.length}):\n` + achados.join("\n"));
  process.exit(1);
}
console.log("Nenhuma pendência de preenchimento.");
