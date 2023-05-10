import React, { useEffect } from 'react';
import { getPhones } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from '../../app/reducers/phones';
import { useAppSelector } from '../../hooks';
import { PhoneCard } from '../../components/Card';

export const PhonesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useAppSelector(store => store.phones);

  useEffect(() => {
    getPhones(0, 5).then(phones => {
      dispatch(phonesActions.set(phones));
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Phones Page</h1>

      {list.map(phone => (
        <PhoneCard key={phone.id} />
      ))}
    </div>
  );
};
