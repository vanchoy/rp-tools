import toolsItemData from '../api/toolsData.json';

import gridColumns from '../constants/gridColumns';

import BlurbSingleCard from './BlurbSingleCard';

const BlurbCards = () => {
  const database = toolsItemData[0].websiteToolsData;

  const data = () => {
    
    return database.map((item, id) => (
      <BlurbSingleCard 
        id={item.id} 
        gridColumn={gridColumns(database, 1, id)} 
        name={item.name}  
        key={item.id} 
        descr={item.descr} 
        img={item.img} 
        linkRef={item.url}
        btncolor={item.buttonColor} 
        btnhovcolor={item.buttonHoverColor} 
        btnText={item.buttonText} 
      />
    ));
    
  };

  return (
    <>
      { data() }
    </>
  )
};

export default BlurbCards;