import React, { useEffect, useState } from 'react';
import styles from './ProductAcions.module.scss';
import { getPhoneById } from '../../API/FetchPhones';
import { Phone } from '../../types/Phone';
import { MainButton } from '../MainButton';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions as cartActions } from '../../app/reducers/cart';
import { actions as favouritesActions } from '../../app/reducers/favourites';

type Props = {
  phone: Phone | undefined,
  color: string | undefined,
  capacity: string | undefined,
  id: string | undefined,
}

const ProductAcions: React.FC<Props> = ({ phone, color, capacity, id }) => {
  const [
    selectedColor,
    setSelectedColor,
  ] = useState<string | undefined>('');
  const [
    selectedCapacity,
    setSelectedCapacity,
  ] = useState<string | undefined>('');
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedColor(color);
    setSelectedCapacity(capacity);
  }, [phone]);

  // const handleAddToCart = () => {
  //   const newCartItem = { id, quantity: 1 };

  //   if (id) {
  //     dispatch(cartActions.add(newCartItem));
  //   }
  // };

  // const handleAddToFavourite = () => {
  //   if (isInFavourites) {
  //     id && dispatch(favouritesActions.remove(id));
  //   } else {
  //     id && dispatch(favouritesActions.add(id));
  //   }

  // };

  const availableColors = phone?.colorsAvailable;
  const availableCapacity = phone?.capacityAvailable;
  const {
    priceRegular = 0,
    screen = '',
    resolution = '',
    processor = '',
    ram = '',
  } = phone || {};

  return (
    <div className={`${styles['product-acions']}}`}>
      <div className={`${styles['product-acions__available-colors-container']}`}>
        <div className={styles.description}>
          <p className={styles.text}>
            Available colors
          </p>
          <p className={styles.id}>
            ID: 802390
          </p>
        </div>
        <div className={`${styles['product-acions__available-colors']}`}>
          {availableColors?.map((color) => {
            const isSelectedColor = selectedColor === color;

            const parts = id ? id.split('-') : [];
            parts.splice(-1, 1, color);
            const linkUrl = parts.join('-');

            return (
              <Link
                to={`/product/${linkUrl}`}
                key={color}
                className={`${styles['product-acions__available-color-container']}`}
                style={{
                  border: isSelectedColor
                    ? '1px solid black'
                    : '1px solid #E2E6E9',
                }}
              >
                <div
                  className={`${styles['product-acions__available-color-container--color']}`}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className={`${styles['product-acions__capacity-container']}`}>
        <div className={styles.description}>
          <p className={styles.text}>
            Select capacity
          </p>
        </div>

        <div className={`${styles['product-acions__available-capacity-container']}`}>
          {availableCapacity?.map((capacity) => {
            const isSelectedCapacity = selectedCapacity === capacity;

            const parts = id ? id.split('-') : [];
            parts.splice(-2, 1, capacity.toLocaleLowerCase());
            const linkUrl = parts.join('-');
            // fullPhoneUrlCopy.splice(-2, 1, capacity.toLocaleLowerCase());
            // console.log(fullPhoneUrlCopy);

            return (
              <Link
                to={`/product/${linkUrl}`}
                key={capacity}>
                <button
                  className={`${styles['product-acions__available-capacity-container--capacity']}`}
                  style={{
                    backgroundColor: isSelectedCapacity
                      ? '#313237'
                      : 'white',
                    border: isSelectedCapacity ? '0px' : '1px solid #B4BDC4',
                    color: isSelectedCapacity ? 'white' : '#313237',
                  }}
                  onClick={() => setSelectedCapacity(capacity)}
                >
                  {capacity}
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className={`${styles['product-acions__main-info-container']}`}>
        <p>Main-Info-For-Buy</p>
        <p className={styles.card__price}>${priceRegular}</p>

        <hr className={styles.card__devider}/>

        <div className={styles.card__information}>
          <p className={styles.card__information_description}>
            Screen
          </p>

          <p className={styles.card__information_description}>
            {screen}
          </p>

          <p className={styles.card__information_description}>
            Resolution
          </p>

          <p className={styles.card__information_description}>
            {resolution}
          </p>

          <p className={styles.card__information_description}>
            Processor
          </p>

          <p className={styles.card__information_description}>
            {processor}
          </p>

          <p className={styles.card__information_description}>
            RAM
          </p>

          <p className={styles.card__information_description}>
            {ram}
          </p>
        </div>

        {/* <div className={styles.card__buttons}>

          <MainButton
            content={ isInCart ? 'Added to cart' : 'Add to cart' }
            handler={isInCart ? () => undefined : handleAddToCart}
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
        </div> */}
      </div>
    </div>
  );
};

export default ProductAcions;
