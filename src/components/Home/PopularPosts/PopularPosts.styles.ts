import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${COLORS.grayscale.Gray5};
  flex-direction: column;
  padding: 20px;
`;

export const RowSpacer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  ${TEXT_STYLES.HeadM20}
`;

export const MoreButton = styled.div`
  display: flex;
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
  cursor: pointer;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid ${COLORS.grayscale.Gray3};
  background-color: ${COLORS.grayscale.white};
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;

export const PostType = styled.div`
  display: flex;
  padding: 3px 10px;
  margin: 5px 5px;
  ${TEXT_STYLES.CapM12}
  color: ${COLORS.SSU.primary};
  border-radius: 12px;
  border: 1px solid ${COLORS.SSU.primary};
`;

export const PostTitle = styled.div`
  display: flex;
  ${TEXT_STYLES.BodyM16}
`;

export const PostTime = styled.div`
  display: flex;
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
`;

export const PostContent = styled.div`
  display: flex;
  width: 80%;
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: 'ellipsis';
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
`;

export const PostCommentCount = styled.div`
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
  display: flex;
  margin-left: 5px;
`;
