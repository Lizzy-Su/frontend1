import axiosInstance from './axiosConfig';

// 获取LOGO数据
export const getLogo = () => {
    return axiosInstance.get('basicdata/logo/?display=true');
};

// 获取Banner数据
export const getBanner = () => {
    return axiosInstance.get('basicdata/banner/?display=true');
};


// 获取书系列数据
export const getBookSeries = () => {
    return axiosInstance.get('bookdata/book-series/');
};

// 获取书系列数据的API调用函数
export const getBook = ({ id }) => {
    return axiosInstance.get(`bookdata/book/${id}/`);
};

// 获取新闻数据的API调用函数
export const getNews = () => {
    return axiosInstance.get('newsdata/news/?news_type=1');
};

export const getPriceNews = () => {
    return axiosInstance.get('newsdata/news/?news_type=2');
};

export const getNewsDetail = ({ id }) => {
    return axiosInstance.get(`newsdata/news/${id}/`);
};
// 获取新闻分类
export const getNewsType = () => {
    return axiosInstance.get('newsdata/news-types/');
};

// 获取视频
export const getVideos = () => {
    return axiosInstance.get('videodata/videos/');
};