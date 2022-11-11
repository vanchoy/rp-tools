import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '../../styles/buttons.scss';

const sharedButtonStyle = css`
  /* ====== BUTTONS SETTINGS ====== */
    /* ~  (Button Rectangle Style #1)  ~ */
      --btn-rec-s1-margin: 0 auto;
      --btn-rec-s1-padding: 15px;
      --btn-rec-s1-width: 200px;
      --btn-rec-s1-max-width: 100%;
      --btn-rec-s1-height: auto;
      --btn-rec-s1-bg: ${(props) => props.color};
      --btn-rec-s1-text-color: #ffffff;
      --btn-rec-s1-font-family: 'Gili Sans', sans-serif;
      --btn-rec-s1-font-size: 16px;
      --btn-rec-s1-text-align: center;
      --btn-rec-s1-text-shadow: -1px 0 #949494;
      --btn-rec-s1-position: relative; /* Edit only if you know what you are doing*/
      --btn-rec-s1-z-index: 0; /* Edit only if you know what you are doing */
      --btn-rec-s1-display: block; /* Edit only if you know what you are doing*/
      --btn-rec-s1-border: none;
      --btn-rec-s1-border-radius: 9px;
      --btn-rec-s1-cursor: pointer;
      --btn-rec-s1-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
      --btn-rec-s1-transition: all .6s;

      /* Button Rectangle Style Hover */
      --btn-rec-s1-hov-bg: ${(props) => props.btnHover};
      --btn-rec-s1-hov-opacity: 1;
      --btn-rec-s1-hov-text-color: #fff;
      --btn-rec-s1-hov-text-shadow: none;
      --btn-rec-s1-hov-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
    /* ----------~(end)~---------- */
  /* =================|END|================= */
`;

const TypeButton = styled.button`
  ${sharedButtonStyle}
`;

const TypeRouterLink = styled(Link)`
  ${sharedButtonStyle}
`;

const ButtonRegular = (props) => {
  let button;

  if (!props.linkRef) {
    button =         
      <TypeButton 
        className="btn-rec-s1" 
        color={props.color} 
        btnHover={props.btnHover}
        onClick={props.onClick} 
        type="button"
      >
        {props.btnText}
        {props.children}
      </TypeButton>
    ;
  }
  else if (props.linkRef.includes("http://") || props.linkRef.includes("https://") || props.linkRef.includes(".") || props.linkRef.includes("//")) {
    button = 
      <TypeButton 
        className="btn-rec-s1" 
        color={props.color} 
        btnHover={props.btnHover}
        onClick={props.onClick}
        as="a"
        href={props.linkRef}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {props.btnText}
        {props.children}
      </TypeButton>
    ;
  }
  else {
    button = 
      <TypeRouterLink 
        to={props.linkRef} 
        className="btn-rec-s1" 
        color={props.color} 
        btnHover={props.btnHover}
      >
        {props.btnText}
        {props.children}
      </TypeRouterLink>
    ;
  }

  return button;
};

export { ButtonRegular };