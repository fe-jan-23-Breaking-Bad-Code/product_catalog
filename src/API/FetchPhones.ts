import { Phone } from '../types/Phone';
import { Phones } from '../types/Phones';

export const BASE_URL = 'https://product-page-duuh.onrender.com';

export interface PhonesPage {
  data: Phones[],
  total: number,
}

export function getPhones(): Promise<Phones[]> {
  return fetch(`${BASE_URL}/phones`)
    .then(response => response.json());
}

export function getPhonesByIds(ids: string[]): Promise<PhonesPage> {
  const queryParams = new URLSearchParams(ids.map(id => ['id', id]));

  return fetch(`${BASE_URL}/phones?${queryParams.toString()}`)
    .then(response => response.json());
}

export function getPhonesInRange(
  from: number,
  to: number,
): Promise<PhonesPage> {
  const queryParams = new URLSearchParams({
    from: from.toString(),
    to: to.toString(),
  });

  return fetch(`${BASE_URL}/phones?${queryParams.toString()}`)
    .then(response => response.json());

}

export function getPhoneById(id: string): Promise<Phone> {
  return fetch(`${BASE_URL}/phones/${id}`)
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
    productType:'phones',
    from: from.toString(),
    to: to.toString(),
  });

  return fetch(`${BASE_URL}/products/discount?${queryParams.toString()}
  `)
    .then(response => response.json());
}

