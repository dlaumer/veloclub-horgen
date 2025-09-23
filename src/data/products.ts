import { Product } from "@/types/product";
import shirtMen1 from "@/assets/shirt-men-1.jpg";
import shirtWomen1 from "@/assets/shirt-women-1.jpg";
import shirtKids1 from "@/assets/shirt-kids-1.jpg";
import hoodieOther1 from "@/assets/hoodie-other-1.jpg";

export const products: Product[] = [
  {
    id: "men-pro-jersey-1",
    name: "Pro Team Jersey - Men",
    price: 89.90,
    image: shirtMen1,
    category: "men",
    stock: {
      "S": 5,
      "M": 8,
      "L": 12,
      "XL": 6,
      "XXL": 3
    },
    description: "High-performance cycling jersey with moisture-wicking fabric and aerodynamic fit. Perfect for training and racing."
  },
  {
    id: "women-elite-jersey-1",
    name: "Elite Women's Jersey",
    price: 85.90,
    image: shirtWomen1,
    category: "women",
    stock: {
      "XS": 4,
      "S": 7,
      "M": 10,
      "L": 8,
      "XL": 5
    },
    description: "Tailored fit cycling jersey designed specifically for women cyclists. Features premium Italian fabric with UV protection."
  },
  {
    id: "kids-fun-tee-1",
    name: "Young Cyclist Tee",
    price: 35.90,
    image: shirtKids1,
    category: "kids",
    stock: {
      "122/128": 6,
      "134/140": 8,
      "146/152": 7,
      "158/164": 5
    },
    description: "Fun and colorful cycling t-shirt for young riders. Made with soft, breathable cotton blend for all-day comfort."
  },
  {
    id: "other-premium-hoodie-1",
    name: "Club Premium Hoodie",
    price: 119.90,
    image: hoodieOther1,
    category: "other",
    stock: {
      "S": 4,
      "M": 6,
      "L": 8,
      "XL": 5,
      "XXL": 2
    },
    description: "Premium quality hoodie with club branding. Perfect for cool weather rides or casual wear. Features kangaroo pocket and drawstring hood."
  },
  {
    id: "men-training-shirt-2",
    name: "Training Shirt - Men",
    price: 65.90,
    image: shirtMen1,
    category: "men",
    stock: {
      "S": 8,
      "M": 12,
      "L": 15,
      "XL": 9,
      "XXL": 4
    },
    description: "Versatile training shirt suitable for all types of cycling activities. Quick-dry fabric with reflective details."
  },
  {
    id: "women-casual-tee-2",
    name: "Casual Cycling Tee - Women",
    price: 45.90,
    image: shirtWomen1,
    category: "women",
    stock: {
      "XS": 6,
      "S": 9,
      "M": 11,
      "L": 7,
      "XL": 4
    },
    description: "Comfortable everyday tee with subtle club branding. Perfect for casual rides or off-bike activities."
  },
  {
    id: "kids-adventure-shirt-2",
    name: "Little Explorer Shirt",
    price: 29.90,
    image: shirtKids1,
    category: "kids",
    stock: {
      "122/128": 5,
      "134/140": 7,
      "146/152": 6,
      "158/164": 4
    },
    description: "Adventure-themed cycling shirt for kids who love exploring on two wheels. Durable and comfortable for active play."
  },
  {
    id: "other-winter-jacket-2",
    name: "Winter Cycling Jacket",
    price: 199.90,
    image: hoodieOther1,
    category: "other",
    stock: {
      "S": 3,
      "M": 5,
      "L": 6,
      "XL": 4,
      "XXL": 2
    },
    description: "Technical winter jacket with windproof and water-resistant properties. Essential gear for year-round cycling in Swiss conditions."
  }
];