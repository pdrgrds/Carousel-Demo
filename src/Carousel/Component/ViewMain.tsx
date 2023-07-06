// Library
import React from 'react';
import Carousel from 'react-multi-carousel';

// Styles
import 'react-multi-carousel/lib/styles.css';
import './style.scss';

// Configure
import { configureResponsive } from '../Infraestructure/AdapterConfigure';

// Domain
import { EntityConfigCarousel } from '../Domain/EntityUtils';


interface ContainerProps {
    configCarousel: EntityConfigCarousel
}

export const ViewMain = (props: ContainerProps) => {
    
    return (
        <div className='ViewMainCarousel'>
            <h1>{props.configCarousel.title}</h1>

            <div className='GroupCarousel'>
                <Carousel
                    className='CarouselCustom'
                    swipeable={true}
                    // draggable={["Mobile", "Tablet"].includes(AdapterDetectDevice())}
                    responsive={configureResponsive}
                    ssr={true}
                    keyBoardControl={true}
                    transitionDuration={500}
                    infinite
                    showDots
                    itemClass="ItemCarouselCustom"
                >
                    {
                        props.configCarousel.data.map((row) => 
                            <a className='ContainerItemCarousel' href={row.pathRedirect} target='_blank' rel="noreferrer">
                                <div className='ItemCarousel'>
                                    <div className='GroupImage'>
                                        {
                                            row.descuento > 0 ?
                                            <div className='GroupDescuento'>
                                                <span>-{row.descuento}%</span>
                                            </div>
                                            : null
                                        }
                                        <img src={row.urlImage} alt="Not Source" />
                                    </div>
                                    <div className='GroupTextDetail'>
                                        <p className='TextProveedor'>{row.proveedor}</p>
                                        <p className='TextDescripcion'>{row.descripcion}</p>

                                        <div className='GroupDetailBottom'>
                                            { row.priceNormal > 0 ? <p className='TextPriceNormal'>Normal: ${row.priceNormal}</p> : null }
                                            { row.priceInternet > 0 ? <p className='TextPriceInternet'>Internet: ${row.priceInternet}</p> : null }
                                            { row.descuento > 0 ? <p className='TextPriceDescuento'>${row.priceNormal - row.descuento}</p> : null }
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                </Carousel>
            </div>
        </div>
    )
}