import { Route, Routes } from 'react-router-dom';

import IndexPage from '../pages/index';
import DicePage from '../pages/DicePage';
import NameGenerator from '../pages/NameGenerator';
import AboutPage from '../pages/About';
import Documentation from '../pages/Documentation';
import NotFoundPage from '../pages/404';

const Routing = () => (
  <Routes>
    <Route exact path="/" element={<IndexPage/>} />
    <Route exact path="/dicepage" element={<DicePage/>} />
    <Route exact path="/namegenerator" element={<NameGenerator/>} />
    <Route exact path="/about" element={<AboutPage/>} />
    <Route exact path="/documentation" element={<Documentation/>} />
    
    <Route path="" element={<NotFoundPage/>} />
    <Route path="*" element={<NotFoundPage/>} />
    <Route exact path="/404" element={<NotFoundPage/>} />
    <Route element={<NotFoundPage/>} />
  </Routes>
);

export default Routing;
