export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "wall-connector",
    name: "Wall Connector",
    price: 475,
    category: "Charging",
    shortDescription:
      "A convenient home charging solution for Tesla vehicles.",
    description:
      "The Wall Connector provides fast and convenient home charging. It features a clean design, Wi-Fi connectivity, power sharing, and flexible installation options.",
    image: "/images/wall-connector.jpg",
    images: [
      "/images/wall-connector.jpg",
      "/images/wall-connector-side.jpg",
      "/images/wall-connector-installed.jpg",
    ],
    features: [
      "Fast home charging",
      "Wi-Fi connectivity",
      "Indoor and outdoor installation",
      "Power sharing support",
      "Compatible with Tesla vehicles",
    ],
  },

  {
    slug: "mobile-connector",
    name: "Mobile Connector",
    price: 250,
    category: "Charging",
    shortDescription:
      "Portable charging for use at home or while travelling.",
    description:
      "The Mobile Connector allows you to charge your vehicle using compatible electrical outlets. Its portable design makes it useful for travelling and emergency charging.",
    image: "/images/mobile-connector.jpg",
    images: [
      "/images/mobile-connector.jpg",
      "/images/mobile-connector-case.jpg",
      "/images/mobile-connector-plug.jpg",
    ],
    features: [
      "Portable design",
      "Easy to store",
      "Multiple outlet compatibility",
      "Ideal for travel",
      "Durable charging cable",
    ],
  },

  {
    slug: "model-3-floor-mats",
    name: "Model 3 All-Weather Floor Mats",
    price: 225,
    category: "Interior",
    shortDescription:
      "Durable all-weather protection for your Model 3 interior.",
    description:
      "These all-weather floor mats are designed specifically for Model 3. They provide protection against dirt, water, mud, and everyday wear.",
    image: "/images/model-3-floor-mats.jpg",
    images: [
      "/images/model-3-floor-mats.jpg",
      "/images/model-3-floor-mats-front.jpg",
      "/images/model-3-floor-mats-rear.jpg",
    ],
    features: [
      "Custom Model 3 fit",
      "Water-resistant material",
      "Easy to clean",
      "Raised edges",
      "Front and rear protection",
    ],
  },

  {
    slug: "model-y-roof-rack",
    name: "Model Y Roof Rack",
    price: 500,
    category: "Exterior",
    shortDescription:
      "Carry bicycles, luggage, and outdoor equipment securely.",
    description:
      "The Model Y Roof Rack provides additional carrying capacity while maintaining a clean and aerodynamic appearance.",
    image: "/images/model-y-roof-rack.jpg",
    images: [
      "/images/model-y-roof-rack.jpg",
      "/images/model-y-roof-rack-side.jpg",
      "/images/model-y-roof-rack-installed.jpg",
    ],
    features: [
      "Designed for Model Y",
      "Aerodynamic construction",
      "Secure mounting system",
      "Durable aluminium design",
      "Suitable for luggage and outdoor equipment",
    ],
  },

  {
    slug: "tesla-travel-mug",
    name: "Tesla Travel Mug",
    price: 35,
    category: "Lifestyle",
    shortDescription:
      "A premium insulated mug for everyday use.",
    description:
      "The Tesla Travel Mug features a modern design and insulated construction to keep your beverages hot or cold while travelling.",
    image: "/images/tesla-travel-mug.jpg",
    images: [
      "/images/tesla-travel-mug.jpg",
      "/images/tesla-travel-mug-side.jpg",
      "/images/tesla-travel-mug-open.jpg",
    ],
    features: [
      "Insulated construction",
      "Reusable design",
      "Secure lid",
      "Easy to carry",
      "Modern Tesla-inspired appearance",
    ],
  },

  {
    slug: "tesla-logo-cap",
    name: "Tesla Logo Cap",
    price: 30,
    category: "Apparel",
    shortDescription:
      "A comfortable everyday cap with a premium embroidered logo.",
    description:
      "The Tesla Logo Cap is designed for casual everyday wear. It features an adjustable fit, breathable material, and an embroidered Tesla-inspired logo.",
    image: "/images/tesla-logo-cap.jpg",
    images: [
      "/images/tesla-logo-cap.jpg",
      "/images/tesla-logo-cap-side.jpg",
      "/images/tesla-logo-cap-back.jpg",
    ],
    features: [
      "Adjustable fit",
      "Embroidered logo",
      "Breathable material",
      "Lightweight construction",
      "Suitable for everyday wear",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}