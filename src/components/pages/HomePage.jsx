
import ResumeContainer from '../containers/ResumeContainer';
import LargeCard from '../cards/LargeCard.jsx';

export default function HomePage() {
    return (
        <>
            
            {
                <LargeCard
                    title="Malin Hallgren"
                    subtitle="-Fullstack Developer"
                    text="Curious, driven and ambitious. A relentless focus on useability and function but also on the what's and why's in the mind of the user."
                    imgSrc="https://media.licdn.com/dms/image/v2/D4D03AQFMWb_9H6-Nnw/profile-displayphoto-scale_400_400/B4DZp0IlwHGgAg-/0/1762885001834?e=1774483200&v=beta&t=2WKtksRbyeAoAg6HYedwEW72TUVK2-QSnIrXYR9W44w"
                />
            }
            {<ResumeContainer pageTitle="Resume" />}
        </>
    );
}

