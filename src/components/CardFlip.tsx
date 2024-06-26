'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface FlipCardProps {
    frontImage: string;
    backImage: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontImage, backImage }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div onClick={handleClick} style={{ perspective: '1000px', width: '190px', height: '254px', margin: '10px' }}>
            <div
                className="relative w-full h-full"
                style={{
                    transition: 'transform 0.7s',
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'none'
                }}
            >
                <div className="absolute flex justify-center items-center w-full h-full bg-blue-500 text-white" style={{ backfaceVisibility: 'hidden' }}>
                    <Image src={frontImage} alt="Front of card" layout="fill" objectFit="cover"/>
                </div>
                <div className="absolute flex justify-center items-center w-full h-full bg-red-500 text-white" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                }}>
                    <Image src={backImage} alt="Back of card" layout="fill" objectFit="cover"/>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
