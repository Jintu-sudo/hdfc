// Single source of truth for every product in the store.
// `price` is a number (format it with formatPrice) so the cart can do math.

export const products = [
  {
    id: "batman",
    name: "Batman: Arkham Knight Edition",
    price: 34.99,
    image: "/assets/batman.jpg",
    alt: "Batman Action Figure",
    category: "dc",
    description:
      "Highly detailed 7-inch Batman action figure inspired by the Arkham Knight design. Features multiple points of articulation, a soft-goods cape, and interchangeable grapple hand accessory. A must-have for any Dark Knight collection.",
    details: [
      { label: "Height", value: "7 inches" },
      { label: "Material", value: "PVC / ABS" },
      { label: "Points of Articulation", value: "22" },
      { label: "Includes", value: "Grapple hand, batarang accessory" },
    ],
  },
  { id: "darthvader", name: "Darth Vader: Dark Lord Edition", price: 42.99, image: "/assets/darthvader.jpg", alt: "Darth Vader Action Figure", category: "starwars" },
  { id: "drstrange", name: "Doctor Strange: Master of Mystic Arts", price: 34.99, image: "/assets/drstrange.jpg", alt: "Doctor Strange Action Figure", category: "marvel" },
  { id: "flash", name: "The Flash: Speed Force Figure", price: 31.99, image: "/assets/flash.jpg", alt: "The Flash Action Figure", category: "dc" },
  { id: "hulk", name: "Hulk: Gamma Smash Edition", price: 34.99, image: "/assets/hulk.jpg", alt: "Hulk Action Figure", category: "marvel" },
  { id: "kakashi", name: "Kakashi Hatake: Copy Ninja Figure", price: 32.99, image: "/assets/kakashi.jpg", alt: "Kakashi Hatake Action Figure", category: "anime" },
  { id: "mandalorian", name: "The Mandalorian: Beskar Armor Edition", price: 24.99, image: "/assets/mandalorian.jpg", alt: "The Mandalorian Action Figure", category: "starwars" },
  { id: "mrfantastic", name: "Mr. Fantastic: Stretch Force Figure", price: 34.99, image: "/assets/mrfantastic.jpg", alt: "Mr. Fantastic Action Figure", category: "marvel" },
  { id: "msmarvel", name: "Ms. Marvel: Embiggen Edition", price: 34.99, image: "/assets/msmarvel.jpg", alt: "Ms. Marvel Action Figure", category: "marvel" },
  { id: "naruto", name: "Naruto Uzumaki: Sage Mode Figure", price: 24.99, image: "/assets/naruto.jpg", alt: "Naruto Uzumaki Action Figure", category: "anime" },
  { id: "redhood", name: "Red Hood: Outlaw Edition", price: 44.99, image: "/assets/redhood.jpg", alt: "Red Hood Action Figure", category: "dc" },
  { id: "spiderman", name: "Spider-Man Deluxe Figure", price: 54.99, image: "/assets/spiderman.jpg", alt: "Spider-Man Action Figure", category: "marvel" },
];

export const categories = {
  anime: "Anime",
  marvel: "Marvel",
  dc: "DC",
  starwars: "Star Wars",
};

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const formatPrice = (n) => `$${n.toFixed(2)}`;
