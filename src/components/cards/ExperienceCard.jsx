import './ExperienceCard.css';

export default function ExperienceCard({ title, bulletPoints = [pointTitle, subpoint] }) {
    return (
        <>
            <div className="experience-card">
                <h3 className='card-title'>{title}</h3>
                <ul>
                    {bulletPoints.map((point, i) => (
                        <li key={i}>
                            <strong>{point.pointTitle}</strong> 
                            <blockquote>{point.subpoint}</blockquote>
                        </li>
                    ))}
                </ul>
            </div>
        </>


    );
}