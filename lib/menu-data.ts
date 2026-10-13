export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "milkshakes",
    title: "Milkshakes",
    icon: "🥤",
    items: [
      { name: "Vanilla", price: "3.50€" },
      { name: "Chocolate", price: "3.50€" },
      { name: "Strawberry", price: "3.50€" },
      { name: "Wild Fruits", price: "3.50€" },
      { name: "Almond-Caramel", price: "3.50€" },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    icon: "🍹",
    items: [
      { name: "Mango", price: "3.50€" },
      { name: "Passion Fruit", price: "3.50€" },
      { name: "Strawberry", price: "3.50€" },
      { name: "Lemonade", price: "1.50€" },
      { name: "Blueberry", price: "1.50€" },
      { name: "Boza", price: "1.50€" },
    ],
  },
  {
    id: "non-alcoholic",
    title: "Non-Alcoholic Cocktails",
    icon: "🍸",
    items: [
      { name: "Mojito", price: "4.50€" },
      { name: "Strawberry Mojito", price: "4.50€" },
      { name: "Mango Mojito", price: "4.50€" },
      { name: "Red Lemonade", price: "3.50€" },
      { name: "Mix Cocktail", price: "4.50€" },
      { name: "Fresh Orange Juice", price: "3.50€" },
      { name: "Passion Fruits", price: "4.00€" },
    ],
  },
  {
    id: "alcoholic",
    title: "Alcoholic Cocktails",
    icon: "🍷",
    items: [
      { name: "Aperol Spritz", price: "5.50€" },
      { name: "Sex on The Beach", price: "6.00€" },
      { name: "Mojito", price: "6.50€" },
      { name: "Tequila Sunrise", price: "6.50€" },
      { name: "Pina Colada", price: "7.00€" },
      { name: "Strawberry Mojito", price: "6.50€" },
      { name: "Adios Motherf...", price: "7.00€" },
      { name: "Kristal Cocktail", price: "8.00€" },
      { name: "Rose Lemonade", price: "5.50€" },
      { name: "Passion Fruits", price: "5.50€" },
    ],
  },
  {
    id: "shots",
    title: "Shots",
    icon: "🥃",
    items: [
      { name: "Allen Brain", price: "4.00€" },
      { name: "Green Kamikaze", price: "3.50€" },
      { name: "Blue Kamikaze", price: "3.50€" },
      { name: "B-52", price: "4.00€" },
      { name: "Rose", price: "5.50€" },
      { name: "Lemonade", price: "5.50€" },
      { name: "Passion Fruits", price: "5.50€" },
      { name: "Kristal Cocktail", price: "8.00€" },
    ],
  },
  {
    id: "hookah",
    title: "Hookah Menu",
    icon: "💨",
    items: [
      { name: "Lemon Drop", price: "20€", description: "Special" },
      { name: "Lady Killer", price: "20€", description: "Special" },
      { name: "Extra Mix", price: "20€", description: "Special" },
      { name: "Lemon Chill", price: "15€", description: "Classic" },
      { name: "Persian Apple", price: "15€", description: "Classic" },
      { name: "Love 66", price: "15€", description: "Classic" },
      { name: "Two Apple", price: "15€", description: "Classic" },
      { name: "Grape Mint", price: "15€", description: "Classic" },
      { name: "Blueberry", price: "15€", description: "Classic" },
      { name: "Watermelon", price: "15€", description: "Classic" },
      { name: "Ice BonBon", price: "15€", description: "Classic" },
      { name: "Mango", price: "15€", description: "Classic" },
      { name: "Extra Charcoals", price: "3€", description: "Add-on" },
    ],
  },
  {
    id: "food",
    title: "Food Menu",
    icon: "🍗",
    items: [
      { name: "Chicken Nuggets", price: "6.00€" },
      { name: "Chicken Wings", price: "6.00€" },
      { name: "Chicken Fingers", price: "6.00€" },
      { name: "Mix Plate", price: "15.00€" },
      { name: "Fruit Salad", price: "10.00€" },
    ],
  },
];
