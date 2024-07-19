
import { Layout, Card , Col, Row, Space, Typography, Image, Skeleton, Switch, Avatar  } from 'antd';
const { Paragraph, Title, Text } = Typography;
const { Meta } = Card;

const image = 'static/header.jpeg';
const image1 = 'static/banner2.png';
const teamMembers = [
  {
    name: 'John Doe',
    title: 'Team Leader',
    image: 'static/header.jpeg',
    description: 'John is the leader of the team and has over 10 years of experience in the industry.',
  },
  {
    name: 'Jane Smith',
    title: 'Software Engineer',
    image: 'static/header.jpeg',
    description: 'Jane is a software engineer with expertise in frontend development.',
  },
  {
    name: 'Alice Johnson',
    title: 'Product Manager',
    image: 'static/header.jpeg',
    description: 'Alice is responsible for managing the product lifecycle.',
  },
  {
    name: 'Alice Johnson',
    title: 'Product Manager',
    image: 'static/header.jpeg',
    description: 'Alice is responsible for managing the product lifecycle.',
  },
  {
    name: 'Alice Johnson',
    title: 'Product Manager',
    image: 'static/header.jpeg',
    description: 'Alice is responsible for managing the product lifecycle.',
  },
  {
    name: 'Alice Johnson',
    title: 'Product Manager',
    image: 'static/header.jpeg',
    description: 'Alice is responsible for managing the product lifecycle.',
  },
  {
    name: 'Alice Johnson',
    title: 'Product Manager',
    image: 'static/header.jpeg',
    description: 'Alice is responsible for managing the product lifecycle.',
  },
  // Add more team members as needed
];

function AboutUs() {
    return (
      <>
          <Layout>
              <Layout style={{backgroundColor:"#fff",paddingBottom:"1vh"}}>
                  <Row>
                    <Col span={22} offset={2}>
                      <Title level={3}>科普基地简介</Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="gutter-row" offset={2} xs={22} sm={22} md={12} lg={12}>
                      <Paragraph style={{fontSize: 18}} >
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                      </Paragraph>
                      <Paragraph style={{fontSize: 18}} >
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                      </Paragraph>
                      <Paragraph style={{fontSize: 18}} >
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                      </Paragraph>
                      <Paragraph style={{fontSize: 18}} >
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                      </Paragraph>
                    </Col>
                    <Col offset={2} span={8} style={{marginBottom:30}}>
                      <Image
                        width={300}
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                    </Col>
                  </Row>
              </Layout>
              <Layout style={{backgroundColor:'#F2F2F2', paddingBottom:"5vh"}}>
                  <Row>
                    <Col span={22} offset={2}>
                      <Title level={3}>团队介绍</Title>
                    </Col>
                  </Row>
                    <Row>
                      <Col className="gutter-row" offset={2} xs={20} sm={20} md={20} lg={20}>
                        <Paragraph style={{fontSize: 18}}>
                          In the process of internal desktop applications development, many different design specs and
                          implementations would be involved, which might cause designers and developers difficulties and
                          duplication and reduce the efficiency of development.In the process of internal desktop applications development, many different design specs and
                          implementations would be involved, which might cause designers and developers difficulties and
                          duplication and reduce the efficiency of development.
                        </Paragraph>
                      </Col>
                    </Row>
                    <Row align={"center"}>
                        <img alt="text" src={image1} width={"60%"}/>
                    </Row>
                    <Row style={{marginTop:20}}>
                      <Col span={20} offset={2}>
                        <Row gutter={[48, 24]}>
                          {teamMembers.map((member, index) => (
                            <Col key={index} xs={24} sm={12} md={8} lg={6} className='col-centered'>
                              <Card
                                hoverable
                                cover={<img alt={member.name} src={member.image} style={{marginLeft:"1px",marginTop:"1px", width:"99%"}}/>}
                                style={{height:"100%"}}
                              >
                                <Meta
                                  title={member.name}
                                  description={<div>
                                    <p>{member.title}</p>
                                    <p>{member.description}</p>
                                  </div>}
                                />
                              </Card>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                    
              </Layout>
              <Layout style={{backgroundColor:"#fff", paddingBottom:"1vh"}}>
                  <Row>
                    <Col span={22} offset={2}>
                      <Title level={3}>获奖信息</Title>
                    </Col>
                  </Row>
                    <Row>
                    <Col className="gutter-row" offset={2} xs={22} sm={22} md={9} lg={9}>
                      <Space direction="vertical">
                        <Text style={{fontSize: 18}} >第七届“互联网+”大赛全国金奖</Text>
                        <Text style={{fontSize: 18}} >第七届“互联网+”大赛全国金奖</Text>
                        <Text style={{fontSize: 18}} >第七届“互联网+”大赛全国金奖</Text>
                        <Text style={{fontSize: 18}} >第七届“互联网+”大赛全国金奖</Text>
                        <Text style={{fontSize: 18}} >第七届“互联网+”大赛全国金奖</Text>
                        <Text style={{fontSize: 18}} >第七届“互联网+”大赛全国金奖</Text>
                        <Text style={{fontSize: 18}} >第七届“互联网+”大赛全国金奖</Text>
                      </Space>
 
                      </Col>
                      <Col className="gutter-row" offset={1} xs={22} sm={22} md={10} lg={10}>
                      <Row>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                        <Col span={6}>
                          <img alt="text" src={image} width={"100%"}/>
                        </Col>
                      </Row>
                      </Col>
                    </Row>
              </Layout>

          </Layout>
      </>
        
    );
  }
  
  export default AboutUs;