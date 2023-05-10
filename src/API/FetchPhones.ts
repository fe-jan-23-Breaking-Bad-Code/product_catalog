export const BASE_URL = 'https://product-page-duuh.onrender.com';

export interface Phones {
  id: string,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string,
}

export function getPhones(): Promise<Phones[]> {
  return fetch(`${BASE_URL}/phones`)
    .then(response => response.json());
}

export function getPhoneById(id: string): Promise<string[]> {
  return fetch(`${BASE_URL}/phones/${id}`)
    .then(response => response.json());
}
