
import FlipCard from '../components/CardFlip';
import ParticleButton    from "@/components/ParticleButton";

export default function Home() {
    return (
        <main>
        <div className="flex justify-center items-center py-20" style={{ display: 'flex', flexDirection: 'row' }}>
            <FlipCard frontImage="/card1.jpg" backImage="/card2.jpg"/>
            <FlipCard frontImage="/card1.jpg" backImage="/card2.jpg"/>

        </div>
            <section>
                <ParticleButton minParticles={20} maxParticles={30} particleIcons={['💪', '🍒', '🐬', '🍆', '🍣']} />

            </section>
        </main>




    );
}
