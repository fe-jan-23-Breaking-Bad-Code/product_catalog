import React, { useEffect, useMemo, useState } from 'react';
import styles from '../Card/CardLayout.module.scss';
import stylesAcions from './ProductAcions.module.scss';
import { Phone } from '../../types/Phone';
import { MainButton } from '../MainButton';
import { actions as cartActions } from '../../app/reducers/cart';
import { actions as favouritesActions } from '../../app/reducers/favourites';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useAppSelector } from '../../hooks';

type Props = {
  phone: Phone | undefined,
}

const CardInfo: React.FC<Props> = ({ phone }) => {
  const [currentPhone, setCurrentPhone] = useState<Phone | undefined>();
  const dispatch = useDispatch();
  const favourites = useAppSelector(store => store.favourites);
  const cart = useAppSelector(store => store.cart);

  useEffect(() => {
    setCurrentPhone(phone);
  }), [phone];

  const {
    id,
    priceRegular = 0,
    priceDiscount = '',
    screen = '',
    resolution = '',
    processor = '',
    ram = '',
  } = currentPhone || {};

  const isInCart = cart.some((cartItem) => cartItem.id === phone?.id) || false;
  const isInFavourites= phone && favourites.includes(phone?.id);

  const handleAddToCart = () => {
    if (id) {
      const newCartItem = { id, quantity: 1 };

      dispatch(cartActions.add(newCartItem));
    }
  };

  const handleAddToFavourite = () => {
    if (isInFavourites) {
      id && dispatch(favouritesActions.remove(id));
    } else {
      id && dispatch(favouritesActions.add(id));
    }
  };

  return (
    <div>
      <div className={stylesAcions.price_container}>
        <p className={`${styles.card__price} ${stylesAcions['price_container--price']}`}>
            ${priceRegular}
        </p>
        <p className={`${styles.card__price} ${stylesAcions['price_container--price-discount']}`}>
            ${priceDiscount}
        </p>
      </div>


      <div className={styles.card__buttons}>

        <MainButton
          content={ isInCart ? 'Added to cart' : 'Add to cart' }
          handler={ isInCart ? () => undefined : handleAddToCart}
          isSelected={isInCart}
        />

        <button
          className={classNames(
            styles.card__buttons_favourite,
            {
              [styles['card__buttons_favourite--selected']]: isInFavourites,
            }
          )}
          onClick={handleAddToFavourite}
        />
      </div>

      <hr
        className={`${styles.card__devider} ${stylesAcions['product-acions--line']}`}
      />

      <div className={styles.card__information}>
        <p className={styles['card__information--description']}>
          Screen
        </p>

        <p className={styles['card__information--description']}>
          {screen}
        </p>

        <p className={styles['card__information--description']}>
          Resolution
        </p>

        <p className={styles['card__information--description']}>
          {resolution}
        </p>

        <p className={styles['card__information--description']}>
          Processor
        </p>

        <p className={styles['card__information--description']}>
          {processor}
        </p>

        <p className={styles['card__information--description']}>
          RAM
        </p>

        <p className={styles['card__information--description']}>
          {ram}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
