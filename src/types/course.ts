export interface CourseResponse {
  code: number;
  message: string;
  data: Course[];
}

interface Course {
  id: number;
  name: string;
  videos: Video[];
  assignments: Assignment[];
  term: number;
}

interface Video {
  id: number;
  name: string;
  duaAt: string;
  startAt: string;
}

interface Assignment {
  id: number;
  name: string;
  dueAt: string;
  startAt: string;
}
