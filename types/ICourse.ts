export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export type Advantage = {
    _id: string
    title: string
    description: string
}

export type HhData = {
    _id: string
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updateAt: Date
}

export interface ICourse {
    tags: string[]
    _id: string
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    meteDescription: string
    firstCategory: number
    advantages: Advantage[]
    createAt: Date
    updateAt: Date
    hh: HhData
}