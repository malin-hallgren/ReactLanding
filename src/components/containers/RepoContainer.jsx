import SmallCard from '../cards/SmallCard.jsx';
import './RepoContainer.css';
import { useEffect, useState } from 'react';

export default function RepoContainer({ title, subtitle }) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeoutId = setTimeout(() => {
            fetch("https://api.github.com/users/malin-hallgren/repos")
                .then(response => response.json())
                .then(data => {
                    setRepos(data.filter(repo => repo.language !== null));
                })
                .catch(error => {
                    console.error("Error fetching repositories:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="repo-container">
                {loading ? (
                    <p>Loading repositories...</p>
                ) : (
                    repos.map((repo) => (
                        <SmallCard
                            key={repo.id}
                            title={repo.name}
                            description={repo.description}
                            webpage={repo.homepage}
                            language={repo.language}
                            link={repo.html_url} />
                    ))
                )}
            </div>
        </>
    );
}