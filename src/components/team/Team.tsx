import styles from './team.module.scss';
import Image from 'next/image';

export default function Team() {
    const members = [
        {image: "/images/team_1.avif", name: "Alexandre Caron", position: "Dirigeant de CipherNet"},
        {image: "/images/team_2.avif", name: "Thomas Renaud", position: "Directeur de la sécurité réseau"},
        {image: "/images/team_3.avif", name: "Nicolas Lambert", position: "Expert en cybersécurité offensive"},
    ];

    return (
        <section id="team" className={styles['team']}>
            <h2>L&#39;équipe</h2>
            <div className={`grid ${styles['team__cards']}`}>
                {members.map((member, index) => (
                    <div key={index} className={styles['team__card']}>
                        <Image 
                            src={member.image}
                            width={1000}
                            height={1000}
                            alt={member.name}
                        />
                        <div className={styles['team__card__details']}>
                            <h3>{member.name}</h3>
                            <span className="text">
                                {member.position}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}