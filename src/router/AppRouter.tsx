import { Navigate, Route, Routes } from 'react-router-dom';
import {
  HomePage, UserLoginPage, UserRegisterPage, ForgetPasswordPage, ProductDetailPage,
} from '../pages';
import { CartPage } from '../pages/CartPage';

// eslint-disable-next-line import/prefer-default-export
export function AppRouter() {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="userRegistration" element={<UserRegisterPage />} />
      <Route path="forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="login" element={<UserLoginPage />} />
      <Route path="productDetail/*" element={<ProductDetailPage />} />
      <Route path="ProductList" element={<CartPage />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
