import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <section>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2>{project.title}</h2>
                    {project.video?.src && (
                        <figure className="video-container">
                            <iframe className="video" src={project.video.src}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            {project.video?.caption && <figcaption>{project.video.caption}</figcaption>}
                        </figure>
                    )}
                    {Array.isArray(project.description)
                        ? project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                        : <p>{project.description}</p>}
                    <ul>
                        {project.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button id="close-button" onClick={onClose}>x</button>
                </div>
            </div>
        </section>
    );
}
