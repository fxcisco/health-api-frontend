import React, { useState } from 'react';
import { SitePage } from '@/layout';
import { SearchInput } from '@/components/inputs';
import { OgBasic } from '@/components/opengraph';
import { DrugsApi } from '@/apis/drugs';
import { setNotification } from '@/context/util/actions';
import { NavLink } from '@/components/navigation';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {}

export const Landing = (props: Props) => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (val: any) => {
    try {
      setLoading(true);
      setResults([]);
      const { data, error } = await DrugsApi.findDrugs(val);
      if(data) setResults(data.data);
      if(error) setNotification({
        status: 'error',
        title: 'Error',
        message: error
      })
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const renderStatus = () => {
    let message = <div/>;
    if(loading) message = <h6 className='primary'>Loading...</h6>;
    if(!loading && results?.length < 1){
      message = <h6>No results</h6>;
    }
    return (
      <div className='row-reverse'>
        {message}
      </div>
    )
  }

  const renderItems = () => {
    return results?.map(item => {
      return (
        <div key={item._id} className='myb-2'>
          <h5>{item.propname}</h5>
          <h6>{item.npropname}</h6>
          <p>{item.labelname}</p>
          <div className="flex jc-between ai-center">
            <span>{item.dosename}</span>
            <span>{item.routename}</span>
          </div>
        </div>
      )
    })
  }

  return (
    <SitePage title="Drug Information" nometa>
      <OgBasic
        title="Drug Information"
        description="Find drugs by name or type"
      />
      <div className="container">
        <header className="page-title">
          <h1>Drug Search</h1>

          <NavLink href='/'>
            <BsArrowLeft className="mxl-1" /> Back
          </NavLink>
        </header>

        <div className="page-banner">
          
        </div>

        <div className="page-content grid grid-2">
          <SearchInput
            id='drugs'
            isLoading={loading}
            onSubmit={handleSubmit}
          />
          <div className="search-results">
            {renderStatus()}
            <div className="items-list">
              {renderItems()}
            </div>
          </div>
        </div>
      </div>
    </SitePage>
  );
};
