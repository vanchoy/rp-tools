import styled from 'styled-components';

import NameGen from '../components/NameGen';

import toolsImage from '../assets/images/tools-background5.jpg';
import npcAlaya from '../assets/images/npc-3.png';

const NameGeneratorSection = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 30px 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.2);
  --section-bg-s1-bg_image: url(${toolsImage});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;

  h1 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0 20px 10px 20px;
    --section-text-display: block;
    --section-text-color: #333;
    --section-font_family: inherit;
    --section-font_size: 26px;
    --section-font_weight: bold;
    --section-font_style: normal;
    --section-text_align: center;
    --section-text_decoration: none;
    --section-text_shadow: 1px 1px 1px #999;
    --section-text-line_height: 1.5;
  }

  h2 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0 20px 0 20px;
    --section-text-display: block;
    --section-text-color: #fff;
    --section-font_family: inherit;
    --section-font_size: 20px;
    --section-font_weight: normal;
    --section-font_style: oblique;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px #999;
    --section-text-line_height: 1.3;
  }

  p {
    --section-text-margin: 0 auto;
    --section-text-padding: 10px;
    --section-text-display: block;
    --section-text-color: #000;
    --section-font_family: inherit;
    --section-font_size: 22px;
    --section-font_weight: normal;
    --section-font_style: normal;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: none;
    --section-text-line_height: 1.5;
  }

  .textBox {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px 20px 30px 20px;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: 1px dashed rgba(255,255,255,0.3);
    backdrop-filter: blur(3px);
    box-shadow: 9px 9px 13px 0 rgb(255 255 255 / 25%), -9px -9px 13px 0 rgb(255 255 255 / 25%);

    
    .oblique-text {
      color: #796a7a;
      font-style: oblique;
      font-size: 20px;
    }
  }

  .npcImg {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const NameGenerator = () => {

  return (
    <>
      <NameGeneratorSection className="grid section">
        <header className="grid-col-all">
          <h1>Hi Adventurer! You don't have a name?</h1>
          <h2>Click the button bellow to generate it</h2>
        </header>
        <NameGen className="grid-col-3-8 textBox grid-col-center" />
        <img className="grid-col-8-12 npcImg" src={npcAlaya} alt="TGW logo" />
      </NameGeneratorSection>
    </>
  );

};

export default NameGenerator;