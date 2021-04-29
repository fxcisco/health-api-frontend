import React, { useState } from 'react';
import { BackendApi } from '@/apis/backend';
import { setAlert } from '@/context/util/actions';

export const ContactForm = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: '',
  });
  const onChange = (k: string) => (e: any) => {
    const { value } = e.target;
    if (isInvalid) setIsInvalid(false);
    setValues((p) => ({ ...p, [k]: value }));
  };

  async function postContactHandler(event: any) {
    event.preventDefault();
    setIsInvalid(false);
    const { email, name, message } = values;

    if (
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      setIsInvalid(true);
      setAlert({
        variant: 'error',
        message: 'Please fill all fields with valid values'
      })
      return;
    }

    try {
      const { data, error } = await BackendApi.postMessage({
        email: email,
        name: name,
        message: message,
      });
      if (error) {
        setValues({ email: '', name: '', message: '' });
        setAlert({ variant: 'error', message: error });
      }
      if (data) {
        setValues({ email: '', name: '', message: '' });
        setAlert({ variant: 'good', message: data.message });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form form-comments" onSubmit={postContactHandler}>
      <div className="row">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={values.name}
            autoComplete="off"
            onChange={onChange('name')}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={values.email}
            onChange={onChange('email')}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          autoComplete="off"
          value={values.message}
          onChange={onChange('message')}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
