import { Category } from './category.model';

export interface Product {
  id: string;
  name: string;
  price: string;
  category: Category;
}
