import React from 'react';
import Contact from '../../elements/Contact'
const index = () => {
    return (
        <>
             {/* Start COntact Area */}
             <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <Contact contactImages="/blog/about-9.jpg" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End COntact Area */}
        </>
    );
}

export default index;
