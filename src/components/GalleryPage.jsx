import React from 'react';
import { motion } from 'framer-motion';

import CoverSection from './sections/CoverSection';
import ProfileSection from './sections/ProfileSection';
import EventSection from './sections/EventSection';
import GiftSection from './sections/GiftSection';
import ClosingSection from './sections/ClosingSection';

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
                alignItems: 'center'
            }}
        >
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <CoverSection />
                <ProfileSection />
                <EventSection />
                <GiftSection />
                <ClosingSection />
            </div>
        </motion.div>
    );
};

export default GalleryPage;
