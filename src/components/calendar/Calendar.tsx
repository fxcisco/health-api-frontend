import React, { useState } from 'react';
import { useCalendar } from './useCalendar';

interface Props {
  onSelect?: (val: string) => void;
}

export const Calendar = ({ onSelect }: Props) => {
  const [target, setTarget] = useState('');
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const dateClickHandler = (date: string) => {
    console.log(date);
    setTarget(date);
    if (onSelect) onSelect(date);
  };

  const renderRow = (row: any[]) => {
    return row.map((col) => {
      let itemClass = col.classes;
      if (col.date === todayFormatted) {
        itemClass += ' today';
      }
      if (col.date === target) {
        itemClass += ' target';
      }

      return (
        <td
          key={col.date}
          className={`${itemClass}`}
          onClick={() => dateClickHandler(col.date)}
        >
          {col.value}
        </td>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="calendar-table">
        <h5 className="t-center">
          {`${
            monthNames[selectedDate.getMonth()]
          } - ${selectedDate.getFullYear()}`}
        </h5>

        <table className="table">
          <thead>
            <tr>
              {daysShort.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Object.values(calendarRows).map((cols: any) => {
              return <tr key={cols[0].date}>{renderRow(cols)}</tr>;
            })}
          </tbody>
        </table>

        <div className="row jc-between">
          <button onClick={getPrevMonth} className="btn btn-primary-outline">
            Prev
          </button>
          <button onClick={getNextMonth} className="btn btn-primary-outline">
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

/*
{cols.map((col) => {

  return col.date === todayFormatted ? (
    <td
      key={col.date}
      className={`${col.classes} today`}
      onClick={() => dateClickHandler(col.date)}
    >
      {col.value}
    </td>
  ) : (
    <td
      key={col.date}
      className={col.classes}
      onClick={() => dateClickHandler(col.date)}
    >
      {col.value}
    </td>
  )
})}

*/
