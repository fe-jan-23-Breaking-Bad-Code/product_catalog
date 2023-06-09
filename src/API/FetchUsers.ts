import { CartItem } from '../types/CartItem';
import { OrderItem } from '../types/OrderItem';
import { Orders } from '../types/Orders';
import { User } from '../types/User';
import { BASE_URL } from './FetchPhones';

export function syncUser(user: User): Promise<User> {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json());
}

export function getUserOrders(userId: string): Promise<Orders[]> {
  return fetch(`${BASE_URL}/users/orders`, {
    method: 'POST',
    body: JSON.stringify({ userId }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json());
}

export function getOrderById(orderId: number): Promise<OrderItem[]> {
  return fetch(`${BASE_URL}/users/orders/${orderId}`)
    .then(response => response.json());
}


export function sendOrder(
  userId: string,
  total: number,
  data: CartItem[],
): Promise<Orders[]> {
  return fetch(`${BASE_URL}/users/orders/new`, {
    method: 'post',
    body: JSON.stringify({ userId, order: {
      total,
      data,
    }}),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json());
}

export function saveFavourites(
  userId: string,
  favourites: string[],
): Promise<string> {
  return fetch(`${BASE_URL}/users/favourites`, {
    method: 'post',
    body: JSON.stringify({ userId, data: favourites, operation: 'post' }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.text());
}

export function getFavourites(
  userId: string,

): Promise<string[]> {
  return fetch(`${BASE_URL}/users/favourites`, {
    method: 'post',
    body: JSON.stringify({ userId, operation: 'get' }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json());
}

export function saveCart(
  userId: string,
  cart: CartItem[],
): Promise<string> {
  return fetch(`${BASE_URL}/users/cart`, {
    method: 'post',
    body: JSON.stringify({ userId, data: cart, operation: 'post' }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.text());
}

export function getCart(
  userId: string,
): Promise<CartItem[]> {
  return fetch(`${BASE_URL}/users/cart`, {
    method: 'post',
    body: JSON.stringify({ userId, operation: 'get' }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json());
}

