import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  background-color: ${COLORS.grayscale.Gray5};
  flex-direction: column;
`;

export const RowSpacer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

export const Row = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  ${TEXT_STYLES.HeadM20}
  display: flex;
`;

export const MoreButton = styled.div`
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
  display: flex;
  cursor: pointer;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid ${COLORS.grayscale.Gray3};
  background-color: ${COLORS.grayscale.white};
  cursor: pointer;
`;

export const PostType = styled.div`
  ${TEXT_STYLES.CapM12}
  color: ${COLORS.SSU.primary};
  border-radius: 12px;
  border: 1px solid ${COLORS.SSU.primary};
  display: flex;
  padding: 3px 10px;
  margin: 5px 5px;
`;

export const PostTitle = styled.div`
  ${TEXT_STYLES.BodyM16}
  display: flex;
`;

export const PostTime = styled.div`
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
  display: flex;
`;

export const PostContent = styled.div`
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
  display: flex;
  width: 80%;
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
`;
