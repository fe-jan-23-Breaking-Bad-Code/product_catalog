import React from 'react';
import styles from './FeaturedProducts.module.scss';
import { Phones } from '../../types/Phones';

import { Carousel } from './Carousel/Carousel';

type Props = {
  recommendedPhones: Phones[];
}

interface State {
  phones: Phones[],
  step: number,
  frameSize: number,
  itemWidth: number,
  animationDuration: number
  infinite: boolean,
}

export const FeaturedProducts: React.FC<Props> = ({ recommendedPhones }) => {

  const defaultState: State = {
    phones: recommendedPhones,
    step: 1,
    frameSize: 4,
    itemWidth: 307,
    animationDuration: 1000,
    infinite: false,
  };

  return (
    <div className={`${styles.container} ${styles.grid} ${styles['grid--tablet']} ${styles['grid--desktop']}`}>
      <Carousel
        phones={recommendedPhones}
        step={1}
        frameSize={4}
        itemWidth={defaultState.itemWidth}
        animationDuration={1000}
        infinite={false}
      />
    </div>
  );
};
