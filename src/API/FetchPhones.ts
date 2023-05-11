import { Phones } from '../types/Phones';

export const BASE_URL = 'https://product-page-duuh.onrender.com';

type Phone = {
  'id': string,
	'namespaceId': string,
	'name': string,
	'capacityAvailable': [string],
	'capacity': string,
	'priceRegular': number,
	'priceDiscount': number,
	'colorsAvailable': string[],
	'color': string,
	'images': string[],
	'description': [
		{
			'title': string,
			'text': [string]
		},
		{
			'title': 'Camera',
			'text': [string]
		},
		{
			'title': string,
			'text': [string]
		}
	],
	'screen': string,
	'resolution': string,
	'processor': string,
	'ram': string,
	'camera': string,
	'zoom': string,
	'cell': string[],
}

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

export function getPhoneById(id: string): Promise<Phone> {
  return fetch(`${BASE_URL}/phones/${id}`)
    .then(response => response.json());
}
