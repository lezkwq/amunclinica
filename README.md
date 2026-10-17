# Amún — site de apresentação

Página única em React, Tailwind CSS e Motion, adaptada do projeto-base da skill criacao-sites.

## Rodar e compilar

Requer Node.js 22 ou superior.

```sh
npm install
npm run dev
```

`npm run build` gera a pasta `dist/`.
`npm run pendencias` verifica os marcadores de conteúdo.
O projeto também inclui configuração e lockfile do pnpm 11.25.0.

## Identidade e copy

Paleta creme, cobre e oliva, com a tipografia editorial já estabelecida.
O logotipo visual do cabeçalho e do rodapé usa a imagem original enviada pela clínica. Não houve tentativa de identificar ou imitar sua fonte.
A narrativa “Por que Amún?” adapta o post fornecido pelo usuário, atribuindo o significado do nome à inspiração da marca. A copy enfatiza atenção, escuta e profundidade, sem prometer resultados clínicos.
Os dados ficam em `src/data/site.ts`.

## Fotografias reais e intenção

Somente as quatro fotos reais enviadas foram incluídas:

1. Sala de conversa com painel oliva e vista urbana: hero. No desktop, o retrato fica ao lado do texto sobre fundo creme. No celular e no tablet, a foto ocupa toda a hero, com texto claro e camada escura uniforme para leitura.
2. Placa da sala 403: bloco de localização. A imagem permanece inteira, ao lado de endereço e rota, para facilitar o reconhecimento da entrada.
3. Recepção de pedra verde e vidro: seção “Por que Amún?”. Materiais, luz e detalhes do espaço acompanham a história da marca.
4. Consultório com cadeira cognac: seção de cuidados. Dá contexto real aos atendimentos apresentados.

As fotografias foram apenas orientadas, redimensionadas e convertidas para WebP. Não foram recriadas ou estendidas.
Os arquivos conceituais anteriores foram removidos de `public/` e da versão compilada.

## Logotipo e transparência

Fonte original: imagem 5 enviada, 300×233 px.
O arquivo `public/brand/amun-wordmark.svg` contém o PNG original e um filtro SVG que deriva a transparência da cor uniforme do fundo pêssego. As letras não foram redesenhadas.
O recorte preserva o acento e o símbolo presentes no original. A cor cobre vem dos próprios pixels do logo.
No cabeçalho sobre foto, a mesma silhueta aparece em branco por apresentação CSS.
A tentativa de extração generativa foi descartada porque alterava o acabamento; seu resultado não faz parte do site.
A resolução original limita ampliações. O cabeçalho usa 117–145 px de largura; o rodapé, até 188 px.
A prova do logo sobre fundo creme foi inspecionada.

## Movimento

Zoom Ken Burns de 1 a 1,035 e retorno em 14 segundos.
Título com fade e subida de 14 px, 1,15 s por linha e intervalo de 0,3 s.
Link secundário com flutuação vertical de 4 px em 5,2 s.
Os loops pausam fora da viewport ou com aba oculta e respeitam movimento reduzido.

## Conteúdo confirmado e pendente

Serviços exibidos: odontologia, clareamento e harmonização facial, conforme os materiais enviados.
As três avaliações, a nota 5,0/10 avaliações, o telefone e o endereço vêm dos dados fornecidos.
O WhatsApp apenas abre a conversa; não envia automaticamente.
Ainda faltam confirmação do catálogo completo, informações profissionais para apresentação da equipe e CEP (divergente entre os materiais). Não foram inventadas etapas clínicas ou credenciais.

## Verificação e entrega

TypeScript, build de produção e checagem de pendências são executados na preparação da entrega.
A verificação do navegador local permanece limitada pela política do ambiente; não foi concluída nova revisão visual completa de desktop, tablet ou celular.
A composição e os breakpoints foram revisados no código. Não foram declaradas métricas de FPS ou LCP.
`amun-previa.html` é a prévia independente com fotos, fontes e logo incluídos. O ZIP contém fonte e build.
A publicação online anterior não foi concluída; o site está sendo entregue localmente.

## Fontes e licenças

Fraunces e DM Sans incluem licenças OFL em `public/fonts/`.


## Contato, horários e ícones
Endereço confirmado: Av. do Estado Dalmo Vieira, 1714, sala 403, Menara Medical Center.
Segunda a sexta, 8h às 20h. Sábado, 9h às 17h. Urgências, segunda a sábado, até meia-noite.
Os ícones vetoriais de WhatsApp e Instagram usam os paths originais do Simple Icons, incluídos localmente; fontes e licença estão em public/icons/.
Os contatos inferiores são botões apenas com ícones, com rótulos acessíveis. O WhatsApp mantém a mensagem pronta configurada em site.ts.
O favicon usa o símbolo da imagem de perfil enviada, com recorte quadrado que preserva o oval completo e o círculo dourado, nos formatos ICO e PNG.
