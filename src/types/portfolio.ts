export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tags: string[];
  category: 'AI & ML' | 'Healthcare' | 'Web & IoT' | 'Full Stack' | 'Research';
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  metrics?: { label: string; value: string };
  highlights: string[];
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level: number; tag: string }[];
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  description: string;
}

export interface Publication {
  title: string;
  journalYear: string;
}
