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
  phone?: Phones;
  isInCart: boolean;
  isInFavourites: boolean;
};

export const PhoneCard: React.FC<Props> = ({
  phone,
  isInCart,
  isInFavourites,

}) => {

  const isSkeleton = !phone;
  if (isSkeleton) {
    return (
      <div className={classNames(styles.card, 'placeholder-glow')}>
        <div
          className={classNames(
            styles['card__image'],
            styles['card__image--placeholder'],
            'placeholder'
          )}
        />

        <div className={classNames(
          styles.card__description,
          'placeholder',
          'w-100'
        )}>
        </div>

        <p className={classNames(styles.card__price, 'placeholder', 'w-50')}>
        </p>

        <hr className={styles.card__devider} />

        <div className={styles.card__information}>
          <p className={classNames(
            styles['card__information--description'])}>
            Screen
          </p>

          <p className={classNames(
            styles['card__information--description'], 'placeholder')}>
          </p>

          <p className={classNames(
            styles['card__information--description'])}>
            Capacity
          </p>

          <p className={classNames(
            styles['card__information--description'], 'placeholder')}>
          </p>
          <p className={classNames(
            styles['card__information--description'])}>
            RAM
          </p>

          <p className={classNames(
            styles['card__information--description'], 'placeholder')}>
          </p>
        </div>

        <div className={styles.card__buttons}>
          <MainButton
            content={isInCart ? 'Added to cart' : 'Add to cart'}
            isSelected={isInCart}
            handler={() => { console.log(); }}
            isSkeleton={isSkeleton}
          />

          <button
            className={classNames(
              styles.card__buttons_favourite,
              'placeholder',
              {
                [styles['card__buttons_favourite--selected']]: isInFavourites,
              }
            )}
            disabled={isSkeleton}
          />
        </div>
      </div>
    );
  }

  const {
    id,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    image,

  } = phone;
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
      <Link to={`/product/${id}`}>
        <img
          src={imgUrl}
          alt="Product_Image"
          className={styles.card__image}
        />
      </Link>

      <Link to={`/product/${id}`} className={styles.card__description}>
        {name}
      </Link>

      <p className={styles.card__price}>
        ${price}

        {fullPrice > price && (
          <span className={styles['card__price--full']}>
            ${fullPrice}
          </span>
        )}
      </p>

      <hr className={styles.card__devider} />

      <div className={styles.card__information}>
        <p className={styles['card__information--description']}>
          Screen
        </p>

        <p className={styles['card__information--description']}>
          {screen}
        </p>

        <p className={styles['card__information--description']}>
          Capacity
        </p>

        <p className={styles['card__information--description']}>
          {capacity}
        </p>
        <p className={styles['card__information--description']}>
          RAM
        </p>

        <p className={styles['card__information--description']}>
          {ram}
        </p>
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
