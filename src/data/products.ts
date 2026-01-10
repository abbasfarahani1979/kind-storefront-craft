import voxconnect from "@/assets/products/voxconnect.png";
import voxsms from "@/assets/products/voxsms.png";
import irbridge from "@/assets/products/irbridge.png";
import antivirus from "@/assets/products/antivirus.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  onSale?: boolean;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "VoxConnect",
    price: 12.50,
    image: voxconnect,
    description: "Premium VoIP calling service for businesses",
  },
  {
    id: 2,
    name: "VoxSMS",
    price: 45.00,
    image: voxsms,
    description: "SMS messaging service for customer communication",
  },
  {
    id: 3,
    name: "Ir-Bridge",
    price: 9.99,
    originalPrice: 15.00,
    image: irbridge,
    onSale: true,
    description: "International calling bridge for global communication",
  },
  {
    id: 4,
    name: "Antivirus",
    price: 19.99,
    originalPrice: 35.00,
    image: antivirus,
    onSale: true,
    description: "Complete cybersecurity protection for your devices",
  },
];