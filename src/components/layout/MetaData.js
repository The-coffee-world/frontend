import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - THE-COFFEE-WORLD`}</title>
        </Helmet>
    )
}

export default MetaData
