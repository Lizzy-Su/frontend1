import { Layout, Card , Col, Row, Avatar, Divider, Typography, Image, Skeleton, Switch, Breadcrumb  } from 'antd';
import banner from '../../images/banner4.jpg';
import image from '../../images/test.jpg';
import image1 from '../../images/banner2.png';
const { Paragraph, Title, Text } = Typography;
const { Meta } = Card;


function SubjectObject() {
    return (
        <Layout>
            <Layout style={{backgroundColor:"#fff", padding:"50px 0"}}>
                <Col offset={4} span={16} style={{}}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ alignContent:"center", justifyContent:"center"}}>
                            <img
                                alt='subject'
                                src={image}
                                style={{ width:"100%"}}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                            <Row justify={"center"} align={"center"}>
                                <Col offset={1} span={22}>
                                    <Row>
                                        <Title style={{fontSize:"2em", fontWeight:"normal"}}>课程名</Title>
                                    </Row>
                                    <Row>
                                        <Paragraph style={{color:"#515151", fontSize:"1.1em", lineHeight:"1.7em"}}>
                                            随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁集团体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
                                            Ant Design。基于『确定』和『自然』
                                            的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
                                            更好的用户体验。随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁集团体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
                                            Ant Design。基于『确定』和『自然』
                                            的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
                                            更好的用户体验。
                                        </Paragraph>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Layout>
            <Layout style={{backgroundColor:"#F2F2F2", padding:"20px 0"}}>
                <Row>
                    <Col offset={4} span={16}>
                        <Row align={"center"}>
                            <Title style={{fontSize:"1.8em", fontWeight:"normal"}}>课程照片</Title>
                        </Row>
                        <Row gutter={[24,24]}>
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <img
                                    alt='subject'
                                    src={image1}
                                    style={{ width:"100%"}}
                                />
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <img
                                    alt='subject'
                                    src={image1}
                                    style={{ width:"100%"}}
                                />
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <img
                                    alt='subject'
                                    src={image1}
                                    style={{ width:"100%"}}
                                />
                            </Col>
                            
                        </Row>
                        
                    </Col>
                </Row>
            </Layout>
        </Layout>
    )
}

export default SubjectObject;