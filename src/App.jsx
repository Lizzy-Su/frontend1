import './App.css';
import { Layout, ConfigProvider } from 'antd';
import Navigation from './components/navigation';
import HomePage from './page/mainpage/homepage';
import TechWith3 from './page/mainpage/techwith3';
import Tutorials from './page/mainpage/tutorial';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import React, { useEffect, useState } from 'react';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const { Content } = Layout;

function App() {
  const [locale, setLocale] = useState(zhCN);

  const changeLocale = () => {
    setLocale((prevLocale) => (prevLocale === enUS ? zhCN : enUS));
    console.log(locale);
  };

  return (
    <ConfigProvider locale={locale} theme={{ token: { colorPrimary: '#fff' } }}>
      <Router>
        <Layout>
            <Navigation changeLocale={changeLocale} locale={locale} />
            <Layout>
              <Content style={{ padding: '0vh 0vw', marginTop:"70px"}}>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/techwith3" element={<TechWith3 />} />
                  <Route path="/tutorials" element={<Tutorials />} />
                </Routes>
              </Content>
              </Layout>
            <Footer/>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
