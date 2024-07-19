import { Layout, Card , Col, Row, Skeleton, Typography, Button, Carousel, Spin  } from 'antd';
import ReactPlayer from 'react-player';
import React, { useEffect, useState, useRef } from 'react';
import { Divider, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getVideos }  from '../../config/api';
// import myvideo from '../../images/video3.mp4';

const { Paragraph, Title, Text } = Typography;
// const background = 'static/banner4.jpg';
// const image = 'static/header.jpeg';
// const myvideo = 'static/video3.mp4'

// const VideoThumbnail = ({ videoSrc, onThumbnailReady }) => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     const canvasElement = canvasRef.current;
//     const context = canvasElement.getContext('2d');

//     const captureThumbnail = () => {
//       try {
//         context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
//         const dataUrl = canvasElement.toDataURL();
//         console.log('Thumbnail captured:', dataUrl); // 添加日志
//         onThumbnailReady(dataUrl);
//       } catch (error) {
//         console.error('Error capturing thumbnail:', error);
//       }
//     };

//     const handleLoadedData = () => {
//       console.log('Video loaded:', videoSrc); // 添加日志
//       videoElement.currentTime = 2;
//       videoElement.addEventListener('seeked', captureThumbnail, { once: true });
//     };

//     videoElement.addEventListener('loadeddata', handleLoadedData);

//     return () => {
//       videoElement.removeEventListener('loadeddata', handleLoadedData);
//     };
//   }, [videoSrc, onThumbnailReady]);

//   return (
//     <div>
//       <video ref={videoRef} src={videoSrc} style={{ display: 'none' }} crossOrigin="anonymous" />
//       <canvas ref={canvasRef} width="640" height="360" style={{ display: 'none' }} />
//     </div>
//   );
// };

function VideoShow() {
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const thumbnailContainerRef = useRef(null);
    // const [loading, setLoading] = useState(true); // 初始化加载状态为 true
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos()
            .then(response => {
                // setVideos(response.data.map(video => ({ ...video, thumbnail: '' })));
                // setVideos(response.data);
                const initialVideos = response.data.map((video, index) => ({ 
                  ...video, 
                  init: index === 0, // 初始化为 true
                  loaded: index === 0, // 设置第一个视频的 loaded 为 true
                  loading: index === 0 // 初始化为 true
                }));
                setVideos(initialVideos);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    const handleThumbnailClick = (index) => {
      setVideos(prevVideos => {
          const newVideos = prevVideos.map((video, idx) => {
              if (idx === index) {
                  return { ...video, init: false, loaded: true, loading: true }; // 点击后设置为加载中
              }
              return { ...video, init: false }; // 其他视频设置为非初始加载
          });
          return newVideos;
      });
      if (carouselRef.current) {
          carouselRef.current.goTo(index);
      }
    };
  
    const handleSlideChange = (current) => {
      setCurrentSlide(current);
    };
  
    useEffect(() => {
      console.log(carouselRef.current);
    }, [carouselRef]);

    const scrollThumbnails = (direction) => {
      const container = thumbnailContainerRef.current;
      const scrollAmount = 150; // 调整这个值以控制每次滚动的距离
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const handleVideoLoad = (index) => {
      setVideos(prevVideos => {
          const newVideos = [...prevVideos];
          newVideos[index].loading = false; // 视频加载完成后设置为 false
          return newVideos;
      });
    };
  

    return (
      <>
          <Layout>
              <Layout style={{paddingBottom:"20px"}} >
                <Row>
                  <Col span={24}>
                  <div 
                    onMouseEnter={() => setShowThumbnails(true)} 
                    onMouseLeave={() => setShowThumbnails(false)}
                  >
                    <Carousel ref={carouselRef} afterChange={handleSlideChange}>
                      {videos.map((video, index) => (
                        <div key={index} style={{ position: 'relative', width: '100%', height: '42vw' }}>
                            {video.loading && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1080px' }}>
                                    <Spin size="large" />
                                </div>
                            )}
                            {video.loaded && (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    onCanPlayThrough={() => handleVideoLoad(index)}
                                    style={{ height: '1080px', display: video.loading ? 'none' : 'block' }}
                                    src={video.video_file}
                                />
                            )}
                        </div>
                      ))}
                    </Carousel>
                    {showThumbnails && (
                      <div className="thumbnail-wrapper">
                        <Row style={{height:"15vh", marginTop:"-15vh"}}>
                          <Col span={2}>
                            <div className='arrow-container'>
                              <Button className="arrow left-arrow" onClick={() => scrollThumbnails('left')}>{"<"}</Button>
                            </div>
                          </Col>
                          <Col span={20}>
                            <div className="thumbnail-container" ref={thumbnailContainerRef}>
                              {videos.map((video, index) => (
                                  <img
                                      style={{ width: '200px', margin: "0px 20px" }}
                                      key={index}
                                      src={video.cover_image}
                                      alt={`Thumbnail ${index + 1}`}
                                      className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
                                      onClick={() => handleThumbnailClick(index)}
                                  />
                              ))}
                            </div>
                          </Col>
                          <Col span={2}>
                            <div className='arrow-container'>
                              <Button className="arrow right-arrow" onClick={() => scrollThumbnails('right')}>{">"}</Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}
                  </div>
                  </Col>
                </Row>
                
              </Layout>
              <Layout style={{marginBottom:50}}>
                <Col offset={2} span={20}>
                  <Row align={"center"}>
                    <Title level={3}>科普微视频介绍</Title>
                  </Row>
                  <Row align={"center"}>
                    <text style={{lineHeight:2, fontSize:18}}>可灵大模型支持对已经生成的视频进行一键续写，单次让视频运动延续4.5秒，运动内容合理、幅度显著。得益于续写中的文本控制，每一段续写都能够体现用户的创意和想法。支持连续多次的续写，最长可生成3分钟的视频，为创作者实现故事梦想提供了强有力的支持。基于对文本-视频语义的深刻理解和 Diffusion Transformer 架构的强大能力，可灵能够将用户丰富的想象力转化为具体的画面，虚构真实世界中不会出现的的场景。</text>
                  </Row>
                </Col>
                
              </Layout>
          </Layout>
      </>
        
    );
  }
  
  export default VideoShow;