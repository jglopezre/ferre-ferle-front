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

export interface ProductCardProps {
  id: string
  imageUrl: string
  name: string
  code: string
  description: string
  price: number
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
  sectionDescription?: string
  productList: Array<ProductCardProps>
}
