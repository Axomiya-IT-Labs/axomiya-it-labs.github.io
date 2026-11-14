export type SocialLinks = { github: string; linkedin: string; twitter: string };
export type TeamMember = { name: string; role: string; bio: string; image: string; social: SocialLinks };
export const teamData: { leadership: TeamMember[]; developers: unknown[]; designers: unknown[]; advisors: unknown[] } = {
  leadership: [{ name: 'Rakibul Islam', role: 'Creator | Open-Source Advocate', bio: 'Building at the intersection of GenAI and community. Making technology accessible in Assamese through open data systems and smart AI workflows.', image: '/assets/images/team/leads/rakibul.jpg', social: { github: 'https://github.com/axomiyaindie', linkedin: 'https://www.linkedin.com/in/axomiyaindie', twitter: 'https://x.com/axomiyaindie' } }],
  developers: [], designers: [], advisors: [],
};
