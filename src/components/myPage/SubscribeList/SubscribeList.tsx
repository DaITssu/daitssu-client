import React, { useState } from 'react';
import * as styles from './SubscribeList.styles';
import Image from 'next/image';
import leftArrow from '@icons/icon/Arrow/LeftBigArrow.svg';
import SettingIcon from '@icons/icon/SubscribeList/Setting.svg';
import { useRouter } from 'next/router';
import useModal from '@/components/common/Modal/useModal';
import Modal from '@/components/common/Modal';
import CancelIcon from '@icons/icon/SubscribeList/Cancel.svg';

interface EditProfileProps {
  name: string;
  studentId: string;
  department: string;
  notice: string[];
  funsystem: string[];
  departmentList: string[];
}

const SubscribeList = (props: EditProfileProps) => {
  const { open, PopUp, close } = useModal();
  const router = useRouter();
  /// 1 : 공지사항, 2 : 펀시스템, 3 : 학부
  const [index, setIndex] = useState<number>(0);

  const [noticeList, setNoticeList] = useState<string[]>([
    '학사',
    '장학',
    '국제교류',
    '채용',
    '외국인유학생',
    '교직',
    '비교과행사',
    '봉사',
    '교원채용',
    '기타',
    '코로나19',
    '학부',
  ]);

  const [funsystemList, setFunsystemList] = useState<string[]>([
    '학습역량',
    '공모전/경진대회',
    '자격증/특강',
    '학생활동',
    '해외연수/교환학생',
    '인턴',
    '봉사',
    '체험활동',
    '심리/상담/진단',
    '진로지원',
    '창업지원',
    '취업지원',
  ]);

  const [departmentList, setDepartmentList] = useState<string[]>([
    '컴퓨터학부',
    '전자정보공학부(전자공학전공)',
    '전자정보공학부(IT융합전공)',
    '글로벌미디어학부',
    '소프트웨어학부',
    'AI융합학부',
    '미디어경영학부',
  ]);

  /// 공지사항 구독 리스트
  const [selectedNoticeList, setSelectedNoticeList] = useState<string[]>(
    props.notice,
  );
  /// 펀시스템 구독 리스트
  const [selectedFunsystemList, setSelectedFunsystemList] = useState<string[]>(
    props.funsystem,
  );
  /// 학부 구독 리스트
  const [selectedDepartmentList, setSelectedDepartmentList] = useState<
    string[]
  >(props.departmentList);

  function onClickNotice() {
    setIndex(1);
    open();
  }

  function onClickFunSystem() {
    setIndex(2);
    open();
  }

  function onClickDepartment() {
    setIndex(3);
    open();
  }

  function onSubmit() {
    //TODO : 구독 리스트 / 펀시스템 / 학부 업데이트
    close();
  }

  return (
    <div>
      <styles.EditProfileAppbar>
        <Image
          src={leftArrow}
          width={20}
          height={20}
          alt="back"
          onClick={() => router.back()}
        />
        <p>구독 목록</p>
        <div></div>
      </styles.EditProfileAppbar>
      <styles.TitleWrapper onClick={onClickNotice}>
        <styles.TitleText>공지사항</styles.TitleText>
        <Image src={SettingIcon} width={24} height={24} alt="setting" />
      </styles.TitleWrapper>
      <styles.SubscribeList>
        {selectedNoticeList.map((title, index) => ListComponent(title, index))}
      </styles.SubscribeList>
      <styles.TitleWrapper onClick={onClickFunSystem}>
        <styles.TitleText>펀시스템</styles.TitleText>
        <Image src={SettingIcon} width={24} height={24} alt="setting" />
      </styles.TitleWrapper>
      <styles.SubscribeList>
        {selectedFunsystemList.map((title, index) =>
          ListComponent(title, index),
        )}
      </styles.SubscribeList>
      <styles.TitleWrapper onClick={onClickDepartment}>
        <styles.TitleText>학부</styles.TitleText>
        <Image src={SettingIcon} width={24} height={24} alt="setting" />
      </styles.TitleWrapper>
      <styles.DepartmentList>
        {selectedDepartmentList.map((title, index) => (
          <styles.Department key={index}>{title}</styles.Department>
        ))}
      </styles.DepartmentList>
      <PopUp>
        {index === 1 ? (
          <Modal onClose={close} title="공지사항 구독 설정">
            <styles.SubscribeList>
              {selectedNoticeList.map((title, index) => (
                <styles.selectableCategory
                  selected={selectedNoticeList.includes(title)}
                  onClick={() => {
                    if (selectedNoticeList.includes(title)) {
                      setSelectedNoticeList(
                        selectedNoticeList.filter((item) => item !== title),
                      );
                    } else {
                      setSelectedNoticeList([...selectedNoticeList, title]);
                    }
                  }}
                  key={index}
                >
                  {title}
                  <Image src={CancelIcon} width={21} height={21} alt="cancel" />
                </styles.selectableCategory>
              ))}
              {noticeList
                .filter((item) => !selectedNoticeList.includes(item))
                .map((title, index) => (
                  <styles.selectableCategory
                    selected={selectedNoticeList.includes(title)}
                    onClick={() => {
                      setSelectedNoticeList([...selectedNoticeList, title]);
                    }}
                    key={index}
                  >
                    {title}
                  </styles.selectableCategory>
                ))}
            </styles.SubscribeList>
            <styles.finishButton onClick={onSubmit}>완료</styles.finishButton>
          </Modal>
        ) : index === 2 ? (
          <Modal onClose={close} title="펀시스템 구독 설정">
            <styles.SubscribeList>
              {selectedFunsystemList.map((title, index) => (
                <styles.selectableCategory
                  selected={selectedFunsystemList.includes(title)}
                  onClick={() => {
                    if (selectedFunsystemList.includes(title)) {
                      setSelectedFunsystemList(
                        selectedFunsystemList.filter((item) => item !== title),
                      );
                    } else {
                      setSelectedFunsystemList([
                        ...selectedFunsystemList,
                        title,
                      ]);
                    }
                  }}
                  key={index}
                >
                  {title}
                  <Image src={CancelIcon} width={21} height={21} alt="cancel" />
                </styles.selectableCategory>
              ))}
              {funsystemList
                .filter((item) => !selectedFunsystemList.includes(item))
                .map((title, index) => (
                  <styles.selectableCategory
                    selected={selectedFunsystemList.includes(title)}
                    onClick={() => {
                      setSelectedFunsystemList([
                        ...selectedFunsystemList,
                        title,
                      ]);
                    }}
                    key={index}
                  >
                    {title}
                  </styles.selectableCategory>
                ))}
            </styles.SubscribeList>
            <styles.finishButton onClick={onSubmit}>완료</styles.finishButton>
          </Modal>
        ) : index === 3 ? (
          <Modal onClose={close} title="학부 구독 설정">
            <styles.DepartmentListWrapper>
              {departmentList.map((title, index) => (
                <styles.DepartmentListComponent
                  selected={selectedDepartmentList.includes(title)}
                  key={index}
                  onClick={
                    selectedDepartmentList.includes(title)
                      ? () => {
                          setSelectedDepartmentList(
                            selectedDepartmentList.filter(
                              (item) => item !== title,
                            ),
                          );
                        }
                      : () => {
                          setSelectedDepartmentList([
                            ...selectedDepartmentList,
                            title,
                          ]);
                        }
                  }
                >
                  {title}
                </styles.DepartmentListComponent>
              ))}
            </styles.DepartmentListWrapper>
          </Modal>
        ) : (
          <div></div>
        )}
      </PopUp>
    </div>
  );
};

const ListComponent = (title: string, index: number) => (
  <styles.Category key={index}>{title}</styles.Category>
);

export default SubscribeList;
