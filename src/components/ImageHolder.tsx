import { Suspense } from 'react';
import { useImage } from 'react-image';
import { ImageHolderProps, RectSize } from '../types';
import styles from '../scss/imageHolder.module.scss';

// eslint-disable-next-line import/prefer-default-export
export function ImageHolder({
  url,
  alt,
  wrapperSize,
  imageSize,
}: ImageHolderProps) {
  const { src } = useImage({
    srcList: url,
  });

  const size: RectSize = imageSize !== undefined ? imageSize : { width: '', height: '' };

  return (
    <Suspense>
      <div
        className={styles.imageHolder}
        style={{ width: wrapperSize.width, height: wrapperSize.height }}
      >
        <img src={src} alt={alt} width={size.width} height={size.height} />
      </div>
    </Suspense>
  );
}
