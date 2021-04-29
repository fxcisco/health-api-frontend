import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { Modal } from '../modals';
import { Calendar } from './Calendar';
import moment from 'moment';

interface Props {
  id: string;
  show?: boolean;
  disablePast?: boolean;
  onSubmit?: (val: any) => void;
}

const isPastDate = (current: string) => {
  if (current) {
    if (moment(current, 'DD-MM-YYYY') < moment().subtract(1, 'days')) {
      return true;
    }
  }
  return false;
};

export const CalendarPicker = ({ onSubmit, disablePast, id }: Props) => {
  const [show, setShow] = useState(false);

  const handleSubmit = (date: string) => {
    if (disablePast && isPastDate(date)) return;

    date = moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD');
    if (onSubmit) onSubmit(date);
    setShow(false);
  };

  return (
    <React.Fragment>
      <button className="btn" id={id} onClick={() => setShow(true)}>
        <BsCalendar />
      </button>
      <Modal show={show} onClose={() => setShow(false)}>
        <Calendar onSelect={handleSubmit} />
      </Modal>
    </React.Fragment>
  );
};
