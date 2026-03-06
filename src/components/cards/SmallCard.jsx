import './SmallCard.css';

export default function SmallCard({ title, description, language, link, webpage }) {
    return (
        <div className="small-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {typeof webpage === 'string' && webpage.trim() !== '' && (
                <p><a href={webpage} target="_blank" rel="noopener noreferrer">View Webpage</a></p>
            )}
            <div className="project-stats">
                <p>Language: {language}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View Repository
                </a>
            </div>
        </div>
    );
}
