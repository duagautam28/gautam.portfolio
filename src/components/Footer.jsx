import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    href: "https://github.com/duagautam28",
    icon: <Github className="h-6 w-6" />, 
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/gautam-dua-9b78382a8/",
    icon: <Linkedin className="h-6 w-6" />, 
    label: "LinkedIn"
  },
  {
    href: "duagautam2004@gmail.com",
    icon: <Mail className="h-6 w-6" />,
    label: "Email"
  }
];

const Footer = () => {
return (
    <footer className="bg-transparent text-white py-6 mt-8">
        <div className="container mx-auto text-center">
            <p className="text-lg rounded-lg">
                &copy; {new Date().getFullYear()} Gautam Dua. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
                {socialLinks.map((link) => {
                    const isEmail = link.label === "Email";
                    const href = isEmail
                        ? `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(link.href)}`
                        : link.href;
                    return (
                        <a
                            key={link.label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 dark:bg-gray-700 flex items-center justify-center hover:bg-white/20 transition"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    );
                })}
            </div>
            <div className="flex justify-center mt-4">
                <ul className="flex space-x-8 text-lg">
                    <li>
                        <a href="#hero" className="hover:text-purple-400 transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-purple-400 transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#work" className="hover:text-purple-400 transition">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#project" className="hover:text-purple-400 transition">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)
}

export default Footer
