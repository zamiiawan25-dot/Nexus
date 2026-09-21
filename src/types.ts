export interface Property {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Builder';
  location: string;
  tag: string;
  description: string;
  imageUrl: string;
  features: string[];
  specs: {
    type: string;
    sector: string;
    consultationStatus: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  requirement: string;
  message: string;
}
