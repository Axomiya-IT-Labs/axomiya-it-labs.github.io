import { defaultLang, type Lang } from './ui';

/**
 * Computes the equivalent path in the other language.
 * e.g. /blog/welcome/ -> /as/blog/welcome/
 * e.g. /as/about/ -> /about/
 */
export function swapLangPath(currentPath: string, targetLang: Lang): string {
  // Strip trailing slash for easier manipulation
  const path = currentPath.endsWith('/') && currentPath.length > 1
    ? currentPath.slice(0, -1)
    : currentPath;

  const isCurrentlyAs = path === '/as' || path.startsWith('/as/');

  if (targetLang === 'as') {
    if (isCurrentlyAs) return currentPath;
    // Convert /blog to /as/blog
    return path === '/' ? '/as/' : `/as${path}/`;
  } else {
    // Target is English (default)
    if (!isCurrentlyAs) return currentPath;
    // Convert /as/blog to /blog
    const stripped = path.replace(/^\/as/, '');
    return stripped === '' ? '/' : `${stripped}/`;
  }
}

/**
 * Ensures a path is prefixed correctly for the target language.
 * Good for building links where you only know the base path.
 */
export function localizePath(path: string, lang: Lang): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (lang === defaultLang) return cleanPath;
  
  // Don't double prefix if already prefixed
  if (cleanPath.startsWith(`/${lang}/`) || cleanPath === `/${lang}`) {
    return cleanPath;
  }
  
  return cleanPath === '/' ? `/${lang}/` : `/${lang}${cleanPath}`;
}