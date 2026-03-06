import Card from '../cards/MediumCard.jsx';
import ProjectModal from '../modals/ProjectModal.jsx';
import './ProjectContainer.css';
import Projects from '../../assets/Releases.json';
import { useEffect, useState } from 'react';

export default function ProjectContainer({ title, subtitle }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    function openModal(project) {
        setSelectedProject(project);
        setIsModalOpen(true);
    }

    function closeModal() {
        setSelectedProject(null);
        setIsModalOpen(false);
    }

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(Projects.releases);
    }, []);

    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="project-container">
                {
                    projects.map((project) => (
                        <Card
                            key={project.title}
                            title={project.title}
                            bulletPoints={project.responsibilities}
                            project={project}
                            onOpenModal={openModal} />

                    ))
                }

                {isModalOpen && selectedProject && (
                    <ProjectModal project={selectedProject} onClose={closeModal} />
                )}
            </div>
        </>
    );
}