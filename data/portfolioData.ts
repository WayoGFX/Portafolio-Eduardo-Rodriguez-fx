import { ContactInfo, EducationItem, ToolItem, ExperienceItem, VideoProject, DesignProject, PhotoProject } from '../types';

export const personalInfo = {
  name: 'Eduardo Rodríguez',
  nickname: 'Wayo',
  tagline: 'Editor Audiovisual · Videógrafo · Diseñador Visual',
  year: '2026',
  avatarUrl: '/perfil.jpg',
  fallbackAvatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  bioParagraphs: [
    '¡Hola! Soy Eduardo Rodríguez (Wayo), videógrafo y editor audiovisual apasionado por transformar historias en piezas dinámicas e impactantes.',
    'Domino flujos integrales de producción: desde el rodaje, uso de estabilizadores, esquema de luces y drones, hasta la postproducción rítmica en Premiere Pro, corrección de color en DaVinci Resolve (S-Log2/3), diseño de sonido y artes gráficos en Photoshop, Lightroom.'
  ]
};

export const contactData: ContactInfo = {
  phone: '+503 7326 4065',
  phoneRaw: '50373264065',
  instagram: '@wayo.rodriguez',
  instagramUrl: 'https://www.instagram.com/wayo.rodriguez',
  youtubeUrl: 'https://www.youtube.com/@wayo.rodriguez',
  tiktokUrl: 'https://www.tiktok.com/@wayo.rodriguez',
  behance: 'wayorodriguez',
  behanceUrl: 'https://www.behance.net',
  email: 'wayorodriguez116@gmail.com',
  location: 'San Salvador, El Salvador'
};

export const educationData: EducationItem[] = [
  {
    institution: 'Universidad Salvadoreña Alberto Masferrer (USAM)',
    degree: 'Técnico en Desarrollo de Software (Graduado)',
    period: '2024 – 2025',
    description: 'Beca al Mérito Académico — Promedio: 9.56. Enfoque complementario en diseño de interfaces (UI/UX), prototipado visual y desarrollo digital.'
  }
];

export const toolsData: ToolItem[] = [
  { id: 'pr', name: 'Premiere Pro', shortCode: 'Pr', bgColor: '#00005B', textColor: '#9999FF' },
  { id: 'dv', name: 'DaVinci Resolve', shortCode: 'Dv', bgColor: '#1E1E24', textColor: '#E54B4B' },
  { id: 'ps', name: 'Photoshop', shortCode: 'Ps', bgColor: '#001E36', textColor: '#31A8FF' },
  { id: 'lr', name: 'Lightroom', shortCode: 'Lr', bgColor: '#001E36', textColor: '#31A8FF' },
  { id: 'ae', name: 'After Effects', shortCode: 'Ae', bgColor: '#00005B', textColor: '#9999FF' },
  { id: 'ai', name: 'Illustrator', shortCode: 'Ai', bgColor: '#330000', textColor: '#FF9A00' },
  { id: 'cd', name: 'CorelDRAW', shortCode: 'Cd', bgColor: '#004D20', textColor: '#00FF66' },
  { id: 'cc', name: 'CapCut / Canva', shortCode: 'Cc', bgColor: '#111111', textColor: '#FFFFFF' }
];

export const skillsData: string[] = [
  'Edición & Montaje Rítmico',
  'Retoque & Diseño Visual',
  'Corrección de Color',
  'Cobertura de Eventos',
  'Video para Redes & Retención',
  'Diseño de Interfaces UI & Prototipado',
];

export const softSkillsData: string[] = [
  'Visión Creativa & Estética',
  'Adaptabilidad',
  'Comunicación & Empatía',
  'Compromiso con el Detalle',
  'Resolución Rápida'
];

export const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Editor Audiovisual, Videógrafo & Fotógrafo — Pako Castillo',
    period: 'Feb. 2022 – Actualidad',
    roles: ['Editor Principal', 'Operador de Cámara', 'Fotógrafo', 'Diseño Promocional'],
    description: 'Producción de contenido corporativo para clientes de alto nivel como EL ORBE, GEOSIS (conferencias) y AVILÉS CORP (testimoniales y proyectos arquitectónicos terminados). Realización de video reels y banners para VidaDent, reels de bodas para Ode Makeup Artist, y cobertura audiovisual completa de eventos sociales (bodas, XV años, graduaciones y cumpleaños). Gestión de entregables y aprobación directa con clientes.',
    featured: true
  },
  {
    id: 'exp-2',
    title: 'Editor de Video (Subcontratado) — Boré Films · Proyecto Prisma Ingenieros',
    period: '2023 – 2024',
    roles: ['Montaje Cinematográfico', 'Edición Offline/Online', 'Color'],
    description: 'Edición y postproducción de teaser de alto impacto para Prisma Ingenieros para documentar y mostrar proyectos arquitectónicos e infraestructuras emblemáticas como La Puerta del Diablo, adaptando el contenido a los objetivos de comunicación de la marca.',
    featured: true
  },
  {
    id: 'exp-3',
    title: 'Diseñador Gráfico & Pre-prensa — Taller de Imprenta & Producción Gráfica',
    period: '2023',
    roles: ['Diseño Gráfico', 'Operador Pre-Prensa', 'CorelDRAW'],
    description: 'Preparación de artes finales y diagramación técnica. Trabajo con medidas reales, calibración de color, líneas de corte y resolución para impresión en diversos sustratos: papel cuché, folcote, lona banner y papel fotográfico.',
    featured: true
  }
];

