export interface DessertData {
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

export interface StyleProps {
  style: string
}

export interface DessertCardItem extends Omit<Omit<DessertData, 'category'>, 'image'> {
  id: string
  amount: number
}