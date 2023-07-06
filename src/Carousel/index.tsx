import React, { useEffect } from 'react';
import { ViewMain } from './Component/ViewMain';
import { Controller } from './Infraestructure/controller';

const ViewManager = () => {
    const controller = Controller();

    useEffect(() => {
        controller.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ViewMain
            configCarousel={controller.configCarousel}
        />
    )
}

export default ViewManager;