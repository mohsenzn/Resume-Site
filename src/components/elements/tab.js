import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class tab extends Component {
    render() {
        let 
        tab1 = "Main skills",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props;
        return (
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                    <a href="/service">The front end of a website <span> - Front-End</span></a>
                                                    HTML, CSS, and JavaScript being controlled by your computer’s browser.
                                                </li>
                                                <li>
                                                    <a href="/service">Interaction design <span> - Animation</span></a>
                                                    I like to move it move it.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                 



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Wordpress<span> - Freelancing</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Wordpress<span> - Freelancing</span></a> 2019
                                               </li>
                                               <li>
                                                   <a href="/service">Front-end Engineer<span> - Freelancing </span></a> 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">BSc In CSE<span> - Azad University, Ahvaz</span></a> 2019
                                               </li>
                                               <li>
                                                   <a href="/service">Diploma in Computer Science<span> - Zafar Technical Institute</span></a> 2010
                                               </li>
                    
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        );
    }
}

export default tab;
