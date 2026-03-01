import React from 'react';
import { motion } from 'framer-motion';

const images = [
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.webp',
    '/images/4.webp',
    '/images/5.webp',
    '/images/6.webp',
    '/images/7.webp',
    '/images/8.webp',
];

const GalleryPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
                width: '100%',
                background: '#FAF8F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: 0,
                padding: 0,
            }}
        >
            <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            width: '100%',
                            display: 'flex',
                            margin: 0,
                            padding: 0,
                            lineHeight: 0,
                        }}
                    >
                        <img
                            src={src}
                            alt={`Invitation page ${index + 1}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                margin: 0,
                                padding: 0,
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default GalleryPage;
