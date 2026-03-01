import React from 'react';
import { motion } from 'framer-motion';

const ClosingSection = () => {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem 2rem',
            background: 'linear-gradient(to top, #FAF8F5, #F2EBE1)',
            textAlign: 'center',
            color: '#4A4A4A',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3rem',
                    maxWidth: '800px'
                }}
            >
                <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.5)', borderRadius: '15px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.8)' }}>
                    <p style={{ fontFamily: "'Alex Brush', cursive", color: '#7DA28D', fontSize: '2.5rem', margin: '0 0 1rem 0' }}>
                        By the grace of Allah...
                    </p>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                        "And among His signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts): verily in that are signs for those who reflect."
                    </p>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#888', marginTop: '1rem', fontWeight: 'bold' }}>
                        (QS. Ar-Rum: 21)
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <h2 style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '4rem', margin: 0 }}>
                        A Little Prayer for Us
                    </h2>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#7DA28D', fontStyle: 'italic' }}>
                        Sakinah, Mawaddah, Warahmah
                    </p>
                </div>

                <p style={{ fontFamily: "'Lato', sans-serif", letterSpacing: '3px', fontSize: '1.2rem', color: '#B8A47E', marginTop: '4rem' }}>
                    #DIPilihZALma
                </p>
            </motion.div>
        </section>
    );
};

export default ClosingSection;
