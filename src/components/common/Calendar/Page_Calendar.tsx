import Calendar from "./Calendar";

const PageCalendar: React.FC = () => {
  const currentDate: Date = new Date();

  const currentMonth = currentDate.getMonth();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1);
  const firD = firstDayOfMonth.getDay();

  const currentYear = currentDate.getFullYear();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const lastDN = lastDayOfMonth.getDate();

  var year = currentDate.getFullYear();
  var month= currentDate.getMonth()+1;

  const importantDay=[3,5,14];
  const datTasks:{ [key: number]: Array<string> } ={3:["#ffaa00","#ff0000"],5:["#ffaa00","#ff0000"],14:["#ffaa00","#ff0000"]};
  var selectedDay:number=currentDate.getDate();

  const changeMonth = (val:number) => {

  };

  return(
    <div >
      <div style={{   display: "flex",  justifyContent: "center",  marginBottom: "10px"}}>
      <button style={{marginRight:"10px",fontSize:"50px"}}>&lt;</button>
        <div style={{ fontSize:"50px"}}> {year}년 {month}월</div>
      <button style={{marginLeft:"10px",fontSize:"50px"}} >&gt;</button>
      </div>
      <Calendar 
        year={year}
        month={month}
        firD={firD}
        lastDN={lastDN}
        selectDay={selectedDay}

        importantDay={importantDay}
        dayTasks={datTasks}
      />
    </div>
  )
}
export default PageCalendar;