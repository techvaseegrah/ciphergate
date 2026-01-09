import React from 'react';
import { ArrowRight } from 'lucide-react';

const Communication = () => {
  const openGoWhats = () => {
    window.open('https://techvaseegrah.gowhats.in/login', '_blank', 'noopener,noreferrer');
  };

  const openInstaxbot = () => {
    window.open('https://techvaseegrah.instaxbot.com/', '_blank', 'noopener,noreferrer');
  };

  const containerStyle = {
    background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
    minHeight: '100vh',
    padding: '0',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    margin: 0,
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem 2rem',
    borderBottom: 'none',
    boxShadow: '0 2px 12px rgba(102, 126, 234, 0.15)',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0',
    letterSpacing: '-0.5px',
  };

  const contentStyle = {
    padding: '3rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  };

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    border: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  };

  const topRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  };

  const logoContainerStyle = {
    width: '80px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8f9fa',
    borderRadius: '12px',
    padding: '0.5rem',
  };

  const goWhatsLogoStyle = {
    width: '65px',
    height: '40px',
    objectFit: 'contain',
  };

  const instaxbotLogoStyle = {
    width: '100px',
    height: '40px',
    objectFit: 'contain',
  };

  const arrowButtonStyle = {
    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1f2937',
    margin: '0 0 1rem 0',
    letterSpacing: '-0.3px',
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
  };

  const handleHover = (e, isHovering) => {
    e.currentTarget.style.boxShadow = isHovering
      ? '0 8px 24px rgba(0, 0, 0, 0.12)'
      : '0 2px 8px rgba(0, 0, 0, 0.08)';
    e.currentTarget.style.transform = isHovering ? 'translateY(-4px)' : 'translateY(0)';
  };

  const handleButtonHover = (e, isHovering, color) => {
    if (isHovering) {
      e.currentTarget.style.background = color;
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      const arrow = e.currentTarget.querySelector('svg');
      if (arrow) arrow.style.color = '#ffffff';
    } else {
      e.currentTarget.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)';
      const arrow = e.currentTarget.querySelector('svg');
      if (arrow) arrow.style.color = '#374151';
    }
  };

  return (
    <div style={containerStyle}>
      {/* <div style={headerStyle}>
        <h1 style={titleStyle}>Client Communication Portal</h1>
      </div> */}

      <div style={contentStyle}>
        <div style={gridStyle}>
          {/* GoWhats Card */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <div style={topRowStyle}>
              <div style={logoContainerStyle}>
                <img src="/GoWhats.jpeg" alt="GoWhats Logo" style={goWhatsLogoStyle} />
              </div>
              <button
                style={arrowButtonStyle}
                onClick={openGoWhats}
                onMouseEnter={(e) => handleButtonHover(e, true, '#25D366')}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                <ArrowRight size={20} color="#374151" style={{ transition: 'color 0.3s ease' }} />
              </button>
            </div>
            <h2 style={cardTitleStyle}>GoWhats Platform</h2>
            <p style={descriptionStyle}>
              GoWhats helps teams connect with clients efficiently through organized chats, quick responses, and automated updates — ensuring clear, professional, and seamless daily communication.
            </p>
          </div>

          {/* Instaxbot Card */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <div style={topRowStyle}>
              <div style={logoContainerStyle}>
                <img
                  src="/Instaxbot.jpeg"
                  alt="Instaxbot Logo"
                  style={instaxbotLogoStyle}
                />
              </div>
              <button
                style={arrowButtonStyle}
                onClick={openInstaxbot}
                onMouseEnter={(e) => handleButtonHover(e, true, 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)')}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                <ArrowRight size={20} color="#374151" style={{ transition: 'color 0.3s ease' }} />
              </button>
            </div>
            <h2 style={cardTitleStyle}>Instaxbot Platform</h2>
            <p style={descriptionStyle}>
              InstaxBot allows employees to manage DMs, send replies, and track message history — making it easier to maintain consistent, personalized communication with clients directly through Instagram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;