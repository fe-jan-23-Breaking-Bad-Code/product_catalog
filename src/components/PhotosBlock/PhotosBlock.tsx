import React from 'react';

const PhotosBlock = () => {
  return (
    <div className={styles.photos_container}>
      <div className={styles.photos_container__main_block}></div>

      <div className={styles.photos_container__list_photos}>
        <div className={styles.photos_container__list_photos__photo}></div>
        <div className={styles.photos_container__list_photos__photo}></div>
        <div className={styles.photos_container__list_photos__photo}></div>
        <div className={styles.photos_container__list_photos__photo}></div>
        <div className={styles.photos_container__list_photos__photo}></div>
      </div>
    </div>
  );
};
