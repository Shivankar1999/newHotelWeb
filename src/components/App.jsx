import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import {
  Mycartitem,
  PageNotFound,
  ProductDetail,
  Products,
  AddAcount,
  UserProfileDetails,
} from '../pages';
import { GlobalData } from '../GlobalDataProvider/GlobalData';
import Fotter from './Fotter';
import MyfilterDish from '../pages/MyfilterDish';
import Italian from '../pages/Italian';
import Indian from '../pages/Indian';
import Japnese from '../pages/Japnese';
import Chinese from '../pages/Chinese';

const App = () => {
  return (
    <>
      <GlobalData>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/myfilterdish" element={<MyfilterDish />} />
          <Route path="/userprofiledetails" element={<UserProfileDetails />} />
          {/* <Route path="/news" element={<News />} /> */}
          <Route path="/addacount" element={<AddAcount />} />
          <Route path="/mycartitem" element={<Mycartitem />} />
          <Route path={`/productdetail`} element={<ProductDetail />} />
          <Route path={'/italian'} element={<Italian />} />
          <Route path={'/indian'} element={<Indian />} />
          <Route path={'/japnese'} element={<Japnese />} />
          <Route path={'/chinese'} element={<Chinese />} />

          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
        <Fotter />
      </GlobalData>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
