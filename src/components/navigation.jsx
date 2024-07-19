import { Menu, Layout, Input , Image, Avatar, AutoComplete} from 'antd';
import { Drawer, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getLogo }  from '../config/api';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import logoImage from '../assets/logo.png'
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Header, Sider } = Layout;
const { Search } = Input;

const items = [
  {
    label: '首页',
    key: 'home',
  },
  {
    label: 'TechWith3',
    key: 'techwith3',
  },
  {
    label: '所有课程',
    key: 'tutorials',
    // children: [
    //   {
    //     label: 'Item 1',
    //     key: 'item1'
    //   }
    // ],
  },
  {
    label: '(RE)Touch',
    key: 'retouch',
  },
  {
    label: '关于我们',
    key: 'about',
  },
];

const logoStyle = {
  padding: 0,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const Navigation = ({changeLocale, locale }) => {

    const [current, setCurrent] = useState('home');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(true);
    const [options, setOptions] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [logo, setLogo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const showDrawer = () => {
      setDrawerVisible(true);
    };
  
    const onClose = () => {
      setDrawerVisible(false);
    };
  
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
      // 使用 React Router 跳转
      navigate(`/${e.key}`);
      setSearchValue(''); // 清空搜索框
    };
  
    // Fetch logo data
    useEffect(() => {
      getLogo()
          .then(response => {
            if (response.data.length > 0) {
              setLogo(response.data[0]);
              setLoading(false);
            }else{
              setLogo(response.data);
              setLoading(false);
            }
          })
          .catch(error => {
              setError(error);
              setLoading(false);
          });
    }, []);



    // Handle window resize
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setDrawerVisible(true);
          setMenuVisible(false);
        } else {
          setDrawerVisible(false);
          setMenuVisible(true);
        }
      };

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Initial check
      handleResize();

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <>
      <Layout>
          <Header
            className='header'
            style={{
              padding: '0 5vw',
              position: 'fixed',
              width: '100%', 
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'black',
              color:"white"
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {logo ? (
                <Button type="text" onClick={showDrawer} style={logoStyle}>
                  <img 
                    src={logoImage}
                    alt="Logo" 
                    style={{ height: '50px', width: '55px', marginRight:20 }} 
                  />
                </Button>
              ) : (
                <div>No logo available</div>
              )}
              {!drawerVisible && menuVisible &&(
                <Menu
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                />
              )}
            </div>
            <div>
              <Avatar size="large" icon={<UserOutlined />} />
              <Button 
                onClick={changeLocale}
                className='language-button'
                type="text"
              >
                {locale === enUS ? 'EN/中' : '中/EN'}
              </Button>
            </div>
        </Header>
      </Layout>
      <Drawer
        title="THE3"
        placement="left"
        closable={true}
        onClose={onClose}
        open={drawerVisible}
        key="left"
        width="300"
        styles={{
          body:{padding: 0}
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
          style={{ width: 300}}
        />
      </Drawer>
    </>
    );
};
export default Navigation;