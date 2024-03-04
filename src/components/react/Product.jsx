import React from 'react'

function Product(props) {
    const style ={
        width : "18rem",
    }

    return (

        <artice className="card-product" style={style}>
            <figure className="card-figure">
            <img src={props.product.img} className="card-img-top" alt="proteina"/>
            </figure>
            
            <main className="card-main">
            <h5 className="card-title">{props.product.name}</h5>
            <p className="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta.</p>
            <a href="#" className="card-button">Ver mas</a>
            </main>
        </artice>

    )
}

export default Product