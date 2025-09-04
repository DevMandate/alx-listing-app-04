export interface PropertyProps {
  id?: number;
  name?: string;
  title?: string;
  description?: string;
  address?: {
    state?: string;
    city?: string;
    country?: string;
  };
  location?: {
    city?: string;
    country?: string;
  };
  rating?: number;
  category?: string[];
  price?: number;
  offers?: {
    bed?: string;
    shower?: string;
    occupants?: string;
  };
  image?: string;
  imageUrl?: string;
  discount?: string;
}

export interface CardProps {
  title: string;
  description?: string;
  imageUrl: string;
  price?: number;
  rating?: number;
  location?: {
    city?: string;
    country?: string;
  };
}
