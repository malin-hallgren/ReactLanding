import SmallCard from '../cards/SmallCard.jsx';
import './RepoContainer.css';
import { useEffect, useState } from 'react';

export default function RepoContainer({ title, subtitle }) {


    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/malin-hallgren/repos")
            .then(response => response.json())
            .then(data => {
                setRepos(data.filter(repo => repo.language !== null));
            })
            .catch(error => {
                console.error("Error fetching repositories:", error);
            })
    }, []);


    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="repo-container">
                {
                    repos.map((repo) => (
                        <SmallCard
                            key={repo.id}
                            title={repo.name}
                            description={repo.description}
                            webpage={repo.homepage}
                            language={repo.language}
                            link={repo.html_url} />
                    ))
                }
            </div>
        </>
    );
}