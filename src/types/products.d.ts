declare module "*.json" {
  const value: {
    id: string;
    category: "Ready-Made Drink" | "Home-Brew Beans";
    name: string;
    description: string;
    price: number;
    currency: string;
    imageSrc: string;
    tags: string[];
  }[];
  export default value;
} 