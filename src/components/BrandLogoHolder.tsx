import { Link } from 'react-router-dom';
import { LogoHolderProps } from '../types';
import { ImageHolder } from './ImageHolder';

// eslint-disable-next-line import/prefer-default-export
export function BrandLogoHolder({ size }: LogoHolderProps) {
  return (
    <Link to="/home">
      <ImageHolder
        url="/assets/images/logo.png"
        alt=""
        wrapperSize={{ width: size, height: size }}
        imageSize={{ width: size, height: size }}
      />
      {/* <img src="assets/image/logo.png" width={size.toString()}
      height={size.toString()} alt="" /> */}
    </Link>
  );
}
