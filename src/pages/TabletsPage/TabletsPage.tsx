import React from 'react';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import styles from './TabletsPage.module.scss';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';

export const TabletsPage = () => {
  const breadcrumbs = [
    { path: '/tablets', title: 'Tablets' },
  ];

  return (
    <div className={styles.container}>
      <BreadCrumb items={breadcrumbs} />

      <PagesTitle title="Tablets Page"/>
    </div>
  );
};
