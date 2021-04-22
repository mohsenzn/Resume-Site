import React from 'react';
import TextLoop from "react-text-loop";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
const index = () => {
    return (
        <>
                    {/* Start Slider Area   */}
                    <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Mohsen Zergani <br/>
                                            <TextLoop>
                                                <span> JS Developer.</span>
                                                <span> FrondEnd.</span>
                                                <span> Web Developer.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>based in IRAN.</h2>
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 
        </>
    );
}

export default index;
