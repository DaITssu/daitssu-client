export interface CommunityInfoProps {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrls: string[];
  fileUrl: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  comments: number;
  likes: number;
  scrapCount: number;
  topic: string;
  writerNickName: string;
}
