import React, {useState} from 'react';
import { CartItem } from './types/CartItem';

export const cartItem: React.FC<CartItem> = ( props ) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='cartitem'>
      <img src={props.imgUrl} alt="phone-image" />
      <img src="./images/Photo.jpg" alt="" />
      <p className='cartitem__name'>{props.name}</p>
      <div className='cartitem__icons'>
        <button>
          <img src="./" alt="button-plus" />
        </button>
        <p className='cartitem__quantity'>{quantity}</p>
        <button>
          <img src="" alt="button-minus" />
        </button>
      </div>
      <p className='cartitem__price'>{props.price}</p>
      
    </div>
  );

};
