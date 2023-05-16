import { CartItem } from './CartItem';

export interface Orders {
  status: string,
  total: number,
  data: CartItem[],
  orderId: number,
}
