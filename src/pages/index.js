import NavDropDown from '@/components/NavDropDown';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider} from '../styles/GlobalComponents';
import Education from '@/components/Education/Education';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Timeline />
      <Education/>
      <Projects />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
