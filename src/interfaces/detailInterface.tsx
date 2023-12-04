export interface IDetail {
  author: IAuthor;
  item: IItem;
}

export interface IAuthor {
  name: string;
  lastname: string;
}

export interface IItem {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}
