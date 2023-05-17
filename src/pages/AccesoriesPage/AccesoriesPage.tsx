import React from 'react';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import styles from './Accessories.module.scss';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';


export const AccessoriesPage = () => {
  const breadcrumbs = [
    { path: '/accessories', title: 'Accessories' },
  ];

  return (
    <div className={styles.container}>
      <BreadCrumb items={breadcrumbs} />

      <PagesTitle title="Accessories Page"/>
    </div>
  );
};
