import React from 'react';
import { Helmet } from "react-helmet";

export default function PageTitle(props) {
    return (
        <Helmet>
          <title>{ props.title } | COVID-19 Tracker</title>
        </Helmet>
    )
}
