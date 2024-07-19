import { List, Avatar, Layout, Breadcrumb, Typography,  Col, Row, Card, DatePicker, Image, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const {Title, Text} = Typography;
const { RangePicker } = DatePicker;
const { Search } = Input;

function NewsListLayout({ data }){
  // 对新闻数据按上传时间进行排序
  const NewsData = data.sort((a, b) => new Date(b.upload_date) - new Date(a.upload_date));

  return (
    <Layout style={{ margin: "20px 4vw" }}>
      <Layout>
        <Col offset={1} span={22}>
          <Breadcrumb style={{ textSizeAdjust: "inherit" }}>
            <Breadcrumb.Item>
              <a href="/Home">
                首页
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/News">
                新闻天地
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              新闻动态
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Layout>
      <Layout style={{ marginTop: "2vh" }}>
        <Col offset={1} span={22}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={18} lg={18} style={{ height: "80%" }}>
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 0
                }}
                bodyStyle={{ paddingTop: 0 }}
              >
                <Title style={{ textAlign: "left" }} level={4}>新闻动态</Title>
                <List
                  pagination={{
                    pageSize: 10
                  }}
                  itemLayout="horizontal"
                  dataSource={NewsData}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={ <Link to={`/NewsDetails/${item.id}`} style={{ fontSize:18 }}>
                                  {item.title}
                                </Link>
                              }
                        avatar={
                          item.images && item.images.length > 0 ? (
                            <Image preview={false} style={{width:150}} src={item.images[0].image} />
                          ) : (
                            <Image preview={false} style={{height:150}} fallback="data:image/png;base64,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"/> // 可以根据需要设置一个默认的 avatar 图标
                          )
                        }
                      />
                      <div style={{ color: "grey" }}>{new Date(item.upload_date).toLocaleDateString()}</div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} style={{ height: "80%" }}>
              <Row>
                <Card
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0
                  }}
                  bodyStyle={{ paddingTop: 0 }}
                >
                  <Title style={{ textAlign: "left" }} level={5}>热点新闻</Title>
                  <List
                    itemLayout="horizontal"
                    dataSource={NewsData.slice(0, 10)}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          title={<><Text
                            style={{
                              backgroundColor: '#00b96b',
                              paddingTop: '2px',
                              paddingBottom: '2px',
                              paddingRight: '5px',
                              paddingLeft: '5px',
                              borderRadius: '4px',
                              marginRight: '8px',
                              fontWeight: 'bold',
                              color: "white",
                              width: '30px', // 固定宽度
                              textAlign: 'left', // 内容居中
                              // display: 'inline-block'
                            }}
                          >
                            {index + 1}
                          </Text>
                            <a 
                              style={{
                                fontWeight: 'normal',
                                display: 'inline-block',
                                maxWidth: '80%', // 可以根据需要调整宽度
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                verticalAlign: 'middle', // 对齐文本和背景色块
                              }} 
                              href="/NewsDetails/${item.id}">
                            {item.title}
                            </a>
                          </>
                          }
                        />
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
};

  export default NewsListLayout;

