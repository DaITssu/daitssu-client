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


export const getNoticeEng = (koreanCategory: string): string => {
  for (const [english, korean] of Object.entries(NoticeCategory)) {
    if (korean === koreanCategory) {
      return english;
    }
  }
  return '';
};


export const FunSystemCategory :  Record<string,string> = {
  'ALL': '전체',
  'SUBSCRIPTION': '구독',
  'LEARNING_SKILLS': '학습역량',
  'COMPETITION': '공모전/경진대회',
  'CERTIFICATION': '자격증/특강',
  'STUDENT_ACTIVITIES': '학생활동',
  'STUDY_ABROAD': '해외연수/교환학생',
  'INTERNSHIP': '인턴',
  'VOLUNTEERING': '봉사',
  'EXPERIENTIAL_ACTIVITIES': '체험활동',
  'COUNSELING': '심리/상담/진단',
  'CAREER_SUPPORT': '진로지원',
  'STARTUP_SUPPORT': '창업지원',
  'EMPLOYMENT_SUPPORT': '취업지원',
  'Unknown' : '해당없음'
};

export const getFunSystemEng = (koreanCategory: string): string => {
  for (const [english, korean] of Object.entries(FunSystemCategory)) {
    if (korean === koreanCategory) {
      return english;
    }
  }
  return '';
};

export const AllCategory :  Record<string,string> = {
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
  'LEARNING_SKILLS': '학습역량',
  'COMPETITION': '공모전/경진대회',
  'CERTIFICATION': '자격증/특강',
  'STUDENT_ACTIVITIES': '학생활동',
  'STUDY_ABROAD': '해외연수/교환학생',
  'INTERNSHIP': '인턴',
  'EXPERIENTIAL_ACTIVITIES': '체험활동',
  'COUNSELING': '심리/상담/진단',
  'CAREER_SUPPORT': '진로지원',
  'STARTUP_SUPPORT': '창업지원',
  'EMPLOYMENT_SUPPORT': '취업지원',
  'Unknown' : '해당없음'
};

export const getKor = (englishCategory: string): string => {
  return AllCategory[englishCategory] || '';
};