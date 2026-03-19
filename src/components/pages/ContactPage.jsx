import LargeCard from '../cards/LargeCard';
import FormContainer from '../containers/FormContainer';


export default function Contact() {
    
    return (
        <article>
            <LargeCard
                title="Reach out..."
                subtitle=""
                text={
                    <>
                        This part is still under construction! If you need to reach me, the easiest way is via{" "}
                        <a href="https://www.linkedin.com/in/malin-hallgren/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        .
                        <br />
                        <br />
                        The below contact form is NOT functional yet, please do not attempt to contact me that way :')
                    </>
                }
            />
            <FormContainer />
        </article>
    );
}
