import "./DayBlock.css";
import React from "react";

interface DayBlockProps {
  day: number;
  taskColors:Array<string>;
  selectedDay:boolean;
  today:boolean;
  specialDay:number;
}

const DayBlock = (props:DayBlockProps) => {
  if(props.day>0){
    if(!(props.selectedDay || props.today)){
      if(props.specialDay<0){
        return (
          <div className="day_block">
            <div className="day_n">{props.day}</div>
            <div className="tasks_today">
              {props.taskColors.map((color) => (
                <div className="task" style={{backgroundColor: color }}></div> 
              ))}
            </div>
          </div>
        );
      }
      else{
        return (
          <div className="day_block">
            <div className={props.specialDay==0 ? "day_mon" : "day_sat"}>{props.day}</div>
            <div className="tasks_today">
              {props.taskColors.map((color) => (
                <div className="task" style={{backgroundColor: color }}></div> 
              ))}
            </div>
          </div>
        );
      }
    }
    else{
      return (
        <div className="day_block">
          <div className={props.selectedDay ? "selected" : "today"}>{props.day}</div>
          <div className="tasks_today">
            {props.taskColors.map((color) => (
              <div className="task" style={{backgroundColor: color }}></div> 
            ))}
          </div>
        </div>
      );
    }
  }
  else{
    return (
      <div className="day_block">
        <div className="day_n"></div>
      </div>
    );
  }
  
};

export default DayBlock;

interface weekBlockProps {
  day: string;
  taskColors:Array<string>;
  selectedDay:boolean;
  today:boolean;
  specialDay:number;
}

const WeekBlock = (props:weekBlockProps) => {
  return (
    <div className="day_block">
      <div className="day_n">{props.day}</div>
    </div>
  ); 
}
