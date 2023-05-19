import React, {useMemo, useState} from 'react';
import CartList from './CartList';
import styles from './CartPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { CartPhone } from '../../types/CartPhone';
import { getPhonesByIds } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions} from '../../app/reducers/phones';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { BackButton } from '../../components/BackButton/BackButton';
import { Loader } from '../../components/Loader/Loader';
import { sendOrder } from '../../API/FetchUsers';
import { actions as cartActions } from '../../app/reducers/cart';

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
  const user = useAppSelector(store => store.user);
  const { list } = useAppSelector(store => store.phones);
  const [isLoading, setIsLoading] = useState(false);

  const phonesInCart = useMemo(() => {
    const missingPhones = cart.map(({ id }) => id).filter(
      id => !list.some(phone => phone.id === id)
    );

    if (missingPhones.length > 0) {
      setIsLoading(true);
      getPhonesByIds(missingPhones)
        .then(({ data }) => {
          if (data.length !== 0) {
            dispatch(phonesActions.setMany(data));
          }

        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    return list.reduce((acc: CartPhone[], phone) => {
      const cartItem = cart.find(item => item.id === phone.id);

      if (cartItem) {
        acc.push({ phone, quantity: cartItem.quantity });
      }

      return acc;
    }, []);
  }, [cart]);

  const placeOrder = async () => {
    if (!user.googleId) {
      navigate('/login');

      return;
    }

    try {
      await sendOrder(user.googleId, {
        total: checkoutCost(phonesInCart),
        status: 'created',
        data: cart,
      });

      dispatch(cartActions.clear());
    }
    catch (err) {
      console.log(err);
    }

    navigate('/');
    // setIsModalVisible(true);
  };

  const handleCheckoutClick = () => {
    if (cart.length > 0) {
      placeOrder();
    }
  };

  return (
    <>
      <div className={`${styles.container} ${styles.grid} ${styles['grid--desktop']} ${styles['grid--tablet']}`}>
        <BackButton />

        <div className={`
          ${styles['cart-list']}
          ${styles['grid__item--desktop-1-16']}
          ${styles['grid__item--tablet-1-8']}
        `}>
          <div className={styles.title}>
            <PagesTitle title="Cart" />
          </div>

          {isLoading
            ? <Loader />
            : <CartList cart={phonesInCart} />
          }

        </div>

        <div className={`
          ${styles['checkout-block']}
          ${styles['grid__item--desktop-17-24']}
          ${styles['grid__item--tablet-9-12']}
        `}>
          <div className={styles['checkout-block__info']}>
            <p className={styles['checkout-block__cost']}>
              {`$${checkoutCost(phonesInCart)}`}
            </p>
            <p className={styles['checkout-block__items-count']}>
              {`Total for ${cart.length} items`}
            </p>
          </div>
          <button
            className={`
              ${cart.length === 0 ? styles['checkout-block__button-disabled'] : styles['checkout-block__button']}
            `}
            onClick={handleCheckoutClick}
          >
              Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
