import React from 'react'

export default function Notfound() {
  return (
    <div>
      <h2>Your Cart</h2>
      <div className="d-flex">
        {cart.length > 0 ? (
         <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log('Slide changed')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {cart.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="product card" style={{ width: '18rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <img 
                    src={item.details.mainImage.secure_url} 
                    className="card-img-top" 
                    alt={item.details.name}
                    style={{ height: '350px', objectFit: 'cover' }}  
                  />
                  <div className="card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
                    <h5 className="card-title">{item.details.name}</h5>
                    <p className="card-text">{item.details.price}$</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}
