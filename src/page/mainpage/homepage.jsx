import { Carousel, Layout, Card , Col, Row, List, Typography, Image, Skeleton, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getBanner, getBookSeries, getNews }  from '../../config/api';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import begin from '../../assets/tutorial/begin.png';
import beizer from '../../assets/tutorial/beizer.png';
import bullet from '../../assets/tutorial/bullet.png';
import glsl from '../../assets/tutorial/glsl.png';
import domino from '../../assets/tutorial/domino.png';

const { Title, Text } = Typography;
const { Meta } = Card;

function HomePage() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const [bannerResponse, bookSeriesResponse, newsResponse] = await Promise.all([getBanner(), getBookSeries(), getNews()]);
            setBanners(bannerResponse.data);
            // 对 news 数据按 upload_date 从新到旧排序
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);
    
    return (
        <Layout>
            <Carousel 
                autoplay
                arrows={true}
            >   
                {/* {loading  ? (
                    <Skeleton.Image active={loading} style={{ width: '100%', height: '100%' }} />
                ) : (
                    banners.map((banner) => (
                        <div key={banner.image}>
                            <img src={banner.image} alt={banner.title} style={{ width: '100%' , height: '50%'}} />
                        </div>
                    ))
                )} */}
                <img src={banner} alt='banner' style={{ width: '100%' , height: '50%'}} />
            </Carousel>
            <Layout style={{backgroundColor:'#fff', padding:"40px 0", width:"100%"}}>
                <Row gutter={[24,24]} align={"middle"} style={{width:"100%"}}>
                    <Col xs={{span:23, offset:1}} sm={{span:23, offset:1}} md={{span:20, offset:2}} lg={{span:7, offset:3}}>
                        <Row>
                            <Title level={3} style={{fontWeight:"normal", fontSize:"1.7em"}}>系列课程</Title>
                        </Row>
                        <Row>
                            <Text style={{lineHeight:"1.8em", fontSize:"1.2em", fontWeight:"lighter"}}>
                                In the process of internal desktop applications development, many different design specs and
                                implementations would be involved, which might cause designers and developers difficulties and
                                duplication and reduce the efficiency of development.In the process of internal desktop applications development, many different design specs and
                                implementations would be involved, which might cause designers and developers difficulties and
                                duplication and reduce the efficiency of development.
                            </Text>
                        </Row>
                        <Row justify={"end"}>
                            <a href='/tutorials' style={{fontSize:"1.3em", marginTop:10, color:"#515151", fontWeight:"normal"}}>更多{'>>>'}</a>
                        </Row>
                    </Col>
                    <Col xs={{span:23, offset:1}} sm={{span:23, offset:1}} md={{span:20, offset:2}} lg={{span:10, offset:1}}>
                        <Row gutter={[16,16]}>
                            <Col span={8}>
                                <Image
                                    width={"100%"}
                                    preview={false}
                                    src={domino}
                                />
                            </Col>
                            <Col span={8}>
                                <Image
                                    width={"100%"}
                                    preview={false}
                                    src={domino}
                                />
                            </Col>
                            <Col span={8}>
                                <Image
                                    width={"100%"}
                                    preview={false}
                                    src={domino}
                                />
                            </Col>
                        
                            <Col span={8}>
                                <Image
                                    width={"100%"}
                                    preview={false}
                                    src={domino}
                                />
                            </Col>
                            <Col span={8}>
                                <Image
                                    width={"100%"}
                                    preview={false}
                                    src={domino}
                                />
                            </Col>
                            <Col span={8}>
                                <Image
                                    width={"100%"}
                                    src={domino}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </Layout>
    ) 
};
export default HomePage;