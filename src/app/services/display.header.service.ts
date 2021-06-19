export interface HeaderInformations {
    path: string;
    image: string;
    title: string;
    subtitle: string;
}

export class DisplayHeaderService {

    private headerInformations: HeaderInformations[] = [
        {
           
            path: '/',
            image: "/assets/images/banners/main-page-banner.png",
            title: "Capturez des moments depuis de nouveaux points",
            subtitle: "Capturez des moments depuis de nouveaux points"
        },

        {
          
            path: '/brand',
            image: "/assets/images/banners/brand-banner.png",
            title: "Serv'Drone",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },

        {
            
            path: '/technology',
            image: "/assets/images/banners/technology-banner.png",
            title: "Notre technologie",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },

        {
            
            path: '/support',
            image: "/assets/images/banners/support-banner.png",
            title: "Support",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },

        {
            
            path: '/shop',
            image: "/assets/images/banners/shop-banner.png",
            title: "Boutique",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }

        

    ];

    getHeaderInfoByPath(path: string) : HeaderInformations | undefined {
        return this.headerInformations
                .find(element => element.path === path);
    }
}