import React, { useEffect, useMemo, useState } from 'react';
import styles from './OrderPositionList.module.scss';
import { actions as phonesActions} from '../../app/reducers/phones';
import { OrderItem } from '../../types/OrderItem';
import { useAppSelector } from '../../hooks';
import { getPhonesByIds } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { CartPhone } from '../../types/CartPhone';
import { OrderPositionItem } from '../OrderPositionItem';
import { Loader } from '../Loader/Loader';

interface Params {
  orderItems: OrderItem[];
}

export const OrderPositionList: React.FC<Params> = ({ orderItems }) => {
  const { list } = useAppSelector(store => store.phones);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const missingPhones = orderItems.map(({ phoneId }) => phoneId).filter(
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
  }, [orderItems]);

  const phonesInOrder = useMemo(() => {
    return list.reduce((acc: CartPhone[], phone) => {
      const cartItem = orderItems.find(item => item.phoneId === phone.id);

      if (cartItem) {
        acc.push({ phone, quantity: cartItem.quantity });
      }

      return acc;
    }, []);
  }, [orderItems, list]);

  return isLoading
    ? <Loader />
    : (
      <ul className={styles.order}>
        {phonesInOrder.map(({ phone, quantity }) => (
          <li key={phone.id} className={styles.order__item}>
            <OrderPositionItem
              quantity={quantity}
              phone={phone}
            />
          </li>
        )
        )}
      </ul>
    );
};

