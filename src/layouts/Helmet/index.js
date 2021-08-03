import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "../../components";

import { Helmet } from "react-helmet";

const HelmetLayout = ({ children, title, metaDescription }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            <>
                <Header/>
                {children}
                <Footer />
            </>
        </>
    );
};

HelmetLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
    metaDescription: PropTypes.string,
};

export default HelmetLayout;
