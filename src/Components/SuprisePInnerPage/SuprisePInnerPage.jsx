import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './SuprisePinnerPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment } from '@fortawesome/free-solid-svg-icons';

// Default images
import image1 from '../../assets/ImageGallery/image1.jpg';
import image2 from '../../assets/ImageGallery/image2.jpg';
import image3 from '../../assets/ImageGallery/image3.jpg';
import image4 from '../../assets/ImageGallery/image4.jpg';


import reviewerImage from '../../assets/Reviews/reviewer.jpeg';
import similarImage from '../../assets/Reviews/similar.jpg';

const SuprisePInnerPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const images = [image1, image2, image3, image4];
  const [mainImage, setMainImage] = useState(product?.image || images[0]);
  const cards = [
    { title: "What's Included", content: "Details about what's included..." },
    { title: "FAQs", content: "Details about what's not included..." },
    { title: "Cancellation and Refund Policy", content: "Details about cancellation and refund policy..." },
    { title: "Other Useful Info", content: "Details about other useful info..." },
  ];
  const products = [
    {
      id: 1,
      name: "Extra 100 Balloons",
      price: "₹ 600",
      image: "https://via.placeholder.com/150/cake.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "15 Red Rose Bouquet",
      price: "₹ 800",
      image: "https://surpriseplanner.in/assets/photo/addon/addon_9055_1616137855.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "LED Love letters",
      price: "₹ 500",
      image: "https://via.placeholder.com/150/cake.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Cake",
      price: "₹ 700",
      image: "https://surpriseplanner.in/assets/photo/addon/addon_2651_1615218135.jpeg", // Replace with actual image URL
    },
    {
      id: 5,
      name: "1 Hour Photographer",
      price: "₹ 3500",
      image: "https://via.placeholder.com/150/cake.jpg", // Replace with actual image URL
    },
    {
      id: 6,
      name: "1 Hour Photographer",
      price: "₹ 3500",
      image: "https://via.placeholder.com/150/cake.jpg", // Replace with actual image URL
    },
    {
      id: 7,
      name: "1 Hour Photographer",
      price: "₹ 3500",
      image: "https://via.placeholder.com/150/cake.jpg", // Replace with actual image URL
    },
  ];
  
    const sliderRef = useRef(null);
  
    const scrollLeft = () => {
      sliderRef.current.scrollLeft -= 300; // Adjust the scroll amount as needed
    };
  
    const scrollRight = () => {
      sliderRef.current.scrollLeft += 300;
    };

    const [showAll, setShowAll] = useState(false);

    // Sample review data
    const reviews = [
      {
        name: 'Alex Iwobi',
        date: '2 March 2023 at 06:30 pm',
        rating: 5,
        comment: 'Thank you for the article that was made, it really provides insight and knowledge that I didn’t know before.',
        imgSrc: reviewerImage, // Use the imported image
      },
      // Add more reviews here
    ];
  
    // Duplicate the review data to simulate 10 reviews
    const allReviews = Array(10).fill(reviews[0]);
  
    // Determine reviews to display
    const reviewsToDisplay = showAll ? allReviews : allReviews.slice(0, 3);
  
    // Function to handle booking page navigation
    const handleBookingPage = () => {
      // Redirect or perform the action needed for the booking page
      window.location.href = '/booking'; // Example: Replace with actual booking page URL
    };
  
  return (
    <>
    <div className="image-gallery-container">
      <div className="image-preview">
        <img src={mainImage} alt={product?.name || 'Main View'} />
      </div>
      <div className="image-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setMainImage(image)}
            className={mainImage === image ? 'active' : ''}
          />
        ))}
      </div>

      <div className="product-details">
        <h1>{product?.name || 'Luxury Room'}</h1>
        <div className="mobile-carousel">
          <Carousel showThumbs={false}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
      </div>
        <h2>{product?.description || 'Designed to be a haven for the senses and an oasis of luxury.'}</h2>
        <p className="price">₹{product?.price || '23000'}/-</p>
        <div className="ratings">
          <span>⭐⭐⭐⭐⭐</span>
          <span>10 reviews</span>
        </div>
        <div className="actions">
          <a href="tel:9944894722" className="call">
            <button>
              <FontAwesomeIcon icon={faPhone} /> Tap to call
            </button>
          </a>
          <a href="https://wa.me/9944894722" className="text">
            <button>
              <FontAwesomeIcon icon={faComment} /> Tap to text
            </button>
          </a>
        </div>
        <p className="description">
          {product?.description ||
            'High-quality furnishings with opulent, expensive touches, attention to aesthetic detail, a quiet room with fresh air...'}
        </p>
      </div>

    </div>

    {/* Additional Information Cards */}

    <div className="Additional-Information-card-container">
      {cards.map((card, index) => (
        <div key={index} className="card" onClick={() => handleToggle(index)}>
          <div className="card-header">
            <h2>{card.title}</h2>
            <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <p className="card-content">{card.content}</p>}
        </div>
      ))}
    </div>


    {/* Addons Slider  */}
    <div className="Addons-slider-container">
      <button className="prev-btn" onClick={scrollLeft}>
        &#10094;
      </button>
      <div className="slider" ref={sliderRef}>
        {products.map((product) => (
          <div className="product-cards" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="booking-section">
              <input type="checkbox" id={`booking-${product.id}`} />
              <label htmlFor={`booking-${product.id}`}>Add to Booking</label>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
    

    {/* Reviews */}
    <div className="reviews-container">
      <div className="reviews-section">
        <h2>Reviews ({allReviews.length})</h2>
        {reviewsToDisplay.map((review, index) => (
          <div key={index} className="review">
            <img src={review.imgSrc} alt="reviewer" className="reviewer-img" />
            <div className="review-details">
              <h3>{review.name}</h3>
              <p className="rating">{'⭐'.repeat(review.rating)}</p>
              <p className="date">{review.date}</p>
              <p className="comment">{review.comment}</p>
            </div>
          </div>
        ))}
        {!showAll && (
          <button onClick={() => setShowAll(true)} className="read-more">
            Read More...
          </button>
        )}
      </div>
      <div className="similar-section">
        <h2>Similar</h2>
        <img src={similarImage} alt="Similar" className="similar-img" />
      </div>
      <button onClick={handleBookingPage} className="booking-button">
        Go to Booking Page
      </button>
    </div>
    </>
  );
};

export default SuprisePInnerPage;
