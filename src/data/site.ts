export type Ambiente =
  | { tipo: 'luz'; camada: 'atras' | 'frente' }
  | { tipo: 'drift'; src: string; largura: number; topo: number; duracao: number; atraso?: number; camada: 'atras' | 'frente'; opacidade?: number }
  | { tipo: 'float'; src: string; largura: number; esq: number; topo: number; duracao?: number; camada: 'atras' | 'frente' }
  | { tipo: 'brasas'; quantidade: number; camada: 'atras' | 'frente' };
export type Servico = { titulo: string; texto: string; imagem?: string };
export type Destaque = { imagem: string; alt: string; titulo: string; texto: string; lado?: 'esq' | 'dir' };
const mapsUrl = 'https://www.google.com/maps/place/Am%C3%BAn+Cl%C3%ADnica+Odontol%C3%B3gica/@-26.9716095,-48.6419893,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cbf7ff9b3e49:0x1dde2222844e65d!8m2!3d-26.9716095!4d-48.6394144!16s%2Fg%2F11zb2577fm?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D';
export const site = {
  previa: true,
  marca: 'Amún Clínica Odontológica',
  nomeCurto: 'Amún',
  nicho: 'Clínica odontológica',
  cidade: 'Balneário Camboriú · SC',
  logo: { src: '/brand/amun-wordmark.svg', alt: 'Amún', largura: 277, altura: 125 },
  whatsapp: '5547999886469',
  telefone: '(47) 99988-6469',
  whatsappMensagem: 'Olá, Amún! Vim pelo site e gostaria de conversar sobre o atendimento.',
  instagram: 'https://www.instagram.com/amunclinica/',
  endereco: {
    linha1: 'Av. do Estado Dalmo Vieira, 1714',
    linha2: 'Sala 403 · Menara Medical Center',
    mapsUrl,
    imagem: '/img/entrada-amun.webp',
    alt: 'Placa original da Amún ao lado da entrada, com identificação da sala 403.',
  },
  horarios: {
    semana: 'Segunda a sexta: 8h às 20h',
    sabado: 'Sábado: 9h às 17h',
    urgencias: 'Urgências: segunda a sábado, até meia-noite.',
  },
  avaliacoes: { nota: '5,0', total: 10, fonte: 'Google Maps', url: 'https://www.google.com/maps/place/Am%C3%BAn+Cl%C3%ADnica+Odontol%C3%B3gica/@-26.9716095,-48.6419893,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cbf7ff9b3e49:0x1dde2222844e65d!8m2!3d-26.9716095!4d-48.6394144!16s%2Fg%2F11zb2577fm?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D' },
  tema: { bg: '#F7F3EC', fg: '#343B2A', surface: '#EEE9DF', accent: '#8E593C', accentFg: '#FFFFFF', muted: '#626756', fonteDisplay: "'Fraunces', Georgia, serif", fonteCorpo: "'DM Sans', sans-serif" },
  nav: [
    { label: 'A clínica', href: '#destaques' },
    { label: 'Cuidados', href: '#servicos' },
    { label: 'Avaliações', href: '#depoimentos' },
    { label: 'Localização', href: '#contato' },
  ],
  hero: {
    linhas: ['Cuidar.', 'Restaurar.', 'Acolher.'],
    modo: 'solido' as 'solido' | 'fantasma',
    scrim: true,
    fundo: '/hero/consulta-amun.webp',
    fundoMobile: '/hero/consulta-amun-mobile.webp',
    alt: 'Sala de conversa da Amún, com painel verde oliva, madeira e vista para Balneário Camboriú.',
    sujeito: undefined as { src: string; alt: string; largura?: number } | undefined,
    etiqueta: 'Odontologia em Balneário Camboriú',
    subtitulo: 'Odontologia com atenção, escuta e profundidade. Um cuidado que vai além do que se vê.',
    ctaPrimario: 'Conversar no WhatsApp',
    ctaSecundario: { label: 'Por que Amún?', href: '#destaques' },
    assinatura: 'O essencial também está no cuidado.',
    chips: [] as { titulo: string; texto: string }[],
    ambiente: [] as Ambiente[],
  },
  essencia: {
    eyebrow: 'Por que Amún?',
    titulo: 'O essencial nem sempre se vê.',
    paragrafos: [
      'Nem tudo o que importa é imediatamente visível. O nome Amún carrega essa ideia: olhar para o que é profundo e essencial.',
      'Na inspiração egípcia que deu origem ao nome da clínica, o vento, o ar e o sopro da vida representam uma presença que se sente, mesmo sem se ver.',
      'Para nós, isso se traduz em atenção, escuta e profundidade. É esse olhar que queremos levar a cada atendimento, para cuidar da pessoa que existe além do sorriso.',
    ],
    frase: 'Uma odontologia que cuida, restaura e acolhe.',
    imagem: '/img/recepcao-amun.webp',
    alt: 'Recepção real da Amún, com balcão de pedra verde, luminária e divisória de vidro.',
  },
  servicos: {
    titulo: 'Atenção em cada cuidado.',
    chamada: 'Cuidado que começa na escuta.',
    intro: 'Cada pessoa chega com uma história. Conte o que você procura e conheça os atendimentos da Amún.',
    imagem: '/img/consultorio-amun.webp',
    alt: 'Consultório real da Amún com cadeira odontológica cognac e azulejos verde oliva.',
    layout: 'lista' as 'cards' | 'lista',
    itens: [
      { titulo: 'Odontologia', texto: 'Converse sobre suas necessidades e conheça as possibilidades de cuidado na Amún.' },
      { titulo: 'Clareamento', texto: 'Tire suas dúvidas sobre clareamento e converse com a equipe antes de agendar.' },
      { titulo: 'Harmonização facial', texto: 'Conte o que você procura e saiba mais sobre o atendimento em harmonização facial.' },
    ] as Servico[],
  },
  destaques: [] as Destaque[],
  etapas: { titulo: 'Como funciona', itens: [] as { titulo: string; texto: string }[] },
  depoimentos: [
    { nome: 'Taline Vugt', detalhe: 'Avaliação no Google', texto: 'Clínica maravilhosa com excelentes profissionais que passam segurança no tratamento.' },
    { nome: 'Jessica taschek', detalhe: 'Avaliação no Google', texto: 'Pessoas maravilhosas ambiente lindo e maravilhoso excelente trabalho e profissionalismo' },
    { nome: 'Carol Camilo', detalhe: 'Avaliação no Google', texto: 'Dentistas ótimas, consultório impecável!' },
  ],
  ctaFinal: { titulo: 'Comece com uma conversa.', texto: 'Fale com a Amún para tirar dúvidas e consultar a disponibilidade de atendimento.', botao: 'Chamar a Amún no WhatsApp' },
};
export const waLink = (mensagem = site.whatsappMensagem) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
