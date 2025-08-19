import { Facebook , Phone , Instagram } from 'lucide-react';
import { motion } from "motion/react";
function Footer() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-black text-white py-8">
  <div className="container mx-auto flex flex-col items-center gap-4">
    {/* Social Links */}
    <div className="flex space-x-6">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-[#1877F2] transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_#1877F2]"
  >
    <Facebook size={30} />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-[#E4405F] transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_#E4405F]"
  >
    <Instagram size={30} />
  </a>

  <a
    href="tel:+1234567890"
    aria-label="Phone"
    className="text-[#25D366] transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_#25D366]"
  >
    <Phone size={30} />
  </a>
</div>


    {/* Copyright */}
    <p className="text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Burger Smash. All rights reserved.
    </p>
  </div>
</motion.div>

  );
}

export default Footer;
