
class Assign{ //과제와 공지에 둘다 사용
  private title?:string;
  
  private startDate?:Date;
  private submitDate?:Date;
  private endDate?:Date;

  private isCompleted?:boolean;

  private information?:String;
  private comment?:String;
  private high_score?:number;
  private my_score?:number;
  private linked_file?:string;



  constructor(title:string="no title",startDate:Date,submitDate:Date,endDate:Date,
    information:string="no information",comment:string="no comment",hig_score:number=10,my_score:number=6){
    this.title=title
    this.startDate=startDate;
    this.submitDate=submitDate;
    this.endDate=endDate;
    this.isCompleted=submitDate.getTime()<endDate.getTime()? true:false;
    this.information=information;
    this.comment=comment;
    this.high_score=hig_score;
    this.my_score=my_score;
  }
  public get_title = () => {return this.title};
  public get_s_date=()=>{return this.startDate}
  public get_e_date=()=>{return this.endDate}
  public get_isEnded=()=>{return this.isCompleted}
  public get_information=()=>{return this.information}
  public get_comment=()=>{return this.comment}
  public get_endDate=()=>{return this.endDate}
  public get_startDate=()=>{return this.startDate}
  public get_submitDate=()=>{return this.submitDate}
  public get_scores=()=>{return [this.high_score,this.my_score]}
}

class Subject {
  private name?: string;
  private semester?: string;
  private studentId?: number;

  private assigns?:Array<Assign>;

  constructor(name?: string, semester?: string, studentId?: number) {
    if (name !== undefined) {
      this.name = name;
    }
    if (semester !== undefined) {
      this.semester = semester;
    }
    if (studentId !== undefined) {
      this.studentId = studentId;
    }
    this.assigns=[]
  }
  public get_title = (): string | undefined => {
    return this.name;
  };
  public get_semester=()=>{return this.semester;}
  public get_studentId=()=>{return this.studentId;}
  public add_assign_data = (
    title: string,
    startDate: Date,
    submitDate: Date,
    endDate: Date,
    information: string = "no information",
    comment: string = "no comment",
    h_scre:number=10,
    m_score:number=7
  ) => {
    this.assigns?.push(new Assign(title, startDate, submitDate, endDate, information, comment,h_scre,m_score));
  };
  public get_assign_title=(index:number)=>{
    if (this.assigns!.length>index){
      return this.assigns![index].get_title()?.toString()
    }
    else{
      return "none"
    }
  }
  public get_assign_comment=(index:number)=>{
    if (this.assigns!.length>index && this.assigns![index]){
      return this.assigns![index].get_comment()?.toString()
    }
    else{
      return "none"
    }
  }
  public get_assign_information=(index:number)=>{
    if (this.assigns!.length>index){
      return this.assigns![index].get_information()?.toString()
    }
    else{
      return "none"
    }
  }
  public get_assign_submitdate=(index:number)=>{
    if (this.assigns!.length>index){
      const date=this.assigns![index].get_submitDate()!
      const year = date.getFullYear().toString().slice(-2); // 년도 끝 두 자리
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 +1)
      const day = date.getDate().toString().padStart(2, '0'); // 일
      const hours = date.getHours(); // 시간 (24시간 형식)
      const ampm = hours >= 12 ? '오후' : '오전';
      const formattedHours = (hours % 12).toString().padStart(2, '0'); // 시간 (12시간 형식)
      const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

      // 원하는 형식으로 문자열 조합
      const formattedDate = `${year}/${month}/${day} ${ampm} ${formattedHours}:${minutes}`;

      return formattedDate
    }
    else{
      return "none"
    }
  }

  public get_assign_startdate=(index:number)=>{
    if (this.assigns!.length>index){
      const date=this.assigns![index].get_submitDate()!
      const year = date.getFullYear().toString().slice(-2); // 년도 끝 두 자리
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 +1)
      const day = date.getDate().toString().padStart(2, '0'); // 일
      const hours = date.getHours(); // 시간 (24시간 형식)
      const ampm = hours >= 12 ? '오후' : '오전';
      const formattedHours = (hours % 12).toString().padStart(2, '0'); // 시간 (12시간 형식)
      const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

      // 원하는 형식으로 문자열 조합
      const formattedDate = `${20}${year}/${month}/${day}`;

      return formattedDate
    }
    else{
      return "none"
    }
  }
  public get_assign_enddate=(index:number)=>{
    if (this.assigns!.length>index){
      const date=this.assigns![index].get_endDate()!
      const year = date.getFullYear().toString().slice(-2); // 년도 끝 두 자리
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 +1)
      const day = date.getDate().toString().padStart(2, '0'); // 일
      const hours = date.getHours(); // 시간 (24시간 형식)
      const ampm = hours >= 12 ? '오후' : '오전';
      const formattedHours = (hours % 12).toString().padStart(2, '0'); // 시간 (12시간 형식)
      const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

      // 원하는 형식으로 문자열 조합
      const formattedDate = `${year}/${month}/${day} ${ampm} ${formattedHours}:${minutes}`;

      return formattedDate
    }
    else{
      return "none"
    }
  }
  public get_assign_date_to_date=(index:number)=>{
    if (this.assigns!.length>0){
      const currentDate= this.assigns![index].get_s_date()
      const year = currentDate!.getFullYear(); // 연도
      const month = String(currentDate!.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 1을 더하고 2자리로 포맷팅)
      const day = String(currentDate!.getDate()).padStart(2, '0'); // 일
      const sdateString = `${year}.${month}.${day}`;

      const endDate= this.assigns![index].get_e_date()
      const year1 = endDate!.getFullYear(); // 연도
      const month1 = String(endDate!.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 1을 더하고 2자리로 포맷팅)
      const day1 = String(endDate!.getDate()).padStart(2, '0'); // 일
      const edateString = `${year1}.${month1}.${day1}`;
      return sdateString+" ~ "+edateString
    }
    else{
      return "none"
    }
  }
  public get_assignments_len=()=>{return this.assigns?.length}
  public get_assign_isEnded=(index:number)=>{
    if (this.assigns!.length>0){
      return this.assigns![index].get_isEnded()
    }
    else{
      return "none"
    }
  }
  public get_assign_scores_to_string=(index:number)=>{
    if (this.assigns!.length>index){
      return this.assigns![index].get_scores()
    }
    else{
      return "none"
    }
  }
}
export { Assign, Subject };
