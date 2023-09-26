import { Link } from 'react-router-dom';
import { LogoHolderProps } from '../types';

// eslint-disable-next-line import/prefer-default-export
export function BrandLogoHolder({ size }: LogoHolderProps) {
  return (
    <Link to="/home">
      <img src="assets/image/logo.png" width={size.toString()} height={size.toString()} alt="" />
    </Link>
  );
}
