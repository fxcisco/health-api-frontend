import React from 'react';
import { UtilCtx } from '@/context/util';
import { AlertMessage } from './AlertMessage';

const test= {
  id: "vlmzy9Ij3",
  message: "Liking posts",
  variant: "good",
}



export const AlertSystem = () => {
  const { alerts } = UtilCtx.useState();
  const messages = [...alerts];

  const renderMessages = () => {
    return messages.map((alert) => (
      <AlertMessage {...alert} key={alert.id} />
    ))
  }

  return (
    <div className="alert-system">
      {renderMessages()}
    </div>
  );
};
