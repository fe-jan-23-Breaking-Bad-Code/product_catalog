import React, { useEffect, useState } from 'react';
import styles from './PhotosBlock.module.scss';
import { BASE_URL, getPhoneById } from '../../API/FetchPhones';

const PhotosBlock = () => {
  const [phoneImages, setPhoneImages] = useState<string[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string>('');

  useEffect(() => {
    getPhoneById('apple-iphone-7-32gb-black')
      .then((res) => {
        setPhoneImages(res.images);
        setSelectedPhoto(res.images[0]);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const imgUrl = (photoUrl: string) => {
    return BASE_URL + '/' + photoUrl;
  };

  const setPhotoBackground = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    };
  };

  const handlePhotoClick = (image: string) => {
    setSelectedPhoto(image);
  };

  return (
    <div className={styles.photos_container}>
      <div
        className={`
          ${styles.photos_container__main_block}
        `}
        style={setPhotoBackground(imgUrl(selectedPhoto))}
      />

      <div className={styles.photos_container__list_photos}>
        {phoneImages.map((image, index) => {
          return (
            <div
              className={styles.photos_container__list_photos__photo}
              key={index}
              style={setPhotoBackground(imgUrl(image))}
              onClick={() => handlePhotoClick(image)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotosBlock;
