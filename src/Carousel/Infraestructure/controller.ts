import { useState } from "react"
import { EntityConfigCarousel, initEntityConfigCarousel } from "../Domain/EntityUtils";
import { configureData } from "./AdapterConfigure";

export const Controller = () => {
    
    const [configCarousel, setConfigCarousel] = useState<EntityConfigCarousel>(initEntityConfigCarousel);
    const init = () => {
        setConfigCarousel(prev => ({
            data: configureData,
            title: "Productos vendidos"
        }))
    };

    return ({
        init,
        configCarousel
    })
}