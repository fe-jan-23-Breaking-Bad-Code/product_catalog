import React from 'react';
import styles from './CardLayout.module.scss';
import { BASE_URL } from '../../API/FetchPhones';
import { Phones } from '../../types/Phones';
import { useDispatch } from 'react-redux';
import { actions as cartActions } from '../../app/reducers/cart';
import { actions as favouritesActions } from '../../app/reducers/favourites';
import classNames from 'classnames';
import { MainButton } from '../MainButton';
import { Link } from 'react-router-dom';

type Props = {
  phone: Phones;
  isInCart: boolean;
  isInFavourites: boolean;
};

export const PhoneCard: React.FC<Props> = ({
  phone,
  isInCart,
  isInFavourites,
}) => {
  const { id, name, price, screen, capacity, ram, image, phoneId } = phone;
  const dispatch = useDispatch();
  const imgUrl = BASE_URL + '/' + image;

  const handleAddToCart = () => {
    const newCartItem = { id, quantity: 1 };

    dispatch(cartActions.add(newCartItem));
  };

  const handleAddToFavourite = () => {
    if (isInFavourites) {
      dispatch(favouritesActions.remove(id));
    } else {
      dispatch(favouritesActions.add(id));
    }
  };

  return (
    <div className={styles.card}>
      <Link to={`/product/${phoneId}`}>
        <img 
          src={imgUrl} 
          alt="Product_Image" 
          className={styles.card__image} 
        />
      </Link>

      <Link to={`/product/${phoneId}`} className={styles.card__description}>
        {name}
      </Link>

      <p className={styles.card__price}>${price}</p>

      <hr className={styles.card__devider} />

      <div className={styles.card__information}>
        <p className={styles.card__information_description}>Screen</p>

        <p className={styles.card__information_description}>{screen}</p>

        <p className={styles.card__information_description}>Capacity</p>

        <p className={styles.card__information_description}>{capacity}</p>
        <p className={styles.card__information_description}>RAM</p>

        <p className={styles.card__information_description}>{ram}</p>
      </div>

      <div className={styles.card__buttons}>
        <MainButton
          content={isInCart ? 'Added to cart' : 'Add to cart'}
          handler={isInCart ? () => undefined : handleAddToCart}
          isSelected={isInCart}
        />

        <button
          className={classNames(styles.card__buttons_favourite, {
            [styles['card__buttons_favourite--selected']]: isInFavourites,
          })}
          onClick={handleAddToFavourite}
        />
      </div>
    </div>
  );
};
