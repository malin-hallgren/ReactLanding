import ProjectContainer from '../containers/ProjectContainer.jsx'
import RepoContainer from '../containers/RepoContainer.jsx'

export default function Portfolio() {
    return (
        <article>
            <section>
                <ProjectContainer title="Portfolio" subtitle="Releases" />
            </section>
            <section>
                <RepoContainer title="" subtitle="Github Repos" />
            </section>
        </article>
    )
}

