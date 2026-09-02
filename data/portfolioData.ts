import { ContactInfo, EducationItem, ToolItem, ExperienceItem, VideoProject, DesignProject, PhotoProject } from '../types';

export const personalInfo = {
  name: 'Eduardo Rodríguez',
  nickname: 'Wayo',
  tagline: 'Editor Audiovisual, Videógrafo & Diseñador',
  year: '2026',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  bioParagraphs: [
    '¡Hola! Soy Eduardo Rodríguez (Wayo), editor audiovisual y creador de contenido con pasión por contar historias visuales dinámicas e impactantes.',
    'Especializado en montaje rítmico, narrativa para redes sociales, corrección de color y diseño gráfico. Combino precisión técnica con una visión creativa fresca para conectar marcas y creadores con su audiencia.'
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
  location: 'El Salvador'
};

export const educationData: EducationItem[] = [
  {
    institution: 'Comunicación Audiovisual & Medios Digitales',
    degree: 'Licenciatura en Comunicación y Producción Audiovisual',
    period: '2022 - Actualidad',
    description: 'Enfoque en narrativa cinematográfica, postproducción y dirección de fotografía.'
  },
  {
    institution: 'Especializaciones & Certificaciones',
    degree: 'Color Grading en DaVinci Resolve & Motion Graphics Avanzado',
    period: '2023 - 2024',
    description: 'Flujos de trabajo profesionales de postproducción de video y VFX.'
  }
];

export const toolsData: ToolItem[] = [
  { id: 'pr', name: 'Premiere Pro', shortCode: 'Pr', bgColor: '#00005B', textColor: '#9999FF' },
  { id: 'ae', name: 'After Effects', shortCode: 'Ae', bgColor: '#00005B', textColor: '#9999FF' },
  { id: 'dv', name: 'DaVinci Resolve', shortCode: 'Dv', bgColor: '#1E1E24', textColor: '#E54B4B' },
  { id: 'ps', name: 'Photoshop', shortCode: 'Ps', bgColor: '#001E36', textColor: '#31A8FF' },
  { id: 'ai', name: 'Illustrator', shortCode: 'Ai', bgColor: '#330000', textColor: '#FF9A00' },
  { id: 'cc', name: 'CapCut Pro', shortCode: 'Cc', bgColor: '#000000', textColor: '#FFFFFF' }
];

export const skillsData: string[] = [
  'Edición de Video',
  'Motion Graphics',
  'Color Grading',
  'Sound Design',
  'Videografía & Cámara',
  'Storytelling',
  'Diseño de Miniaturas',
  'Fotografía Digital',
  'Branding para Creadores',
  'Ritmo & Montaje'
];

export const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Lead Video Editor & Content Strategist — Creadores & Marcas',
    period: '2024 – Presente',
    roles: ['Editor Principal', 'Motion Designer', 'Colorista'],
    description: 'Edición y postproducción de más de 150+ piezas en formato corto (Reels, TikToks, Shorts) y formatos largos de YouTube, optimizando retención y dinamismo visual.',
    featured: true
  },
  {
    id: 'exp-2',
    title: 'Videógrafo & Realizador Audiovisual — Producciones Comerciales & Eventos',
    period: '2023 – 2025',
    roles: ['Director de Fotografía (DoP)', 'Operador de Cámara', 'Edición Offline/Online'],
    description: 'Cobertura multicámara de eventos de alto perfil, rodaje de comerciales promocionales para marcas locales e institucionales y etalonaje digital.',
    featured: true
  },
  {
    id: 'exp-3',
    title: 'Diseñador Visual & Creador de Contenido — Proyectos Independientes & Branding',
    period: '2022 – 2024',
    roles: ['Diseño Gráfico', 'Fotógrafo', 'Animación 2D'],
    description: 'Desarrollo de identidad visual, cartelería promocional, miniaturas de alto CTR para YouTube y sesiones fotográficas de producto y retrato.',
    featured: true
  }
];

