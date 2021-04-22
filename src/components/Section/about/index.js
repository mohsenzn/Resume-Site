import React from 'react';
import Tab from '../../elements/tab'
import AboutPic from '../../../assets/images/about/about-8.jpg'
const index = () => {
    let title = 'About Me',
        description = 'I am a creative, imaginative, and ambitious Front-End with a talent for thinking outside the box and coming up with innovative ideas and designs. I  have worked in the design industry for the past 1 years. I pride myself on giving excellent service to all stakeholders and seeing the positive impact.';
    return (
        <>
              {/* Start About Area */}
              <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container-fluid">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src={AboutPic} alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <Tab tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}
        </>
    );
}

export default index;
