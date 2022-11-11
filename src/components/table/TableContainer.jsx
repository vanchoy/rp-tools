import styled from 'styled-components';
import '../../styles/table.scss';

let tableWidth, tableMaxHeight, tableHeaderColor, tableHeaderTextColor;

const TableContainerStyle = styled.div`
  --table-container-width: ${() => tableWidth};
  --table-container-max_height: ${() => tableMaxHeight};
  --table-container-border: 2px solid ${() => tableHeaderColor};
  --table-container-border_radius: 3px;

  --table-box-width: 100%;
  --table-box-margin: 0 auto;

  --table-header-bg_color: ${() => tableHeaderColor};
  --table-header-text-color: ${() => tableHeaderTextColor};

  /* For more table settings go to ["styles/table.scss"] */
`;

const TableContainer = (props) => {
  tableWidth = props.tableWidth;
  tableMaxHeight = props.tableMaxHeight;
  tableHeaderColor = props.tableHeaderColor;
  tableHeaderTextColor = props.tableHeaderTextColor;

  return (
    <TableContainerStyle className="table-container">
      <table>
        <thead>
          <tr className="header-row">
            {props.tableHeaders}
          </tr>
        </thead>
        <tbody>
          {props.tableInfo}
        </tbody>
      </table>
    </TableContainerStyle> 
  );
};

export default TableContainer;