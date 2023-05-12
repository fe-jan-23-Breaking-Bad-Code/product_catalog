import React, { useEffect, useState } from 'react';
import styles from './PhotosBlock.module.scss';
import { BASE_URL, getPhoneById } from '../../API/FetchPhones';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone | undefined,
  images: string[] | undefined,
}

const PhotosBlock: React.FC<Props> = ({ phone, images }) => {
  const [phoneImages, setPhoneImages] = useState<string[] | undefined>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string>('');

  useEffect(() => {
    setPhoneImages(images);

    if (images) {
      setSelectedPhoto(images[0]);
    }
  }, [phone]);

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
        {phoneImages?.map((image, index) => {
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
