
import ResumeContainer from './components/containers/ResumeContainer';
import RepoContainer from './components/containers/RepoContainer';
import ProjectContainer from './components/containers/ProjectContainer';
import HeaderContainer from './components/containers/HeaderContainer';
import LargeCard from './components/cards/LargeCard.jsx';
import HeroDark from './assets/HeroDark.jpg';
import HeroLight from './assets/HeroLight.jpg';
import HeroImg from './components/media/HeroImg.jsx';
import Footer from './components/containers/FooterContainer.jsx';

export default function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HeroImg filepath={HeroDark} alttext="Hero Image" />
      {/* ------------ Home page --------------- */}
      {/* <LargeCard 
        title="Malin Hallgren" 
        subtitle="-Fullstack Developer" 
        text="Curious, driven and ambitious. A relentless focus on useability and function but also on the what's and why's in the mind of the user." 
        imgSrc="https://media.licdn.com/dms/image/v2/D4D03AQFMWb_9H6-Nnw/profile-displayphoto-scale_400_400/B4DZp0IlwHGgAg-/0/1762885001834?e=1774483200&v=beta&t=2WKtksRbyeAoAg6HYedwEW72TUVK2-QSnIrXYR9W44w" 
      /> */}
      {/* <ResumeContainer pageTitle="Resume" /> */}
      {/* --------- Portfolio page ------------- */}
      {/* <ProjectContainer title="Portfolio" subtitle="Releases" />
      <RepoContainer title="" subtitle="Github Repos" /> */}
      {/* ----------- About page --------------- */}

      <LargeCard 
        title="Who is..." 
        subtitle="Malin?" 
        text={`Malin Hallgren, a game developer and fullstack developer in training. With a love for logical challenges and the intricracies of user interaction I've set out to become a more well rounded developer with skills informed by, but beyond only games.`+ '\n\n' +
          `Armed with knowledge and skills from both the games industry and a foray into art school I offer a unique set of skills and perspectives to any team I join. An endless stream of ''okay, but why? How?'' keeps me constantly learning and improving, ensuring a continuous direction; onwards.` + '\n\n' +
          `While not coding I'm most likely creating art, music, or out in nature enjoying some time away from the screen.A relentless focus on useability and function but also on the what's and why's in the mind of the user.`} 
        imgSrc="https://media.licdn.com/dms/image/v2/D4D03AQFMWb_9H6-Nnw/profile-displayphoto-scale_400_400/B4DZp0IlwHGgAg-/0/1762885001834?e=1774483200&v=beta&t=2WKtksRbyeAoAg6HYedwEW72TUVK2-QSnIrXYR9W44w" 
      />
      {/* ---------- Contact page -------------- */}
      {/* <LargeCard 
        title="Reach out..." 
        subtitle="" 
        text={`This part is still under construction! If you need to reach me, the easiest way is via LinkedIn.`+ '\n\n' +
          `The below contact form is NOT functional yet, please do not attempt to contact me that way :')`
        }
      /> */}
      <Footer />
    </div>
  )
}


