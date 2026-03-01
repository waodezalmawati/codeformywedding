import React from 'react';
import { motion } from 'framer-motion';

const ProfileSection = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem 2rem',
            background: '#FAF8F5',
            color: '#4A4A4A',
            textAlign: 'center',
            gap: '5rem'
        }}>
            {/* Bride */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    position: 'relative'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '-40px',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(198,156,155,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }} />

                <h2 style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '4.5rem', margin: 0, zIndex: 1 }}>
                    Wa Ode Zalmawati, S.Tr.T.
                </h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#7DA28D', fontSize: '1.3rem', maxWidth: '400px', lineHeight: '1.6', zIndex: 1 }}>
                    The cherished third daughter of <br /> Mr. La Ode Zalinun and Mrs. Wa Ode Mariati
                </p>
            </motion.div>

            {/* Separator */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: "'Alex Brush', cursive", color: '#B8A47E', fontSize: '4rem' }}
            >
                &
            </motion.div>

            {/* Groom */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    position: 'relative'
                }}
            >
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-40px',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(125,162,141,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }} />

                <h2 style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '4.5rem', margin: 0, zIndex: 1 }}>
                    Dipta Laksmana Baswara D., S.Kom.
                </h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#7DA28D', fontSize: '1.3rem', maxWidth: '400px', lineHeight: '1.6', zIndex: 1 }}>
                    The beloved second son of <br /> Mr. Sisdwiyantoro & Mrs. Herlian Wati
                </p>
            </motion.div>
        </section>
    );
};

export default ProfileSection;
