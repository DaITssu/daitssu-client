import React, { useState } from 'react';
import DayBlock from './DayBlock/DayBlock';
import WeekBlock from './WeekBlock/WeekBlock';
import MonthControlButton from './MonthControlButton/MonthControlButton';
import "./Calendar.css"

interface CalendarProps{
    year:number;
    month:number;
    selectDay:number;

    dayTasks:{ [key: number]: Array<string> };
}

const Calendar = (props:CalendarProps) => {
    //val to control
    const [year, setYear] = useState<number>(props.year);
    const [month, setMonth] = useState<number>(props.month);

    const firstDayOfMonth = new Date(year, month-1, 1);
    const [firD, setFirD] = useState<number>(firstDayOfMonth.getDay());
    const lastDayOfMonth1 = new Date(year, month, 1);
    const lastDayOfMonth=new Date(lastDayOfMonth1.getTime()-1);
    const [lastDN, setLastDN] = useState<number>(lastDayOfMonth.getDate());

    const datTasks=props.dayTasks
    const [selectedDay, selectDayCounter] = useState(props.selectDay);
    // 

    const selectNewDay = (newSelectedDay:number) => {
        selectDayCounter(newSelectedDay);
    };
      

    const changeMonth = ( value: number) => {
        // 이벤트 핸들러에서 사용할 코드를 작성합니다.
        const newMonth = month + value;
        if (newMonth > 12) {
          setYear((year) => year + 1);
          setMonth(newMonth % 12);
        } else if (newMonth < 1) {
          setYear((year) => year - 1);
          setMonth((newMonth % 12) + 12);
        } else {
          setMonth(newMonth);
        }
        const firstDayOfMonth = new Date(year, newMonth-1, 1);
        setFirD(firstDayOfMonth.getDay());
        const lastDayOfMonth11 = new Date(year, newMonth, 1);
        const lastDayOfMonth22=new Date(lastDayOfMonth11.getTime()-1);
        setLastDN(lastDayOfMonth22.getDate());
      };


    const currentDate: Date = new Date();
    var today: number;
    if(currentDate.getMonth() + 1==month){
        today = currentDate.getDate();
    }
    else{
        today=0;
    }
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
        <div className='container' style={{ display: "flex", justifyContent: "space-between" }}>
            <MonthControlButton day='<' onClick={()=>{changeMonth(-1)}}/>
            <div id="CalendarTitle" > {year}년 {month}월 </div>
            <MonthControlButton day='>' onClick={()=>{changeMonth(1)}}/>
        </div >

       <WeekBlock/>
        
        {weeks.map((eachWeek) => (
        <div className='container'>
            {eachWeek.map((day,day_index) => (
                //a component for day 
                <div className='item' onClick={selectNewDay.bind(null, day)}>
                    <DayBlock day={day} 
                    taskColors={datTasks.hasOwnProperty(day) ? datTasks[day] : []}
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
