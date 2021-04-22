import React,{Component} from 'react'
import {Helmet} from 'react-helmet';
class PageHelmet extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                <title>{this.props.pageTitle} || Mohsen Zergani</title>
                <meta name="description" content="Portfolio Mohsen Zergani Nejad"/>
                </Helmet>
            </React.Fragment>
        )
    }
}

export default PageHelmet;