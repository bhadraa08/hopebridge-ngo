export type ScreenID = 'home' | 'volunteer' | 'causes' | 'contact' | 'donate' | 'blog';

export interface Cause {
  id: string;
  title: string;
  description: string;
  category: 'education' | 'healthcare' | 'women-empowerment' | 'environment';
  raisedAmount: number;
  targetAmount: number;
  raisedPercent: number;
  image: string;
  isUrgent?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: 'education' | 'healthcare' | 'women-empowerment' | 'environment';
  date: string;
  image: string;
}

export interface VolunteerForm {
  name: string;
  email: string;
  phone: string;
  role: string;
  skills: string;
  availability: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface DonationForm {
  type: 'one-time' | 'monthly';
  amount: number;
  customAmount?: string;
}
