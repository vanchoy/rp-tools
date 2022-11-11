import styled from 'styled-components';

import Dependencies from '../components/Dependencies';
import TableContainer from '../components/table/TableContainer';
import ButtonClipboard from '../components/buttons/ButtonClipboard';

const DocSection = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: #f9f9f9;
  --section-bg-s1-bg_image: none;
  --section-bg-s1-bg_attachment: none;
  --section-bg-s1-bg_position: relative;
  --section-bg-s1-bg_repeat: none;
  --section-bg-s1-bg_blend_mode: none;
  --section-bg-s1-bg_size: border-box;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 26px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
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

    /* For more settings go to ["styles/index.scss"] */
`;

const Documentation = () => {

  const tableHeadings = 
    <th colSpan="100%">
      <p>Useful React Information</p>
    </th>
  ;

  const tableContents = 
  <>
    <tr>
      <td>
        <p>
          Get started with React
        </p>
      </td>
      <td>
        <p>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official React Documentation
          </a>
        </p>
      </td>
    </tr>

    <tr>
      <td>
        <p>
          Get started with React Hooks
        </p>
      </td>
      <td>
        <p>
          <a
            href="https://reactjs.org/docs/hooks-intro.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official React Hooks Documentation
          </a>
        </p>
      </td>
    </tr>

    <tr>
      <td>
        <p>
          Get started with Redux
        </p>
      </td>
      <td>
        <p>
          <a
            href="https://redux.js.org/introduction/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Redux Documentation
          </a>
        </p>
      </td>
    </tr>

    <tr>
      <td>
        <p>
          Get started with TypeScript
        </p>
      </td>
      <td>
        <p>

          <a
            href="https://www.typescriptlang.org/docs/handbook/react-&-webpack.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official React + TypeScript Documentation
          </a>
        </p>
      </td>
    </tr>

    <tr>
      <td>
        <p>
          Get started with Webpack
        </p>
      </td>
      <td>
        <p>
          <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">
            Official Webpack Documentation
          </a>
        </p>
      </td>
    </tr>

    <tr>
      <td>
        <p>
          Get started with Babel
        </p>
      </td>
      <td>
        <p>

          <a href="https://babeljs.io/docs/en/" target="_blank" rel="noopener noreferrer">
            Official Babel Documentation
          </a>
        </p>
      </td>
    </tr>
  </>
  ;



  return (
    <DocSection className="grid section">
      <header className="grid-col-all">
        <h1>
        Developer Documentation
        </h1>
        <h2>
         Developer documentation about this project
        </h2>
      </header>
      <div className="grid-col-3-7">
        <h3>List of all installed packages in this project</h3>
        <p>
        Click on a package's name to see the latest version documentation or on the currently installed version.
        </p>
        <Dependencies />
      </div>
      <div className="grid-col-7-11">
        <h3>References to useful React information</h3>
        <p>If you are new to React or just need some quick info, please take your time and have a look at the links down bellow. </p>
        <TableContainer 
          tableWidth="100%" 
          tableMaxHeight="600px" 
          tableHeaderColor="#278cd4" 
          tableHeaderTextColor="#ffffff" 
          tableHeaders={tableHeadings} 
          tableInfo={tableContents} 
        />
      </div>
      <div className="grid-col-3-7">
        <h3>Useful commands</h3>
        <p>These are some useful commands you can use after downloading the project from its GitHub repository.</p>
        <p>To start the development server, run:</p>
        <ButtonClipboard key="1" textToCopy="npm start" />
        <p>To make a production build, run:</p>
        <ButtonClipboard key="2" textToCopy="npm run build" />
        <p>To run test, run:</p>
        <ButtonClipboard key="3" textToCopy="npm test" />
        <p>To eject, run:</p>
        <ButtonClipboard key="4" textToCopy="npm run eject" />
      </div>
    </DocSection>
  );
}

export default Documentation;
