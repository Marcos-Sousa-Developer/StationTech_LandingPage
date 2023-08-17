import React from 'react'

function ProductsSlide1() {
  return (
    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
                        <div class="card bg-black text-white p-6 pb-8"><img class="card-img" src={require('../../img//blaze.png')} alt="..."/>
                          <div class="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                            <h6 class="text-primary" style={{fontSize: "20px"}}>1.99€ / month</h6>
                            <h4 class="text-light text-uppercase">Blaze Double ROBOT</h4>
                          </div><a class="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
                        <div class="card bg-black text-white p-6 pb-8"><img class="card-img" src={require('../../img//blaze.png')} alt="..."/>
                          <div class="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                            <h6 class="text-primary" style={{fontSize: "20px"}}>1.99€ / month</h6>
                            <h4 class="text-light text-uppercase">Blaze Crash ROBOT</h4>
                          </div><a class="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
                        <div class="card bg-black text-white p-6 pb-8"><img class="card-img" src={require('../../img/foot.png')} alt="..." />
                          <div class="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                            <h6 class="text-primary" style={{fontSize: "20px"}}>Coming soon</h6>
                            <h4 class="text-light text-uppercase">FOOTball PREDICTIONS ROBOT</h4>
                          </div><a class="stretched-link" href="#"></a>
                        </div>
                      </div>
                      
                    </div>
  )
}

export default ProductsSlide1