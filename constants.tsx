import { Building2, Droplets, BookOpen, BedDouble, Users, Globe, Briefcase, Award, Heart, ShieldCheck } from 'lucide-react';
import { NavItem, Sector, Leader, Stat, ManagementDepartment } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about', action: 'home' },
  { label: 'Sectors', href: '#sectors', action: 'home' },
  { label: 'Leadership', href: '#leadership', action: 'home' },
  { label: 'Governance', href: '#governance', action: 'governance' },
  { label: 'Contact', href: '#contact', action: 'home' },
];

export const SECTORS: Sector[] = [
  {
    title: 'Real Estate',
    description: 'The Group’s interest in Real Estate sector is paramount since historically, it has been the nucleus of the group and its springboard to other sectors.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    icon: Building2,
    logos: ['/assets/logos/realestate.svg'],
    link: 'https://www.aralsane.com/sectors/real-estate/'
  },
  {
    title: 'Water & Beverages',
    description: 'The water & beverages sector currently consists of bottled water production facilities in Kuwait and Bahrain and Saudi Arabia (under construction). All facilities are equipped with advanced machinery and supported by a proven supply chain operation ensuring positive return with sustained growth in revenue and profits.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1888&auto=format&fit=crop',
    icon: Droplets,
    logos: [
      '/assets/logos/bottling_tech.svg',
      '/assets/logos/alsane_softdrinks.svg',
      '/assets/logos/alazziz.svg',
      '/assets/logos/ain.svg'
    ],
    link: 'https://www.aralsane.com/sectors/industries-n/'
  },
  {
    title: 'Education',
    description: 'The Group recognizes and values the essential role education plays in the development and the prosperity of the region. The potential growth in education is substantial and the Group is poised in its continual effort to expand, grow and diversify its investment in the sector.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop',
    icon: BookOpen,
    logos: ['/assets/logos/educational.svg'],
    link: 'https://www.aralsane.com/sectors/education/'
  },
  {
    title: 'Hospitality',
    description: 'The Group owns the Regency Hotel & Hospital Co. specialized in delivering premium products and services in the hospitality sector. The company owns The Regency Hotel and offers catering and managing food and beverage services for businesses and government institutions.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    icon: BedDouble,
    logos: ['/assets/logos/regency.svg'],
    link: 'https://www.aralsane.com/sectors/hospitality/'
  },
];

export const STATS: Stat[] = [
  { value: 'Since 1948', label: 'Legacy of trust and excellence' },
  { value: '1,500+', label: 'Employees' },
  { value: '4 Core Sectors', label: 'Education, Water & Beverages, Hospitality, Real Estate' },
  { value: '70+ Years', label: 'Family business heritage across the GCC' },
];

export const SHAREHOLDERS: Leader[] = [
  { name: 'Mr. Jameel Abdul Razzaq Al-Sane', role: 'Chairman & Group CEO' },
  { name: 'Ms. Shurouq Abdul Razzaq Al-Sane', role: 'Vice Chairperson' },
  { name: 'Mrs. Seham Abdul Razzaq Al-Sane', role: 'Board Member' },
  { name: 'Mrs. Ibtisam Abdul Razzaq Al-Sane', role: 'Board Member' },
  { name: 'Mrs. Nabila Abdul Razzaq Al-Sane', role: 'Board Member' },
  { name: 'Abdul Razzaq Abdul Hameed Al-Sane Charity', role: 'Shareholder' },
];

export const ADVISORY_BOARD_MEMBERS: Leader[] = [
  { name: 'Mahmoud A. Al-Nouri', role: 'Chairman', image: '/assets/leadership/m_noori.jpg' },
  { name: 'Timothy Roan', role: 'Vice Chairman', image: '/assets/leadership/timoty.jpg' },
  { name: 'Jameel A.R. Al-Sane', role: 'Member', image: '/assets/leadership/jameel.jpg' },
];

