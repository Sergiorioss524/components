'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ParticleButtonProps {
    minParticles: number;
    maxParticles: number;
    particleIcons: string[];
}

const ParticleButton: React.FC<ParticleButtonProps> = ({
                                                           minParticles,
                                                           maxParticles,
                                                           particleIcons,
                                                       }) => {
    const [particles, setParticles] = useState<string[]>([]);

    const handleClick = () => {
        const numParticles = Math.floor(
            Math.random() * (maxParticles - minParticles + 1) + minParticles
        );
        const newParticles = Array.from({ length: numParticles }, () =>
            particleIcons[Math.floor(Math.random() * particleIcons.length)]
        );
        setParticles(newParticles);

        // Clear particles after animation duration
        setTimeout(() => {
            setParticles([]);
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <button
                className="relative inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleClick}
            >
                Click Me
                {particles.map((particle, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%)`,
                            zIndex: 1000,
                        }}
                        animate={{
                            x: [0, Math.random() * 400 - 200],
                            y: [0, Math.random() * 400 - 200],
                            opacity: [1, 0],
                        }}
                        transition={{ duration: 1.5 }}
                    >
                        {particle}
                    </motion.div>
                ))}
            </button>
        </div>
    );
};

export default ParticleButton;
