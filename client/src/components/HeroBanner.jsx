import React from 'react';

const HeroBanner = () => {
  return (
    <section
      style={{
        height: '60vh',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Step Into Style</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          Discover the freshest kicks in town
        </p>
        <a
          href="/products"
          style={{
            backgroundColor: '#6b21a8',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.375rem',
            color: 'white',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