export const MANAGEMENT_TEAMS: ManagementDepartment[] = [
  {
    department: 'GROUP',
    members: [
      { name: 'Mr. Jameel Abdul Razzaq Al-Sane', role: 'Chairman & Group CEO' },
      { name: 'Ms. Shorouk Abdul Razzaq Al-Sane', role: 'Vice Chairperson' },
      { name: 'Mr. Muhanned Nimer', role: 'Group Chief Operating Officer' },
    ]
  },
  {
    department: 'Transformation',
    members: [
      { name: 'Mr. Mohammed Siraj', role: 'Senior Director – Transformation' }
    ]
  },
  {
    department: 'IT',
    members: [
      { name: 'Mr. Rabee Al Maki', role: 'Group IT Director' }
    ]
  },
  {
    department: 'LEGAL SERVICES',
    members: [
      { name: 'Mr. Wael F. Eid', role: 'Group Legal Department Manager' }
    ]
  },
  {
    department: 'WATER & BEVERAGES (FMCG)',
    members: [
      { name: 'Mr. Ali Al Najdi', role: 'Head of FMCG' },
      { name: 'Dr. Afif Fares', role: 'Senior Commercial Director at FMCG' }
    ]
  },
  {
    department: 'HOSPITALITY',
    members: [
      { name: 'Mr. Aurelio Giraudo', role: 'General Manager' }
    ]
  },
  {
    department: 'EDUCATION',
    members: [
      { name: 'Mrs. Nabila Abdul Razzaq Al-Sane', role: 'CEO' },
      { name: 'Mr. Majeb Al-Ajmi', role: 'Director of Operations' }
    ]
  },
  {
    department: 'REAL ESTATE',
    members: [
      { name: 'Mr. Saad Al Balool', role: 'Government relations and Real Estate Manager' }
    ]
  }
];

export const GOVERNANCE_CONTENT = {
  summary: {
    title: "Corporate Governance",
    subtitle: "Integrity Through Commitment to Our Heritage and Culture",
    description: "Stemming from the successful implementation of Abdul Razzaq Abdul Hameed Al-Sane family governance framework, the Group has been committed to Corporate Governance practices within all its operating entities to ensure the integrity, transparency, and accountability.",
    icon: ShieldCheck
  },
  full: {
    title: "CORPORATE GOVERNANCE",
    p1: "Stemming from the successful implementation of Abdul Razzaq Abdul Hameed Al-Sane family governance framework, the Group has been committed to Corporate Governance practices within all its operating entities to ensure the integrity, transparency and accountability of the group business operations and to constructively regulate the relationships between management, family share owners, board of directors and third-party financial partners.",
    p2: "By promoting the use of accountability, transparency and strategic alignment in day-to-day operations across all its subsidiaries, the Group maintains a culture of strategic planning, performance measurement, efficiency and openness. Internal control mechanisms are adopted to facilitate the execution of the group business strategies and to ensure the strategic alignment with all subsidiaries.",
    listIntro: "The Group’s adherence to Corporate Governance and its alignment with the Group family governance nurtures an unbiased and healthy corporate culture conducive to:",
    list: [
      "Efficiency and responsiveness",
      "Transparency and Inclusiveness",
      "Participatory and consensus-oriented decision making",
      "Respect and ethical behavior",
      "Constructive engagement with communities and the environment"
    ]
  },
  csr: {
    title: "Corporate Social Responsibility",
    subtitle: "The Charity",
    description: "Social responsibility is a core value for the owners of the Group. The Group practices its social responsibility through Abdul Razzaq A.H. Al-Sane Charity.",
    icon: Heart
  },
  csrFull: {
    title: "THE CHARITY",
    p1: "Social responsibility is a core value for the owners of the Group. The Group practices its social responsibility through Abdul Razzaq A.H. Al-Sane Charity. Established in 2011, the Charity aims to provide scholarships for outstanding students from Kuwait and other Arab and Islamic countries.",
    p2: "It also supports researchers and scholars in postgraduate studies and provides incentive grants and discretionary awards to researchers and those excelling in various fields of religious, scientific, literary, social, and artistic disciplines. In addition to these core objectives, the Charity provides financial support to those in need."
  }
};

export const CONTACT_INFO = {
  address: "P.O. Box 745 Safat 13008 Kuwait",
  phone: "+965 2572 8000",
  fax: "+965 2572 3848",
  email: "info@aralsane.com"
};
