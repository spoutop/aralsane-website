import { LucideIcon } from 'lucide-react';

export type ViewState = 'home' | 'governance' | 'charity';

export interface NavItem {
  label: string;
  href: string;
  action?: ViewState;
}

export interface Sector {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  logos?: string[];
  link?: string;
}

export interface Leader {
  name: string;
  role: string;
  image?: string;
  type?: string;
}

export interface ManagementDepartment {
  department: string;
  members: Leader[];
}

export interface Stat {
  value: string;
  label: string;
}