export const videosData: VideoProject[] = [
  // ==================== VIDEOS VERTICALES (REELS & SHORTS 9:16) ====================
  // --- 2026 ---
  {
    id: 'v-reel-ode-2',
    title: 'Ode Makeup Artist: Estilo & Glamour en Eventos',
    category: 'Reels / Belleza',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/reel/DYFevKUsakP/embed',
    externalUrl: 'https://www.instagram.com/reel/DYFevKUsakP/',
    client: 'Ode Makeup Artist',
    year: '2026',
    role: 'Edición de Video & Ritmo',
    description: 'Contenido audiovisual enfocado en resaltar transformaciones y estilismo para eventos sociales.'
  },
  {
    id: 'v-reel-aviles-1',
    title: 'Avilés Corp: Recorrido Arquitectónico Residencial',
    category: 'Arquitectura / Reels',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/reel/DcJo82TRDZD/embed',
    externalUrl: 'https://www.instagram.com/reel/DcJo82TRDZD/',
    client: 'Avilés Corp (Pako Castillo)',
    year: '2026',
    role: 'Edición Rítmica, Estabilización & Color',
    description: 'Planos fluidos y edición rítmica mostrando espacios arquitectónicos terminados y acabados residenciales.'
  },
  {
    id: 'v-reel-aviles-2',
    title: 'Avilés Corp: Proyectos & Acabados de Alta Gama',
    category: 'Arquitectura / Reels',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/reel/DWhYAr5keQZ/embed',
    externalUrl: 'https://www.instagram.com/reel/DWhYAr5keQZ/',
    client: 'Avilés Corp (Pako Castillo)',
    year: '2026',
    role: 'Edición Audiovisual & Color Grading',
    description: 'Recorrido cinematográfico en formato vertical para destacar detalles de diseño de interiores y construcción.'
  },
  {
    id: 'v-reel-pako-1',
    title: 'Pako Castillo: Cobertura de Bodas & Fotografía Social',
    category: 'Bodas / Eventos Sociales',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/reel/DcomR_Ji0OP/embed',
    externalUrl: 'https://www.instagram.com/reel/DcomR_Ji0OP/',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Cámara, Edición & Musicalización',
    description: 'Reel promocional destacando la experiencia de cobertura fotográfica y cinematográfica en bodas.'
  },
  {
    id: 'v-reel-pako-2',
    title: 'Pako Castillo: Detrás de Cámaras & Producción',
    category: 'BTS / Producción Audiovisual',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/reel/DOjhg0pEST7/embed',
    externalUrl: 'https://www.instagram.com/reel/DOjhg0pEST7/',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Cámara en Mano, Montaje & Color',
    description: 'Detrás de cámaras dinámico mostrando el flujo de trabajo en eventos sociales y sesiones en locación.'
  },

  // --- 2024 ---
  {
    id: 'v-reel-ode-1',
    title: 'Ode Makeup Artist: Maquillaje de Novias & Preparación Nupcial',
    category: 'Reels / Bodas & Belleza',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/reel/C1YTGyhM4rc/embed',
    externalUrl: 'https://www.instagram.com/reel/C1YTGyhM4rc/',
    client: 'Ode Makeup Artist',
    year: '2024',
    role: 'Videógrafo & Edición para Redes',
    description: 'Reel promocional destacando la preparación nupcial y maquillaje de novias con estilo elegante y dinámico.'
  },
  {
    id: 'v-reel-vidadent-1',
    title: 'VidaDent: Equipamiento & Nuevos Artefactos Odontológicos',
    category: 'Comercial / Odontología',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/p/C0e-e4qPC1I/embed',
    externalUrl: 'https://www.instagram.com/p/C0e-e4qPC1I/',
    client: 'VidaDent',
    year: '2024',
    role: 'Edición Dinámica, Textos & Sonido',
    description: 'Presentación audiovisual de nuevos artefactos tecnológicos e innovaciones adquiridas por la clínica dental.'
  },
  {
    id: 'v-reel-vidadent-2',
    title: 'VidaDent: Higiene, Tecnología & Tratamientos',
    category: 'Comercial / Odontología',
    type: 'vertical',
    thumbnailUrl: '',
    embedUrl: 'https://www.instagram.com/p/C6brtxluOot/embed',
    externalUrl: 'https://www.instagram.com/p/C6brtxluOot/',
    client: 'VidaDent',
    year: '2024',
    role: 'Videografía & Edición',
    description: 'Video promocional para redes sociales sobre tratamientos, cuidado e higiene bucal profesional.'
  },
  {
    id: 'v-reel-geosis',
    title: 'Geosis: Cobertura & Dinamismo en Conferencia',
    category: 'Corporativo / Shorts',
    type: 'vertical',
    thumbnailUrl: 'https://img.youtube.com/vi/kiYEvzyLlBo/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/kiYEvzyLlBo',
    externalUrl: 'https://youtube.com/shorts/kiYEvzyLlBo',
    client: 'Geosis (Pako Castillo)',
    year: '2024',
    role: 'Grabación, Edición & Audio',
    description: 'Formato corto capturando la energía, ponencia y tecnología en conferencia de Geosis.'
  },

  // ==================== VIDEOS HORIZONTALES (16:9) - PELÍCULAS DE BODA & SOCIALES ====================
  // --- TOP DESTACADOS (ORDEN PERSONALIZADO) ---
  {
    id: 'v-boda-grace-diego',
    title: 'Grace & Diego',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/jGVLwVitKio/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/jGVLwVitKio',
    externalUrl: 'https://youtu.be/jGVLwVitKio',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Videógrafo, Montaje & Color',
    description: 'Film de boda capturando la ceremonia, votos nupciales, sesión en locación y momentos clave de fiesta.'
  },
  {
    id: 'v-boda-stephanie-miguel',
    title: 'Stephanie & Miguel',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/OzS_p2ixG-U/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/OzS_p2ixG-U',
    externalUrl: 'https://youtu.be/OzS_p2ixG-U',
    client: 'Pako Castillo',
    year: '2025',
    role: 'Cámara en Mano, Edición & Color',
    description: 'Detalles íntimos de la preparación de los novios, ceremonia nupcial y recepción con planos cinematográficos.'
  },
  {
    id: 'v-boda-gaby-ricardo',
    title: 'Gaby & Ricardo',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/wrvqGxlyxq0/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/wrvqGxlyxq0',
    externalUrl: 'https://youtu.be/wrvqGxlyxq0',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Edición, Color & Sound Design',
    description: 'Highlights dinámicos con estabilización, ritmo musical envolvente y planos emotivos de pareja.'
  },
  {
    id: 'v-boda-doris-jorge',
    title: 'Doris & Jorge (25 Años)',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/TRF_hZUn6Ns/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/TRF_hZUn6Ns',
    externalUrl: 'https://youtu.be/TRF_hZUn6Ns',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Videógrafo & Edición',
    description: 'Renovación de votos y 25 aniversario matrimonial con tomas emotivas, brindis y celebración familiar.'
  },
  {
    id: 'v-boda-diana-paul',
    title: 'Diana & Paul',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/-K4S8dnfZM0/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/-K4S8dnfZM0',
    externalUrl: 'https://youtu.be/-K4S8dnfZM0',
    client: 'Pako Castillo',
    year: '2025',
    role: 'Edición Rítmica & Corrección de Color',
    description: 'Film nupcial con enfoque en los momentos familiares, cortejo y las primeras danzas de recién casados.'
  },
  {
    id: 'v-boda-gaby-francisco',
    title: 'Gaby & Francisco',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/toLRmfcGr0w/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/toLRmfcGr0w',
    externalUrl: 'https://youtu.be/toLRmfcGr0w',
    client: 'Pako Castillo',
    year: '2025',
    role: 'Grabación de Eventos & Edición',
    description: 'Resumen audiovisual con planos dinámicos de ceremonia, sesión de fotos y ambiente nocturno.'
  },
  {
    id: 'v-boda-faby-raphy',
    title: 'Faby & Raphy',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/wpPlHJzVEi4/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/wpPlHJzVEi4',
    externalUrl: 'https://youtu.be/wpPlHJzVEi4',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Cámara & Edición',
    description: 'Cápsula audiovisual destacando los instantes más significativos y alegres del día de boda.'
  },
  {
    id: 'v-boda-camila-quinces',
    title: 'Camila Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/sKrdw4FaQ6o/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/sKrdw4FaQ6o',
    externalUrl: 'https://youtu.be/sKrdw4FaQ6o',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Videógrafo & Edición',
    description: 'Cobertura completa de 15 años con vals familiar, sesión fotográfica previa y fiesta con amigos.'
  },
  {
    id: 'v-boda-sofia-quinces',
    title: 'Sofía Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/W5ISji8aayM/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/W5ISji8aayM',
    externalUrl: 'https://youtu.be/W5ISji8aayM',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Cámara Principal & Postproducción',
    description: 'Montaje de 15 años capturando el protocolo, vals con el padre y momentos espontáneos de baile.'
  },
  {
    id: 'v-boda-elysa-jose',
    title: 'Elysa & José',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/0zrrnF0Pr0Q/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/0zrrnF0Pr0Q',
    externalUrl: 'https://youtu.be/0zrrnF0Pr0Q',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Montaje & Musicalización',
    description: 'Highlights de boda con tratamiento cálido de color, narrativa emotiva y sonido ambiental de calidad.'
  },
  {
    id: 'v-boda-nelci-jose',
    title: 'Nelci & José',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/T9RvCvu7SAg/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/T9RvCvu7SAg',
    externalUrl: 'https://youtu.be/T9RvCvu7SAg',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Videografía & Color',
    description: 'Película de boda con enfoque documental en la ceremonia religiosa, intercambio de anillos y fiesta.'
  },

  // --- MÁS PELÍCULAS DE BODA Y QUINCES ---
  {
    id: 'v-boda-2026-1',
    title: 'Daysi & Rodolfo',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/N7DeHT4orK0/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/N7DeHT4orK0',
    externalUrl: 'https://youtu.be/N7DeHT4orK0',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Videógrafo, Montaje Cinematográfico & Color',
    description: 'Película de boda con tomas emotivas, color grading cinematográfico y sincronización musical de momentos clave.'
  },
  {
    id: 'v-boda-2026-2',
    title: 'Phillipa Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/t5ckFYCIEc8/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/t5ckFYCIEc8',
    externalUrl: 'https://youtu.be/t5ckFYCIEc8',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Cámara Principal, Edición & Audio',
    description: 'Cobertura integral de fiesta de 15 años, brindis, vals y primeras danzas con planos dinámicos.'
  },
  {
    id: 'v-boda-2026-4',
    title: 'Graciela & Carlos',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/OxIDMd_dFtM/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/OxIDMd_dFtM',
    externalUrl: 'https://youtu.be/OxIDMd_dFtM',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Cámara en Mano, Edición & Color',
    description: 'Montaje narrativo y etalonaje digital destacando el brillo y la emoción de la fiesta nupcial.'
  },
  {
    id: 'v-boda-2026-5',
    title: 'Valentina Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/UA_TXZsYTK0/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/UA_TXZsYTK0',
    externalUrl: 'https://youtu.be/UA_TXZsYTK0',
    client: 'Pako Castillo',
    year: '2026',
    role: 'Videografía & Postproducción',
    description: 'Registro audiovisual completo capturando detalles decorativos, invitados y momentos espontáneos.'
  },
  {
    id: 'v-boda-2025-1',
    title: 'Alejandra & Atilio',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/Aa5_zrffmhM/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Aa5_zrffmhM',
    externalUrl: 'https://youtu.be/Aa5_zrffmhM',
    client: 'Pako Castillo',
    year: '2025',
    role: 'Edición, Montaje & Color Grading',
    description: 'Registro cinematográfico del intercambio de votos y emotiva celebración nupcial.'
  },
  {
    id: 'v-boda-2025-2',
    title: 'Esmeralda & Ricardo',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/yUG9XBWE468/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/yUG9XBWE468',
    externalUrl: 'https://youtu.be/yUG9XBWE468',
    client: 'Pako Castillo',
    year: '2025',
    role: 'Videografía & Postproducción Rítmica',
    description: 'Video resumen de boda con edición ágil capturando la alegría de los novios y familiares.'
  },
  {
    id: 'v-boda-2025-6',
    title: 'María & Carlos',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/dvHQhAwO6Xs/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dvHQhAwO6Xs',
    externalUrl: 'https://youtu.be/dvHQhAwO6Xs',
    client: 'Pako Castillo',
    year: '2025',
    role: 'Videógrafo & Montaje',
    description: 'Cobertura integral de evento social capturando el ambiente y la interacción de los invitados.'
  },
  {
    id: 'v-boda-2024-1',
    title: 'Mhia Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/Teyf4u_7W18/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Teyf4u_7W18',
    externalUrl: 'https://youtu.be/Teyf4u_7W18',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Grabación en Locación, Edición & Musicalización',
    description: 'Film de 15 años capturando la esencia y atmósfera natural de la sesión en locación.'
  },
  {
    id: 'v-boda-2024-2',
    title: 'Mafer Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/aBqu6KUrzv8/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/aBqu6KUrzv8',
    externalUrl: 'https://youtu.be/aBqu6KUrzv8',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Cámara, Color & Edición',
    description: 'Producción audiovisual destacando planos estéticos y momentos familiares de celebración.'
  },
  {
    id: 'v-boda-2024-3',
    title: 'María Teresa & René',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/04Pgn5DePBE/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/04Pgn5DePBE',
    externalUrl: 'https://youtu.be/04Pgn5DePBE',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Videografía & Edición',
    description: 'Tomas nupciales en iglesia, cortejo nupcial y salida de novios con estilo cinematográfico.'
  },
  {
    id: 'v-boda-2024-5',
    title: 'Grecia & Carlos',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/QDXwLZQm4fo/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/QDXwLZQm4fo',
    externalUrl: 'https://youtu.be/QDXwLZQm4fo',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Edición & Color Grading',
    description: 'Resumen emotivo de la llegada de los novios, brindis y fiesta en salón de eventos.'
  },
  {
    id: 'v-boda-2024-6',
    title: 'Karla & Andrés',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/ACzHmzjic8c/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ACzHmzjic8c',
    externalUrl: 'https://youtu.be/ACzHmzjic8c',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Videógrafo & Montaje Musical',
    description: 'Película de boda con tomas en exteriores y captura de luz natural en locación.'
  },
  {
    id: 'v-boda-2024-8',
    title: 'Alexa Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/KtKlFILbx5w/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/KtKlFILbx5w',
    externalUrl: 'https://youtu.be/KtKlFILbx5w',
    client: 'Pako Castillo',
    year: '2024',
    role: 'Edición de Video & Audio',
    description: 'Resumen dinámico con momentos espontáneos de familiares e invitados.'
  },
  {
    id: 'v-boda-2023-1',
    title: 'Cinthia & Pablo',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/uNOhS4FrcD8/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/uNOhS4FrcD8',
    externalUrl: 'https://youtu.be/uNOhS4FrcD8',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Montaje de Video & Sonido',
    description: 'Resumen cinematográfico de momentos espontáneos durante la fiesta y recepción.'
  },
  {
    id: 'v-boda-2023-4',
    title: 'Grace & Chris',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/ivEkNDoeFbQ/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ivEkNDoeFbQ',
    externalUrl: 'https://youtu.be/ivEkNDoeFbQ',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Cámara & Montaje Rítmico',
    description: 'Cobertura de fiesta, pista de baile y brindis con cortes rítmicos.'
  },
  {
    id: 'v-boda-2023-5',
    title: 'Karen & John',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/4mx0FXq7xpM/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/4mx0FXq7xpM',
    externalUrl: 'https://youtu.be/4mx0FXq7xpM',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Edición Audiovisual',
    description: 'Film conmemorativo de celebración social y momentos familiares.'
  },
  {
    id: 'v-boda-2023-8',
    title: 'Sandra & Luis',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/1pqsq1-CiAM/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/1pqsq1-CiAM',
    externalUrl: 'https://youtu.be/1pqsq1-CiAM',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Cámara en Mano & Edición',
    description: 'Registro visual de momentos espontáneos y celebración con invitados.'
  },
  {
    id: 'v-boda-2023-9',
    title: 'Ivana Quinces',
    category: 'Bodas & Eventos Sociales',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/hHi3qnAW3Sc/hqdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/hHi3qnAW3Sc',
    externalUrl: 'https://youtu.be/hHi3qnAW3Sc',
    client: 'Pako Castillo',
    year: '2023',
    role: 'Edición Completa & Color',
    description: 'Video resumen destacando las emociones de la jornada y los detalles de locación.'
  },

  // ==================== VIDEOS HORIZONTALES: CORPORATIVO & COMERCIAL (16:9) ====================
  {
    id: 'v-horiz-aviles-externado',
    title: 'Avilés Corp: Testimonial Proyecto Externado San José',
    category: 'Corporativo & Teasers',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/Yhz-VJFrwGM/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Yhz-VJFrwGM',
    externalUrl: 'https://youtu.be/Yhz-VJFrwGM',
    client: 'Avilés Corp (Pako Castillo)',
    year: '2025',
    role: 'Edición, Entrevistas & Color Grading',
    description: 'Video testimonial mostrando la finalización de proyecto arquitectónico en el Colegio Externado San José con testimonios y planos de infraestructura.'
  },
  {
    id: 'v-horiz-el-orbe-2',
    title: 'EL ORBE: Resumen Ejecutivo & Evento Tecnológico',
    category: 'Corporativo & Teasers',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/3b_8fUKucss/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3b_8fUKucss',
    externalUrl: 'https://youtu.be/3b_8fUKucss',
    client: 'EL ORBE (Pako Castillo)',
    year: '2025',
    role: 'Edición Audiovisual & Diseño de Sonido',
    description: 'Resumen dinámico de conferencias con tomas de ponentes, interacción con asistentes y montaje corporativo.'
  },
  {
    id: 'v-horiz-acb-circo',
    title: 'ACB Circo: Cobertura de Espectáculo & Color en Escenario',
    category: 'Corporativo & Teasers',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/_lRT0qscH2g/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/_lRT0qscH2g',
    externalUrl: 'https://youtu.be/_lRT0qscH2g',
    client: 'ACB Circo / Colegio El Salvador',
    year: '2025',
    role: 'Grabación, Edición & Color en Luces de Escenario',
    description: 'Trabajo de corrección de color y captura de video ante condiciones de iluminación complejas con reflectores, juegos de luces y escenario en vivo.'
  },
  {
    id: 'v-horiz-ideaton',
    title: 'Ideatón GetForum: Pitch Dinámico & Presentación Audiovisual',
    category: 'Branding & Animación',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/4e_0AruI9P0/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/4e_0AruI9P0',
    externalUrl: 'https://youtu.be/4e_0AruI9P0',
    client: 'Ideatón GetForum',
    year: '2025',
    role: 'Grabación en Cámara, Edición Suite Adobe & Color',
    description: 'Video explicativo de 3 minutos aplicando la suite de Adobe para lograr un ritmo ágil y explicativo.'
  },
  {
    id: 'v-horiz-prisma',
    title: 'Prisma Ingenieros: Teaser La Puerta del Diablo',
    category: 'Corporativo & Teasers',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/hIRpmQZycOE/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/hIRpmQZycOE',
    externalUrl: 'https://youtu.be/hIRpmQZycOE',
    client: 'Prisma Ingenieros (vía Boré Films)',
    year: '2024',
    role: 'Edición Offline/Online, Ritmo & Color',
    description: 'Edición de video teaser cinematográfico para mostrar obras de infraestructura e ingeniería arquitectónica en uno de los puntos turísticos más emblemáticos de El Salvador.'
  },
  {
    id: 'v-horiz-el-orbe-1',
    title: 'EL ORBE: Cobertura Audiovisual de Conferencia',
    category: 'Corporativo & Teasers',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/MOvf-MPbA-4/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/MOvf-MPbA-4',
    externalUrl: 'https://youtu.be/MOvf-MPbA-4',
    client: 'EL ORBE (Pako Castillo)',
    year: '2024',
    role: 'Grabación de Conferencias, Edición & Audio',
    description: 'Cobertura y video resumen de evento corporativo tecnológico de la empresa EL ORBE.'
  },
  {
    id: 'v-horiz-realeza-optica',
    title: 'La Realeza Óptica: Spot Promocional',
    category: 'Corporativo & Teasers',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/WOH15ot-qSQ/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/WOH15ot-qSQ',
    externalUrl: 'https://youtu.be/WOH15ot-qSQ',
    client: 'La Realeza Óptica',
    year: '2024',
    role: 'Videografía, Edición & Color',
    description: 'Video promocional para óptica destacando productos, marcas de aros y atención especializada.'
  },
  {
    id: 'v-horiz-floppas',
    title: 'Floppas Cook: Video Explicativo & Animación de Proyecto',
    category: 'Branding & Animación',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/k6VHWLWkIo0/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/k6VHWLWkIo0',
    externalUrl: 'https://youtu.be/k6VHWLWkIo0',
    client: 'Floppas Cook',
    year: '2021',
    role: 'Animación 2D, Edición & Voiceover',
    description: 'Video de presentación animado explicando el concepto, la interfaz y las funciones de la plataforma Floppas Cook.'
  },
  {
    id: 'v-horiz-the-last-note',
    title: 'The Last Note: Tráiler & Presentación de Videojuego',
    category: 'Branding & Animación',
    type: 'horizontal',
    thumbnailUrl: 'https://img.youtube.com/vi/riOS8EtgGkA/maxresdefault.jpg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/riOS8EtgGkA',
    externalUrl: 'https://youtu.be/riOS8EtgGkA',
    client: 'The Last Note',
    year: '2019',
    role: 'Edición de Tráiler & Sincronización Musical',
    description: 'Tráiler promocional con estética pixel art y cortes rítmicos para juego educativo.'
  }
];

