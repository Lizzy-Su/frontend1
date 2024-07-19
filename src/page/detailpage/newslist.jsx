import React, { useState, useEffect } from 'react';
import NewsListLayout from '../../components/newslisttemplate';
import { getNews, getPriceNews }  from '../../config/api';
import { Layout } from 'antd';

const AllNewsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getNews()
        .then(response => {
            setData(response.data);
            setLoading(false);
            
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <NewsListLayout data={data} />
   
  );
};

const PriceNewsList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      getNews()
          .then(response => {
              setData(response.data);
              setLoading(false);
          })
          .catch(error => {
              setError(error);
              setLoading(false);
          });
  }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
        <NewsListLayout data={data} />
    );
  };

export { AllNewsList, PriceNewsList };