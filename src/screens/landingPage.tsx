import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiChevronRight } from 'react-icons/fi';
import { FaShippingFast, FaHeadset, FaCreditCard, FaShieldAlt } from 'react-icons/fa';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import styles from './landingpage.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  specs: string[];
  image: string;
  rating: number;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
}

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories: Category[] = [
    { id: 1, name: 'Gaming Laptops', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Business Laptops', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Student Laptops', image: 'https://images.unsplash.com/photo-1587202372775-e229f1723e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Ultrabooks', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  ];

  const products: Product[] = [
    { id: 1, name: 'DS Computer Pro Gamer', price: 1499, specs: ['RTX 3080', '32GB RAM', '1TB SSD'], image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', rating: 4.5 },
    { id: 2, name: 'DS Computer Business Elite', price: 1299, specs: ['i7 Processor', '16GB RAM', '512GB SSD'], image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', rating: 4.2 },
    { id: 3, name: 'DS Computer Student Plus', price: 799, specs: ['i5 Processor', '8GB RAM', '256GB SSD'], image: 'https://images.unsplash.com/photo-1587202372775-e229f1723e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', rating: 4.0 },
    { id: 4, name: 'DS Computer Ultra Slim', price: 999, specs: ['M1 Chip', '16GB RAM', '512GB SSD'], image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', rating: 4.7 },
    { id: 5, name: 'DS Computer Creator Pro', price: 1799, specs: ['RTX 3070', '64GB RAM', '2TB SSD'], image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', rating: 4.8 },
    { id: 6, name: 'DS Computer Budget Plus', price: 599, specs: ['Ryzen 5', '8GB RAM', '256GB SSD'], image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', rating: 3.9 },
  ];

  const reviews: Review[] = [
    { id: 1, name: 'Alex Johnson', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', comment: 'The DS Computer Pro Gamer exceeded all my expectations. The performance is incredible!', rating: 5 },
    { id: 2, name: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', comment: 'Lightweight and powerful. Perfect for my design work.', rating: 4.5 },
    { id: 3, name: 'David Wilson', avatar: 'https://randomuser.me/api/portraits/men/67.jpg', comment: 'Great battery life and the keyboard is so comfortable to type on.', rating: 4 },
    { id: 4, name: 'Emily Chen', avatar: 'https://randomuser.me/api/portraits/women/28.jpg', comment: 'Fast delivery and excellent customer service. Will buy again!', rating: 5 },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<BsStarFill key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className={styles.appContainer}>
      {/* Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolledNavbar : ''}`}>
        <div className={styles.navContainer}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logoContainer}
          >
            <span className={styles.logoText}>DS<span className={styles.logoHighlight}>Computer</span></span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ScrollLink to="home" smooth={true} duration={500} className={styles.navLink}>Home</ScrollLink>
            <ScrollLink to="categories" smooth={true} duration={500} className={styles.navLink}>Categories</ScrollLink>
            <ScrollLink to="products" smooth={true} duration={500} className={styles.navLink}>Products</ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500} className={styles.navLink}>Why Us</ScrollLink>
            <ScrollLink to="reviews" smooth={true} duration={500} className={styles.navLink}>Reviews</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className={styles.navLink}>Contact</ScrollLink>
          </div>

          <div className={styles.navIcons}>
            <button className={styles.iconButton}>
              <FiSearch className={styles.navIcon} />
            </button>
            <button className={`${styles.iconButton} ${styles.cartButton}`}>
              <FiShoppingCart className={styles.navIcon} />
              <span className={styles.cartBadge}>3</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuButton} onClick={toggleMenu}>
            {isMenuOpen ? <FiX className={styles.menuIcon} /> : <FiMenu className={styles.menuIcon} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileMenuContainer}>
                <ScrollLink to="home" smooth={true} duration={500} className={styles.mobileNavLink} onClick={toggleMenu}>Home</ScrollLink>
                <ScrollLink to="categories" smooth={true} duration={500} className={styles.mobileNavLink} onClick={toggleMenu}>Categories</ScrollLink>
                <ScrollLink to="products" smooth={true} duration={500} className={styles.mobileNavLink} onClick={toggleMenu}>Products</ScrollLink>
                <ScrollLink to="features" smooth={true} duration={500} className={styles.mobileNavLink} onClick={toggleMenu}>Why Us</ScrollLink>
                <ScrollLink to="reviews" smooth={true} duration={500} className={styles.mobileNavLink} onClick={toggleMenu}>Reviews</ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className={styles.mobileNavLink} onClick={toggleMenu}>Contact</ScrollLink>
                <div className={styles.mobileIcons}>
                  <button className={styles.iconButton}>
                    <FiSearch className={styles.navIcon} />
                  </button>
                  <button className={`${styles.iconButton} ${styles.cartButton}`}>
                    <FiShoppingCart className={styles.navIcon} />
                    <span className={styles.cartBadge}>3</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Banner */}
      <section id="home" className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroBackground}>
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Laptop Banner"
            className={styles.heroImage}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className={styles.heroGradient}
          ></motion.div>
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              Unleash Your <span className={styles.heroTitleHighlight}>Performance</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Discover the perfect laptop for work, play, and everything in between.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.heroButtonContainer}
            >
              <ScrollLink
                to="products"
                smooth={true}
                duration={500}
                className={styles.heroButton}
              >
                Shop Now <FiChevronRight className={styles.buttonIcon} />
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Popular Categories</h2>
            <p className={styles.sectionDescription}>Find the perfect laptop for your needs from our wide selection of categories</p>
          </motion.div>

          <div className={styles.categoryGrid}>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={styles.categoryCard}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className={styles.categoryImage}
                />
                <div className={styles.categoryOverlay}>
                  <div>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <button className={styles.categoryButton}>
                      Explore <FiChevronRight className={styles.buttonIcon} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`${styles.section} ${styles.productsSection}`}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Top Selling Products</h2>
            <p className={styles.sectionDescription}>Check out our best-selling laptops with cutting-edge technology</p>
          </motion.div>

          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={styles.productCard}
              >
                <div className={styles.productImageContainer}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productBadge}>
                    Popular
                  </div>
                </div>
                <div className={styles.productDetails}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.productRating}>
                    {renderStars(product.rating)}
                    <span className={styles.ratingText}>({product.rating})</span>
                  </div>
                  <ul className={styles.specsList}>
                    {product.specs.map((spec, i) => (
                      <li key={i} className={styles.specItem}>
                        <span className={styles.specBullet}></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>${product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={styles.buyButton}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={`${styles.sectionTitle} ${styles.lightTitle}`}>Why Choose DS Computer?</h2>
            <p className={`${styles.sectionDescription} ${styles.lightDescription}`}>We provide the best service and products to meet all your computing needs</p>
          </motion.div>

          <div className={styles.featureGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={styles.featureCard}
            >
              <div className={`${styles.featureIcon} ${styles.shippingIcon}`}>
                <FaShippingFast className={styles.icon} />
              </div>
              <h3 className={styles.featureTitle}>Free Shipping</h3>
              <p className={styles.featureText}>Free delivery on all orders over $500</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={styles.featureCard}
            >
              <div className={`${styles.featureIcon} ${styles.supportIcon}`}>
                <FaHeadset className={styles.icon} />
              </div>
              <h3 className={styles.featureTitle}>24/7 Support</h3>
              <p className={styles.featureText}>Dedicated support anytime you need</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={styles.featureCard}
            >
              <div className={`${styles.featureIcon} ${styles.emiIcon}`}>
                <FaCreditCard className={styles.icon} />
              </div>
              <h3 className={styles.featureTitle}>EMI Options</h3>
              <p className={styles.featureText}>Flexible payment plans available</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={styles.featureCard}
            >
              <div className={`${styles.featureIcon} ${styles.warrantyIcon}`}>
                <FaShieldAlt className={styles.icon} />
              </div>
              <h3 className={styles.featureTitle}>Extended Warranty</h3>
              <p className={styles.featureText}>Up to 3 years warranty coverage</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Customer Reviews</h2>
            <p className={styles.sectionDescription}>What our customers say about our products and services</p>
          </motion.div>

          <div className={styles.reviewGrid}>
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.reviewCard}
              >
                <div className={styles.reviewHeader}>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className={styles.reviewAvatar}
                  />
                  <div>
                    <h4 className={styles.reviewName}>{review.name}</h4>
                    <div className={styles.reviewStars}>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className={styles.reviewText}>"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={`${styles.sectionTitle} ${styles.lightTitle}`}>Subscribe to Our Newsletter</h2>
            <p className={`${styles.sectionDescription} ${styles.lightDescription}`}>Stay updated with our latest products, deals, and tech news</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.newsletterFormContainer}
          >
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.newsletterInput}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={styles.newsletterButton}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerLogo}>DS<span className={styles.footerLogoHighlight}>Computer</span></h3>
              <p className={styles.footerText}>Providing high-quality laptops for every need since 2015.</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>
                  <AiOutlineFacebook className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <AiOutlineTwitter className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <AiOutlineInstagram className={styles.socialIcon} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <AiOutlineYoutube className={styles.socialIcon} />
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>Quick Links</h4>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>Home</a></li>
                <li><a href="#" className={styles.footerLink}>Products</a></li>
                <li><a href="#" className={styles.footerLink}>Categories</a></li>
                <li><a href="#" className={styles.footerLink}>About Us</a></li>
                <li><a href="#" className={styles.footerLink}>Contact</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>Customer Service</h4>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>FAQs</a></li>
                <li><a href="#" className={styles.footerLink}>Shipping Policy</a></li>
                <li><a href="#" className={styles.footerLink}>Return Policy</a></li>
                <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
                <li><a href="#" className={styles.footerLink}>Terms & Conditions</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>Contact Us</h4>
              <ul className={styles.footerContactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Plot 146, 146, Sector 44, Gurugram, Haryana 122003</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>+91 9987244539  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <span>info@DS Computer.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} DS Computer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;