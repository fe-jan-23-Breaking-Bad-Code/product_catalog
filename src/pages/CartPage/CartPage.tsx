import React, { useMemo } from 'react';
import CartList from './CartList';
import styles from './CartPage.module.scss';
import { useNavigate } from 'react-router-dom';
import Vector from '../../img/vector-left.svg';
import { useAppSelector } from '../../hooks';
import { CartPhone } from '../../types/CartPhone';
import { getPhonesByIds } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions} from '../../app/reducers/phones';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';

// type Props = {
//   setIsModalVisible: (boolean: boolean) => void;
// }

const checkoutCost = (cart: CartPhone[]): number => {
  return cart.reduce(
    (total, { quantity, phone }) => total + quantity * phone.fullPrice , 0);
};

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useAppSelector(store => store.cart);
  const { list } = useAppSelector(store => store.phones);

  const phonesInCart = useMemo(() => {
    const missingPhones = cart.map(({ id }) => id).filter(
      id => !list.some(phone => phone.id === id)
    );

    if (missingPhones.length > 0) {
      getPhonesByIds(missingPhones)
        .then(({ data }) => {
          dispatch(phonesActions.setMany(data));
        });
    }

    return list.reduce((acc: CartPhone[], phone) => {
      const cartItem = cart.find(item => item.id === phone.id);

      if (cartItem) {
        acc.push({ phone, quantity: cartItem.quantity });
      }

      return acc;
    }, []);
  }, [cart, list]);

  const handleCheckoutClick = () => {
    navigate('/');
    setTimeout(() => {
      // setIsModalVisible(true);
    }, 1000);
  };

  return (
    <>
      <div className={`${styles.container} ${styles.grid} ${styles['grid--desktop']} ${styles['grid--tablet']}`}>
        <p className={styles.link} onClick={() => window.history.go(-1)}>
          <img className={styles.vector} src={Vector} alt="Back" />
          <p>
            Back
          </p>
        </p>
        <div className={`${styles['cart-list']} ${styles['grid__item--desktop-1-16']} ${styles['grid--tablet']}`}>
          <div className={styles.title}>
            <PagesTitle title="Cart" />
          </div>

          <CartList cart={phonesInCart} />

        </div>

        <div className={`${styles['checkout-block']} ${styles['grid__item--desktop-17-24']}`}>
          <div className={styles['checkout-block__info']}>
            <p className={styles['checkout-block__cost']}>
              {`$${checkoutCost(phonesInCart)}`}
            </p>
            <p className={styles['checkout-block__items-count']}>
              {`Total for ${cart.length} items`}
            </p>
          </div>
          <button
            className={styles['checkout-block__button']}
            onClick={handleCheckoutClick}>
              Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
