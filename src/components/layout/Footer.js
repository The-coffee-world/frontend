import React, { Fragment } from 'react'

const Footer = () => {
    const year = new Date();
    return (
        <Fragment>
            <footer className="py-1">
                <p className="text-center mt-1">
                    The Coffee World - {year.getFullYear()}, All Rights Reserved
                </p>
            </footer>
        </Fragment>
    )
}

export default Footer
