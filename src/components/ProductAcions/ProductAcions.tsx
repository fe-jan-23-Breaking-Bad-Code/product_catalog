import React, { useEffect, useState } from 'react';
import styles from './ProductAcions.module.scss';
import { getPhoneById } from '../../API/FetchPhones';
import { Phone } from '../../types/Phone';
import { MainButton } from '../MainButton';
import { Link, NavLink } from 'react-router-dom';

const ProductAcions: React.FC = () => {
  const [currentPhone, setCurrentPhone] = useState<Phone | null>(null);
  const [
    selectedColor,
    setSelectedColor,
  ] = useState<string>('');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');
  const [fullPhoneUrl, setFullPhoneUrl] = useState<string>('');

  async function fetchPhone() {
    try {
      const phone = await getPhoneById('apple-iphone-11-128gb-green');
      setCurrentPhone(phone);
      setSelectedColor(phone.color);
      setSelectedCapacity(phone.capacity);
      setFullPhoneUrl(phone.id);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPhone();
  }, []);

  useEffect(() => {
    const parts = fullPhoneUrl.split('-');
    parts.splice(-1, 1, selectedColor);
    parts.splice(-2, 1, selectedCapacity.toLocaleLowerCase());
    const updatedUrl = parts.join('-');
    setFullPhoneUrl(updatedUrl);
  }, [selectedColor, selectedCapacity, fullPhoneUrl]);

  const availableColors = currentPhone?.colorsAvailable;
  const availableCapacity = currentPhone?.capacityAvailable;
  // const {
  //   price,
  //   screen,
  //   resolution,
  //   processor,
  //   ram,
  // } = currentPhone;

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

            return (
              <Link
                to={`/product/${fullPhoneUrl}`}
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
            // fullPhoneUrlCopy.splice(-2, 1, capacity.toLocaleLowerCase());
            // console.log(fullPhoneUrlCopy);

            return (
              <Link
                to={`/product/${fullPhoneUrl}`}
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
        {/* <p className={styles.card__price}>${price}</p>

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

        <div className={styles.card__buttons}>

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
