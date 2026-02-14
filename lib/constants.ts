export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || "Piyush Awning";
export const COMPANY_EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "sales@piyushawning.com";
export const COMPANY_ADDRESS = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "Mundka, Delhi - 110041, India";
export const COMPANY_LOCATION = process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Mundka, Delhi";

// Integrations
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";
export const GOOGLE_SHEETS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL || "";

// Contact Info
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919818762675";
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 9818762675";

// Helper function to create WhatsApp link with pre-filled message
export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }
  // Default message if none provided
  const defaultMessage = `Hi ${COMPANY_NAME}! I'm interested in your awnings, gazebos, and pergolas. Could you please provide more information?`;
  return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
}

// Default WhatsApp link with pre-filled message
export const WHATSAPP_LINK = getWhatsAppLink();

export const MAP_EMBED_URL = process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55990.04505315488!2d76.992289!3d28.685859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fe2c488730b%3A0x6bba41cfc4b7858c!2sMundka%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

// Header nav for common navigation
export const HEADER_NAV_LINKS = [
  { href: "/products", label: "Collections" },
  { href: "/projects", label: "Projects" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/about", label: "Heritage" },
] as const;
