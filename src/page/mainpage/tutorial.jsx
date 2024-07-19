import { Layout, Card , Col, Row, Space, Tooltip, Typography, Image, Skeleton, Switch, Button  } from 'antd';
import banner from '../../assets/banner.jpg'
import begin from '../../assets/tutorial/begin.png';
import beizer from '../../assets/tutorial/beizer.png';
import bullet from '../../assets/tutorial/bullet.png';
import glsl from '../../assets/tutorial/glsl.png';
import domino from '../../assets/tutorial/domino.png';
const { Paragraph, Title, Text } = Typography;
const { Meta } = Card;

function Tutorials() {
    return (
        <Layout>
            <Layout>
                <Image 
                    src={banner}
                    preview={false}
                />
            </Layout>
            <Layout style={{backgroundColor:"white", paddingBottom:20}}>
                <Col xs={{span:22, offset:1}} sm={{span:22, offset:1}} md={{span:20, offset:2}} lg={{span:16, offset:4}}>
                    <Row align={"center"}>
                        <Title level={3} style={{fontWeight:"normal", paddingBottom:20}}>所有课程</Title>
                    </Row>
                    <Row gutter={[24,24]}>
                        <Col xs={{span:8}} sm={{span:8}} md={{span:8}} lg={{span:6}}>
                            <Card
                                hoverable
                                style={{
                                    width: "100%",
                                }}
                                cover={<img alt="begin" src={begin} />}
                            >
                                <Meta title="入门课程" description="TouchDesigner超强入门" />
                            </Card>
                        </Col>
                        <Col xs={{span:8}} sm={{span:8}} md={{span:8}} lg={{span:6}}>
                            <Card
                                hoverable
                                style={{
                                    width: "100%",
                                }}
                                cover={<img alt="beizer" src={beizer} />}
                            >
                                <Meta title="贝塞尔曲线创作" description="专项课程第一期" />
                            </Card>
                        </Col>
                        <Col xs={{span:8}} sm={{span:8}} md={{span:8}} lg={{span:6}}>
                            <Card
                                hoverable
                                style={{
                                    width: "100%",
                                }}
                                cover={<img alt="example" src={bullet} />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col xs={{span:8}} sm={{span:8}} md={{span:8}} lg={{span:6}}>
                            <Card
                                hoverable
                                style={{
                                    width: "100%",
                                }}
                                cover={<img alt="example" src={domino} />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col xs={{span:8}} sm={{span:8}} md={{span:8}} lg={{span:6}}>
                            <Card
                                hoverable
                                style={{
                                    width: "100%",
                                }}
                                cover={<img alt="example" src={glsl} />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Layout>
        </Layout>
        
    );
}

export default Tutorials;