import React from 'react';
import styles from './SuccessModal.module.scss';
import successIcon from './success.svg';

export const SuccessModal = () => {
  return (
    <div className={styles.modal} onClick={() => false}>
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
        <img
        src={successIcon}
        alt='Success order!'
        className={styles.modal_icon}
        />
        
        <h4 className={styles.modal_title}>
        Awesome!
        </h4>
        
        <p className={styles.modal_text}>
          Your purchase has been successful.
        </p>

        <button 
            type='button'
            className={styles.modal_button}
        >
          OK
        </button>
      </div>
    </div>
  );
};