export const videosData: VideoProject[] = [
  // Videos Verticales (Reels / Shorts) - Mostrados de 3 en 3
  {
    id: 'v-reel-1',
    title: 'Reel Dinámico: Street Fashion & Ritmo Urbano',
    category: 'Reels / Shorts',
    type: 'vertical',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=1066&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-urban-fashion-model-in-a-neon-tunnel-40714-large.mp4',
    client: 'Urban Style Brand',
    year: '2025',
    role: 'Edición, Color & Sound Design',
    description: 'Montaje de alto impacto con cortes al ritmo del beat y sound effects inmersivos.'
  },
  {
    id: 'v-reel-2',
    title: 'Behind the Scenes: Sesión Comercial de Producto',
    category: 'Reels / Shorts',
    type: 'vertical',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=1066&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-filmmaker-setting-up-his-camera-42868-large.mp4',
    client: 'Studio Works',
    year: '2025',
    role: 'Cámara & Edición Vertical',
    description: 'Storytelling ágil mostrando el proceso creativo detrás de cámaras.'
  },
  {
    id: 'v-reel-3',
    title: 'Short Educativo / Miniatura: Motion & Tipografía',
    category: 'Reels / Shorts',
    type: 'vertical',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&h=1066&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-skater-showing-tricks-in-a-skatepark-42846-large.mp4',
    client: 'Creator Academy',
    year: '2025',
    role: 'Motion Graphics & Subtítulos Cinéticos',
    description: 'Gráficos animados y subtítulos dinámicos diseñados para maximizar retención.'
  },
  {
    id: 'v-reel-4',
    title: 'Fitness Workout & Adrenalina',
    category: 'Reels / Shorts',
    type: 'vertical',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&h=1066&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-exercising-in-the-gym-42686-large.mp4',
    client: 'Power Gym',
    year: '2024',
    role: 'Edición Rápida & Speed Ramps',
    description: 'Transiciones fluidas con speed ramps y corrección de color de alto contraste.'
  },
  {
    id: 'v-reel-5',
    title: 'Cocktail Crafting: Visual Storytelling Gastronómico',
    category: 'Reels / Shorts',
    type: 'vertical',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&h=1066&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bartender-pouring-a-drink-into-a-glass-41618-large.mp4',
    client: 'Lounge Bar & Co.',
    year: '2024',
    role: 'Macro Videografía & Montaje ASMR',
    description: 'Tomas macro con diseño de audio envolvente resaltando texturas y frescura.'
  },
  {
    id: 'v-reel-6',
    title: 'Event Highlights: Festival de Música & Luces',
    category: 'Reels / Shorts',
    type: 'vertical',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&h=1066&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-raising-hands-under-colorful-stage-lights-42869-large.mp4',
    client: 'Live Beats Fest',
    year: '2024',
    role: 'Recap Video & Color Grading',
    description: 'Resumen explosivo capturando la energía del público y efectos de iluminación.'
  },

  // Videos Horizontales (16:9)
  {
    id: 'v-horiz-1',
    title: 'Showreel Audiovisual — Selección de Proyectos',
    category: 'Commercial',
    type: 'horizontal',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&h=675&q=80',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    client: 'Wayo Audiovisual',
    year: '2025',
    role: 'Dirección, Cámara, Edición & Color',
    description: 'Compilado cinematográfico de los mejores planos, comerciales, videoclips y piezas visuales producidas durante el último año.'
  },
  {
    id: 'v-horiz-2',
    title: 'Spot Publicitario: Libertad & Movimiento',
    category: 'Commercial',
    type: 'horizontal',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=675&q=80',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    client: 'Apex Apparel',
    year: '2024',
    role: 'Montaje Offline, Etalonaje & VFX',
    description: 'Comercial de televisión y plataformas digitales con look anamórfico y grading cinematográfico.'
  }
];

export const designsData: DesignProject[] = [
  {
    id: 'des-1',
    title: 'Identidad Visual & Merch para Festival Musical',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    client: 'Echo Fest',
    year: '2025',
    description: 'Sistema gráfico completo, tipografías personalizadas y paleta retro-futurista.'
  },
  {
    id: 'des-2',
    title: 'Miniaturas de Alto CTR para Canal de YouTube',
    category: 'Thumbnail',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'landscape',
    client: 'Creator Hub',
    year: '2025',
    description: 'Composición fotográfica, recorte y tratamiento de iluminación para maximizar el click-through-rate.'
  },
  {
    id: 'des-3',
    title: 'Cartel Tipográfico & Editorial Suave',
    category: 'Poster',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    client: 'Wayo Works',
    year: '2024',
    description: 'Exploración de contrastes cromáticos y diagramación brutalista limpia.'
  },
  {
    id: 'des-4',
    title: 'Kit de Redes Sociales: Carrusel Educativo & Feed',
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    client: 'Fintech App',
    year: '2024',
    description: 'Plantillas modulares para Instagram con iconografía y micro-animaciones.'
  },
  {
    id: 'des-5',
    title: 'Cover Art para Single Musical: Synth & Nostalgia',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    client: 'Midnight Tape',
    year: '2024',
    description: 'Dirección de arte y fotomontaje digital para lanzamiento en Spotify y Apple Music.'
  },
  {
    id: 'des-6',
    title: 'Diseño Editorial & Lookbook de Moda',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    client: 'Sartorial Mag',
    year: '2024',
    description: 'Maquetación de revista impresa y digital con fotografía documental.'
  }
];

export const photosData: PhotoProject[] = [
  {
    id: 'pho-1',
    title: 'Retrato de Estudio con Luces de Neón & Sombras',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    location: 'Estudio San Salvador',
    gear: 'Sony A7IV + 85mm f/1.4'
  },
  {
    id: 'pho-2',
    title: 'Fotografía Callejera & Arquitectura Brutalista',
    category: 'Street',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    location: 'Centro Histórico',
    gear: 'Sony A7IV + 35mm f/1.8'
  },
  {
    id: 'pho-3',
    title: 'Sesión Editorial en Locación Costera',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    location: 'El Zonte',
    gear: 'Sony A7IV + 50mm f/1.2'
  },
  {
    id: 'pho-4',
    title: 'Fotografía de Producto: Relojes & Accesorios',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    location: 'Estudio Wayo',
    gear: 'Sony A7IV + 90mm Macro f/2.8'
  },
  {
    id: 'pho-5',
    title: 'Concierto en Directo: Emoción & Destellos',
    category: 'Event',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    location: 'Anfiteatro',
    gear: 'Sony A7IV + 70-200mm f/2.8'
  },
  {
    id: 'pho-6',
    title: 'Geometría Urbana al Atardecer',
    category: 'Street',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    location: 'Distrito Financiero',
    gear: 'Sony A7IV + 24-70mm f/2.8'
  }
];
