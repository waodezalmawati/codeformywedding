import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
    })
};

const GalleryPage = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 8 images, but we paginate them absolutely.
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                background: '#FAF8F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                touchAction: 'none' // Prevent pull-to-refresh on mobile
            }}
        >
            <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.4 },
                            scale: { duration: 0.4 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        style={{
                            position: 'absolute',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            borderRadius: '12px',
                            backgroundColor: 'white'
                        }}
                    />
                </AnimatePresence>
            </div>

            <div className="gallery-controls" style={{
                marginTop: '1rem',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                zIndex: 10
            }}>
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#9C8968' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(-1)}
                    style={{
                        background: '#B8A47E',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        boxShadow: '0 4px 10px rgba(184, 164, 126, 0.4)'
                    }}
                >
                    <ChevronLeft size={24} />
                </motion.button>

                <div style={{ fontFamily: 'Playfair Display, serif', color: '#4A4A4A', fontSize: '1.2rem' }}>
                    {imageIndex + 1} / {images.length}
                </div>

                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#9C8968' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(1)}
                    style={{
                        background: '#B8A47E',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        boxShadow: '0 4px 10px rgba(184, 164, 126, 0.4)'
                    }}
                >
                    <ChevronRight size={24} />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default GalleryPage;
