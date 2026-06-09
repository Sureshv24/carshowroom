const carData = [
  {
    id: 1,
    name: "BMW M4",
    price: "₹75,00,000",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    description: "Luxury sports coupe from BMW.",
    wikiLink: "https://en.wikipedia.org/wiki/BMW"
  },

  {
    id: 2,
    name: "Audi A6",
    price: "₹65,00,000",
    image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    description: "Premium executive sedan from Audi.",
    wikiLink: "https://en.wikipedia.org/wiki/Audi"
  },

  {
    id: 3,
    name: "Mercedes C-Class",
    price: "₹70,00,000",
    image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
    description: "Luxury sedan with advanced technology.",
    wikiLink: "https://en.wikipedia.org/wiki/Mercedes-Benz"
  },

  {
    id: 4,
    name: "Kia Seltos",
    price: "₹17,00,000",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
    description: "Stylish compact SUV.",
    wikiLink: "https://en.wikipedia.org/wiki/Kia"
  },

  {
    id: 5,
    name: "Toyota Fortuner",
    price: "₹45,00,000",
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    description: "Premium SUV from Toyota.",
    wikiLink: "https://en.wikipedia.org/wiki/Toyota"
  },

  {
  id: 6,
  name: "Ferrari 488",
  price: "₹4,00,00,000",
  image: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg",
  description: "The Ferrari 488 is a high-performance Italian sports car known for its twin-turbo V8 engine, exceptional handling and iconic design.",
  wikiLink: "https://en.wikipedia.org/wiki/Ferrari"
},

{
  id: 7,
  name: "Toyota Fortuner",
  price: "₹45,00,000",
  image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
  description: "The Toyota Fortuner is a premium SUV offering rugged performance, reliability and advanced safety features.",
  wikiLink: "https://en.wikipedia.org/wiki/Toyota"
},

{
  id: 8,
  name: "Hyundai Creta",
  price: "₹18,00,000",
  image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg",
  description: "The Hyundai Creta is a popular compact SUV with modern styling, advanced technology and excellent comfort.",
  wikiLink: "https://en.wikipedia.org/wiki/Hyundai_Motor_Company"
},

{
  id: 9,
  name: "Mahindra XUV700",
  price: "₹25,00,000",
  image: "https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg",
  description: "The Mahindra XUV700 is a premium Indian SUV featuring powerful engines, ADAS technology and spacious interiors.",
  wikiLink: "https://en.wikipedia.org/wiki/Mahindra_%26_Mahindra"
},

{
  id: 10,
  name: "Kia Seltos",
  price: "₹17,00,000",
  image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
  description: "The Kia Seltos is a stylish SUV offering premium features, modern technology and efficient performance.",
  wikiLink: "https://en.wikipedia.org/wiki/Kia"
},

{
  id: 11,
  name: "Honda City",
  price: "₹15,00,000",
  image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
  description: "The Honda City is a premium sedan known for comfort, reliability, fuel efficiency and elegant design.",
  wikiLink: "https://en.wikipedia.org/wiki/Honda"
},

{
  id: 12,
  name: "Skoda Slavia",
  price: "₹16,00,000",
  image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
  description: "The Skoda Slavia is a premium sedan offering European styling, comfort and advanced safety systems.",
  wikiLink: "https://en.wikipedia.org/wiki/%C5%A0koda_Auto"
},

{
  id: 13,
  name: "Volkswagen Virtus",
  price: "₹17,00,000",
  image: "https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg",
  description: "The Volkswagen Virtus combines German engineering, performance and comfort in a modern sedan.",
  wikiLink: "https://en.wikipedia.org/wiki/Volkswagen"
},

{
  id: 14,
  name: "Tata Harrier",
  price: "₹22,00,000",
  image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  description: "The Tata Harrier is a stylish SUV featuring strong road presence, safety and modern technology.",
  wikiLink: "https://en.wikipedia.org/wiki/Tata_Motors"
},

{
  id: 15,
  name: "MG Hector",
  price: "₹21,00,000",
  image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
  description: "The MG Hector is a connected SUV offering spacious interiors and advanced smart features.",
  wikiLink: "https://en.wikipedia.org/wiki/MG_Motor"
},

{
  id: 16,
  name: "Jeep Compass",
  price: "₹28,00,000",
  image: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg",
  description: "The Jeep Compass is a premium SUV known for off-road capability, safety and comfort.",
  wikiLink: "https://en.wikipedia.org/wiki/Jeep"
},

{
  id: 17,
  name: "Nissan Magnite",
  price: "₹12,00,000",
  image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  description: "The Nissan Magnite is a compact SUV offering affordability, style and fuel efficiency.",
  wikiLink: "https://en.wikipedia.org/wiki/Nissan"
},

{
  id: 18,
  name: "Maruti Grand Vitara",
  price: "₹19,00,000",
  image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
  description: "The Grand Vitara is a premium SUV from Maruti Suzuki with hybrid technology and modern features.",
  wikiLink: "https://en.wikipedia.org/wiki/Suzuki"
},

{
  id: 19,
  name: "BMW X5",
  price: "₹1,05,00,000",
  image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
  description: "The BMW X5 is a luxury SUV offering exceptional performance, comfort and advanced technology.",
  wikiLink: "https://en.wikipedia.org/wiki/BMW_X5"
},

{
  id: 20,
  name: "Audi Q7",
  price: "₹95,00,000",
  image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
  description: "The Audi Q7 is a full-size luxury SUV with premium interiors, powerful performance and advanced safety.",
  wikiLink: "https://en.wikipedia.org/wiki/Audi_Q7"
}
];

export default carData;