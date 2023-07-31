import './WeekBlock.css';
import React from 'react';

const WeekBlock = () => {
  const whatDay: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  return (
    <>
      <div className="container">
        <div className="item" style={{ height: '29px' }}>
          <div className="day_block">
            <div
              className="day_mon"
              style={{ fontSize: '14px', height: '29px' }}
            >
              {'SUN'}
            </div>
          </div>
        </div>
        {whatDay.map((wd, index) => (
          <div
            className="item"
            style={{ height: '29px' }}
            key={`weekday-${index}`}
          >
            <div className="day_block">
              <div
                className="day_n"
                style={{ fontSize: '14px', height: '29px' }}
              >
                {wd}
              </div>
            </div>
          </div>
        ))}
        <div className="item" style={{ height: '29px' }}>
          <div className="day_block">
            <div
              className="day_sat"
              style={{ fontSize: '14px', height: '29px' }}
            >
              {'SAT'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekBlock;
