import { Layout, List, Pagination, Breadcrumb, Col, Row,Image, Skeleton } from 'antd';
import { Divider, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { getBook }  from '../../config/api';
import { useParams } from 'react-router-dom';
const { Title, Paragraph, Text, Link } = Typography;


const BookObject = () => {
    const { seriesName, id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
      getBook({id})
          .then(response => {
              setBook(response.data);
              setLoading(false);
          })
          .catch(error => {
              setError(error);
              setLoading(false);
          });
    }, [id]);

    if (loading) {
        return <Skeleton active />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
      <Layout style={{ margin: "20px 4vw"}}>
        <Row>
          <Col offset={3} span={18}>
            <Breadcrumb style={{textSizeAdjust:"inherit"}}>
                <Breadcrumb.Item>
                    <a href="/Book">
                        图书出版
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {book.series_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {book.title}
                </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Layout style={{ borderColor:"#5f5f5f", paddingTop:"30px"}}>
          <Row>
            <Col offset={3} span={18} style={{backgroundColor:"white", padding:"20px 20px"}}>
              <Row>
                <Col sm={12} md={12} lg={6}>
                  <Image
                    width={"90%"}
                    src={book.cover_image}
                    preview={false}
                  />
                </Col>
                <Col sm={12} md={12} lg={16}>
                  <Typography>
                    <Row>
                      <Title level={3} style={{margin:0}}>{book.title}</Title>
                    </Row>
                    <Row style={{marginTop:20}}>
                      <Paragraph style={{fontSize:16, lineHeight:2}}>
                        {book.detail}
                      </Paragraph>
                      <Paragraph>
                        <Text strong>
                          lower the unnecessary
                          cost of design differences and implementation and liberate the resources of design and
                          front-end development
                        </Text>
                        .
                      </Paragraph>
                    </Row>
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col offset={1} span={22}>
                  <Divider orientation="left">
                    图文详情
                  </Divider>
                </Col>
              </Row>
              <Row>
                <Col offset={1} span={22}>
                {book.pages.map(item => (
                  <Row align={"center"}>
                    <div key={item.id}>
                      <Image
                        width={'100%'}
                        preview={false}
                        src={item.image}
                      />
                    </div>
                  </Row>
                ))}
                  </Col>
              </Row>
            </Col>
          </Row> 
        </Layout>
      </Layout>
  );
}

export default BookObject;

