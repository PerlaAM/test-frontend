export interface ISearch {
  author: IAuthor;
  items: IItems[];
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
}

export interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}
