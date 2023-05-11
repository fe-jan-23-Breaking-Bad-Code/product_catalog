import React, { useEffect, useState } from 'react';

import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecTable } from '../../components/TechSpecsTable';
import styles from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { getPhoneById } from '../../API/FetchPhones';

export const ProductPage: React.FC = () => {
  const [phone, setPhone] = useState<Phone>();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      getPhoneById(productId)
        .then(data => setPhone(data));
    }
  },[productId]);


  return (
    <div>
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
