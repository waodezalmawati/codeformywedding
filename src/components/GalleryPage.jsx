import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

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
        y: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        y: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
    })
};

const GalleryPage = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [showControls, setShowControls] = useState(true);
    const timeoutRef = useRef(null);

    const wakeControls = useCallback(() => {
        setShowControls(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // Auto-hide controls after 1s of inactivity on phone mode
        if (window.innerWidth <= 768) {
            timeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 1000);
        }
    }, []);

    useEffect(() => {
        wakeControls();
        window.addEventListener('resize', wakeControls);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            window.removeEventListener('resize', wakeControls);
        };
    }, [wakeControls]);

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
            onPointerMove={wakeControls}
            onTouchStart={wakeControls}
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
                            y: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.4 },
                            scale: { duration: 0.4 }
                        }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.y, velocity.y);

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
                position: 'fixed',
                right: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
                zIndex: 10,
                opacity: showControls ? 1 : 0,
                pointerEvents: showControls ? 'auto' : 'none',
                transition: 'opacity 0.5s ease'
            }}>
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#9C8968' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(-1)}
                    style={{
                        background: 'rgba(184, 164, 126, 0.4)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <ChevronUp size={24} />
                </motion.button>

                <div style={{ fontFamily: 'Playfair Display, serif', color: '#4A4A4A', fontSize: '1.2rem', backgroundColor: 'rgba(250, 248, 245, 0.4)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '5px 10px', borderRadius: '5px' }}>
                    {imageIndex + 1} / {images.length}
                </div>

                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#9C8968' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => paginate(1)}
                    style={{
                        background: 'rgba(184, 164, 126, 0.4)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <ChevronDown size={24} />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default GalleryPage;
