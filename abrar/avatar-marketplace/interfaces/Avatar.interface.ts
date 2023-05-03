import { StaticImageData } from "next/image";

export interface Avatar {
  id: string;
  title: string;
  description: string;
  ratings: {
    average: number;
    count: number;
  };
  likes: number;
  liked: boolean;
  images: StaticImageData[];
  publisher: {
    name: string,
    image: StaticImageData;
  };
  price: number;
  polygonCount: number;
  autoUploadSupport: boolean;
  category: string;
  content: string[];
}