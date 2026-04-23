export const siteConfig = {
  name: "Vitora HMIS",
  description: "The offline-first hospital management system designed for Kenya's healthcare infrastructure. SHA-compliant. AI-powered. Always available.",
  url: "https://vitora.nexora.africa",
  ogImage: "https://vitora.nexora.africa/og-image.png",
  links: {
    github: "https://github.com/nexora-africa-ltd",
    twitter: "https://twitter.com/nexoraafrica",
  },
};

export const navigation = {
  main: [
    { name: "Features", href: "/features" },
    {
      name: "Solutions",
      href: "/solutions/clinics",
      children: [
        { name: "For Clinics", href: "/solutions/clinics" },
        { name: "For Hospitals", href: "/solutions/hospitals" },
        { name: "For Specialized Practices", href: "/solutions/specialized" },
      ],
    },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
    { name: "AI", href: "/ai" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Integrations", href: "/integrations" },
        { name: "Pricing", href: "/pricing" },
        { name: "TibaBot AI", href: "/ai" },
        { name: "Security", href: "/security" },
        { name: "Demo", href: "/demo" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "For Clinics", href: "/solutions/clinics" },
        { name: "For Hospitals", href: "/solutions/hospitals" },
        { name: "Specialized Practices", href: "/solutions/specialized" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Developers", href: "/developers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/legal/privacy" },
        { name: "Terms of Service", href: "/legal/terms" },
      ],
    },
  ],
};
