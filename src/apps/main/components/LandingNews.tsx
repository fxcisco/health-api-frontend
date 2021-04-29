import { BackendApi } from '@/apis/backend';
import { setNotification } from '@/context/util/actions';
import React, { useEffect, useState } from 'react';
import { NewsletterRegister } from './NewsletterRegister';

interface Props {}

export const LandingNews = (props: Props) => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await BackendApi.getNews();
        if(data) setNews(data.news);
        if(error) setNotification({
          status: 'error',
          title: 'Error',
          message: error
        })
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchNews();
  }, [])

  const renderNews = () => {
    return news?.map((item, i) => {

      return (
        <div key={i} className='news-item'>
          <div className="news__image">
            <img src={item.image} alt={item.title}/>
            <span>{item.image_attr}</span>
          </div>
          <h3>{item.title}</h3>
          <p>
            {item.description}
          </p>
        </div>
      )
    })
  }

  return (
    <div id="news" className="container ">
      <header className="page-title">
        <h1>News</h1>
      </header>
      <div className="grid grid-2 news--grid">
        {renderNews()}
      </div>

      <div className="grid grid-2">
        <div/>
        <div className='flex-1'>
          <NewsletterRegister />
        </div>
      </div>
    </div>
  );
};
