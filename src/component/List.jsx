import React, { useEffect, useState } from 'react'

function List() {
  const  [product, setProduct]=useState([])

  useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                 .then(res=>res.json())
            .then(json => setProduct(json))
      console.log(product)
    }, [])
    
    

    return (
    <div>
            <section class="list">
                {product.slice(0,7)
                    .map((value, index) => (
                    <article>
                        <img class="img" src={value.image} />
                        <div className='brands'>
                            <h2 class="brand"> </h2>
                                <p>{value.title}</p>
                        </div>
                            <p class="price">{value.price}</p>
                    </article>
                ))}
    </section>
    </div>
  )
}

export default List
