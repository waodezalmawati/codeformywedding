import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, CalendarDays } from 'lucide-react';

const EventSection = () => {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem 1rem',
            background: '#F2EBE1', // Slightly darker to simulate paper backdrop
            position: 'relative',
        }}>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    background: '#FAF8F5',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    padding: '4rem 2rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Paper Texture Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    opacity: 0.4,
                    backgroundImage: 'radial-gradient(#EAE4D9 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                    {/* Akad Nikah */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                        <h3 style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '3.5rem', margin: 0 }}>
                            Akad Nikah
                        </h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7DA28D', fontFamily: "'Lato', sans-serif" }}>
                            <CalendarDays size={18} />
                            <span>Sunday, 29th March 2026</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7DA28D', fontFamily: "'Lato', sans-serif" }}>
                            <Clock size={18} />
                            <span>09.00 AM - Until End</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#555', fontFamily: "'Playfair Display', serif", marginTop: '1rem' }}>
                            <MapPin size={24} color="#C69C9B" />
                            <strong style={{ fontSize: '1.2rem' }}>Residence of the Bride</strong>
                            <span>Desa Lambusango Timur</span>
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '1px', background: 'rgba(184, 164, 126, 0.3)' }} />

                    {/* Reception */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                        <h3 style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '3.5rem', margin: 0 }}>
                            Wedding Reception
                        </h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7DA28D', fontFamily: "'Lato', sans-serif" }}>
                            <CalendarDays size={18} />
                            <span>Sunday, 29th March 2026</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7DA28D', fontFamily: "'Lato', sans-serif" }}>
                            <Clock size={18} />
                            <span>11.00 AM - Until End</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#555', fontFamily: "'Playfair Display', serif", marginTop: '1rem' }}>
                            <MapPin size={24} color="#C69C9B" />
                            <strong style={{ fontSize: '1.2rem' }}>Residence of the Bride</strong>
                            <span>Desa Lambusango Timur</span>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default EventSection;
