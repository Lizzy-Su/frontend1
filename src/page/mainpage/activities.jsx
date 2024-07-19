import { Layout, Card , Col, Row, Space, Tooltip, Typography, Image, Skeleton, Switch, Avatar  } from 'antd';
const { Paragraph, Title, Text } = Typography;
const { Meta } = Card;
const banner = 'static/banner4.jpg'
const header = 'static/test.jpg'
const dimoo = 'static/dimoo.png'

function Activities() {
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
                <Col offset={3} span={18}>
                    <Row align={"center"} style={{margin:"50px 20px"}}>
                        <Text style={{fontSize:18, lineHeight:2}}>
                            秉着“创造潮流，传递美好”的文化使命，POP MART 泡泡玛特非常重视潮玩文化的培育与推广。不仅多次举办专业潮流玩具展会，联合顶级品牌举办设计比赛，更与顶级艺术院校合作开设潮玩课程，并在全国一二线城市推出潮玩文化主题推广活动，推进中国潮流文化及行业的发展。
                        </Text>
                    </Row>
                    <Row gutter={[48,48]}>
                        <Row gutter={[8,8]}>
                            <Col span={12}>
                                <Image
                                    width='100%'
                                    src={header}
                                    preview={false}
                                />
                            </Col>
                            <Col span={12}>
                                <Card
                                    bordered={false}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius:0
                                    }}
                                    bodyStyle={{padding:"2vh 4vw"}}
                                >   
                                    <Row align={'center'}>
                                        <Title level={2}>EXHIBITION</Title>
                                    </Row>
                                    <Row align={'center'}>
                                        <Title level={4} style={{marginTop:0}}>展览</Title>
                                    </Row>
                                    <Row>
                                        <Text style={{lineHeight:2, fontSize: '1vw'}}>
                                            POP MART 泡泡玛特在全国一二线城市的核心商区多次推出主题展和快闪店，满足新一代消费者对优质消费体验的需求，不仅使主题展成为人气聚集地，更引领了购物中心的消费变革，推动了中国潮流文化与传统文化的发展，让中国潮流文化不断地向大众拓展。
                                        </Text>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={[8,8]}>
                            <Col span={12}>
                                <Card
                                    bordered={false}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius:0
                                    }}
                                    bodyStyle={{padding:"2vh 4vw"}}
                                >   
                                    <Row align={'center'}>
                                        <Title level={2}>EXHIBITION</Title>
                                    </Row>
                                    <Row align={'center'}>
                                        <Title level={4} style={{marginTop:0}}>品牌活动</Title>
                                    </Row>
                                    <Row>
                                        <Text style={{lineHeight:2, fontSize: '1vw'}}>
                                        近年来，潮玩文化在全球快速发展。而中国大陆地区作为爆发增长的新兴市场，却没有属于自己的大型潮流玩具活动。
                                        为了填补这一文化与市场空白，POP MART泡泡玛特于2017年9月举办了首届潮流玩具展会-BTS北京国际潮流玩具展，并于次年4月举办了首届STS上海国际潮流玩具展，吸引了全世界的艺术家及潮流玩具品牌所有者参与。
                                        </Text>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Image
                                    width='100%'
                                    src={header}
                                    preview={false}
                                />
                                
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Layout>
        </Layout>
    )
}

export default Activities;