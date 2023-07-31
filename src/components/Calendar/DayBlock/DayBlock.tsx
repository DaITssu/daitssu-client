// import './DayBlock.css';
// import React from 'react';

// interface DayBlockProps {
//   day: number;
//   taskColors: Array<string>;
//   selectedDay: boolean;
//   today: boolean;
//   specialDay: number;
// }

// const DayBlock = (props: DayBlockProps) => {
//   if (props.day > 0) {
//     if (!(props.selectedDay || props.today)) {
//       if (props.specialDay < 0) {
//         return (
//           <div className="day_block">
//             <div className="day_n">{props.day}</div>
//             <div className="tasks_today">
//               {props.taskColors.map((color, index) => (
//                 <div
//                   className="task"
//                   style={{ backgroundColor: color }}
//                   key={`task-${index}`}
//                 />
//               ))}
//             </div>
//           </div>
//         );
//       } else {
//         return (
//           <div className="day_block">
//             <div className={props.specialDay == 0 ? 'day_mon' : 'day_sat'}>
//               {props.day}
//             </div>
//             <div className="tasks_today">
//               {props.taskColors.map((color, index) => (
//                 <div
//                   className="task"
//                   style={{ backgroundColor: color }}
//                   key={`task-${index}`}
//                 />
//               ))}
//             </div>
//           </div>
//         );
//       }
//     } else {
//       return (
//         <div className="day_block">
//           <div className={props.selectedDay ? 'selected' : 'today'}>
//             {props.day}
//           </div>
//           <div className="tasks_today">
//             {props.taskColors.map((color, index) => (
//               <div
//                 className="task"
//                 style={{ backgroundColor: color }}
//                 key={`task-${index}`}
//               />
//             ))}
//           </div>
//         </div>
//       );
//     }
//   } else {
//     return (
//       <div className="day_block">
//         <div className="day_n"></div>
//       </div>
//     );
//   }
// };

// export default DayBlock;

import './DayBlock.css';
import React from 'react';

interface DayBlockProps {
  day: number;
  taskColors: Array<string>;
  selectedDay: boolean;
  today: boolean;
  specialDay: number;
}

const DayBlock = (props: DayBlockProps) => {
  let dayClass = 'day_n';

  if (props.day > 0) {
    if (props.selectedDay) {
      dayClass = 'selected';
    } else if (props.today) {
      dayClass = 'today';
    } else if (props.specialDay === 0) {
      dayClass = 'day_mon';
    } else if (props.specialDay !== -1) {
      dayClass = 'day_sat';
    }
  }

  return (
    <div className="day_block">
      <div className={dayClass}>{props.day > 0 ? props.day : ''}</div>
      {props.day > 0 && (
        <div className="tasks_today">
          {props.taskColors.map((color, index) => (
            <div
              className="task"
              style={{ backgroundColor: color }}
              key={`task-${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DayBlock;
