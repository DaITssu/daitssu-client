import Link from 'next/link';
import Script from 'next/script'
import React, { useState } from 'react';
import DayBlock from './DayBlock/DayBlock';
import "./CalendarTotal.css"

interface CalendarProps{
    year:number;
    month:number;
    firD:number;
    lastDN:number;
    selectDay:number;

    importantDay:Array<number>;
    dayTasks:{ [key: number]: Array<string> };
}

const Calendar = (props:CalendarProps) => {
    //val to control
    const [year,month, firD, lastDN] = [props.year,props.month, props.firD, props.lastDN];
    const importantDay=props.importantDay;
    const datTasks=props.dayTasks
    const [selectedDay, selectDayCounter] = useState(props.selectDay);
    // 

    const selectNewDay = (newSelectedDay:number) => {
        selectDayCounter(newSelectedDay);
      };

    const currentDate: Date = new Date();
    var today: number;
    if(currentDate.getMonth() + 1==month){
        today = currentDate.getDate();
    }
    else{
        today=0;
    }
    const whatDay:string[]=["MON","TUE","WED","THU","FRI"];
    const weeks:number[][] = [[],[],[],[],[],[]];
    var nowD=1;
    var nowW=0;
    for(var i=0;i<firD;i++){
        weeks[nowW].push(-1);
    }
    while(nowD<lastDN){
        while(weeks[nowW].length<7){
            weeks[nowW].push(nowD);
            nowD++;
            if(nowD>lastDN){
                break;
            }
        }
        if(nowD>lastDN){
            break;
        }
        nowW++;
    }
    while(weeks[nowW].length<7){
        weeks[nowW].push(-1);
    }
    if(weeks[weeks.length -1][0]<0){
        weeks.pop();
    }
    return (
    <div>
        
        <div className='container'>
            <div style={{ width: "55px", height: "20px",
                fontSize:"20px", color:"red",
                display: "flex",justifyContent: "center", 
            }}>SUN</div>
            {whatDay.map((wd)=>(
                <div style={{ width: "55px", height: "20px",
                fontSize:"20px",
                display: "flex",justifyContent: "center"
            }}>{wd}</div>
            ))}
            <div style={{ width: "55px", height: "20px",
                fontSize:"20px",color:"blue",
                display: "flex",justifyContent: "center",
            }}>SAT</div>
        </div>
        
        {weeks.map((eachWeek) => (
        <div className='container'>
            {eachWeek.map((day,day_index) => (
                //a component for day 
                <div className='item' onClick={selectNewDay.bind(null, day)}>
                    <DayBlock day={day} 
                    taskColors={importantDay.includes(day) ? datTasks[day] : []}
                    selectedDay={day === selectedDay}
                    today={day==today}
                    specialDay={(day_index!=0 && day_index!=6) ? -1 : day_index}
                    />
                </div>
            ))}
        </div>
        ))}
    </div>
    );
}

export default Calendar;
