export type TargetLang = 'en' | 'as';

/** Toggle a localized pathname while retaining its content path and trailing slash. */
export function swapLangPath(currentPath: string, targetLang: TargetLang): string {
	const pathname = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
	const unprefixed = pathname === '/as' ? '/' : pathname.startsWith('/as/') ? pathname.slice(3) : pathname;
	if (targetLang === 'en') return unprefixed || '/';
	const suffix = unprefixed === '/' ? '' : unprefixed;
	return suffix ? `/as${suffix}` : '/as/';
}

export function localePrefix(lang: TargetLang): string { return lang === 'as' ? '/as' : ''; }
export function localizedPath(lang: TargetLang, pathname: string): string {
	const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return `${localePrefix(lang)}${path}` || '/';
}
