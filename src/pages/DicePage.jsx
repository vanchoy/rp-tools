import styled from 'styled-components';

import { Dice3D } from '../components/Dice3D';
import DicePack from '../components/DicePack';

import bgImage from '../assets/images/tools-background6.jpg';

const CustomDiceSection = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: #fff;
  --section-bg-s1-bg_image: url(${bgImage});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: normal;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;
  border-bottom: 2px dashed #999;

  h1 {
    --section-text-margin: 0 auto;
    --section-text-padding: 10px 20px 10px 20px;
    --section-text-display: block;
    --section-text-color: #278cd4;
    --section-font_family: inherit;
    --section-font_size: 26px;
    --section-font_weight: bold;
    --section-font_style: normal;
    --section-text_align: center;
    --section-text_decoration: none;
    --section-text_shadow: 1px 1px 1px #e1e1e1;
    --section-text-line_height: 1.5;
  }

  h2 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0 20px 10px 20px;
    --section-text-display: block;
    --section-text-color: #888;
    --section-font_family: inherit;
    --section-font_size: 20px;
    --section-font_weight: normal;
    --section-font_style: oblique;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px #d9d9d9;
    --section-text-line_height: 1.3;
  }

  p {
    --section-text-margin: 0 auto;
    --section-text-padding: 10px;
    --section-text-display: block;
    --section-text-color: #000;
    --section-font_family: inherit;
    --section-font_size: 16px;
    --section-font_weight: bold;
    --section-font_style: normal;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: none;
    --section-text-line_height: 1.5;
  }

  /* For more settings go to ["styles/index.scss"] */
`;

const DiceSection3D = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 40px 20px;
  --section-bg-s1-bg_color: rgba(0,0,0,0.06);
  --section-bg-s1-bg_image: url(${bgImage});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: #e0b700;
      --section-font_family: inherit;
      --section-font_size: 26px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px #e1e1e1;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 0 20px;
      --section-text-display: block;
      --section-text-color: #888;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d9d9d9;
      --section-text-line_height: 1.3;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 16px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: none;
      --section-text-line_height: 1.5;
    }

    /* For more settings go to ["styles/index.scss"] */
`;

const DicePage = () => {
  return (
    <>
      <CustomDiceSection className="grid section">
        <header className="grid-col-all">
          <h1>
           Check out our dice
          </h1>
          <h2>
            Click on each to roll the die
          </h2>
        </header>
        <div className="grid-col-all center">
          <DicePack />
        </div>
      </CustomDiceSection>

      <DiceSection3D className="grid section">
        <header className="grid-col-all">
          <h1>
           Check out our 3D dice roller
          </h1>
          <h2>
            Click on the button to roll all the dice or press on each for individual roll
          </h2>
        </header>
        <div className="grid-col-all center">
          <Dice3D/>
        </div>
      </DiceSection3D>
    </>
  );
};

export default DicePage;