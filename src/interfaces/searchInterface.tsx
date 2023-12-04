export interface ISearch {
  author: IAuthor;
  items: IItems[];
  categories: ICategories[];
}

export interface IAuthor {
  name: string;
  lastname: string;
}

export interface IItems {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  city: string;
}

export interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ICategories {
  path: string;
}
