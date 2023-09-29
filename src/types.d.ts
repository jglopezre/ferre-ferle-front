export type RectSize = {
  width: number | string,
  height: number | string,
};

export interface CustomButtonProps {
  size: string
  onClick: () => void
}

export interface LogoHolderProps {
  size: number
}

export interface LayoutProps {
  children: JSX.Element
}

export interface ProductCategorySectionProps {
  sectionElement: ProductsBySection
}

export interface ProductCarouselProps {
  productList: ProductList
}

interface ProductProps {
  id: string
  imageUrl: string
  name: string
  code: string
  price: number
}

export interface ProductCardProps extends ProductProps {
  description: string
}

export interface ProducCartItemProps extends ProductProps {
  quantity: number
}

export interface ImageHolderProps {
  url: string
  alt: string
  wrapperSize: RectSize
  imageSize? : RectSize
}

export interface ProductsBySection {
  sectionId: string
  sectionName: string
  sectionImageUrl: string
  sectionDescription?: string
  productList: ProductList
}

export type ProductList = Array<ProductCardProps> | [];

export type CartReducerAction = {
  type: 'CART_REDUCER-add-product' | 'CART_REDUCER-remove-product' | 'CART_REDUCER-clear-list',
  payload?: ProductCardProps
};

export type CartContextType = {
  state: ProductList,
  dispatch: React.Dispatch<CartReducerAction>
};
