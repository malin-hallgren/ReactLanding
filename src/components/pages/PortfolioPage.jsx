import ProjectContainer from '../containers/ProjectContainer.jsx'
import RepoContainer from '../containers/RepoContainer.jsx'

export default function Portfolio() {
    return (
        <>
            <ProjectContainer title="Portfolio" subtitle="Releases" />
            <RepoContainer title="" subtitle="Github Repos" />
        </>
    )
}