export const designsData: DesignProject[] = [
  // --- 2025 ---
  {
    id: 'des-vetai',
    title: 'VetAI: Identidad Visual, Códigos QR & Prototipo Veterinario',
    category: 'Branding & UI',
    imageUrl: '/proyectos/vetai/1.jpg',
    images: [
      '/proyectos/vetai/1.jpg',
      '/proyectos/vetai/3.jpg',
      '/proyectos/vetai/4.jpg',
      '/proyectos/vetai/5.jpg',
      '/proyectos/vetai/6.jpg',
      '/proyectos/vetai/7.jpg',
      '/proyectos/vetai/8.jpg',
      '/proyectos/vetai/9.jpg',
      '/proyectos/vetai/10.jpg',
      '/proyectos/vetai/comb1.jpg',
      '/proyectos/vetai/pruebas de tamaños.png',
      '/proyectos/vetai/rojo.jpg'
    ],
    aspectRatio: 'square',
    client: 'VetAI Web App',
    year: '2025',
    tools: ['Photoshop', 'Illustrator'],
    description: 'Diseño de logotipo, estilo para códigos QR escaneables de expedientes clínicos y maquetado de interfaz para app de gestión de mascotas.'
  },

  // --- 2024 ---
  {
    id: 'des-farm-uml',
    title: 'Farm UML: Sistema & App Web / Móvil de Farmacia',
    category: 'Branding & UI',
    imageUrl: '/proyectos/Farm UML/Paleta de colores.png',
    images: [
      '/proyectos/Farm UML/Paleta de colores.png',
      '/proyectos/Farm UML/Inicio de sesión - web.png',
      '/proyectos/Farm UML/Web Menu.png',
      '/proyectos/Farm UML/Web Nueva Venta.png',
      '/proyectos/Farm UML/Web Detalle Venta.png',
      '/proyectos/Farm UML/Web Procesar Pago.png',
      '/proyectos/Farm UML/Web Comprobante.png',
      '/proyectos/Farm UML/Web Reporte de Ventas.png',
      '/proyectos/Farm UML/Web Reporte de Inventario.png',
      '/proyectos/Farm UML/Inicio de Sesión - movil.png',
      '/proyectos/Farm UML/Menu movil.png',
      '/proyectos/Farm UML/movil Nueva Venta.png',
      '/proyectos/Farm UML/movil Detalle de Venta.png',
      '/proyectos/Farm UML/Movil Procesar Pago.png',
      '/proyectos/Farm UML/Movil Comprobante.png',
      '/proyectos/Farm UML/Movil Reportes Ventas.png',
      '/proyectos/Farm UML/Movil Reportes Inventario.png'
    ],
    aspectRatio: 'landscape',
    client: 'Farma UML',
    year: '2024',
    tools: ['Photoshop', 'Illustrator', 'UI/UX Design'],
    description: 'Diseño integral de experiencia de usuario y arquitectura visual para plataforma de farmacia (versión Web y Móvil), con módulo de ventas, reportes, inventario y comprobantes de pago.'
  },
  {
    id: 'des-hotelnova',
    title: 'Hotel Nova: Prototipo & Sistema de Reserva de Salas',
    category: 'Branding & UI',
    imageUrl: '/proyectos/hotelnova/diseño-hotel-nova.jpg',
    images: [
      '/proyectos/hotelnova/diseño-hotel-nova.jpg',
      '/proyectos/hotelnova/colores.jpg',
      '/proyectos/hotelnova/hotelnova--index.jpg',
      '/proyectos/hotelnova/hotelnova--reserva1.jpg',
      '/proyectos/hotelnova/diseño-hotel-nova---reservaGenerada.jpg',
      '/proyectos/hotelnova/hotelnova--reservaConfirmada.jpg'
    ],
    aspectRatio: 'landscape',
    client: 'Hotel Nova Concept',
    year: '2024',
    tools: ['Photoshop', 'Illustrator', 'UI Design'],
    description: 'Identidad visual, selección cromática y prototipo de flujo completo de reserva de salones de eventos y salas corporativas.'
  },
  {
    id: 'des-eccdace',
    title: 'Eccdace: Identidad Corporativa, Logotipo & Módulos UI',
    category: 'Branding & UI',
    imageUrl: '/proyectos/Eccdace/Index Definido.jpg',
    images: [
      '/proyectos/Eccdace/Index Definido.jpg',
      '/proyectos/Eccdace/Modulos class idss.jpg',
      '/proyectos/Eccdace/Social ids.jpg',
      '/proyectos/Eccdace/lg.jpg',
      '/proyectos/Eccdace/logo cuadrado.jpg',
      '/proyectos/Eccdace/sdf.png'
    ],
    aspectRatio: 'landscape',
    client: 'Eccdace Project',
    year: '2024',
    tools: ['Photoshop', 'Illustrator'],
    description: 'Diseño de marca, logotipo corporativo, módulos de clase y estructura de identidad visual.'
  },
  {
    id: 'des-vidadent',
    title: 'VidaDent: Banners Publicitarios & Piezas para Redes',
    category: 'Social Media',
    imageUrl: '/proyectos/vidadent/Banner VidaDENT.png',
    images: [
      '/proyectos/vidadent/Banner VidaDENT.png'
    ],
    aspectRatio: 'square',
    client: 'VidaDent (Pako Castillo)',
    year: '2024',
    tools: ['Photoshop', 'Canva'],
    description: 'Diseño de banner promocional para clínica dental resaltando servicios odontológicos, higiene y tecnología.'
  },
  {
    id: 'des-personal-1',
    title: 'Fondo Creativo: Composición Visual & Efectos de Luz',
    category: 'Social Media',
    imageUrl: '/proyectos/Personales/fondo-ganador.jpg',
    images: [
      '/proyectos/Personales/fondo-ganador.jpg'
    ],
    aspectRatio: 'landscape',
    client: 'Proyecto Personal',
    year: '2024',
    tools: ['Photoshop', 'Digital Art'],
    description: 'Composición gráfica y arte digital con efectos de iluminación, texturas y atmósfera envolvente.'
  },
  {
    id: 'des-personal-2',
    title: 'Banner Promocional: Redes Sociales & Portadas',
    category: 'Social Media',
    imageUrl: '/proyectos/Personales/banner facebook lesson2.jpg',
    images: [
      '/proyectos/Personales/banner facebook lesson2.jpg'
    ],
    aspectRatio: 'landscape',
    client: 'Proyecto Personal / Redes',
    year: '2024',
    tools: ['Photoshop', 'Illustrator'],
    description: 'Banner publicitario diseñado con jerarquía visual y diagramación para publicaciones en Facebook y redes sociales.'
  },
  {
    id: 'des-personal-3',
    title: 'Arte Digital: Montaje & Tratamiento de Color',
    category: 'Social Media',
    imageUrl: '/proyectos/Personales/asdas.jpg',
    images: [
      '/proyectos/Personales/asdas.jpg'
    ],
    aspectRatio: 'square',
    client: 'Proyecto Personal',
    year: '2024',
    tools: ['Photoshop'],
    description: 'Diseño publicitario y composición gráfica con manipulación de imagen y estilismo visual.'
  },

  // --- 2023 ---
  {
    id: 'des-imprenta',
    title: 'Artes de Imprenta: Líneas de Corte & Formatos Pre-Prensa',
    category: 'Imprenta & Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    client: 'Taller de Imprenta',
    year: '2023',
    tools: ['CorelDRAW', 'Photoshop'],
    description: 'Diagramación para impresión en papel cuché, folcote, lonas publicitarias y tarjetas con sangrado y líneas de corte.'
  },

  // --- 2021 ---
  {
    id: 'des-floppas',
    title: 'Floppas Cook: Identidad de Marca, UI & Recetario Web',
    category: 'Branding & UI',
    imageUrl: '/proyectos/floppas cook/1.jpg',
    images: [
      '/proyectos/floppas cook/1.jpg',
      '/proyectos/floppas cook/2.jpg',
      '/proyectos/floppas cook/3.jpg',
      '/proyectos/floppas cook/4.jpg'
    ],
    aspectRatio: 'portrait',
    client: 'Proyecto Propio / Académico',
    year: '2021',
    tools: ['Photoshop', 'Illustrator', 'Premiere Pro'],
    description: 'Desarrollo de identidad creativa integral: logotipo, paleta cromática, estilo visual y prototipos de interfaz web para recetas de cocina.'
  },

  // --- 2019 ---
  {
    id: 'des-the-last-note',
    title: 'The Last Note: Afiches, Cartelería & Pixel Art para Videojuego',
    category: 'Flyers & Posters',
    imageUrl: '/proyectos/The Last Note/afiche.jpg',
    images: [
      '/proyectos/The Last Note/afiche.jpg',
      '/proyectos/The Last Note/TLN nivel1.jpg',
      '/proyectos/The Last Note/TLN nivel2.jpg',
      '/proyectos/The Last Note/TLN nivel3.png'
    ],
    aspectRatio: 'portrait',
    client: 'The Last Note Game',
    year: '2019',
    tools: ['Photoshop', 'Pixel Art', 'Illustrator'],
    description: 'Afiche publicitario, diseño de niveles en Pixel Art y piezas gráficas promocionales para videojuego educativo.'
  }
];

