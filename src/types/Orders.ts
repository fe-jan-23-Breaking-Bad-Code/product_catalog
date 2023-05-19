import { CartItem } from './CartItem';

export interface Orders {
  status: string,
  total: number,
  updatetAt: Date,
  orderId: number,
}
