import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tools: [
      { name: "Transformer Calculator", href: "/" },
      { name: "Inductor Calculator", href: "/inductor" },
      { name: "Voltage Calculator", href: "/voltage" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Products", href: "/products" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/policy" },
      { name: "Terms of Service", href: "/policy#terms" },
      { name: "Disclaimer", href: "/policy#disclaimer" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-12 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Transformer Voltage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Your trusted source for electrical calculations and tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <AiOutlineFacebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                <AiOutlineLinkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                <AiOutlineInstagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="X (formerly Twitter)" className="hover:text-gray-300">
                <AiOutlineX className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-gray-300">
                <AiOutlineGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {currentYear} Transformer Voltage. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/sitemap.xml" className="text-sm hover:text-gray-300">
                Sitemap
              </Link>
              <Link href="/robots.txt" className="text-sm hover:text-gray-300">
                Robots.txt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
