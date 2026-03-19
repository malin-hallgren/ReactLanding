import { useEffect, useState } from 'react';
import Card from '../cards/ExperienceCard';
import './ResumeContainer.css';
import Projects from '../../assets/Releases.json';
import Experiences from '../../assets/Experiences.json';
import Educations from '../../assets/Educations.json';


export default function ResumeContainer({ pageTitle }) {
    const [projects, setProjects] = useState([]);
    
        useEffect(() => {
            setProjects(Projects.releases ?? []);
        }, []);

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        setExperiences(Experiences.experiences ?? []);
    }, []);

    const [educations, setEducations] = useState([]);

    useEffect(() => {
        setEducations(Educations.educations ?? []);
    }, []);

    return (
        <section>
            <h3 id="resume-title">{pageTitle}</h3>
            <div className="resume-container">
                <Card title="Experience" bulletPoints={experiences.map((exp, i) => ({ key: i, pointTitle: exp.title, subpoint: exp.description ?? '' }))} />

                <Card title="Education" bulletPoints={educations.map((edu, i) => ({ key: i, pointTitle: edu.title, subpoint: edu.description ?? '' }))} />
                <Card title="Skills" bulletPoints={[{pointTitle:"Web Development"}, {pointTitle:"Software Development"}, {pointTitle:"Games and Interactive Design"}, {pointTitle:"Copy and Narrative Writing"}, {pointTitle:"Programming", subpoint:"C#, HTML, CSS, JavaScript/React, Python, SQL, C/C++"}]} />
                <Card title="Releases & Projects" bulletPoints={projects.map((rel, i) => ({ key: i, pointTitle: rel.title, subpoint: '' }))} />
            </div>
        </section>
        
    );
}