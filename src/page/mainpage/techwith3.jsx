import { Layout, Card , Col, Row, Space, Tooltip, Typography, Image, Skeleton, Switch, Button  } from 'antd';
import banner from '../../assets/banner.jpg'
const { Paragraph, Title, Text } = Typography;
const { Meta } = Card;

function TechWith3() {
    return (
        <Layout>
            <Layout style={{backgroundColor:"black", color:"white", textAlign:"center", alignItems:"center",padding:"40px 0"}}>
                <div style={{fontSize:60}}>
                    加入TechWith3
                </div>
                <div style={{fontSize:50}}>
                    超多精彩福利...
                </div>
                <div style={{fontSize:40}}>
                    免费的入门课程
                </div>
                <div style={{fontSize:30}}>
                    专项课程半价
                </div>
                <div style={{fontSize:20}}>
                    自定义工程文件
                </div>
                <Button style={{marginTop:10, width:"120px", height:"50px"}}>马上加入</Button>
            </Layout>
            <Layout style={{backgroundColor:"white", paddingBottom:20}}>
                <Col xs={{span:22, offset:1}} sm={{span:22, offset:1}} md={{span:18, offset:3}} lg={{span:18, offset:3}}>
                    <Row align={"center"}>
                        <Title level={3} style={{fontWeight:"normal", paddingBottom:20}}>所有课程</Title>
                    </Row>
                    <Row align={"center"} justify={'center'}>
                        <Col>
                            <Row gutter={[24,24]}>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Layout>
            <Layout style={{marginBottom:20, paddingBottom:20}}>
                <Col xs={{span:22, offset:1}} sm={{span:22, offset:1}} md={{span:18, offset:3}} lg={{span:18, offset:3}}>
                    <Row align={"center"}>
                        <Title level={3} style={{fontWeight:"normal", paddingBottom:20}}>自定义插件</Title>
                    </Row>
                    <Row align={"center"} justify={'center'}>
                        <Col>
                            <Row gutter={[24,24]}>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card
                                        hoverable
                                        style={{
                                        width: 240,
                                        }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Layout>
        </Layout>
        
    );
}

export default TechWith3;