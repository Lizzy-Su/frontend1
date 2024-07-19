import { Layout, Row, Typography, Col } from 'antd';
const { Title } = Typography;

function Footer() {
  return (
        <Layout>
            {/* <div
                className="footer"
                style={{
                    textAlign: 'center',
                }}
                > */}
                <Col span={24}>
                    <Row 
                        align="middle"
                        justify={"center"}
                    >
                        <Title level={5}>联系我们</Title>
                    </Row>
                    <Row 
                        align="middle"
                        justify={"center"}
                    >
                    </Row>
                </Col>
                    
                {/* </div> */}
        </Layout>
  );
}

export default Footer;