export const photosData: PhotoProject[] = [
  {
    id: 'pho-boda-carlos-alejandra',
    title: 'Boda Carlos & Alejandra: Cobertura Nupcial Completa',
    category: 'Social Events',
    imageUrl: '/fotos/Boda carlos y alejandra/PAK0-18.jpg',
    images: [
      '/fotos/Boda carlos y alejandra/PAK0-18.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-24.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-187.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-220.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-246.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-295.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-301.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-378.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-409.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-412.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-423.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-427.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-475.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-499.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-599.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-606.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-608.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-629.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-639.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-651.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-660.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-699.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-703.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-717.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-751.jpg',
      '/fotos/Boda carlos y alejandra/PAK0-773.jpg'
    ],
    year: '2026',
    location: 'San Salvador',
    gear: 'Sony FX30 / Sony Alpha + Flashes Manuales',
    description: 'Álbum completo de boda: ceremonia, retrato de novios, intercambio de anillos y recepción con iluminación controlada.'
  },
  {
    id: 'pho-boda-faby-xavi',
    title: 'Boda Faby & Xavi: Sesión Nupcial & Emociones',
    category: 'Social Events',
    imageUrl: '/fotos/boda faby y xavi/3.jpg',
    images: [
      '/fotos/boda faby y xavi/3.jpg',
      '/fotos/boda faby y xavi/15.jpg',
      '/fotos/boda faby y xavi/133.jpg',
      '/fotos/boda faby y xavi/143.jpg',
      '/fotos/boda faby y xavi/144.jpg',
      '/fotos/boda faby y xavi/157.jpg',
      '/fotos/boda faby y xavi/193.jpg',
      '/fotos/boda faby y xavi/240.jpg',
      '/fotos/boda faby y xavi/262.jpg',
      '/fotos/boda faby y xavi/282.jpg',
      '/fotos/boda faby y xavi/289.jpg',
      '/fotos/boda faby y xavi/359.jpg',
      '/fotos/boda faby y xavi/367.jpg',
      '/fotos/boda faby y xavi/384.jpg'
    ],
    year: '2025',
    location: 'San Salvador',
    gear: 'Sony + 85mm f/1.4 + Flash Rebotado',
    description: 'Reportaje fotográfico capturando momentos espontáneos, retratos en pareja y detalles decorativos de boda.'
  },
  {
    id: 'pho-boda-lili-gio',
    title: 'Boda Lili & Gio: Retrato Editorial & Ceremonia',
    category: 'Social Events',
    imageUrl: '/fotos/boda lili and gio/13.jpg',
    images: [
      '/fotos/boda lili and gio/13.jpg',
      '/fotos/boda lili and gio/68.jpg',
      '/fotos/boda lili and gio/90.jpg',
      '/fotos/boda lili and gio/118.jpg',
      '/fotos/boda lili and gio/139.jpg',
      '/fotos/boda lili and gio/174.jpg',
      '/fotos/boda lili and gio/193.jpg',
      '/fotos/boda lili and gio/236.jpg',
      '/fotos/boda lili and gio/245.jpg',
      '/fotos/boda lili and gio/272.jpg',
      '/fotos/boda lili and gio/317.jpg',
      '/fotos/boda lili and gio/369.jpg',
      '/fotos/boda lili and gio/387.jpg'
    ],
    year: '2025',
    location: 'El Salvador',
    gear: 'Sony Alpha + Lente Retrato 50mm / 85mm',
    description: 'Serie fotográfica de boda con enfoque documental, captura de miradas y emotividad en cada toma.'
  },
  {
    id: 'pho-boda-georgina-cristo',
    title: 'Boda Georgina & Cristo: Celebración & Recuerdos',
    category: 'Social Events',
    imageUrl: '/fotos/boda georgina y cristo/4.jpg',
    images: [
      '/fotos/boda georgina y cristo/4.jpg',
      '/fotos/boda georgina y cristo/7.jpg',
      '/fotos/boda georgina y cristo/45.jpg',
      '/fotos/boda georgina y cristo/56.jpg',
      '/fotos/boda georgina y cristo/122.jpg',
      '/fotos/boda georgina y cristo/177.jpg',
      '/fotos/boda georgina y cristo/181.jpg',
      '/fotos/boda georgina y cristo/199.jpg'
    ],
    year: '2024',
    location: 'San Salvador',
    gear: 'Sony Alpha + Speedlights Manuales',
    description: 'Fotografía de bodas con luz natural y flash de relleno en exteriores.'
  },
  {
    id: 'pho-boda-claudia-carlos',
    title: 'Boda Claudia & Carlos: Ceremonia Social',
    category: 'Social Events',
    imageUrl: '/fotos/boda claudia y carlos/27.jpg',
    images: [
      '/fotos/boda claudia y carlos/27.jpg',
      '/fotos/boda claudia y carlos/156.jpg',
      '/fotos/boda claudia y carlos/160.jpg',
      '/fotos/boda claudia y carlos/253.jpg',
      '/fotos/boda claudia y carlos/255.jpg',
      '/fotos/boda claudia y carlos/278.jpg'
    ],
    year: '2024',
    location: 'San Salvador',
    gear: 'Sony + 35mm / 85mm Prime',
    description: 'Tomas de la ceremonia y retratos de novios en iglesia y salón de recepción.'
  }
];
