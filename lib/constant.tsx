import { InfoIcon, MapPin } from "lucide-react";
import { THeroList, TNavMenus, TOurTeam, TServices } from "./types";

export const NAV_MENUS: TNavMenus[] = [
  {
    id: 1,
    name: "About",
    link: "#about",
  },
  {
    id: 2,
    name: "Services",
    link: "#services",
  },
  {
    id: 3,
    name: "Our Team",
    link: "#team",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
  {
    id: 5,
    name: "Request Callback",
    link: "#callback",
  },
];

export const HERO_LIST: THeroList[] = [
  {
    id: 1,
    icon: <InfoIcon stroke="#000000" size={16} />,
    title: "Care 32 Dental",
    description:
      "Our experienced professionals use the latest tools to deliver prevision care",
  },
  {
    id: 2,
    icon: <MapPin stroke="#000000" size={16} />,
    title: "Find Us",
    description: "Duwakot Mode, Bhaktapur",
  },
];

export const ABOUT_CAROUSEL_IMAGES: string[] = [
  "/images/backgrounds/background-2.jpg",
  "/images/backgrounds/background-6.jpg",
  "/images/backgrounds/background-5.jpg",
  "/images/backgrounds/background-4.jpg",
  "/images/backgrounds/background-8.jpg",
];

export const ABOUT_CONTENT = {
  clinic_description:
    "At Care 32 Dental, we are dedicated to providing gentle, high-quality oral care for patients of all ages. Our team of experienced professionals uses the latest technology and techniques to ensure healthy smiles — from routine check-ups and cleanings to advanced treatments. We prioritize comfort, safety, and personalized care in a welcoming environment.",

  address: "Duwakot Mode, Bhaktapur",

  years_of_experience: "3+ years of trusted dental care",

  highlights: [
    "Modern equipment & digital diagnostics",
    "Pain-free and patient-friendly procedures",
    "Strict sterilization & safety protocols",
    "Family-friendly environment",
  ],

  mission:
    "To make quality dental care accessible, comfortable, and stress-free for every patient.",

  vision:
    "To become the most trusted dental clinic in the Bhaktapur area through compassionate care and advanced technology.",

  timings: "Tue – Sun: 9:00 AM – 7:00 PM",

  phone: "+977-9813510103",

  cta_text: "Request a callback",
};

export const SERVICES: TServices[] = [
  {
    id: 1,
    name: "Cosmetic Dentistry",
    description:
      "Aesthetic treatments focused on improving the color, shape, alignment, and overall harmony of your smile while maintaining optimal oral function and structural balance.",
    process: [
      "Smile assessment and digital planning",
      "Tooth reshaping, veneers, or bonding",
      "Shade and symmetry correction",
      "Final polishing and bite evaluation",
    ],
    duration: "1–3 visits",
    recovery: "Minimal to none",
    recommendedFor: ["Discolored teeth", "Chipped teeth", "Smile makeover"],
  },
  {
    id: 2,
    name: "Implants and Periodontal Surgery",
    description:
      "A permanent and highly stable solution for replacing missing teeth and treating advanced gum disease, restoring both function and bone support.",
    process: [
      "3D scan and implant site preparation",
      "Titanium implant placement in jawbone",
      "Healing and osseointegration phase",
      "Crown placement and gum contouring",
    ],
    duration: "3–6 months (including healing)",
    recovery: "Mild swelling for a few days",
    recommendedFor: ["Missing teeth", "Loose dentures", "Bone loss"],
  },
  {
    id: 3,
    name: "Braces and Aligners",
    description:
      "Orthodontic treatment that gradually moves misaligned teeth into ideal positions using braces or clear aligners to improve bite, function, and facial aesthetics.",
    process: [
      "Orthodontic assessment and X-rays",
      "Custom braces or aligner fabrication",
      "Periodic adjustments or aligner changes",
      "Retention phase to maintain results",
    ],
    duration: "6–24 months",
    recovery: "Mild soreness after adjustments",
    recommendedFor: ["Crowded teeth", "Overbite", "Spacing issues"],
  },
  {
    id: 4,
    name: "Teeth Whitening",
    description:
      "Professional bleaching procedure that removes deep stains caused by food, coffee, smoking, and aging to restore a brighter and more youthful smile.",
    process: [
      "Shade analysis and gum protection",
      "Application of whitening gel",
      "LED or laser activation",
      "Final polish and post-care guidance",
    ],
    duration: "45–60 minutes",
    recovery: "No downtime",
    recommendedFor: ["Stained teeth", "Yellow teeth", "Quick smile boost"],
  },
  {
    id: 5,
    name: "Extractions",
    description:
      "Safe removal of severely damaged or impacted teeth to eliminate infection, relieve pain, and protect surrounding oral structures.",
    process: [
      "Clinical evaluation and X-ray",
      "Local anesthesia administration",
      "Atraumatic tooth removal",
      "Post-extraction care and medication",
    ],
    duration: "20–40 minutes",
    recovery: "3–7 days",
    recommendedFor: ["Impacted teeth", "Severe decay", "Orthodontic space"],
  },
  {
    id: 6,
    name: "Root Canal Treatment",
    description:
      "A tooth-saving procedure that removes infected pulp, disinfects the canal, and seals the tooth to prevent further infection while preserving natural structure.",
    process: [
      "Pulp removal and canal cleaning",
      "Disinfection and shaping of canals",
      "Biocompatible filling placement",
      "Protective crown placement",
    ],
    duration: "1–2 visits",
    recovery: "Mild sensitivity for 1–2 days",
    recommendedFor: ["Tooth pain", "Deep cavities", "Infected pulp"],
  },
  {
    id: 7,
    name: "Dental Crowns and Bridges",
    description:
      "Custom-made restorations used to strengthen damaged teeth or replace missing teeth by anchoring artificial teeth to adjacent natural teeth or implants.",
    process: [
      "Tooth preparation and impression",
      "Temporary crown placement",
      "Lab fabrication of prosthesis",
      "Final fitting and cementation",
    ],
    duration: "2 visits",
    recovery: "Minimal",
    recommendedFor: ["Broken teeth", "Large fillings", "Missing teeth"],
  },
  {
    id: 8,
    name: "Scaling and Polishing",
    description:
      "Preventive cleaning procedure that removes plaque, tartar, and surface stains to maintain healthy gums and prevent periodontal disease.",
    process: [
      "Ultrasonic scaling to remove tartar",
      "Subgingival cleaning",
      "Tooth polishing for smooth surface",
      "Oral hygiene instruction",
    ],
    duration: "30–45 minutes",
    recovery: "No downtime",
    recommendedFor: ["Bleeding gums", "Bad breath", "Routine maintenance"],
  },
];

export const OUR_TEAM: TOurTeam[] = [
  {
    id: 1,
    name: "Anamol Dumaru",
    position: "doctor",
    image: "/images/team/anamol-dumaru.jpg",
    speciality: "General & Cosmetic Dentistry",
    qualification: "BDS",
    experienceYears: 4,
    bio: "Dr. Dumaru focuses on preventive and cosmetic dental care, helping patients achieve healthy and confident smiles through modern and minimally invasive treatments.",
  },
  {
    id: 2,
    name: "Sabin Gwachha",
    position: "doctor",
    image: "/images/team/sabin-gwachha.jpg",
    speciality: "Restorative Dentistry",
    qualification: "BDS",
    experienceYears: 4,
    bio: "Dr. Gwachha specializes in restorative treatments including fillings, crowns, and bridges. He is known for his patient-friendly approach and attention to detail.",
  },
  {
    id: 3,
    name: "Nabin Shrestha",
    position: "doctor",
    image: "/images/team/nabin-shrestha.jpg",
    speciality: "Orthodontics",
    qualification: "BDS, MDS (Orthodontics)",
    experienceYears: 8,
    bio: "Dr. Shrestha helps patients improve their smiles through braces and modern orthodontic treatments while ensuring comfort and long-term dental health.",
  },
  {
    id: 4,
    name: "Ramesh Karki",
    position: "doctor",
    image: "/images/team/ramesh-karki.jpg",
    speciality: "Oral & Dental Surgery",
    qualification: "BDS, MDS (Oral Surgery)",
    experienceYears: 10,
    bio: "With extensive experience in oral surgery and complex extractions, Dr. Karki ensures safe and comfortable procedures using modern techniques.",
  },
  {
    id: 5,
    name: "Rakshya Manandhar",
    position: "assistant",
    image: "/images/team/rakshya-manandhar.jpg",
    qualification: "Dental Assistant",
    experienceYears: 4,
    bio: "Rakshya assists doctors during procedures and ensures patients feel comfortable throughout their visit while maintaining strict hygiene protocols.",
  },
  {
    id: 6,
    name: "Sunena Lageju",
    position: "assistant",
    image: "/images/team/sunena-lageju.jpg",
    qualification: "Dental Assistant",
    experienceYears: 3,
    bio: "Sunena supports clinical procedures and patient care, helping maintain a smooth and friendly experience for every visitor at the clinic.",
  },
];

export const CONTACT_INFORMATION = {
  locationSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2669864098616!2d85.40471887601336!3d27.67814192677808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bf985b50b3b%3A0xfcc3c8c6fe43a75c!2sCare%2032%20Dental%20Clinic!5e0!3m2!1sen!2snp!4v1772954837161!5m2!1sen!2snp",
  locationLink: "https://maps.app.goo.gl/PhArMqF3k7ebXddA7",
  address: "Duwakot Mode, Bhaktapur (Beside Traffic Booth)",
  openingHours: "Tue – Sun: 9:00 AM – 7:00 PM",
  whatsapp: "9865134444",
  contact: ["9865134444", "9813510103"],
  email: "care32-dental@gmail.com",
  socialMediaLinks: [
    {
      id: 1,
      name: "Facebook",
      link: "facebook.com/profile.php?id=61555262009378",
      imageSrc: "/images/social-media/facebook-icon.svg",
      description: "Clinic updates",
      color: "#1877F2",
    },
    {
      id: 2,
      name: "Instagram",
      link: "instagram.com/_care32_dental/",
      imageSrc: "/images/social-media/instagram-icon.svg",
      description: "See our work",
      color: "#E4405F",
    },
    {
      id: 3,
      name: "TikTok",
      link: "tiktok.com/@care32.dental.cli",
      imageSrc: "/images/social-media/tiktok-icon.svg",
      description: "Dental tips",
      color: "#000000",
    },
  ],
};

export const DOCTOR_TESTIMONIALS: {
  id: number;
  name: string;
  speciality: string;
  image: string;
  quote: string;
}[] = [
  {
    id: 1,
    name: "Dr. Anamol Dumaru",
    speciality: "Orthodontist",
    image: "/images/team/anamol-dumaru.jpg",
    quote:
      "A confident smile can truly change how a person feels about themselves. My goal is to make orthodontic treatments comfortable, effective, and accessible for every patient.",
  },
  {
    id: 2,
    name: "Dr. Nabin Gosain",
    speciality: "Oral & Dental Surgeon",
    image: "/images/team/nabin-shrestha.jpg",
    quote:
      "We focus on precision and patient comfort in every procedure. Modern dental care allows us to perform even complex treatments with minimal discomfort and faster recovery.",
  },
  {
    id: 3,
    name: "Dr. Sabin Gwachha",
    speciality: "General & Cosmetic Dentist",
    image: "/images/team/sabin-gwachha.jpg",
    quote:
      "Preventive care is the foundation of long-term oral health. We aim to educate our patients so they can maintain healthy smiles even outside the clinic.",
  },
];
