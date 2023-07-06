export type EntityConfigCarousel = {
    title: string;
    data: EntityDataCarousel[];
}

export type EntityDataCarousel = {
    pathRedirect: string;
    urlImage: string;
    descuento: number;
    proveedor: string;
    descripcion: string;
    priceNormal: number;
    priceInternet: number;
}

export const initEntityConfigCarousel: EntityConfigCarousel = {
    title: "",
    data: []
}