import { Layout, Card , Col, Row, Space, Tooltip, Typography, Image, Skeleton, Switch, Avatar  } from 'antd';
const { Paragraph, Title, Text } = Typography;
const { Meta } = Card;
const banner = 'static/banner4.jpg'
const molly = 'static/molly.png'
const dimoo = 'static/dimoo.png'

function Design() {
    return (
        <Layout>
            <Layout>
                <Image
                    width='100%'
                    src={banner}
                    preview={false}
                />
            </Layout>
            <Layout style={{marginBottom:20}}>
                <Col offset={2} span={20}>
                    <Row align={'center'} style={{marginBottom:'20px'}}>
                        <Title level={3}>ip形象设计</Title>
                    </Row>
                    <Row gutter={[24,24]}>
                        <Col span={12}>
                            <Card
                                style={{
                                width: '100%',
                                border:0,
                                borderRadius:0
                                }}
                                bodyStyle={{paddingTop:20}}
                            >   
                                <Row gutter={[24,24]}>
                                    <Col span={8}>
                                        <Image src={molly} preview={false} width={'100%'}/>
                                    </Col>
                                    <Col span={16}>
                                        <Row>
                                            <Title level={4} style={{marginTop:0}}>Molly</Title>
                                        </Row>
                                        <Row>
                                            <Text style={{marginRight:20, fontSize:16 ,lineHeight:2}}>介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍</Text>
                                        </Row>
                                    </Col>
                                </Row>
                                
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                style={{
                                width: '100%',
                                border:0,
                                borderRadius:0
                                }}
                                bodyStyle={{paddingTop:20}}
                            >   
                                <Row gutter={[24,24]}>
                                    <Col span={8}>
                                        <Image src={dimoo} preview={false} width={'100%'}/>
                                    </Col>
                                    <Col span={16}>
                                        <Row>
                                            <Title level={4} style={{marginTop:0}}>Dimoo</Title>
                                        </Row>
                                        <Row>
                                            <Text style={{marginRight:20, fontSize:16 ,lineHeight:2}}>介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍IP介绍</Text>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Layout>
            <Layout style={{backgroundColor:"white",paddingBottom:20}}>
                <Col offset={2} span={20}>
                    <Row align={'center'} style={{marginBottom:'20px'}}>
                        <Title level={3}>创意产品</Title>
                    </Row>
                    <Row align={'center'} gutter={[24,24]}>
                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                        
                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>

                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Layout>
            <Layout style={{marginBottom:20}}>
                <Col offset={2} span={20}>
                    <Row align={'center'} style={{marginBottom:'20px'}}>
                        <Title level={3}>文创周边</Title>
                    </Row>
                    <Row align={'center'} gutter={[24,24]}>
                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                        
                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>

                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div key={1} className="image-container">
                                <Card
                                    hoverable
                                    cover={<img alt='hi' src={molly} className="image" />}
                                    className="card"
                                    size="small"
                                    style={{borderRadius:0}}
                                >
                                    <div className="overlay">
                                        <div className="text">hi, I'm Molly</div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Layout>
        </Layout>
        
    );
}

export default Design;