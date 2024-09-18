import React from 'react';
import styled from 'styled-components'
import Navbar from './Nav';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <IconBar>
        <a target="_blank" href="mailto:nsdc@vcet.edu.in" className="gmail">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/vcet-nsdc" className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
        <a title="instagram" target="_blank" href="https://www.instagram.com/vcet.nsdc">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </IconBar>

      <Main>
        <Navbar/>
        <BackgroundVideo
          id="bgVideo"
          preload="true"
          autoPlay
          loop
          muted

          style={{
            position: "fixed",
            zIndex: "1"
          }}
        >
          <source src="img/bg_video.mp4" type="video/mp4" />
        </BackgroundVideo>


        <ContentWrapper>
        <Section id="home">
          <HeroSection>
            <HeroImgWrapper>
              <img src="img/logo.png" alt="" />
            </HeroImgWrapper>
            <HomeTitleText>
              VCET
              <br />
              Artificial Intelligence & Data Science's
              <br />
              National Student Data Corps
            </HomeTitleText>
            <HomeTitleSubtext>
              VCET's first Student Chapter for Data Visualization and Machine Learning
              <br />
              from the brand new branch of Artificial Intelligence &amp; Data Science
            </HomeTitleSubtext>
            <HomeDriverText>"Data beats emotions."</HomeDriverText>
            <HomeButton>
              <button onClick={() => window.location.href='#about'}>
                About Us &nbsp;&nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </HomeButton>
          </HeroSection>
        </Section>

        <OuterDiv>
          <InnerDiv></InnerDiv>
        </OuterDiv>

        <AboutSection id="about">
          <AboutHeader>
            <h2>About NSDC</h2>
            <span></span>
          </AboutHeader>
          <AboutContent>
            <p>
              The <b>National Student Data Corps (NSDC)</b> stands as a beacon of opportunity, ushering students into the vibrant world of data science within a nurturing community. With a keen eye towards empowering underserved institutions and students, NSDC offers a transformative journey filled with resources and support.
            </p>
            <br />
            <p>
              At its heart lies the NSDC Founding Committee, a dynamic assembly of 24 luminaries hailing from academia, industry, and nonprofits. Their collaborative spirit fuels the creation of a pioneering platform, uniting diverse perspectives to craft a groundbreaking program in data science, set to redefine inclusivity and innovation.
            </p>
          </AboutContent>
          <hr />
          <About2Header>
            <h2>Our Vision</h2>
            <span></span>
          </About2Header>
          <About2Content>
            <p>
              VCET-NSDC, the Professional Student Chapter, represents a gateway to the world of Data Science and Artificial Intelligence. It's not just a chapter; it is a community of learning and growth. This professional chapter is part of a global network of 650+ chapters! This gives our students wide exposure and the chance to communicate and collaborate globally.
              <br />
              The main aim of VCET-NSDC is to foster budding AI Engineers by providing them the opportunities to learn, explore, collaborate and enhance their skills in the field of Artificial Intelligence and Data Science.
            </p>
          </About2Content>
        </AboutSection>
        </ContentWrapper>
        <Footer/>
      </Main>
    </>
  );
};

// Styled components
const IconBar = styled.div`
  position: fixed;
  top: 60%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
  border: 2px solid #9056f0;
  border-radius: 10px;

  a {
    display: block;
    text-align: center;
    padding: 10px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;

    &:hover {
      background: #fff;
      transition: 0.05s ease-in;
      color: #9056f0 !important;
      cursor: pointer;
    }
  }
`;

const Main = styled.main`
  background-color: #000000;
`;

const BackgroundVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  width: auto;
  min-width: 100%;
  height: auto;
  min-height: 100%;
  z-index: 1;
  background-size: cover;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;


const Section = styled.section`
  width: 100%;
`;

const HeroSection = styled.div`
  position: relative;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;
`;

const HeroImgWrapper = styled.div`
  max-width: 16rem;
  min-width: 5rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const HomeTitleText = styled.div`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

const HomeTitleSubtext = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
`;

const HomeDriverText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  margin: 3rem 0;
  color: #9056f0;
`;

const HomeButton = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    padding: 0.4rem 1.2rem;
    border-radius: 1rem !important;
    border: 4px solid #9056f0;
    background-color: #7838df;
    color: white;
    cursor: pointer;
  }
`;

const OuterDiv = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
  background: #7f45db;
  position: relative;
`;

const InnerDiv = styled.div`
  width: 180%;
  height: 100%;
  border-radius: 50%;
  background: #000000;
  position: absolute;
  left: -45%;
  top: -100px;
`;

const AboutSection = styled.section`
  background: #7f45db;
  padding-bottom: 200px !important;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 16px rgba(94, 94, 95, 0.8);
`;

const AboutHeader = styled.div`
  h2 {
    font-size: 36px;
    font-weight: bold;
  }

  span {
    background: #303030 none repeat scroll 0 0;
    display: block;
    height: 2px;
    margin-top: 25px;
    position: relative;
    width: 20%;
    text-align: center;
    align-items: center;
    justify-content: center;
    left: 40%;
    margin-bottom: 30px !important;

    &::after {
      background: inherit;
      content: "";
      height: inherit;
      position: absolute;
      top: -4px;
      width: 50%;
    }
  }
`;

const AboutContent = styled.div`
  p {
    font-size: 22px;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const About2Header = styled(AboutHeader)``;

const About2Content = styled(AboutContent)``;

export default Home;
