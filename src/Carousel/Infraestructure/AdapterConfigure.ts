import { EntityDataCarousel } from "../Domain/EntityUtils";

export const configureResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 5,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1200, min: 700 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

export const configureData: EntityDataCarousel[] = [
  {
    urlImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
    descripcion: 'Sleek and portable, Surface Laptop Go 2 features a 12.4” vibrant touchscreen and great typing experience',
    descuento: 0,
    pathRedirect: '/shop/laptop',
    priceInternet: 2000,
    priceNormal: 2499,
    proveedor: 'HP'
  },
  {
    urlImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
    descripcion: 'Sleek and portable, Surface Laptop Go 2 features a 12.4” vibrant touchscreen and great typing experience',
    descuento: 15,
    pathRedirect: '/shop/laptop',
    priceInternet: 2500,
    priceNormal: 2699,
    proveedor: 'Huawei'
  },
  {
    urlImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
    descripcion: 'Sleek and portable, Surface Laptop Go 2 features a 12.4” vibrant touchscreen and great typing experience',
    descuento: 0,
    pathRedirect: '/shop/laptop',
    priceInternet: 2000,
    priceNormal: 2499,
    proveedor: 'Acer'
  },
  {
    urlImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
    descripcion: 'Sleek and portable, Surface Laptop Go 2 features a 12.4” vibrant touchscreen and great typing experience',
    descuento: 0,
    pathRedirect: '/shop/laptop',
    priceInternet: 2000,
    priceNormal: 2499,
    proveedor: 'Alienware'
  },
  {
    urlImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
    descripcion: 'Sleek and portable, Surface Laptop Go 2 features a 12.4” vibrant touchscreen and great typing experience',
    descuento: 0,
    pathRedirect: '/shop/laptop',
    priceInternet: 2000,
    priceNormal: 2499,
    proveedor: 'Samsung'
  },
  {
    urlImage: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7',
    descripcion: 'Sleek and portable, Surface Laptop Go 2 features a 12.4” vibrant touchscreen and great typing experience',
    descuento: 0,
    pathRedirect: '/shop/laptop',
    priceInternet: 1990,
    priceNormal: 2199,
    proveedor: 'ASUS'
  },
]