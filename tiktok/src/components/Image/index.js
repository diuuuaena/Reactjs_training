import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/asset/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={() => {
                handleError();
            }}
        />
    );
});

export default Image;
