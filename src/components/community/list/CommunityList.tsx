import * as styles from './CommunityList.style';
import React, { FC, useState, useEffect } from 'react';
import CommunityItem, { CommunityItemProps } from './CommunityListItem';
import { jsx, css } from '@emotion/react';
import Link from 'next/link';
import { getCommunityItemAPI } from '@/apis/communityAPIS';
import { COLORS } from '@/styles/constants/colors';
import plus_img from '@icons/icon/Button/plus_button.svg';
import { tag } from '@/utils/EngToKor';

const CommunityList: FC<{ isButtonVisible: boolean; search: string }> = ({
  isButtonVisible,
  search,
}) => {
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('ALL');
  const [items, setItems] = useState<CommunityItemProps[]>([]);
  const [fetching, setFetching] = useState(false);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    try {
      setFetching(true);
      const data = await getCommunityItemAPI(search, category, page);
      if (data) {
        if (page === 0) {
          setItems(data);
        } else {
          setItems((prev) => [...prev, ...data]);
        }
        setPage(page + 1);
      } else {
        console.error('커뮤니티 데이터를 불러오는 중 오류 발생:', data.message);
      }
    } catch (error) {
      console.error('커뮤니티 데이터를 불러오는 중 오류 발생:', error);
    } finally {
      setFetching(false);
    }
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !fetching) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index, search]);

  useEffect(() => {
    setPage(0);
    fetchData();
  }, [search, category]);

  const selectTagHandler = (n: number) => {
    setCategory(tag[n].eng);
    setIndex(n);
    setPage(0);
  };

  const plus_button_onClick = () => {
    // 커뮤니티 게시글 추가 컴포넌트 연결
  };

  return (
    <>
      {isButtonVisible && (
        <styles.TagList>
          {tag.map(({ kor, eng }, idx) => (
            <styles.TagButton
              key={idx}
              css={[
                index === idx
                  ? css`
                      background-color: ${COLORS.SSU.primary};
                      color: ${COLORS.grayscale.white};
                    ` // 선택됨
                  : css`
                      background-color: ${COLORS.grayscale.white};
                      ${COLORS.SSU.primary};
                    `, // 선택안됨
              ]}
              onClick={() => selectTagHandler(idx)}
            >
              {kor}
            </styles.TagButton>
          ))}
        </styles.TagList>
      )}

      <styles.CommunityListBox>
        {items?.map((item: CommunityItemProps, key: number) => {
          return <CommunityItem key={key} item={item} />;
        })}
      </styles.CommunityListBox>
      <Link href={'/community/writing'}>
        <styles.PlusButton
          src={plus_img}
          onClick={plus_button_onClick}
          width={25}
          height={25}
          alt={'plus_button'}
        />
      </Link>
    </>
  );
};
export default CommunityList;
