export interface ProductInformations {
    name: string;
    price: number;
    image: string;
    background: string;
}


export class ProductService {

    products: ProductInformations[] = [
        {
            name: 'Le Phoenix',
            price: 300,
            image: '/assets/images/products/majordrone.png',
            background: '/assets/images/products/products-banner/phoenix-banner.png'
        },

        {
            name: 'Le Viking',
            price: 450,
            image: '/assets/images/products/majordrone.png',
            background: '/assets/images/products/products-banner/traqueur-banner.png'
        },

        {
            name: 'Le Traqueur',
            price: 600,
            image: '/assets/images/products/majordrone.png',
            background: '/assets/images/products/products-banner/viking-banner.png'
        },

        {
            name: 'Le Disrupteur',
            price: 900,
            image: '/assets/images/products/majordrone.png',
            background: '/assets/images/products/products-banner/disrupteur-banner.png'
        }
    ];

}