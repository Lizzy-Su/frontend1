import { Layout, Skeleton, Menu, Breadcrumb, Col, Row,Image, Card } from 'antd';
import { Divider, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getNewsType, getNewsDetail }  from '../config/api';
import { useNavigate } from 'react-router-dom';
const { Title, Paragraph, Text, Link } = Typography;

// const url = `/NewsDetails/${newsId}`;
// window.open(url, '_blank');
const getImageStyle = (size) => {
  switch (size) {
      case 'small':
          return { width: '20vw', margin:"10px 0px" };
      case 'middle':
          return { width: '30vw', margin:"10px 0px" };
      case 'large':
          return { width: '50vw', margin:"10px 0px" };
      case 'original':
      default:
          return { width: '100%', margin:"10px 0px" };
  }
};

const insertImagesIntoParagraphs = (content, images) => {
  const paragraphs = content.split('\r\n').map((paragraph, index) => (
    <React.Fragment key={`paragraph-${index}`}>
        <span style={{ marginLeft: '2em' }}>{paragraph}</span>
        <br />
    </React.Fragment>
  ));

  
  images.forEach(image => {
      const position = image.position - 1; // Convert to zero-based index
      const positionType = image.position_type;
      const imageStyle = getImageStyle(image.size);
      const imageTag = (
        <div style={{ textAlign: 'center' }} key={`image-${image.id}`}>
            <Image 
                src={image.image} 
                alt={`Image ${image.id}`} 
                style={imageStyle} 
                preview={false}
            />
            {image.description && (
              <Paragraph>
                <Text strong>
                  {image.description}
                </Text>
              </Paragraph>
            )}
        </div>
      );

      if (position < paragraphs.length) {
        if (positionType === 'top') {
            paragraphs[position] = (
                <React.Fragment key={`paragraph-${position}`}>
                    {imageTag}
                    {paragraphs[position]}
                </React.Fragment>
            );
        } else if (positionType === 'bottom') {
            paragraphs[position] = (
                <React.Fragment key={`paragraph-${position}`}>
                    {paragraphs[position]}
                    {imageTag}
                </React.Fragment>
            );
        }
    } else {
        paragraphs.push(
            <React.Fragment key={`paragraph-${paragraphs.length}`}>
                {imageTag}
            </React.Fragment>
        );
    }
  });
  return paragraphs;
};

const NewsObjectTemplate = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [newsType, setNewsType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onClick = async (e) => {
    console.log('click ', e.key);
    const newsId = e.key;
    try {
      const response = await getNewsDetail({ id: newsId });
      setData(response.data);
      navigate(`/NewsDetails/${newsId}`);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  useEffect(() => {
    getNewsType()
      .then(response => {
        setNewsType(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // 空数组作为依赖，表示只在组件挂载时运行

  const transformData = (data) => {
    if (!data) {
      return [];
    }
  
    // 对每个新闻类型进行转换和倒序排序
    return data.map(category => ({
      key: category.id.toString(),
      label: category.name,
      children: category.news
        .slice() // 复制数组以避免修改原始数据
        .sort((a, b) => new Date(b.upload_date) - new Date(a.upload_date)) // 按照 upload_date 降序排序
        .map(newsItem => ({
          key: newsItem.id.toString(),
          label: newsItem.title
        }))
    }));
  };
  

  const items = transformData(newsType);

  if (loading) {
    return <Skeleton active />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const paragraphsWithImages = insertImagesIntoParagraphs(data.content, data.images);

  return (
    <Layout style={{ margin: "20px 4vw" }}>
      <Row>
        <Col offset={2} span={20}>
          <Breadcrumb style={{ textSizeAdjust: "inherit" }}>
            <Breadcrumb.Item>
              <a href="/Home">首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/News">新闻天地</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Layout style={{ marginTop: "2vh", minWidth: "500px" }}>
        <Col offset={2} span={20}>
          <Row style={{ width: "100%" }}>
            <Col xs={24} sm={24} md={5} lg={5} style={{ width: "100%" }}>
              <Menu
                onClick={onClick}
                style={{ width: "100%" }}
                defaultSelectedKeys={[data.id.toString()]}
                defaultOpenKeys={[data.news_type.toString()]}
                mode="inline"
                items={items}
              />
            </Col>
            <Col xs={24} sm={24} md={19} lg={19} style={{ width: "100%" }}>
              <Card
                bordered={false}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 0,
                }}
              >
                <Col offset={1} span={22}>
                  <Typography style={{ textAlign: "center" }}>
                    <Title level={3}>{data.title}</Title>
                    <Text type="secondary">
                      {new Date(data.upload_date).toLocaleDateString("az")}
                    </Text>
                    <Paragraph
                      style={{
                        textAlign: "start",
                        lineHeight: 2,
                        width: "100%",
                        fontSize: "1.3em",
                      }}
                    >
                      {paragraphsWithImages.map((paragraph, index) => (
                        <React.Fragment key={index}>
                          {typeof paragraph === "string" ? (
                            <span style={{ marginLeft: "2em" }}>{paragraph}</span>
                          ) : (
                            paragraph
                          )}
                        </React.Fragment>
                      ))}
                    </Paragraph>
                  </Typography>
                </Col>
              </Card>
            </Col>
          </Row>
        </Col>
      </Layout>
    </Layout>
  );
};
export default NewsObjectTemplate;

