import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '../styles/blurb.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const BlurbBox = styled.section`
/* ====== Blurb Style 2 Settings ====== */
    /* ~  (Box Styling)  ~ */
        --blurb-s1-padding: 20px 20px 70px 20px;
        --blurb-s1-width: 99%;
        --blurb-s1-height: 99%;
        --blurb-s1-max-height: 100%;
        --blurb-s1-bg-color: #ffffffB3;
        --blurb-s1-border: none;
        --blurb-s1-border-radius: 10px 10px 26px 26px;
        --blurb-s1-box-shadow: none;
        --blurb-s1-margin: 1px 1px 10px 1px;
        transition: transform 0.3s ease-in, box-shadow 0.6s ease-in; 
        backdrop-filter: blur(3px);
        cursor: pointer;
    /* ----------~(end)~---------- */

    /* ~  (Box Hover Styling)  ~ */
        --blurb-s1-hover-bg-color: #f1f1f1;
        --blurb-s1-hover-box-shadow: 0 0 6px 0 #fff;
    /* ----------~(end)~---------- */

    :hover {
      transform: translate(0, -9px);
      transition: opacity 0.3s, transform 0.3s ease-in; 
    }
    
    /* ~  (Featured image)  ~ */
        --blurb-s1-img-width: 100%;
        --blurb-s1-img-height: auto;
        --blurb-s1-img-max_width: 200px;
        --blurb-s1-img-max_height: 100%;
        --blurb-s1-img-padding: 5px;
    /* ----------~(end)~---------- */

    /* ~  (Title Style)  ~ */
        --blurb-s1-title-padding: 0 10px 5px 10px;
        --blurb-s1-title-font-size: 24px;
        --blurb-s1-title-font-family: "Calibri";
        --blurb-s1-title-text-color: #333;
        --blurb-s1-title-text-align: center;      
        --blurb-s1-title-text-shadow: 0.5px 0.9px 1px #666;
    /* ----------~(end)~---------- */

    /* ~  (Text paragraph)  ~ */
      --blurb-s1-p-padding: 0 5px 0 5px;
      --blurb-s1-p-text-align: left;
      --blurb-s1-p-font-size: 18px;
      --blurb-s1-p-line-height: 1;
      --blurb-s1-p-text-color: #333;
      --blurb-s1-p-font-family: "Calibri";
      --blurb-s1-p-text-shadow: 0.5px 0.9px 1px #888;   
      --blurb-s1-last-p-margin: none; 
      --blurb-s1-p-span-text-align: left;
    /* ----------~(end)~---------- */

/* =================|END|================= */
`;

const sharedBlurbButtonStyle = css`
/* ~  (Button Style)  ~ */
    --blurb-s1-btn-width: 100%;
    --blurb-s1-btn-height: auto;
    --blurb-s1-btn-padding: 23px 30px 23px 30px;
    --blurb-s1-btn-color: ${(props) => props.btncolor};
    --blurb-s1-btn-text-align: center;
    --blurb-s1-btn-text-color: #fff;
    --blurb-s1-btn-text-shadow: -1px 0 #949494;
    --blurb-s1-btn-font-size: 18px;
    --blurb-s1-btn-border: none;
    --blurb-s1-btn-border-top-left-radius: none;
    --blurb-s1-btn-border-top-right-radius: none;
    --blurb-s1-btn-border-bottom-left-radius: 26px;
    --blurb-s1-btn-border-bottom-right-radius: 26px;
    --blurb-s1-btn-box-shadow: inset 0px 9px 8px -9px #666, inset 0 0 0 0 #000;
    --blurb-s1-btn-trasition: all 0.4s;

    .icon-center {
      text-align: center;
      vertical-align: middle;
      display: block;
    }
    
    /* ----------~(end)~---------- */

    /* ~  (Button Hover Style)  ~ */
    --blurb-s1-btn-hover-color: ${(props) => props.btnhover};
    --blurb-s1-btn-hover-opacity: 1;
    --blurb-s1-btn-hover-text-color: #fff;
    --blurb-s1-btn-hover-text-shadow: none;
    --blurb-s1-btn-hover-box-shadow: inset 0px 11px 8px -10px #5c5c5c, inset 0 0 0 0 #000; 
/* ----------~(end)~---------- */
`;

const TypeBlurbButton = styled.button`
  ${sharedBlurbButtonStyle}
`;

const TypeRouterLink = styled(Link)`
  ${sharedBlurbButtonStyle}
`;

const BlurbSingleCard = (props) => {
  let button;

  if (props.linkRef.includes("http://") || props.linkRef.includes("https://") || props.linkRef.includes(".") || props.linkRef.includes("//")) {
    button = 
    <TypeBlurbButton
      key={props.id} 
      className="blurb-button"
      btncolor={props.btncolor} 
      btnhover={props.btnhover} 
      as="a"
      href={props.linkRef}
      target="_blank"  
      rel="noopener noreferrer"
    >
      {props.btnText}
      <FontAwesomeIcon 
        className="right" 
        icon={faChevronCircleRight} 
        size="1x" 
      />
    </TypeBlurbButton>
    ;
  }
  else {
    button = 
    <TypeRouterLink 
      to={props.linkRef}
      key={props.id} 
      className="blurb-button" 
      btncolor={props.btncolor} 
      btnhover={props.btnhover}
    >
      {props.btnText}
      <FontAwesomeIcon 
        className="right" 
        icon={faChevronCircleRight} 
        size="1x" 
      />
    </TypeRouterLink>;
  }

  return (
    <BlurbBox className={`${props.gridColumn} blurb-style-s`} onClick={event => window.location.href = props.linkRef}>
      <header>
        <h3>{props.name}</h3>
      </header>
      <div className="section-image center">
        <img src={`/images/tools/${props.img}`} alt={`Service number ${props.id} is ${props.name}`} />
      </div>

      <p>
         Description: {props.descr}
      </p>
      {button}
    </BlurbBox>
  );
};

export default BlurbSingleCard;