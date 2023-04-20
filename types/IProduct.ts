export type Review = {
    _id: string
    name: string
    title: string
    description: string
    rating: number
    createAt: Date
}

export type IProductCharacteristic = {
    value: string
    name: string
}

export interface IProduct{
    _id: string
    categories: string[]
    tags: string[]
    title: string
    link: string
    price: number
    credit: number
    oldPrice: number
    description: string
    characteristic: IProductCharacteristic[]
    createAt: Date
    updateAt: Date
    __v: number
    image: string
    initialRating: number
    reviews: Review[]
    reviewCount: number
    reviewAvg?: number
    advantages: string
}