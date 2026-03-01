import React from 'react';
import { motion } from 'framer-motion';

const CoverSection = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4rem 2rem',
            background: 'linear-gradient(to bottom, #FAF8F5, #F2EBE1)',
            position: 'relative',
            overflow: 'hidden',
            color: '#4A4A4A',
            textAlign: 'center'
        }}>
            {/* Decorative Top Right - Placeholder for Floral */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(184,164,126,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p style={{ fontFamily: "'Alex Brush', cursive", color: '#7DA28D', fontSize: '2rem', margin: 0 }}>
                        With grateful hearts
                    </p>
                    <p style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '1.8rem', margin: '0.5rem 0' }}>
                        We invite you to witness our forever
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                        padding: '3rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                    }}
                >
                    <p style={{ fontFamily: "'Playfair Display', serif", textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1rem', color: '#888' }}>
                        A Celebration of Love
                    </p>
                    <h1 style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '6rem', margin: 0, lineHeight: '1.1' }}>
                        Zalma & Dipta
                    </h1>

                    <div style={{ marginTop: '2rem' }}>
                        <p style={{ fontFamily: "'Playfair Display', serif", color: '#7DA28D', fontSize: '1.5rem', margin: 0, fontWeight: 'bold' }}>
                            Sunday, <span style={{ fontSize: '2rem' }}>29</span><sup>th</sup> March 2026
                        </p>
                    </div>

                    <p style={{ fontFamily: "'Lato', sans-serif", color: '#A0A0A0', letterSpacing: '2px', fontSize: '1rem', marginTop: '1rem' }}>
                        #DIPilihZALma
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '2rem', margin: 0 }}>
                        Where our forever begins
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CoverSection;
