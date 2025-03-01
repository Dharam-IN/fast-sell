export interface homeBestSellingProduct {
    id: number;
    name?: string;
    category: string;
    price: number;
    offer: string;
    badge: string;
    image: string;
    title: string;
    time: string;
    currency: string;
}

export interface homeCategorySlide {
    id: number;
    icon: string;
    name: string;
}


export interface ProductDataProps {
    id: number;
    name?: string;
    category: string;
    price: number;
    offer: string;
    badge: string;
    image: string;
    title: string;
    time: string;
    currency: string;
}

export interface ProductBreadCrumbProps{
    categoryname: string;
    productname: string;
}