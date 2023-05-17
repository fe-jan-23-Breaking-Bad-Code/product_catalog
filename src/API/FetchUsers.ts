import { Orders } from '../types/Orders';
import { User } from '../types/User';
import { BASE_URL } from './FetchPhones';

export function syncUser(user: User): Promise<User> {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(response => response.json());
}

export function getUserOrders(user: User): Promise<Orders> {
  return fetch(`${BASE_URL}/orders`, {
    method: 'GET',
    body: JSON.stringify(user),
  })
    .then(response => response.json());
}
