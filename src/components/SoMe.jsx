import styled from 'styled-components';
import '../styles/so-me.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SoMeSection = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 40px;
  --section-bg-s1-bg_color: #fff;
  --section-bg-s1-bg_image: none;
  --section-bg-s1-bg_attachment: normal;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: normal;
  --section-bg-s1-bg_size: none;
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
    --section-text_shadow: 1px 1px 1px #f9f9f9;
    --section-text-line_height: 1.5;
  }

  h2 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0 20px 0 20px;
    --section-text-display: block;
    --section-text-color: #999;
    --section-font_family: inherit;
    --section-font_size: 20px;
    --section-font_weight: normal;
    --section-font_style: oblique;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px #f9f9f9;
    --section-text-line_height: 1.3;
  }
`;

const SoMeLinksStyle = styled.li`
    --so-me-li-margin: 20px;
    --so-me-li-text-color: ${(props) => props.color};
    --so-me-li-text-color_hover: ${(props) => props.colorHover};
`;

const SoMe = () => {
  return (
    <SoMeSection className="grid section">
      <header className="grid-col-all">
        <h1>Follow us on SoMe</h1>
        <h2>Stay tuned for new updates and interesting content</h2>
      </header>
      <div className="grid-col-all">
        <ul className="soMeLinks center">
          <SoMeLinksStyle color="#999" colorHover="#3b5998">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
          </SoMeLinksStyle>

          <SoMeLinksStyle color="#999" colorHover="#00acee">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          </SoMeLinksStyle>

          <SoMeLinksStyle color="#999" colorHover="#8a3ab9">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </SoMeLinksStyle>
        </ul>
      </div>
    </SoMeSection>
  );
};

export default SoMe;