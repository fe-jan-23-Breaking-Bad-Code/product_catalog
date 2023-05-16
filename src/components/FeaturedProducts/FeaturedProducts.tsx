import React from 'react';
import styles from './FeaturedProducts.module.scss';
import { Phones } from '../../types/Phones';
import { Carousel } from './Carousel/Carousel';
import { RecommededTitles } from '../../types/FeaturedPhonesTitles';
import { useAppSelector } from '../../hooks';

interface State {
  phones: Phones[],
  step: number,
  frameSize: number,
  itemWidth: number,
  animationDuration: number
}

type Props = {
  recommendedPhones: Phones[];
  title: RecommededTitles;
}

export const FeaturedProducts: React.FC<Props> =
  ({ recommendedPhones, title }) => {
    const state: State = {
      phones: recommendedPhones,
      step: 1,
      frameSize: 4,
      itemWidth: 272,
      animationDuration: 1000,
    };

    const favourites = useAppSelector(store => store.favourites);
    const cart = useAppSelector(store => store.cart);

    return (
      <div className={styles.container}>
        <Carousel
          title={title}
          phones={state.phones}
          step={state.step}
          frameSize={state.frameSize}
          itemWidth={state.itemWidth}
          animationDuration={state.animationDuration}
          infinite={false}
          favourites={favourites}
          cart={cart}
        />
      </div>
    );
  };
