import { Layout, Card , Col, Row, Space, Typography, Image, Skeleton  } from 'antd';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getBookSeries }  from '../../config/api';

const { Title, Text } = Typography;
const { Meta } = Card;
const background = 'static/banner4.jpg'
function BookList() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getBookSeries()
            .then(response => {
                setSeries(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
      return <Skeleton active />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
      <>
          <Layout>
            <Layout style={{backgroundColor:"#fff"}}>
              <div className='title-container'>
                <Image
                      preview={false}
                      src={background}
                      className="background-image" 
                      width={'100%'}
                  />
              </div>

            </Layout>
            <Layout style={{backgroundColor:"#fff"}}>
                <Col offset={2} xs={20} sm={20} md={20} lg={20}>
                {series.map((serie) => (
                  <div key={serie.name}>
                      <Title level={4}>{serie.name}</Title>
                      <Row gutter={[16, 16]} justify="start">
                          {serie.books.map((book) => (
                              <Col xs={24} sm={12} md={8} lg={6} key={book.id}>
                                  <Link to={`/BookDetails/${serie.name}/${book.id}`}>
                                      <Card
                                          hoverable
                                          style={{
                                              width: '100%',
                                              marginTop: 20
                                          }}
                                          cover={
                                              <img
                                                  alt={book.title}
                                                  src={book.cover_image}
                                                  style={{ marginTop: "1vh", marginLeft: "1vw", marginRight: "1vw", width: "90%" }}
                                              />
                                          }
                                      >
                                          <Meta
                                              title={book.title}
                                              description={book.summary}
                                          />
                                      </Card>
                                  </Link>
                              </Col>
                          ))}
                      </Row>
                  </div>
              ))}
              </Col>
            </Layout>
          </Layout>
      </>
        
    );
  }
  
  export default BookList;