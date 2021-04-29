import React, { ReactNode, useEffect } from 'react'
import { SitePage } from '@/layout'
import { useRouter } from 'next/router';
import { OgBasic } from '../opengraph';

interface Props {
  redirect?: string;
  delay?: boolean;
  delayTime?: number;
  children?: ReactNode; 
}

export const ForbiddenPage = ({
  delay,
  delayTime = 1000,
  redirect='/',
  children
}: Props) => {
  const router = useRouter();
  const DELAY_TIME = delay ? delayTime : 0;

  useEffect(() => {
    setTimeout(() => {
      router.push(redirect);
    }, DELAY_TIME);
  }, [])

  const defaultContent = (
    <React.Fragment>
      <h1 className='r-md'>You're Not Authorized</h1>
      <p>redirecting...</p>
    </React.Fragment>

  )

  return (
    <SitePage title='Forbidden | 403'>
      <OgBasic
        title='Error | 404'
        description='This is not the page you want.'
      />
      <div className='container full-screen flex-column center'>
        {children || defaultContent}
      </div>
    </SitePage>
  )
}
