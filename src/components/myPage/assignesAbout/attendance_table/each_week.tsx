import * as styles from "./each_week.styles"

interface SubmitHeadernProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;

  weekN:number;
  attList:Array<number>

}

const EachWeekAttendance = ({weekN,attList,color}: SubmitHeadernProps) => {
  const rows_num=attList.length;
  const mapNumberToText = (number:number) => {
    switch (number) {
      case 1:
        return '/assets/icon/Shape/Ellipse.svg'; //출석
      case 2:
        return '/assets/icon/Shape/Triangle.svg'; //지각
      case 3:
        return '/assets/icon/Shape/X.svg';//결석
      default:
        return ;
    }
  };
  if (rows_num==0){
    return <></>;
  }
  const attIconList=attList.map(mapNumberToText)
  const smallBoxHeight=74/rows_num;
  return (<>
    <tr style={{backgroundColor:color}}>
      <styles.weekBox rowSpan={rows_num}>{weekN}주차</styles.weekBox>
      <styles.smallBox height={smallBoxHeight}>1차시</styles.smallBox>
      <styles.smallBox2 height={smallBoxHeight}><img src={attIconList[0]}/></styles.smallBox2>
    </tr>

   {attIconList.slice(1,rows_num).map((item, index)  => (
      <tr style={{backgroundColor:color}}>
        <styles.smallBox height={smallBoxHeight}>{index+2}차시</styles.smallBox>
        <styles.smallBox2 height={smallBoxHeight}><img src={item}/></styles.smallBox2>
      </tr>
      ))}
  </>)
};

export default EachWeekAttendance;
