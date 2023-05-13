import React, { useEffect, useState } from 'react';

import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecTable } from '../../components/TechSpecsTable';
import styles from './ProductPage.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { getPhoneById } from '../../API/FetchPhones';
import PhotosBlock from '../../components/PhotosBlock/PhotosBlock';
// eslint-disable-next-line max-len
import ProductAcions from '../../components/ProductAcions/ProductAcions';

export const ProductPage: React.FC = () => {
  const [phone, setPhone] = useState<Phone>();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      getPhoneById(productId)
        .then((data) => {
          setPhone(data);
        })
        .catch(() => {
          navigate('/page-not-found');
        });
    }
  }, [productId, navigate]);

  if (!phone) {
    return null;
  }

  console.log(phone);

  return (
    <div className={styles.product__block}>
      <div className={`
      ${styles.techspecs__info}
      ${styles.grid}
      ${styles['grid--desktop']}
    `}>
        {/* Navigation component */}

        {/* back button */}

        <h2 className={`
          ${styles.header}
          ${styles['grid__item--desktop-1-18']}
        `}>
          {phone.name}
        </h2>

        {/* images component */}
        <PhotosBlock phone={phone} />
        <ProductAcions phone={phone} />

        {/* Variants,actions component */}
        <AboutSection phone={phone}/>

        <TechSpecTable phoneTechInfo={phone} />

        {/* You may also like component */}
      </div>
    </div>
  );
};
