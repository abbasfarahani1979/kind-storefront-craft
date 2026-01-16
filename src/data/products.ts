import voxconnect from "@/assets/products/voxconnect.png";
import voxsms from "@/assets/products/voxsms.png";
import irbridge from "@/assets/products/irbridge.png";
import antivirus from "@/assets/products/antivirus.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  price_type: string;
  setupFeeId: string;
  image: string;
  onSale?: boolean;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "VoxConnectPlus",
    price: 24.99,
    originalPrice: 35.00,
    price_type: "subscription",
    setupFeeId: "price_setup_voxconnect", // 40$ one-time
    image: voxconnect,
    description: "Receive call anywhere",
  },
  {
    id: 2,
    name: "VoxSMS",
    price: 24.99,
    originalPrice: 45.00,
    price_type: "subscription",
    setupFeeId: "price_setup_voxsms", // 280$ one-time
    image: voxsms,
    description: "SMS messaging service for customer communication",
  },
  {
    id: 3,
    name: "Ir-Bridge",
    price: 9.99,
    originalPrice: 15.00,
    price_type: "subscription",
    image: irbridge,
    onSale: true,
    description: "International calling bridge for global communication",
  },
  {
    id: 1,
    name: "VoxConnect",
    price: 14.99,
    originalPrice: 45.00,
    price_type: "subscription",
    setupFeeId: "price_setup_voxconnect", // 40$ one-time
    image: voxconnect,
    description: "Receive call anywhere",
  },
  {
    id: 6,
    name: "Antivirus",
    price: 19.99,
    originalPrice: 35.00,
    price_type: "one-time",
    image: antivirus,
    onSale: true,
    description: "Complete cybersecurity protection for your devices",
  },
];
