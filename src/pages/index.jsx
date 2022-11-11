import { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { ButtonRegular } from '../components/buttons/ButtonRegular';
import BlurbCards from '../components/BlurbCards';

import heroImage from '../assets/images/tools-background1.jpg';
import npcAlaya from '../assets/images/npc.png';
import toolsImage from '../assets/images/tools-background.jpg';
import npcSalim from '../assets/images/salim.png';

const HeroSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
  --section-bg-s1-bg_image: url(${toolsImage});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 28px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px #8B4513;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 20px 20px;
      --section-text-display: block;
      --section-text-color: #333;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.3;
    }

    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 16px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: none;
      --section-text-line_height: 1.5;
    }

    a {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: inline-block;
      --section-text-color: #5C5D5D;
      --section-font_family: inherit;
      --section-font_size: inherit;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
      --section-text_decoration: underline;

      &:hover {
        --section-text-hover-color: #990000;
      }
    }

    .textBox {
      margin: 0 auto;
      padding: 20px;
      display: inline-block;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      border: 1px dashed rgba(255,255,255,0.3);
      backdrop-filter: blur(3px);
      box-shadow: 0 0 30px 0 rgba(255, 255, 255, 0.3);
      
      .oblique-text {
        font-style: oblique;
      }
    }

    .npcImg {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 80vh;
      margin: 0 auto;
      display: block;
    }

    /* For more settings go to ["styles/index.scss"] */
`;

const ArrowAnimated = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
  background-color: rgba(255,255,255,0.3);
  vertical-align: middle;

  border-radius: 50%;
  cursor: pointer;

  .arrow {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: arrowAnm;
  }

  @keyframes arrowAnm {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
  }
`;

const InfoSection = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 60px 20px;
  --section-bg-s1-bg_color: #fff;
  --section-bg-s1-bg_image: url(${npcSalim});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: multiply;
  --section-bg-s1-bg_size: auto;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 36px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 20px 20px;
      --section-text-display: block;
      --section-text-color: #222;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      --section-text-line_height: 1.3;
    }

    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 16px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: none;
      --section-text-line_height: 1.5;
    }

    a {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: inline-block;
      --section-text-color: #5C5D5D;
      --section-font_family: inherit;
      --section-font_size: inherit;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
      --section-text_decoration: underline;

      &:hover {
        --section-text-hover-color: #990000;
      }
    }

    .textBox {
      margin: 0 auto;
      padding: 20px 0 30px 0;
      display: inline-block;
      background: rgba(255, 254, 250, 0.7);
      border-radius: 4em 2em 4em / 1em 5em;
      border: 1px dashed rgba(224, 183, 0, 0.3);
      backdrop-filter: blur(6px);
      box-shadow: 0 0 30px 0 rgba(224, 183, 0, 0.1);
    }

    /* For more settings go to ["styles/index.scss"] */
`;

const ToolsSection = styled.section`
  
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 60px 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.3);
  --section-bg-s1-bg_image: url(${heroImage});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 26px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px #111;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 20px 20px;
      --section-text-display: block;
      --section-text-color: #fcfcfc;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #111;
      --section-text-line_height: 1.3;
    }

/* =================|END|================= */
`;

const MainPage = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"});   

  return (
    <>
      <HeroSectionStyle className="grid section">
        <header className="grid-col-3-8 grid-col-center">
          <h1 className="textBox">
            Hey, <em className="oblique-text">Adventurer!</em> Explore my FREE role-playing game tools!
            <br />
            <span className="oblique-text right">~ Alaya ~</span>  
          </h1>
        </header>
        <img className="grid-col-8-11 npcImg" src={npcAlaya} alt="NPC Alaya" />
        <ArrowAnimated className="grid-col-all center" onClick={executeScroll}>
          <div className="arrow"></div>
        </ArrowAnimated>
      </HeroSectionStyle>

      <InfoSection className="grid section">
        <header className="grid-col-4-10 textBox">
          <h1>
            Do you know what Role-playing game is?
          </h1>
          <h2>
            A role-playing game is a game in which the participants assume the roles of characters and collaboratively create stories. Participants determine the actions of their characters based on their characterisation, and the actions succeed or fail according to a formal system of rules and guidelines. Within the rules, they may improvise freely; their choices shape the direction and outcome of the games.
          </h2>
          <div className="center">
            <ButtonRegular linkRef="https://en.wikipedia.org/wiki/Role-playing" color="#278cd4" btnHover="#e0b700" btnText="Read more">
              <FontAwesomeIcon className="right" icon={faChevronCircleRight} size="1x" />
            </ButtonRegular>
          </div>
        </header>
      </InfoSection>

      <ToolsSection className="grid section" ref={myRef}>
        <header className="grid-col-all">
          <h1>Your tools matter!</h1>
          <h2>These are the available tools at the moment:</h2>
        </header>
        <BlurbCards />
      </ToolsSection>
    </>
  );
};

export default MainPage;