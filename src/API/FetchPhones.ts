import { Phone } from '../types/Phone';
import { Phones } from '../types/Phones';
import { Orders } from '../types/Orders';

export const BASE_URL = 'https://product-page-duuh.onrender.com';

export interface PhonesPage {
  data: Phones[],
  total: number,
}

export function getPhones(): Promise<Phones[]> {
  return fetch(`${BASE_URL}/products`)
    .then(response => response.json());
}

export function getNewModels(
  from: number,
  to: number,
): Promise<PhonesPage> {
  const queryParams = new URLSearchParams({
    from: from.toString(),
    to: to.toString(),
  });

  return fetch(`${BASE_URL}/products/new?${queryParams.toString()}`)
    .then(response => response.json());
}

export function getPhonesByIds(ids: string[]): Promise<PhonesPage> {
  const queryParams = new URLSearchParams(ids.map(id => ['id', id]));

  return fetch(`${BASE_URL}/products?${queryParams.toString()}`)
    .then(response => response.json());
}

export function getPhonesInRange(
  from: number,
  to: number,
): Promise<PhonesPage> {
  const queryParams = new URLSearchParams({
    productType:'phones',
    from: from.toString(),
    to: to.toString(),
  });

  return fetch(`${BASE_URL}/products?${queryParams.toString()}`)
    .then(response => response.json());

}

export function getPhoneById(id: string): Promise<Phone> {
  return fetch(`${BASE_URL}/products/${id}`)
    .then(response => response.json());
}

export function getNewPhones(
  from: number,
  to: number,
): Promise<PhonesPage> {
  const queryParams = new URLSearchParams({
    productType:'phones',
    from: from.toString(),
    to: to.toString(),
  });

  return fetch(`${BASE_URL}/products/new?${queryParams.toString()}`)
    .then(response => response.json());
}

export function getDiscountPhones(
  from: number,
  to: number,
): Promise<PhonesPage> {
  const queryParams = new URLSearchParams({
    from: from.toString(),
    to: to.toString(),
  });

  return fetch(`${BASE_URL}/products/discount?${queryParams.toString()}
  `)
    .then(response => response.json());
}

export function getOrders(): Orders[] {
  return [
    {
      status: 'completed',
      orderId: 5421421,
      total: 5936,
      data: [
        {
          id: 'apple-iphone-7-32gb-black',
          quantity: 3,
        },
        {
          id: 'apple-iphone-7-plus-32gb-black',
          quantity: 2,
        },
        {
          id: 'apple-iphone-11-pro-64gb-gold',
          quantity: 1,
        },
        {
          id: 'apple-iphone-11-256gb-green',
          quantity: 2,
        },
      ],
    },
    {
      status: 'rejected',
      total: 2200,
      orderId: 515422,
      data: [
        {
          id: 'apple-iphone-11-pro-64gb-gold',
          quantity: 2,
        },
      ],
    },
  ];
}

// export function getPhones(): Promise<Phones[]> {
//   return fetch(`${BASE_URL}/products`)
//     .then(response => response.json());
// }
