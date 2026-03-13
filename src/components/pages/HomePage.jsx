
import ResumeContainer from '../containers/ResumeContainer';
import LargeCard from '../cards/LargeCard.jsx';
import ProfilePicture from '../../assets/Profile.jpg';

export default function HomePage() {

    return (
        <>
            {
                <LargeCard
                    title="Malin Hallgren"
                    subtitle="-Fullstack Developer"
                    text="Curious, driven and ambitious. A relentless focus on useability and function but also on the what's and why's in the mind of the user."
                    imgSrc={ProfilePicture}
                    altTxt={"A picture of Malin, they are looking straight into the camera"}
                />
            }
            {<ResumeContainer pageTitle="Resume" />}
        </>
    );
}

