import React, { useEffect, useState } from 'react';

import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecTable } from '../../components/TechSpecsTable';
import styles from './ProductPage.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { getPhoneById } from '../../API/FetchPhones';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import { BackButton } from '../../components/BackButton/BackButton';

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

  const breadcrumbs = [
    { path: '/phones', title: 'Phones' },
    { path: `/product/${phone.name.toLowerCase().replace(/ /g, '-')}`, title: phone.name },
  ];

  return (
    <div className={`${styles.techspecs__info} ${styles.grid} ${styles['grid--desktop']}`}>
      <BreadCrumb items={breadcrumbs} />

      <BackButton />

      {/* <h2>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2> */}

      {/* images component */}

      {/* Variants,actions component */}
      <AboutSection phone={phone}/>
    
      <TechSpecTable phoneTechInfo={phone} />

      {/* You may also like component */}
    </div>
  );
};
