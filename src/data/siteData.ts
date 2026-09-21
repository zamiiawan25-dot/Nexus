import { Property, ServiceItem, WhyChooseItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Nexus Estate Services & Builder Pvt Ltd',
  shortName: 'NEXUS',
  tagline: 'Estate Services & Builder',
  category: 'Real Estate / Property Services / Builders',
  phone: '03008553363',
  phoneFormatted: '0300 855 3363',
  phoneInternational: '+923008553363',
  address: 'Office No 3, ME-4, Jinnah Ave, Margalla Enclave DHA Site, Islamabad, 44000, Pakistan',
  shortAddress: 'Jinnah Ave, Margalla Enclave DHA Site, Islamabad',
  rating: 4.9,
  reviewsCount: 57,
  email: 'info@nexusestates.com',
  workingHours: 'Monday – Saturday: 10:00 AM – 7:30 PM',
};

export const STATS_DATA = [
  {
    value: '4.9/5',
    label: 'Customer Rating',
    sublabel: 'Verified client satisfaction score',
    highlight: '★★★★★',
  },
  {
    value: '57+',
    label: 'Customer Reviews',
    sublabel: 'Dedicated client feedback',
    highlight: 'Verified Feedback',
  },
  {
    value: 'Islamabad',
    label: 'Local Expertise',
    sublabel: 'Capital territory market insight',
    highlight: 'Margalla Enclave & Beyond',
  },
  {
    value: 'Premium',
    label: 'Property Services',
    sublabel: 'End-to-end guidance & building',
    highlight: 'Residential & Commercial',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'buying',
    title: 'Property Buying',
    shortDesc: 'Strategic guidance in acquiring prime residential and commercial real estate across key Islamabad sectors.',
    fullDesc: 'We assist buyers through every phase of property acquisition, conducting comparative market valuation, verifying documentation, and negotiating favorable purchase terms.',
    iconName: 'Building2',
    highlights: ['Sector-wise market valuation', 'Due diligence & legal paperwork review', 'Seamless price negotiation support'],
  },
  {
    id: 'selling',
    title: 'Property Selling',
    shortDesc: 'Professional marketing, valuation, and targeted exposure to connect sellers with qualified property investors.',
    fullDesc: 'Maximize the return on your Islamabad property asset through strategic market positioning, structured investor networks, and transparent transaction management.',
    iconName: 'TrendingUp',
    highlights: ['Targeted investor reach', 'Accurate market appraisal', 'Transparent closing procedure'],
  },
  {
    id: 'investment',
    title: 'Property Investment',
    shortDesc: 'Data-informed property investment strategies focused on capital appreciation and long-term rental yields.',
    fullDesc: 'Tailored property portfolio planning designed for individual investors and corporate clients seeking sustainable value creation in Islamabad’s growing corridors.',
    iconName: 'LineChart',
    highlights: ['Growth corridor analysis', 'Risk-calibrated portfolio structuring', 'Rental yield potential assessments'],
  },
  {
    id: 'residential',
    title: 'Residential Properties',
    shortDesc: 'Comprehensive advisory for luxury houses, modern villas, apartment units, and premier residential plots.',
    fullDesc: 'Discover residential living that aligns with your family’s lifestyle, infrastructure standards, and proximity to scenic Islamabad landmarks.',
    iconName: 'Home',
    highlights: ['Villas, houses & luxury residences', 'Prime residential plot identification', 'Community amenities evaluation'],
  },
  {
    id: 'commercial',
    title: 'Commercial Properties',
    shortDesc: 'High-visibility retail outlets, corporate offices, and mixed-use commercial developments for businesses.',
    fullDesc: 'Secure commercial real estate in high-footfall avenues, corporate plazas, and emerging commercial districts tailored for enterprise and rental ROI.',
    iconName: 'Briefcase',
    highlights: ['Corporate office spaces', 'Retail storefronts & commercial plazas', 'Mixed-use development spaces'],
  },
  {
    id: 'builder-services',
    title: 'Builder & Development Services',
    shortDesc: 'Complete development oversight from architectural planning and material sourcing to construction execution.',
    fullDesc: 'Combining engineering rigor, modern architectural design, and quality building practices to construct durable, elegant properties in Islamabad.',
    iconName: 'Hammer',
    highlights: ['Turnkey construction management', 'Structural quality inspection', 'Modern architectural layouts'],
  },
  {
    id: 'consultation',
    title: 'Property Consultation',
    shortDesc: 'One-on-one professional property advisory and market consultation tailored to your specific objectives.',
    fullDesc: 'Meet with our property specialists at our Margalla Enclave DHA Site office or via scheduled consultation to address your real estate goals with clarity.',
    iconName: 'Users',
    highlights: ['Direct one-on-one advisory', 'Market timing & feasibility reviews', 'Unbiased transparent advice'],
  },
];

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Contemporary Luxury Residence',
    category: 'Residential',
    location: 'Islamabad (Margalla Enclave Vicinity)',
    tag: 'Sample Residential Showcase',
    description: 'A concept of modern minimalist architecture featuring double-height glass facades, landscaped courtyard, and refined indoor-outdoor living spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    features: ['Modern Architectural Design', 'High-Ceiling Living Spaces', 'Landscaped Grounds', 'Lush Islamabad Backdrop'],
    specs: {
      type: 'Premium Villa Architecture',
      sector: 'Islamabad Capital Territory',
      consultationStatus: 'Sample Listing — Contact for Details',
    },
  },
  {
    id: 'prop-2',
    title: 'Prime Commercial Avenue Center',
    category: 'Commercial',
    location: 'Islamabad (Jinnah Avenue Corridor)',
    tag: 'Sample Commercial Showcase',
    description: 'Modern commercial space layout engineered for corporate headquarters, premier retail showrooms, and institutional offices with high visibility.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    features: ['High-Footfall Strategic Avenue', 'Underground Parking Facilities', 'Modern Glass Curtain Facade', 'Enterprise Power Infrastructure'],
    specs: {
      type: 'Commercial Plaza Space',
      sector: 'Jinnah Ave Commercial Sector',
      consultationStatus: 'Sample Listing — Contact for Details',
    },
  },
  {
    id: 'prop-3',
    title: 'Modern Scenic Hillside Villa',
    category: 'Residential',
    location: 'Islamabad (Scenic Margalla Enclave)',
    tag: 'Sample Residential Showcase',
    description: 'Designed to capture panoramic views of the Margalla hills, this residence blends natural stone accents, generous terraces, and smart energy-efficient engineering.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: ['Panoramic Scenic Vistas', 'Architectural Natural Stone Work', 'Spacious Private Terraces', 'Secure Gated Community Feel'],
    specs: {
      type: 'Hillside Modern Villa',
      sector: 'Margalla Enclave Sector',
      consultationStatus: 'Sample Listing — Contact for Details',
    },
  },
  {
    id: 'prop-4',
    title: 'Turnkey Builder & Development Site',
    category: 'Builder',
    location: 'Islamabad (DHA Site Zone)',
    tag: 'Sample Builder Showcase',
    description: 'Exemplifying our builder and development capabilities: planned structural layout, high-grade concrete reinforcement, and contemporary interior finishing standards.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80',
    features: ['Quality Structural Framework', 'Pre-Construction Soil Analysis', 'Customizable Floor Layouts', 'Turnkey Project Execution'],
    specs: {
      type: 'Builder & Development Project',
      sector: 'DHA Site Islamabad Zone',
      consultationStatus: 'Sample Listing — Contact for Details',
    },
  },
  {
    id: 'prop-5',
    title: 'Executive Architectural Penthouse Suite',
    category: 'Residential',
    location: 'Islamabad (Central Luxury Zone)',
    tag: 'Sample Residential Showcase',
    description: 'Sophisticated open-concept living with premium marble finishes, floor-to-ceiling thermal glazing, and expansive private terrace entertainment areas.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    features: ['Floor-to-Ceiling Thermal Glazing', 'Luxury Imported Stone Finishes', 'Elevator Access', 'Dedicated Concierge Concept'],
    specs: {
      type: 'Executive Penthouse Concept',
      sector: 'Islamabad City Sector',
      consultationStatus: 'Sample Listing — Contact for Details',
    },
  },
  {
    id: 'prop-6',
    title: 'Corporate Plaza & Retail Showroom',
    category: 'Commercial',
    location: 'Islamabad (Commercial Boulevard)',
    tag: 'Sample Commercial Showcase',
    description: 'Designed for brand flagships and corporate headquarters looking for an iconic presence along Islamabad’s major arterial transit corridors.',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    features: ['Wide Frontage Display', 'High Visibility Commercial Zone', 'Energy-Efficient Lighting Systems', 'Flexible Floorplans'],
    specs: {
      type: 'Corporate Boulevard Complex',
      sector: 'Islamabad Avenue Corridor',
      consultationStatus: 'Sample Listing — Contact for Details',
    },
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'professional-service',
    title: 'Professional Service',
    description: 'Dedicated real estate professionals committed to structured, transparent, and respectful client interactions across every stage.',
    iconName: 'Award',
  },
  {
    id: 'transparent-guidance',
    title: 'Transparent Guidance',
    description: 'Clear documentation reviews, honest pricing assessments, and factual evaluations with zero ambiguity.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'local-market-focus',
    title: 'Local Market Focus',
    description: 'Focused domain knowledge of Islamabad’s sectors, Jinnah Avenue corridors, Margalla Enclave, and surrounding development zones.',
    iconName: 'MapPin',
  },
  {
    id: 'client-centered',
    title: 'Client-Centered Approach',
    description: 'We listen carefully to your individual requirements, lifestyle preferences, and financial parameters before proposing solutions.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'property-opportunities',
    title: 'Property Opportunities',
    description: 'Curated access to residential plots, ready homes, commercial spaces, and builder developments aligned with your timeline.',
    iconName: 'Compass',
  },
  {
    id: 'reliable-communication',
    title: 'Reliable Communication',
    description: 'Consistent, dependable communication by phone, direct office meetings, and timely project status updates.',
    iconName: 'PhoneCall',
  },
];

export const FAQ_DATA = [
  {
    question: 'Where is Nexus Estate Services & Builder located in Islamabad?',
    answer: 'Our office is located at Office No 3, ME-4, Jinnah Ave, Margalla Enclave DHA Site, Islamabad, 44000, Pakistan. You are welcome to visit during our regular business hours (Monday – Saturday: 10:00 AM – 7:30 PM).',
  },
  {
    question: 'How do I schedule an in-person property consultation?',
    answer: 'You can reach us directly at 03008553363 or complete the inquiry form on this website. Our team will coordinate a convenient consultation time at our Margalla Enclave DHA Site office.',
  },
  {
    question: 'What types of real estate services do you provide?',
    answer: 'We provide property buying, selling, investment advisory, residential properties, commercial properties, builder and turnkey development services, and personalized property consultation.',
  },
  {
    question: 'Are the featured properties on this website actual listings?',
    answer: 'The property listings featured on this website are curated sample showcases designed to demonstrate typical property types and architectural categories. Please contact us directly for currently available inventory, specifications, and plot details.',
  },
];
