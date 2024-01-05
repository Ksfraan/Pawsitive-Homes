import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ViewportSizeContext = createContext();

export const ViewportSizeContextProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    const isMobileMediaQuery = window.matchMedia('(max-width: 767px)').matches;

    useEffect(() => {
        isMobileMediaQuery && setIsMobile(true);
    }, [isMobileMediaQuery]);

    return (
        <ViewportSizeContext.Provider value={{ isMobile }}>
            {children}
        </ViewportSizeContext.Provider>
    );
};

ViewportSizeContextProvider.propTypes = {
    children: PropTypes.object.isRequired,
};
