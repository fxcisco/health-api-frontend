import React, { useState } from 'react';
import { TextInput } from '@/components/inputs';
import { BackendApi } from '@/apis/backend';
import { setNotification } from '@/context/util/actions';

export const NewsletterRegister = () => {
  const [email, setEmail] = useState('');

  const registrationHandler = async (event: any) => {
    event.preventDefault();
    try {
      const { data, error } = await BackendApi.subscribe(email);
      console.log(data,error);
      if(data) setNotification({
        status: 'success',
        title: 'Success',
        message: data.message
      })
      if(error) setNotification({
        status: 'error',
        title: 'Error',
        message: error
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="section-newsletter">
      <h3>Sign up to stay connected!</h3>
      <form className="form" onSubmit={registrationHandler}>
        <div className="row">
          <TextInput
            id="email"
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={(val: any) => setEmail(val)}
          />
          <button type="submit" className=" btn btn-dark">
            Register
          </button>
        </div>
      </form>
    </section>
  );
};
