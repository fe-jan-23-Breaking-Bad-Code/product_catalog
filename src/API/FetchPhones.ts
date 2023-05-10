import { Phones } from '../types/Phones';

export const BASE_URL = 'https://product-page-duuh.onrender.com';

export function getPhones(from?: number, to?: number): Promise<Phones[]> {

  if (from === undefined || to === undefined) {
    return fetch(`${BASE_URL}/phones`)
      .then(response => response.json());
  }

  
  const queryParams = new URLSearchParams({
    from: from.toString(), 
    to: to.toString(), 
  });

  return fetch(`${BASE_URL}/phones?${queryParams.toString()}`)
    .then(response => response.json());
 
}

export function getPhoneById(id: string): Promise<string[]> {
  return fetch(`${BASE_URL}/phones/${id}`)
    .then(response => response.json());
}
