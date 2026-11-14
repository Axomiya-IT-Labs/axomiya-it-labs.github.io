// Separate retrieval bots from training crawlers: allow citation-oriented search while opting out of model training.
const policy = `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Disallow: /_actions/

Sitemap: https://axomiya-it-labs.github.io/sitemap-index.xml
`;
export function GET() { return new Response(policy, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }); }
