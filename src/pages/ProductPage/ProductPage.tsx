import React from 'react';

import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecTable } from '../../components/TechSpecsTable';
import styles from './ProductPage.module.scss';

export const CardPage: React.FC = () => {
  return (
    <div className={styles.grid}>
      {/* Navigation component */}

      {/* back button */}

      {/* <h2>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2> */}

      {/* images component */}

      {/* Variants,actions component */}

      <AboutSection />

      <TechSpecTable />

      {/* You may also like component */}

    </div>
  );
};
