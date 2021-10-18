import React from 'react';
import { useParams } from 'react-router';

function ProductDetail(props) {
    const params = useParams;

    console.log(params)
    
    return (
        <div>
            hey
        </div>
    )
}

export default ProductDetail;
