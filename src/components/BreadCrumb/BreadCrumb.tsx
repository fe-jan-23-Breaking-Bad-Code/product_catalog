import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BreadCrumb.module.scss';
import vector from './images/Chevron (Arrow Right).svg';
import homeIcon from './images/Home.svg';

type BreadcrumbItem = {
    path: string;
    title: string;
  };

  type BreadcrumbsProps = {
    items: BreadcrumbItem[];
  };

export const BreadCrumb:React.FC<BreadcrumbsProps> = ({ items }) => {

  // const location = useLocation();
  // const hashPathname = location.hash.slice(1);
  // const pathnames = hashPathname.split('/').filter((pathname) => pathname);

  // console.log(pathnames);

  return (
    <div className={`${styles.breadcrumb} ${styles['grid__item--desktop-1-9']} ${styles['grid__item--tablet-1-9']}`}>
      <Link to="/" className={styles.home}>
        <img src={homeIcon} alt="Home" className={styles.homeIcon} />
      </Link>
      <img src={vector} alt=""  className={styles.vector}/>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 &&
            <img
              src={vector}
              alt=""
              className={styles.vector}
            />
          }
          <Link
            to={item.path}
            className={styles.breadcrumb__title}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
