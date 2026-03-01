import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Copy, CheckCircle2 } from 'lucide-react';

const GiftSection = () => {
    const [copiedAccount, setCopiedAccount] = useState(null);

    const handleCopy = (text, accountName) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(accountName);
        setTimeout(() => setCopiedAccount(null), 2000);
    };

    const BankCard = ({ bank, number, name, color }) => (
        <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '350px',
            borderTop: `4px solid ${color}`
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: color, fontWeight: 'bold', fontSize: '1.2rem', fontFamily: "'Lato', sans-serif" }}>
                <CreditCard size={24} />
                {bank}
            </div>
            <div style={{ fontSize: '1.5rem', fontFamily: 'monospace', letterSpacing: '2px', color: '#4A4A4A' }}>
                {number}
            </div>
            <div style={{ color: '#888', fontFamily: "'Playfair Display', serif", fontSize: '0.9rem' }}>
                a.n {name}
            </div>
            <button
                onClick={() => handleCopy(number, bank)}
                style={{
                    marginTop: '0.5rem',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '20px',
                    background: copiedAccount === bank ? '#7DA28D' : '#F2EBE1',
                    color: copiedAccount === bank ? 'white' : '#555',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                }}
            >
                <AnimatePresence mode="wait">
                    {copiedAccount === bank ? (
                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <CheckCircle2 size={16} />
                        </motion.div>
                    ) : (
                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Copy size={16} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {copiedAccount === bank ? 'Copied!' : 'Copy Account'}
            </button>
        </div>
    );

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '6rem 2rem',
            background: '#FAF8F5',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
            >
                <h2 style={{ fontFamily: "'Alex Brush', cursive", color: '#C69C9B', fontSize: '4.5rem', margin: 0 }}>
                    Wedding Gift
                </h2>
                <p style={{ fontFamily: "'Playfair Display', serif", color: '#7DA28D', fontSize: '1.2rem', maxWidth: '500px', lineHeight: '1.6', fontStyle: 'italic' }}>
                    Your blessing and presence are the greatest gifts to us. However, if you wish to give a gift to express your joy, you may send it through the following accounts:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem', width: '100%', alignItems: 'center' }}>
                    <BankCard bank="BCA" number="0123456789" name="Wa Ode Zalmawati" color="#005A9C" />
                    <BankCard bank="JAGO" number="9876543210" name="Wa Ode Zalmawati" color="#F26522" />
                </div>
            </motion.div>
        </section>
    );
};

export default GiftSection;
