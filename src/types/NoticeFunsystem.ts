export interface NoticeInfoProps {
  id: number;
  title: string;
  departmentId: number;
  content: string;
  category: string;
  imageUrl: string;
  fileUrl: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}

export interface FunsystemInfoProps {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}
