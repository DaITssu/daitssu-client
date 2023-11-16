export const NoticeCategory :  Record<string,string> = {
  'ALL': '전체',
  'SUBSCRIPTION': '구독',
  'ACADEMICS': '학사',
  'SCHOLARSHIP': '장학',
  'INTERNATIONAL_EXCHANGE': '국제교류',
  'RECRUITMENT': '채용',
  'INTERNATIONAL_STUDENT': '외국인유학생',
  'TEACHING': '교직',
  'EXTRACURRICULAR': '비교과행사',
  'VOLUNTEERING': '봉사',
  'FACULTY_RECRUITMENT': '교원채용',
  'OTHER': '기타',
  'COVID_19': '코로나19',
  'UNDERGRADUATE': '학부',
};

export const getNoticeKor = (englishCategory: string): string => {
  return NoticeCategory[englishCategory] || '';
};

export const getNoticeEng = (koreanCategory: string): string => {
  for (const [english, korean] of Object.entries(NoticeCategory)) {
    if (korean === koreanCategory) {
      return english;
    }
  }
  return '';
};