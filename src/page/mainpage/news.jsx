import { Layout, Row, Typography, Col, Breadcrumb, Carousel, Card, List, Divider } from 'antd';
import { Tabs } from 'antd';
import { getNews, getPriceNews }  from '../../config/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const image = 'static/banner1.png'
const image1 = 'static/banner2.png'
const image2 = 'static/banner3.png'

const data1 = [
    '浙江大学新发展阶段使命愿景大讨论',
    '2020国家科学技术奖',
    '向劳动者致敬，向劳模学习！',
];

const data2 = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
];

function News() {
    const [newsData, setNewsData] = useState([]);
    const [priceData, setPriceData] = useState(null);
    const [reportData, setReportData] = useState(null);
    const [leaderData, setLeaderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const onChange = (key) => {
        console.log(key);
    };

    
    useEffect(() => {
        getNews()
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    // 假设 uploadTime 是 ISO 格式的字符串，需要将其转换为 Date 对象进行比较
                    const sortedNewsData = response.data.sort((a, b) => new Date(b.upload_date) - new Date(a.upload_date));
                    setNewsData(sortedNewsData);
                } else {
                    setNewsData([]);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        }, []);    
    // 对新闻数据按上传时间进行排序
    
    return (

            <Layout style={{ margin: "20px 4vw"}}>
                <Layout>
                <Col offset={1} span={22}>
                    <Breadcrumb style={{textSizeAdjust:"inherit"}}>
                        <Breadcrumb.Item>
                            <a href="/Home">
                                首页
                            </a>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>
                            新闻天地
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                </Layout>
                <Layout style={{ marginTop: "2vh"}}>
                    <Col offset={1} span={22}>
                        <Row gutter={[24,24]}>
                            <Col xs={24} sm={8} md={8} lg={8} style={{height:"80%"}}>
                                <Row>
                                    <Card
                                            title="专题报道"
                                            extra={<a href="#">更多</a>}
                                            bordered={false}
                                            style={{
                                            width: "100%",
                                            borderRadius:0,
                                            }}
                                            className='card-content-multiline'
                                            bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
                                        >
                                            <Carousel 
                                            autoplay
                                            arrows={true}
                                            style={{marginBottom:'0px', marginTop:'20px'}}
                                            >   
                                                <img src={image2} alt='banner' style={{ height: '20vh'}} />  
                                                <img src={image1} alt='banner' style={{ height: '20vh'}} />  
                                            </Carousel>
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={data1}
                                                renderItem={(item, index) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                    title={<a style={{fontWeight:"normal"}} href="https://ant.design">{item}</a>}
                                                    />
                                                </List.Item>
                                                )}
                                            />
                                    </Card>
                                </Row>
                                <Row>
                                    <Card
                                            title="获奖"
                                            extra={<a href="#">更多</a>}
                                            bordered={false}
                                            style={{
                                                width: "100%",
                                                borderRadius:0,
                                                marginTop: "20px",
                                            }}
                                            className='card-content-multiline'
                                            bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
                                        >
                                            {/* <Carousel 
                                            autoplay
                                            arrows={true}
                                            style={{marginBottom:'0px', marginTop:'20px'}}
                                            >   
                                                <img src={image2} alt='banner' style={{ height: '20vh'}} />  
                                                <img src={image1} alt='banner' style={{ height: '20vh'}} />  
                                            </Carousel> */}
                                            <List
                                                Style={{ marginTop: 0 }}
                                                itemLayout="horizontal"
                                                dataSource={data1}
                                                renderItem={(item, index) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                    title={<a style={{fontWeight:"normal"}} href="https://ant.design">{item}</a>}
                                                    />
                                                </List.Item>
                                                )}
                                            />
                                    </Card>
                                </Row>
                                <Row>
                                    <Card
                                            title="领导来访"
                                            extra={<a href="#">更多</a>}
                                            bordered={false}
                                            style={{
                                                width: "100%",
                                                borderRadius:0,
                                                marginTop: "20px",
                                            }}
                                            className='card-content-multiline'
                                            bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
                                        >
                                            <Carousel 
                                            autoplay
                                            arrows={true}
                                            style={{marginBottom:'0px', marginTop:'20px'}}
                                            >   
                                                <img src={image2} alt='banner' style={{ height: '20vh'}} />  
                                                <img src={image1} alt='banner' style={{ height: '20vh'}} />  
                                            </Carousel>
                                            <List
                                                Style={{ marginTop: 0 }}
                                                itemLayout="horizontal"
                                                dataSource={data1}
                                                renderItem={(item, index) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                    title={<a style={{fontWeight:"normal"}} href="https://ant.design">{item}</a>}
                                                    />
                                                </List.Item>
                                                )}
                                            />
                                    </Card>
                                </Row>
                            </Col>
                            <Col xs={24} sm={14} md={16} lg={16} style={{height:"80%"}}>
                                <Row style={{height:"40%"}}>
                                    <div style={{ height: '100%', width:"100%"}}>
                                        <Carousel effect="fade" style={{ height: '100%', width:"100%"}} autoplay>
                                            <img src={image1} alt='banner' />
                                            <img src={image2} alt='banner' />
                                        </Carousel>
                                    </div>
                                </Row>
                                <Row style={{height:"60%"}}>
                                    <Card
                                            title="新闻动态"
                                            extra={<a href="/News/List">更多</a>}
                                            bordered={false}
                                            style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius:0,
                                            marginTop: "20px",
                                            }}
                                            className='card-content-multiline'
                                            bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
                                        >
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={newsData.slice(0,11)}
                                                renderItem={(item, index) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                    title={ <Link to={`/NewsDetails/${item.id}`} style={{ fontWeight: 'normal' }}>
                                                                {item.title}
                                                            </Link>
                                                           }
                                                    />
                                                    <div style={{ color: "grey" }}>{new Date(item.upload_date).toLocaleDateString()}</div>
                                                </List.Item>
                                                )}
                                            />
                                    </Card>
                                </Row>  
                            </Col>
                        </Row>
                    </Col>
                </Layout>
            </Layout>
    );
}

export default News;