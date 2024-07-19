import { Layout, Card , Col, Row, Space, Typography, Image, Skeleton  } from 'antd';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getBookSeries }  from '../../config/api';
import banner from '../../images/banner4.jpg';
import image from '../../images/banner2.png';

const { Title, Text } = Typography;
const { Meta } = Card;

const videos = [
    { thumbnail: image, title: "二十四节气系列" },
    { thumbnail: image, title: "走!去博物馆系列" },
    { thumbnail: image, title: "宁波地方特色文化" },
    { thumbnail: image, title: "五千年的衣柜" },
    { thumbnail: image, title: "魔术师的建筑" },
    { thumbnail: image, title: "中国人的宴席" },
    { thumbnail: image, title: "战神们的武器" },
  ];
function Education() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getBookSeries()
            .then(response => {
                setSeries(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
      return <Skeleton active />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
      <>
          <Layout>
            <Layout>
              <div className='title-container'>
                <Image
                      preview={false}
                      src={banner}
                      className="background-image" 
                      width={'100%'}
                  />
              </div>

            </Layout>
            <Layout style={{marginTop:"50px"}}>
                <Col offset={2} span={20}>
                    <Row gutter={[0,48]} style={{margin:"30px 0"}}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={[16, 16]} justify="start">
                                {videos.map((book) => (
                                    <Col xs={24} sm={12} md={8} lg={6} key={book.id}>
                                        <Link to={`/education/subjectobject`}>
                                            <Card
                                                hoverable
                                                style={{
                                                    width: '100%',
                                                    // marginTop: 20,
                                                    borderRadius:0
                                                }}
                                                cover={
                                                    <img
                                                        alt={book.title}
                                                        src={book.thumbnail}
                                                        style={{ width: "100%", borderRadius:0 }}
                                                    />
                                                }
                                            >
                                                <Meta
                                                    title={book.title}
                                                />
                                            </Card>
                                        </Link>
                                        
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Layout>
          </Layout>
      </>
        
    );
  }
  
  export default Education;