import React, { useState } from 'react'

function List() {
  const  [product, setProduct]=useState([])

   fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

    return (
    <div>
      <section class="list">
                <article>
                    <img class="img" src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"/>
                  <div className='brands'>
                      <h2 class="brand">Product 1 </h2>
                      <p>Brand</p>
                  </div>  
                    <p class="price">120£</p>
                </article>
                <article>
                    <img class="img" src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"/>
                  <div className='brands'>
                      <h2 class="brand">Product 2 </h2>
                      <p>Brand</p>
                  </div>  
                    <p class="price">120£</p>
                </article>
                <article>
                    <img class="img" src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"/>
                  <div className='brands'>
                      <h2 class="brand">Product 3 </h2>
                      <p>Brand</p>
                  </div>  
                    <p class="price">120£</p>
                </article>
                <article>
                    <img class="img" src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"/>
                  <div className='brands'>
                      <h2 class="brand">Product 4 </h2>
                      <p>Brand</p>
                  </div>  
                    <p class="price">120£</p>
                </article>
                <article>
                    <img class="img" src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"/>
                  <div className='brands'>
                      <h2 class="brand">Product 5 </h2>
                      <p>Brand</p>
                  </div>  
                    <p class="price">120£</p>
                </article>
                <article>
                    <img class="img" src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"/>
                  <div className='brands'>
                      <h2 class="brand">Product 6 </h2>
                      <p>Brand</p>
                  </div>  
                    <p class="price">120£</p>
                </article>
                <article>
                    <img class="img" src="https://previews.123rf.com/images/sudowoodo/sudowoodo1607/sudowoodo160700031/59697785-petite-ic%C3%B4ne-de-chiot-illustration-vectorielle-simple-mignon-dessin-anim%C3%A9-chien-v%C3%A9t%C3%A9rinaire-ou-anima.jpg"/>
                  <div className='brands'>
                      <h2 class="brand">Product 7 </h2>
                      <p>Brand</p>
                  </div>  
                    <p class="price">120£</p>
                </article>
    </section>
    </div>
  )
}

export default List
