export type NavigationItem = { name: string; link: string; dropdown?: readonly { name: string; link: string }[] };
export const navigationData: readonly NavigationItem[] = [
	{ name: 'Projects', link: '/projects/' }, { name: 'Research', link: '/research/' }, { name: 'Announcements', link: '/announcements/' },
	{ name: 'About', link: '/about/', dropdown: [{ name: 'About Us', link: '/about/' }, { name: 'Team', link: '/team/' }, { name: 'Community', link: '/community/' }] },
];
