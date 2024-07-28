import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { products } from '../data/products';
import './productlist.css';

const ProductList = () => {
  return (
    <div className="p-4">
      <Carousel 
        showArrows={true} 
        showThumbs={false} 
        autoPlay 
        infiniteLoop
        showStatus={true}
        className="carousel-wrapper"
      >
        <div>
          <img src="/tab1.jpg" alt="Slide 1" className="carousel-image" />
          <p className="legend">Welcome to Our Store</p>
        </div>
        <div>
          <img src="tab2.jpg" alt="Slide 2" className="carousel-image" />
          <p className="legend">Great Discounts Available</p>
        </div>
        <div>
          <img src="tab3.jpg" alt="Slide 3" className="carousel-image" />
          <p className="legend">Shop the Latest Trends</p>
        </div>
      </Carousel>

      <h2 className="med-head">Medicines</h2>
      <p className='med-side'>Raplets: Your trusted partner in health and wellness</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="product-card p-4">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-2" />
              <h3 className="text-xl">{product.name}</h3>
              <p className="font-semibold">Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

