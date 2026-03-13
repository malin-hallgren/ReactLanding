import './MediumCard.css';

export default function MediumCard({ title, bulletPoints = [], project, onOpenModal }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <ul>
                {bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
            <button id="modal-button" type="button" onClick={() => onOpenModal(project)}>Click for more information</button>
        </div>

    );
}