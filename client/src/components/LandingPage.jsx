import React from 'react';
import logo from '../assets/ripperdoc-logo-dark.svg';

const LandingPage = () => {
  const handleGetStarted = () => {
    window.location.href = '/register';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="landing-page">
      {/* Modern Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="RipperDoc Logo" className="logo-image" />
            <span className="logo-text">RipperDoc</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <button onClick={handleLogin} className="btn btn-ghost">Login</button>
            <button onClick={handleGetStarted} className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Modern Layout */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🏥 Advanced Healthcare Technology</span>
            </div>
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">RipperDoc</span> – Advanced Healthcare Management Platform
            </h1>
            <p className="hero-subtitle">
              Streamline medical operations, enhance patient care, and improve healthcare delivery with our comprehensive platform designed for modern healthcare facilities.
            </p>
            <div className="hero-cta">
              <button onClick={handleGetStarted} className="btn btn-primary btn-large">
                <span>Request Demo</span>
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Healthcare Facilities</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Patients Served</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon">🏥</div>
                <div className="card-text">Patient Portal</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">👨‍⚕️</div>
                <div className="card-text">Staff Dashboard</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🤖</div>
                <div className="card-text">AI Assistant</div>
              </div>
            </div>
            <div className="hero-gradient-orb"></div>
          </div>
        </div>
      </header>

      {/* Modern Features Section */}
      <section id="features" className="features">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose RipperDoc?</h2>
            <p className="section-subtitle">Comprehensive healthcare management solutions designed for modern medical facilities</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon primary">🏥</div>
                <h3>Patient Management</h3>
              </div>
              <p>Comprehensive patient portal with secure access to medical records, appointment scheduling, and health information management.</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon success">👨‍⚕️</div>
                <h3>Staff Dashboard</h3>
              </div>
              <p>Advanced dashboard for healthcare professionals with patient management, medical records, and administrative tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon info">🤖</div>
                <h3>AI-Powered Assistant</h3>
              </div>
              <p>Intelligent medical assistant providing real-time support for healthcare professionals and patients.</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon warning">💊</div>
                <h3>Prescription Management</h3>
              </div>
              <p>Comprehensive medication and prescription tracking system for pharmacists and healthcare providers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon danger">🔒</div>
                <h3>Secure Platform</h3>
              </div>
              <p>Enterprise-grade security with HIPAA compliance and advanced data protection measures.</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon primary">📊</div>
                <h3>Analytics & Reporting</h3>
              </div>
              <p>Advanced analytics and reporting tools for healthcare performance monitoring and decision making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="security-assurance">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Security & Compliance</h2>
            <p className="section-subtitle">Built with healthcare security standards in mind</p>
          </div>
          <div className="certifications-grid">
            <div className="certification-badge">
              <div className="cert-icon">🔒</div>
              <h3>HIPAA Compliant</h3>
              <p>Full compliance with healthcare privacy regulations and data protection standards</p>
            </div>
            <div className="certification-badge">
              <div className="cert-icon">🛡️</div>
              <h3>Enterprise Security</h3>
              <p>Advanced security measures including encryption, access controls, and audit trails</p>
            </div>
            <div className="certification-badge">
              <div className="cert-icon">📋</div>
              <h3>ISO 27001 Certified</h3>
              <p>International standard for information security management systems</p>
            </div>
            <div className="certification-badge">
              <div className="cert-icon">⚡</div>
              <h3>High Availability</h3>
              <p>99.9% uptime guarantee with redundant infrastructure and disaster recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="challenges">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Platform Capabilities</h2>
            <p className="section-subtitle">Comprehensive healthcare management features</p>
          </div>
          <div className="challenges-grid">
            <div className="challenge-category">
              <div className="challenge-header">
                <div className="difficulty-badge beginner">🏥</div>
                <h3>Patient Portal</h3>
              </div>
              <p>Secure patient access to medical records and healthcare services</p>
              <div className="challenge-list">
                <div className="challenge-item">Medical Records Access</div>
                <div className="challenge-item">Appointment Scheduling</div>
                <div className="challenge-item">Prescription Management</div>
                <div className="challenge-item">Health Information</div>
                <div className="challenge-item">Secure Messaging</div>
              </div>
            </div>
            <div className="challenge-category">
              <div className="challenge-header">
                <div className="difficulty-badge intermediate">👨‍⚕️</div>
                <h3>Healthcare Staff</h3>
              </div>
              <p>Comprehensive tools for healthcare professionals</p>
              <div className="challenge-list">
                <div className="challenge-item">Patient Management</div>
                <div className="challenge-item">Medical Records</div>
                <div className="challenge-item">Treatment Planning</div>
                <div className="challenge-item">Clinical Documentation</div>
                <div className="challenge-item">Staff Collaboration</div>
              </div>
            </div>
            <div className="challenge-category">
              <div className="challenge-header">
                <div className="difficulty-badge advanced">🤖</div>
                <h3>AI Integration</h3>
              </div>
              <p>Advanced AI capabilities for healthcare assistance</p>
              <div className="challenge-list">
                <div className="challenge-item">Medical AI Assistant</div>
                <div className="challenge-item">Diagnostic Support</div>
                <div className="challenge-item">Treatment Recommendations</div>
                <div className="challenge-item">Health Analytics</div>
                <div className="challenge-item">Predictive Medicine</div>
              </div>
            </div>
          </div>
          <div className="challenges-cta">
            <button onClick={handleGetStarted} className="btn btn-primary btn-large">
              <span>Request Platform Demo</span>
              <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Modern Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by healthcare professionals nationwide</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">💬</div>
                <p>"RipperDoc has transformed our healthcare delivery. The patient portal has improved patient engagement significantly."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">D</div>
                <div className="author-info">
                  <div className="author-name">Dr. Sarah Johnson</div>
                  <div className="author-role">Chief Medical Officer</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">🔍</div>
                <p>"The AI assistant has been invaluable for our medical staff. It streamlines our workflow and improves patient care."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <div className="author-name">Dr. Michael Chen</div>
                  <div className="author-role">Medical Director</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">🏆</div>
                <p>"The platform's security and compliance features give us confidence in managing sensitive patient data."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">L</div>
                <div className="author-info">
                  <div className="author-name">Lisa Rodriguez</div>
                  <div className="author-role">IT Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide Section */}
      <section className="setup-guide">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Getting Started</h2>
            <p className="section-subtitle">Quick setup for healthcare facilities</p>
          </div>
          <div className="setup-steps">
            <div className="setup-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Contact Our Team</h3>
                <p>Schedule a consultation with our healthcare technology specialists</p>
              </div>
            </div>
            <div className="setup-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Platform Demo</h3>
                <p>Experience the full capabilities of RipperDoc in a personalized demo</p>
              </div>
            </div>
            <div className="setup-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Seamless deployment with our expert implementation team</p>
              </div>
            </div>
          </div>
          <div className="setup-cta">
            <button onClick={handleGetStarted} className="btn btn-primary btn-large">
              <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Contact Sales Team
            </button>
            <button onClick={handleGetStarted} className="btn btn-secondary">
              <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="disclaimer">
        <div className="section-container">
          <div className="disclaimer-content">
            <h2>Contact RipperDoc</h2>
            <p>
              Ready to transform your healthcare facility? Contact our team to learn more about how RipperDoc can enhance your medical operations and improve patient care.
            </p>
            <div className="disclaimer-badges">
              <span className="badge">Free Consultation</span>
              <span className="badge">Custom Implementation</span>
              <span className="badge">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="RipperDoc Logo" className="footer-logo-image" />
              <span className="footer-logo-text">RipperDoc</span>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#testimonials">Testimonials</a>
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleGetStarted}>Request Demo</button>
            </div>
            <p>&copy; 2024 RipperDoc - Advanced Healthcare Management Platform</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .landing-page {
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--color-deep-breach);
          background: var(--gradient-background-light);
          overflow-x: hidden;
        }

        /* Modern Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-teal-zero-20);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-image {
          height: 32px;
          width: auto;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--color-obscure-note);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: var(--color-teal-zero);
          background: var(--color-teal-zero-10);
        }

        /* Modern Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.75rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-primary {
          background: var(--gradient-cta);
          color: white;
          box-shadow: var(--shadow-teal);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-teal-hover);
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .btn-ghost {
          background: transparent;
          color: var(--color-obscure-note);
          border: 1px solid var(--color-obscure-note-30);
        }

        .btn-ghost:hover {
          background: var(--color-foggy-records);
          border-color: var(--color-teal-zero);
          color: var(--color-teal-zero);
        }

        .btn-icon {
          width: 18px;
          height: 18px;
        }

        /* Hero Section */
        .hero {
          padding: 8rem 2rem 6rem;
          background: var(--gradient-hero);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, var(--color-breach-red-10) 0%, var(--color-yellow-flag-10) 100%);
          border: 1px solid var(--color-breach-red);
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-breach-red);
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--color-deep-breach);
        }

        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-obscure-note);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .hero-cta {
          margin-bottom: 3rem;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .stat-card {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 1rem;
          backdrop-filter: blur(8px);
          border: 1px solid var(--color-teal-zero-20);
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 800;
          background: var(--gradient-danger);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--color-obscure-note);
          font-weight: 500;
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          height: 500px;
        }

        .floating-cards {
          position: relative;
          height: 100%;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 1.5rem;
          border-radius: 1.5rem;
          border: 1px solid var(--color-teal-zero-20);
          box-shadow: var(--shadow-card);
          animation: float 6s ease-in-out infinite;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .card-icon {
          font-size: 1.5rem;
        }

        .card-text {
          font-weight: 600;
          color: var(--color-deep-breach);
        }

        .card-1 {
          top: 10%;
          left: 0;
          animation-delay: 0s;
        }

        .card-2 {
          top: 35%;
          right: 10%;
          animation-delay: 2s;
        }

        .card-3 {
          bottom: 15%;
          left: 15%;
          animation-delay: 4s;
        }

        .hero-gradient-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--color-teal-zero), var(--color-insecure-mint), var(--color-breach-red));
          border-radius: 50%;
          opacity: 0.1;
          blur: 100px;
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Sections */
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: var(--gradient-text-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--color-obscure-note);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Features Section */
        .features {
          padding: 6rem 0;
          background: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: linear-gradient(135deg, #ffffff 0%, var(--color-foggy-records) 100%);
          border: 1px solid var(--color-teal-zero-20);
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, var(--color-breach-red) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-elevated);
          border-color: var(--color-teal-zero);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .feature-icon.danger {
          background: linear-gradient(135deg, var(--color-breach-red-10) 0%, var(--color-breach-red-20) 100%);
          border: 1px solid var(--color-breach-red-30);
          color: var(--color-breach-red);
        }

        .feature-icon.warning {
          background: linear-gradient(135deg, var(--color-yellow-flag-10) 0%, var(--color-yellow-flag-20) 100%);
          border: 1px solid var(--color-yellow-flag-30);
          color: var(--color-yellow-flag);
        }

        .feature-icon.info {
          background: linear-gradient(135deg, var(--color-teal-zero-10) 0%, var(--color-insecure-mint-10) 100%);
          border: 1px solid var(--color-teal-zero-30);
          color: var(--color-teal-zero);
        }

        .feature-icon.success {
          background: linear-gradient(135deg, var(--color-teal-zero-10) 0%, var(--color-insecure-mint-10) 100%);
          border: 1px solid var(--color-teal-zero-30);
          color: var(--color-teal-zero);
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-deep-breach);
          margin: 0;
        }

        .feature-card p {
          color: var(--color-obscure-note);
          line-height: 1.6;
          margin: 0;
        }

        /* Testimonials Section */
        .testimonials {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--color-foggy-records) 0%, var(--color-teal-zero-10) 100%);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid var(--color-teal-zero-20);
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--color-teal-zero);
        }

        .testimonial-content {
          margin-bottom: 1.5rem;
        }

        .quote-icon {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .testimonial-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-deep-breach);
          margin: 0;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .author-name {
          font-weight: 600;
          color: var(--color-deep-breach);
        }

        .author-role {
          font-size: 0.875rem;
          color: var(--color-obscure-note);
        }

        /* Footer */
        .footer {
          background: linear-gradient(135deg, var(--color-deep-breach) 0%, #1a3f56 100%);
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-logo-image {
          height: 32px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .footer-logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          text-decoration: none;
          color: var(--color-obscure-note);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--color-teal-zero);
          background: var(--color-teal-zero-10);
        }

        .footer-disclaimer {
          text-align: center;
        }

        .warning-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: var(--color-breach-red-20);
          border: 1px solid var(--color-breach-red);
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-breach-red);
          margin-bottom: 1rem;
        }

        .footer-disclaimer p {
          color: var(--color-obscure-note);
          line-height: 1.6;
          margin: 0;
        }

        .footer-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .feature-badge {
          padding: 0.5rem 1rem;
          background: var(--color-teal-zero-20);
          border: 1px solid var(--color-teal-zero-30);
          border-radius: 0.5rem;
          font-size: 0.875rem;
          text-align: center;
          color: var(--color-teal-zero);
        }

        /* Security Assurance Section */
        .security-assurance {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--color-breach-red-10) 0%, var(--color-yellow-flag-10) 100%);
          border-top: 2px solid var(--color-breach-red-30);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .certification-badge {
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid var(--color-breach-red);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .certification-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--color-breach-red) 0%, var(--color-yellow-flag) 50%, var(--color-breach-red) 100%);
        }

        .certification-badge:hover {
          transform: translateY(-8px) rotate(1deg);
          box-shadow: var(--shadow-elevated);
          border-color: var(--color-yellow-flag);
        }

        .cert-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }

        .certification-badge h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-breach-red);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .certification-badge p {
          color: var(--color-deep-breach);
          line-height: 1.5;
          font-weight: 500;
        }

        /* Security Challenges Section */
        .challenges {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--color-teal-zero-10) 0%, var(--color-foggy-records) 100%);
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .challenge-category {
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid var(--color-teal-zero-30);
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .challenge-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .challenge-category:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-elevated);
          border-color: var(--color-teal-zero);
        }

        .challenge-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .difficulty-badge {
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: 2px solid;
        }

        .difficulty-badge.beginner {
          background: #e8f5e8;
          color: #2e7d32;
          border-color: #4caf50;
        }

        .difficulty-badge.intermediate {
          background: #fff8e1;
          color: #f57c00;
          border-color: #ff9800;
        }

        .difficulty-badge.advanced {
          background: #ffebee;
          color: #c62828;
          border-color: #f44336;
        }

        .challenge-category h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-deep-breach);
          margin: 0;
        }

        .challenge-category > p {
          color: var(--color-obscure-note);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .challenge-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .challenge-item {
          padding: 0.75rem 1rem;
          background: var(--color-teal-zero-10);
          border: 1px solid var(--color-teal-zero-20);
          border-radius: 0.75rem;
          color: var(--color-deep-breach);
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
        }

        .challenge-item::before {
          content: '🎯';
          margin-right: 0.5rem;
        }

        .challenge-item:hover {
          background: var(--color-teal-zero-20);
          border-color: var(--color-teal-zero);
          transform: translateX(4px);
        }

        .challenges-cta {
          text-align: center;
        }

        /* Setup Guide Section */
        .setup-guide {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--color-foggy-records) 0%, var(--color-teal-zero-10) 100%);
        }

        .setup-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .setup-step {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--color-teal-zero-20);
          border-radius: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .setup-step:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--color-teal-zero);
        }

        .step-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-teal-zero);
          background: var(--color-teal-zero-10);
          border: 1px solid var(--color-teal-zero-20);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-deep-breach);
          margin-bottom: 0.5rem;
        }

        .step-content p {
          color: var(--color-obscure-note);
          line-height: 1.6;
          margin: 0;
        }

        .setup-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn-secondary {
          background: var(--color-teal-zero-10);
          color: var(--color-teal-zero);
          border: 1px solid var(--color-teal-zero-20);
        }

        .btn-secondary:hover {
          background: var(--color-teal-zero-20);
          border-color: var(--color-teal-zero);
          color: var(--color-teal-zero);
        }

        /* Contact Section */
        .disclaimer {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--color-teal-zero-10) 0%, var(--color-foggy-records) 100%);
        }

        .disclaimer-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .disclaimer-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--color-deep-breach);
        }

        .disclaimer-content p {
          font-size: 1.1rem;
          color: var(--color-obscure-note);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .disclaimer-badges {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background: var(--color-teal-zero-20);
          border: 1px solid var(--color-teal-zero-30);
          border-radius: 2rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-teal-zero);
          box-shadow: var(--shadow-teal);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-title {
            font-size: 2.75rem;
          }

          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }

          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 1rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .nav-link {
            display: none;
          }

          .hero {
            padding: 6rem 1rem 4rem;
          }

          .hero-title {
            font-size: 2.25rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .section-container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2.25rem;
          }

          .features-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage; 