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
            title: "Capturez des moments depuis de nouveaux points",
            subtitle: "Capturez des moments depuis de nouveaux points"
        },

        {
            
            path: '/technology',
            image: "/assets/images/banners/technology-banner.png",
            title: "Capturez des moments depuis de nouveaux points",
            subtitle: "Capturez des moments depuis de nouveaux points"
        }

    ];

    getHeaderInfoByPath(path: string) : HeaderInformations | undefined {
        return this.headerInformations
                .find(element => element.path === path);
    }
}