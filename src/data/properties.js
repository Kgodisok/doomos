// Demo property listings for Maxwell Property Practitioner — Pretoria, Gauteng
// Images use Unsplash source URLs (real estate demos). Replace with real photos later.

export const AGENT = {
  name: "Maxwell Maphakela",
  title: "Maxwell Maphakela — Professional Property Practitioner",
  phone: "+27 76 444 8200",
  phoneLink: "tel:+27764448200",
  whatsapp: "https://wa.me/27764448200",
  email: "maxwell.maphakela@kwsa.co.za",
  emailLink: "mailto:maxwell.maphakela@kwsa.co.za",
  area: "Pretoria, Gauteng",
  tagline: "Helping you find a home you'll love in Pretoria.",
};

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PROPERTIES = [
  {
    id: 1,
    title: "Modern 2-Bedroom Apartment in Menlyn",
    type: "Apartment",
    listing: "To Rent",
    price: 9500,
    beds: 2,
    baths: 1,
    parking: 1,
    size: 78,
    suburb: "Menlyn",
    city: "Pretoria",
    image: img("1522708323590-d24dbb6b0267"),
    gallery: [
      img("1522708323590-d24dbb6b0267"),
      img("1560448075-bb485b067938"),
      img("1502672260266-1c1ef2d93688"),
    ],
    description:
      "Bright, spacious apartment in the heart of Menlyn Main City. Walking distance to Menlyn Park Shopping Centre, close to schools and the N1. Fibre-ready, 24h security and a communal pool.",
    features: [
      "24h Security",
      "Swimming Pool",
      "Fibre Ready",
      "Prepaid Electricity",
      "Balcony",
      "Pet Friendly",
    ],
  },
  {
    id: 2,
    title: "Family Home with Garden in Montana Park",
    type: "House",
    listing: "For Sale",
    price: 1850000,
    beds: 4,
    baths: 2,
    parking: 2,
    size: 240,
    suburb: "Montana Park",
    city: "Pretoria",
    image: img("1568605114967-8130f3a36994"),
    gallery: [
      img("1568605114967-8130f3a36994"),
      img("1600585154340-be6161a56a0c"),
      img("1600607687939-ce8a6c25118c"),
    ],
    description:
      "Beautiful 4-bedroom face-brick home in a boomed enclosure. Open-plan living, modern kitchen, entertainment lapa and a well-established garden. Close to Montana High School and Kolonnade.",
    features: [
      "Lapa & Braai",
      "Borehole",
      "Automated Garage",
      "Boomed Area",
      "Staff Quarters",
      "Solar Ready",
    ],
  },
  {
    id: 3,
    title: "Bachelor Flat Near UP Hatfield Campus",
    type: "Apartment",
    listing: "To Rent",
    price: 5200,
    beds: 1,
    baths: 1,
    parking: 1,
    size: 34,
    suburb: "Hatfield",
    city: "Pretoria",
    image: img("1502672260266-1c1ef2d93688"),
    gallery: [
      img("1502672260266-1c1ef2d93688"),
      img("1522708323590-d24dbb6b0267"),
      img("1560448204-e02f11c3d0e2"),
    ],
    description:
      "Affordable bachelor unit perfect for students and young professionals. Secure complex with biometric access, 5 minutes from the University of Pretoria and the Gautrain bus route.",
    features: [
      "Biometric Access",
      "Water Included",
      "Gautrain Bus Route",
      "Study Desk",
      "Communal Laundry",
    ],
  },
  {
    id: 4,
    title: "Luxury Townhouse in Waterkloof Ridge",
    type: "Townhouse",
    listing: "For Sale",
    price: 2750000,
    beds: 3,
    baths: 2,
    parking: 2,
    size: 195,
    suburb: "Waterkloof Ridge",
    city: "Pretoria",
    image: img("1600585154340-be6161a56a0c"),
    gallery: [
      img("1600585154340-be6161a56a0c"),
      img("1600566753190-17f0baa2a6c3"),
      img("1600585154526-990dced4db0d"),
    ],
    description:
      "Standalone townhouse in a small secure complex. Double-volume living area, designer kitchen with gas hob, and panoramic views over the city. Walking distance to Waterkloof Corner.",
    features: [
      "Gas Hob",
      "Air Conditioning",
      "Security Complex",
      "Double Garage",
      "Panic Button System",
    ],
  },
  {
    id: 5,
    title: "3-Bedroom House in Soshanguve Block F",
    type: "House",
    listing: "For Sale",
    price: 780000,
    beds: 3,
    baths: 1,
    parking: 1,
    size: 120,
    suburb: "Soshanguve",
    city: "Pretoria",
    image: img("1600607687939-ce8a6c25118c"),
    gallery: [
      img("1600607687939-ce8a6c25118c"),
      img("1568605114967-8130f3a36994"),
      img("1600585154340-be6161a56a0c"),
    ],
    description:
      "Great starter home with spacious stands and pre-paid electricity. Newly tiled, walled with an electric gate and carport. Near schools, clinics and public transport.",
    features: [
      "Electric Gate",
      "Walled",
      "Prepaid Electricity",
      "Carport",
      "Near Schools",
    ],
  },
  {
    id: 6,
    title: "Garden Cottage in Garsfontein",
    type: "Cottage",
    listing: "To Rent",
    price: 6800,
    beds: 2,
    baths: 1,
    parking: 1,
    size: 65,
    suburb: "Garsfontein",
    city: "Pretoria",
    image: img("1522708323590-d24dbb6b0267"),
    gallery: [
      img("1522708323590-d24dbb6b0267"),
      img("1502672260266-1c1ef2d93688"),
      img("1560448075-bb485b067938"),
    ],
    description:
      "Cosy garden cottage on a quiet street. Private entrance, own water meter and a small garden. Menlyn Maine and Woodlands Boulevard within a 10-minute drive.",
    features: [
      "Private Entrance",
      "Own Water Meter",
      "Garden",
      "Dstv Point",
      "Water Included",
    ],
  },
  {
    id: 7,
    title: "Studio Apartment in Pretoria CBD",
    type: "Apartment",
    listing: "To Rent",
    price: 4300,
    beds: 1,
    baths: 1,
    parking: 0,
    size: 28,
    suburb: "Pretoria CBD",
    city: "Pretoria",
    image: img("1560448204-e02f11c3d0e2"),
    gallery: [
      img("1560448204-e02f11c3d0e2"),
      img("1502672260266-1c1ef2d93688"),
    ],
    description:
      "Budget-friendly studio in the CBD, ideal for government employees and students. Building has 24h security, and it is one block from the Ben Koutte taxi rank and station.",
    features: ["24h Security", "Lift", "Prepaid Meter", "Close to Transport"],
  },
  {
    id: 8,
    title: "Newly Built Cluster in Erasmuskloof",
    type: "Cluster",
    listing: "To Rent",
    price: 14500,
    beds: 3,
    baths: 2,
    parking: 2,
    size: 180,
    suburb: "Erasmuskloof",
    city: "Pretoria",
    image: img("1600566753190-17f0baa2a6c3"),
    gallery: [
      img("1600566753190-17f0baa2a6c3"),
      img("1600607687920-4e2a09cf159d"),
      img("1600585154340-be6161a56a0c"),
    ],
    description:
      "Executive cluster in a gated eco-estate. Open-plan kitchen with SMEG appliances, underfloor heating in bathrooms and direct N1 access. Perfect for corporate tenants.",
    features: [
      "Gated Estate",
      "Underfloor Heating",
      "SMEG Appliances",
      "Fibre",
      "Communal Park",
    ],
  },
];

export const LISTING_TYPES = ["All", "To Rent", "For Sale"];
export const PROPERTY_TYPES = [
  "All",
  "Apartment",
  "House",
  "Townhouse",
  "Cottage",
  "Cluster",
];

export const formatPrice = (n) =>
  n >= 1000000
    ? `R ${(n / 1000000).toFixed(2).replace(/\.00$/, "")}m`
    : `R ${n.toLocaleString("en-ZA")}`;

export const formatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0,
});
