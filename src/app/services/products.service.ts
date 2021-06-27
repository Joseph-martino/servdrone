export interface Product {
    name: string;
    price: number;
    image: string;
    background: string;
    productCardBackground: string;
    feature1: string,
    feature2: string
}


export class ProductService {

    products: Product[] = [
        {
            name: 'Le Phoenix',
            price: 300,
            image: '/assets/images/products/servdrone-phoenix.png',
            background: '/assets/images/products/products-banner/phoenix-banner.png',
            productCardBackground: '/assets/images/products/products-banner/shop-viking-drone-banner.png',
            feature1: "Reconnaissance vocale",
            feature2: "Caméra haute définition"
            
        },

        {
            name: 'Le Viking',
            price: 450,
            image: '/assets/images/products/servrdone-viking.png',
            background: '/assets/images/products/products-banner/viking-banner.png',
            productCardBackground: '/assets/images/products/products-banner/shop-sr388-drone-banner.png',
            feature1: "3h d'autonomie",
            feature2: "Portée 300m" 
        },

        {
            name: 'Le Hanuman',
            price: 600,
            image: '/assets/images/products/servdrone-hanuman.png',
            background: '/assets/images/products/products-banner/hanuman-banner.png',
            productCardBackground: '/assets/images/products/products-banner/shop-hanuman-drone-banner.png',
            feature1: "Arme électrique intégrée",
            feature2: "Reconnaissance faciale"
        },

        {
            name: 'Le Disrupteur',
            price: 900,
            image: '/assets/images/products/servdrone-disrupteur.png',
            background: '/assets/images/products/products-banner/disrupteur-banner.png',
            productCardBackground: '/assets/images/products/products-banner/shop-disrupteur-drone-banner.png',
            feature1: "Connexion internet",
            feature2: "Prise de vue"
        }
    ];

}