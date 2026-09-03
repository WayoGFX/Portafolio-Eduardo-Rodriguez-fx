
import { DrawingData } from './services/api';

export type Drawing = DrawingData;

export type View = 'portfolio' | 'draw' | 'gallery' | 'admin-login' | 'live';

export type PortfolioTab = 'video' | 'design' | 'photo';

export interface Position {
  x: number;
  y: number;
}

export interface AnimalState extends DrawingData {
  currentPos: Position;
  scale: number;
  speed: number;
  targetPos: Position;
  isMoving: boolean;
  facingLeft: boolean;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  instagram: string;
  instagramUrl: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  behance?: string;
  behanceUrl?: string;
  email: string;
  location?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  shortCode: string;
  bgColor?: string;
  textColor?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  period: string;
  roles: string[];
  description?: string;
  featured?: boolean;
}

export interface VideoProject {
  id: string;
  title: string;
  category: string;
  type: 'vertical' | 'horizontal';
  thumbnailUrl: string;
  videoUrl?: string;
  embedUrl?: string;
  externalUrl?: string;
  client?: string;
  year?: string;
  role?: string;
  description?: string;
}

export interface DesignProject {
  id: string;
  title: string;
  category: 'Branding & UI' | 'Social Media' | 'Flyers & Posters' | 'Imprenta & Editorial';
  imageUrl: string; // Portada principal
  images?: string[]; // Varias imágenes del proyecto
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  client?: string;
  year?: string;
  description?: string;
  tools?: string[];
}

export interface PhotoProject {
  id: string;
  title: string;
  category: 'Social Events' | 'Portrait & Fashion' | 'Architecture & Corporate' | 'Lighting & Flash';
  imageUrl: string;
  images?: string[];
  year?: string;
  location?: string;
  gear?: string;
  description?: string;
}

