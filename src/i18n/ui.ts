export const languages = {
  en: 'English',
  as: 'অসমীয়া',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.research': 'Research',
    'nav.announcements': 'Announcements',
    'nav.about': 'About',
    'nav.contribute': 'Contribute',
    'nav.team': 'Team',
    'nav.community': 'Community',
    
    'search.placeholder': 'Search...',
    'search.no_results': 'No results found.',
    'search.loading': 'Searching...',
    
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    'theme.toggle': 'Toggle theme',
    
    'lang.toggle': 'Switch language',
    
    'blog.published': 'Published on',
    'blog.updated': 'Last updated on',
    'blog.read_more': 'Read more',
    'blog.min_read': 'min read',
    'blog.empty': 'No posts found.',
    
    'project.status': 'Status',
    'project.stack': 'Tech Stack',
    'project.repo': 'Repository',
    'project.demo': 'Live Demo',
    
    'share.title': 'Share this',
    'share.copy': 'Copy Link',
    'share.copied': 'Copied!',
    'share.native': 'Share',
    
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built in Assam.',
    
    '404.title': 'Page not found',
    '404.desc': 'The page you are looking for does not exist or has been moved.',
    '404.home': 'Go back home',
  },
  as: {
    'nav.home': 'মুখ্য পৃষ্ঠা',
    'nav.blog': 'ব্লগ',
    'nav.projects': 'প্ৰকল্প',
    'nav.research': 'গৱেষণা',
    'nav.announcements': 'ঘোষণা',
    'nav.about': 'আমাৰ বিষয়ে',
    'nav.contribute': 'অৱদান আগবঢ়াওক',
    'nav.team': 'দল',
    'nav.community': 'সম্প্ৰদায়',
    
    'search.placeholder': 'সন্ধান কৰক...',
    'search.no_results': 'কোনো ফলাফল পোৱা নগ’ল।',
    'search.loading': 'সন্ধান কৰি আছে...',
    
    'theme.light': 'উজ্জ্বল',
    'theme.dark': 'গাঢ়',
    'theme.system': 'ছিষ্টেম',
    'theme.toggle': 'থীম সলনি কৰক',
    
    'lang.toggle': 'ভাষা সলনি কৰক',
    
    'blog.published': 'প্ৰকাশিত',
    'blog.updated': 'শেষ আপডেট',
    'blog.read_more': 'আৰু পঢ়ক',
    'blog.min_read': 'মিনিট পঢ়া',
    'blog.empty': 'কোনো পোষ্ট পোৱা নগ’ল।',
    
    'project.status': 'স্থিতি',
    'project.stack': 'প্ৰযুক্তি',
    'project.repo': 'ৰিপজিটৰি',
    'project.demo': 'লাইভ ডেমো',
    
    'share.title': 'শেয়াৰ কৰক',
    'share.copy': 'লিংক কপি কৰক',
    'share.copied': 'কপি হ’ল!',
    'share.native': 'শেয়াৰ',
    
    'footer.rights': 'সকলো অধিকাৰ সংৰক্ষিত।',
    'footer.built': 'অসমত নিৰ্মিত।',
    
    '404.title': 'পৃষ্ঠাটো পোৱা নগ’ল',
    '404.desc': 'আপুনি বিচৰা পৃষ্ঠাটোৰ অস্তিত্ব নাই বা স্থানান্তৰিত কৰা হৈছে।',
    '404.home': 'মুখ্য পৃষ্ঠালৈ উভতি যাওক',
  }
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}