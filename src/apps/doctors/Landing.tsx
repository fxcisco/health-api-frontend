import React, { useEffect, useState } from 'react';
import { BackendApi } from '@/apis/backend';
import { OgBasic } from '@/components/opengraph';
import { setNotification } from '@/context/util/actions';
import { SitePage } from '@/layout';
import { BsCircle } from 'react-icons/bs';

export const Landing = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [target, setTarget] = useState<any>({});
  const [appts, setAppts] = useState<any[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const { data, error } = await BackendApi.getDoctors();
        if (data) setDoctors(data.doctors);
        if (error)
          setNotification({
            status: 'error',
            title: 'Error',
            message: error,
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDocs();
  }, []);

  useEffect(() => {
    if(!target?.id) return;
    const fetchAppts = async () => {
      try {
        const { data, error } = await BackendApi.getDoctorAppts(target.id);
        if (data) setAppts(data.appointments);
        if (error)
          setNotification({
            status: 'error',
            title: 'Error',
            message: error,
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAppts();
  }, [target]);

  const onChangeTarget = (d: any) => () => {
    if (d.id !== target.id) setTarget(_ => d);
  };

  const renderDoctors = () => {
    return doctors.map((item, index) => {
      let activeClass = '';
      if (item.id === target.id) activeClass = 'active';

      return (
        <li key={index}>
          <button
            className={`list-btn ${activeClass}`}
            onClick={onChangeTarget(item)}
          >
            <span>
              <BsCircle />
            </span>
            <h5>
              {item.lastName}, {item.firstName}
            </h5>
          </button>
        </li>
      );
    });
  };

  const renderAppts = () => {
    return appts.map((item, index) => {
      return (
        <tr key={index} className="t-left">
          <td>{index + 1}</td>
          <td>
            <span>{item.name}</span>
          </td>
          <td>{item.time}</td>
          <td>{item.kind}</td>
        </tr>
      );
    });
  };

  return (
    <SitePage title="User Services">
      <OgBasic
        title="Doctor Services"
        description="Find and view your schedule"
      />
      <div className="container">
        <header className="page-title" />
      </div>

      <div className="grid grid-doctors">
        <div className="doctors-side">
          <header className='doctors-header'>
            <div className="site-brand-title">
              <h1>Appointments</h1>
            </div>
            <h5>Physicians</h5>
          </header>
          <ul>{renderDoctors()}</ul>

          <div className="actions-section">
            <button className='btn-logout'>
              Logout
            </button>
          </div>
        </div>

        <div className="appointments-side">
          <header className='header-appointments'>
            <div className="header-content">
              <h1>{target.honorific} {target.firstName} {target.lastName}</h1>
              <h4>{target.email}</h4>
            </div>
          </header>


          { appts?.length > 0 ? (
            <table className="table-appointments">
            <thead>
              <tr className="t-left">
                <th>
                  <span>#</span>
                </th>
                <th>
                  <span>Name</span>
                </th>
                <th>
                  <span>Time</span>
                </th>
                <th>
                  <span>Kind</span>
                </th>
              </tr>
            </thead>

            <tbody>{renderAppts()}</tbody>
          </table>
          ): (
            <div className="appt-placeholder">
              <h4>No Appointments</h4>
            </div>
          )}
        </div>
      </div>
    </SitePage>
  );
};
