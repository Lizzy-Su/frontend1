import { Layout, Card , Col, Row, Space, Typography, Image, Skeleton, Switch, Avatar  } from 'antd';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import { Divider, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import myvideo from '../../images/video1.mp4';

const { Paragraph, Title, Text } = Typography;
const background = 'static/banner4.jpg';
const image = 'static/header.jpeg';

function VideoObject() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

    return (
      <>
          <Layout>
              <Layout style={{backgroundColor:"#fff",paddingBottom:"1vh"}}>
                <Image
                        width={"100%"}
                        preview={false}
                        src={background}
                      />
              </Layout>
              <Layout style={{backgroundColor:"#fff", paddingBottom:"5vh", height:"50%"}} >
                
                <Col offset={2} xs={20} sm={20} md={20} lg={20} style={{marginTop:"3%"}} >
                <Row gutter={[24, 24]}>
                <Col className='video-wrap' xs={24} sm={24} md={15} lg={15} style={{marginTop:"3%"}} >
                    <ReactPlayer url={myvideo} controls width={"100%"} height={"100%"}  style={{alignContent:"center"}}/>
                  </Col>
                  <Col xs={24} sm={24} md={7} lg={7} style={{marginTop:"1%"}}>
                    <Row>
                      <Title level={5}>视频列表</Title>
                    </Row>
                    <Row>
                      <div
                          id="scrollableDiv"
                          style={{
                            width:"100%",
                            height:"500px",
                            overflow: 'auto',
                            padding: '0 16px',
                            border: '1px solid rgba(140, 140, 140, 0.35)',
                          }}
                        >
                          <InfiniteScroll
                            dataLength={data.length}
                            next={loadMoreData}
                            hasMore={data.length < 50}
                            loader={
                              <Skeleton
                                paragraph={{
                                  rows: 1,
                                }}
                                active
                              />
                            }
                            endMessage={<Divider plain>到底啦</Divider>}
                            scrollableTarget="scrollableDiv"
                          >
                            <List
                              dataSource={data}
                              renderItem={(item) => (
                                <List.Item key={item.email}
                                  extra={
                                  <img
                                    width={"30%"}
                                    alt="logo"
                                    src={image}
                                  />
                                }>
                                  <List.Item.Meta
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description={item.email}
                                  />
                                </List.Item>
                              )}
                            />
                          </InfiniteScroll>
                        </div>
                      </Row>
                    </Col>
                </Row>
                </Col>

              </Layout>
              
          </Layout>
      </>
        
    );
  }
  
  export default VideoObject;