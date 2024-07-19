// NewsDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import NewsObjectTemplate from '../../components/newsobjecttemplate';
import { useEffect, useState } from 'react';
import { getNewsDetail } from '../../config/api';


const NewsObject = () => {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getNewsDetail({ id: id })
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
        <NewsObjectTemplate initialData={data} />
    );
};

export default NewsObject;