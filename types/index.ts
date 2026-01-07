// Hero Section Types
export interface HeroData {
    title: string;
    subtitle: string;
    typingText: string;
    description: string;
    resumeLink: string;
    socialLinks: {
        github: string;
        linkedin: string;
        email: string;
    };
}

// About Section Types
export interface AboutHighlight {
    icon: string;
    title: string;
    description: string;
}

export interface AboutData {
    title: string;
    description: string;
    bio: string[];
    highlights: AboutHighlight[];
}

// Skills Section Types
export interface SkillCategory {
    title: string;
    icon: string;
    color: string;
    skills: string[];
}

// Projects Section Types
export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveDemo: string;
    sourceCode: string;
    featured: boolean;
    date: string;
}

// Certificates Section Types
export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    imageUrl: string;
    credentialUrl: string;
    category: string;
}

// Contact Section Types
export interface SocialLink {
    name: string;
    url: string;
}

export interface ContactData {
    email: string;
    phone: string;
    location: string;
    socialLinks: SocialLink[];
}

// API Response Types
export interface ApiResponse<T = unknown> {
    success?: boolean;
    error?: string;
    message?: string;
    data?: T;
}

// Form Types
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
