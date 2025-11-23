import logo from "@/assets/logo.jpg";

const Footer = () => {
  const sections = [
    {
      title: "Research Areas",
      links: ["Gene Therapy", "Drug Discovery", "Diagnostics", "Neuroscience"],
    },
    {
      title: "Company",
      links: ["About Us", "Leadership", "Partners", "Investors"],
    },
    {
      title: "Connect",
      links: ["Contact Us", "Newsletter", "Events", "Blog"],
    },
  ];

  return (
    <footer className="ocean-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and tagline */}
          <div>
            <img src={logo} alt="Kairova Biotech" className="h-20 mb-4" />
            <p className="text-gray-300 leading-relaxed">
              Advancing healthcare through innovative biotechnology research and cutting-edge solutions.
            </p>
          </div>

          {/* Links sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4 text-primary">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Kairova Biotech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
