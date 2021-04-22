import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";

const ScrollToup = () => {
    return (
        <>
               {/* Start Back To Top */}
               <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </>
    );
}

export default ScrollToup;
