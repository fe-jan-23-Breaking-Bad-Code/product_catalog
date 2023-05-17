import React, { useEffect, useState } from 'react';

import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TechSpecTable } from '../../components/TechSpecsTable';
import styles from './ProductPage.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { getPhoneById, getRecommendedPhones } from '../../API/FetchPhones';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import { BackButton } from '../../components/BackButton/BackButton';
import PhotosBlock from '../../components/PhotosBlock/PhotosBlock';
// eslint-disable-next-line max-len
import ProductAcions from '../../components/ProductAcions/ProductAcions';
import classNames from 'classnames';
import { FeaturedProducts } from '../../components/FeaturedProducts';
import { RecommededTitles } from '../../types/FeaturedPhonesTitles';
import { Phones } from '../../types/Phones';

export const ProductPage: React.FC = () => {
  const [phone, setPhone] = useState<Phone>();
  const [phones, setPhones] = useState<Phones[]>([]);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (phone) {
      getRecommendedPhones(0, 20, phone.id)
        .then(data => setPhones(data.data));
    }
  }, [phone]);

  useEffect(() => {
    console.log('getGhobne', productId);
    if (productId) {
      getPhoneById(productId)
        .then((data) => {
          setPhone(data);
        })
        .catch(() => {
          navigate('/page-not-found');
        });
    }
  }, [productId]);

  if (!phone || !phone.name) {
    return null;
  }

  const breadcrumbs = [
    { path: '/phones', title: 'Phones' },
    { path: `/product/${phone.name.toLowerCase().replace(/ /g, '-')}`, title: phone.name },
  ];

  return (

    <div className={classNames(
      styles.product__block,
      styles.container,
    )}>
      <div className={`
      ${styles.techspecs__info}
      ${styles.grid}
      ${styles['grid--desktop']}
    `}>
        <BreadCrumb items={breadcrumbs} />

        <BackButton />


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
      </div>

      <FeaturedProducts
        recommendedPhones={phones}
        title={RecommededTitles.You_may_also_like}
      />
    </div>
  );
};
