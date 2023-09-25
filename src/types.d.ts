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
