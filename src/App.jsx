import React, { useEffect } from "react";
import "../styles.css";

function App() {
  useEffect(() => {
    // Add smooth scrolling for any internal links (if added in the future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add fade-in animation on scroll for elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all cards and features
    document.querySelectorAll('.info-card, .feature, .contact-item').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(element);
    });

    // Add hover effect for social links
    document.querySelectorAll('.social-link').forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
      });
    });

    // Console message for developers
    console.log('%cHearts & Costumes Event Website', 'font-size: 20px; font-weight: bold; color: #c41e3a;');
    console.log('%cBuilt for Cloudflare Pages deployment', 'font-size: 12px; color: #666;');
  }, []);

  return (
    <>
      <header className="hero">
        <div className="floating-heart">
          <div className="heart"></div>
        </div>
        <div className="container">
          <h1 className="hero-title">Hearts & Casks</h1>
          <p className="hero-subtitle">A Valentine's Day Costume Celebration</p>
          <div className="hero-divider"></div>
        </div>
      </header>

      <main>
        <section className="event-info">
          <div className="container">
            <h2 className="section-title">Event Details</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="icon" role="img" aria-label="Date">📅</div>
                <h3>Date</h3>
                <p>Saturday, February 14th, 2026</p>
              </div>
              <div className="info-card">
                <div className="icon" role="img" aria-label="Time">🕐</div>
                <h3>Time</h3>
                <p>7:00 PM - 12:00 AM</p>
              </div>
              <div className="info-card">
                <div className="icon" role="img" aria-label="Location">📍</div>
                <h3>Location</h3>
                <p><a href="https://thunderthighscostumes.com">Thunder Thighs Costume Shop</a><br />16 Busy St<br />Toronto<br />M4M 1N8</p>
              </div>
              <div className="info-card">
                <div className="icon" role="img" aria-label="Tickets">🎫</div>
                <h3>Tickets</h3>
                <p>Regular: TBD <br />VIP: TBD<br />18+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h2 className="section-title">About the Event</h2>
            <div className="about-content">
              <p>
                Join us for a magical Valentine's Day celebration at our costume shop! Browse our special collection of romantic costumes, enjoy themed activities, and find the perfect outfit for your Valentine's celebration.
              </p>
              <div className="features">
                <div className="feature">
                  <h3>💕 Romantic Costumes</h3>
                  <p>Explore the curated collection of costumes and romantic outfits</p>
                </div>
                <div className="feature">
                  <h3>🎭 Craft beers</h3>
                  <p>Enjoy a selection of craft beers to compliment your costume experience</p>
                </div>
                <div className="feature">
                  <h3>🍫 Sweet Treats</h3>
                  <p>Enjoy Valentine snacks and chocolates, and other refreshments</p>
                </div>
                <div className="feature">
                  <h3>📸 Photo Booth</h3>
                  <p>Capture memories with our themed Valentine's photo booth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <h3>📧 Email</h3>
                  <p>
                    <a href="mailto:info@heartsandcostumes.com">info@heartsandcasks.com</a>
                  </p>
                </div>
                <div className="contact-item">
                  <h3>📱 Phone</h3>
                  <p>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </p>
                </div>
                <div className="contact-item">
                  <h3>🌐 Social Media</h3>
                  <p>
                    <a href="#" className="social-link" aria-label="Follow us on Facebook (link to be added)">Facebook</a> •
                    <a href="#" className="social-link" aria-label="Follow us on Instagram (link to be added)">Instagram</a> •
                    <a href="#" className="social-link" aria-label="Follow us on Twitter (link to be added)">Twitter</a>
                  </p>
                </div>
              </div>
              <div className="contact-form-section">
                <h3>Have Questions?</h3>
                <p>
                  For inquiries about the event or general questions, please reach out via email or phone. We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 Hearts & Casks. All rights reserved.</p>
          <p className="footer-note">Celebrate love and creativity with us!</p>
        </div>
      </footer>
    </>
  );
}

export default App;
