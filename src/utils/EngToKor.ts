export const tag = [
  { kor: '전체', eng: 'ALL' },
  { kor: '인기글', eng: 'POPULAR' },
  { kor: '잡담', eng: 'CHAT' },
  { kor: '질문', eng: 'QUESTION' },
  { kor: '정보', eng: 'INFORMATION' },
];

export function EngToKor(englishTag: string) {
  const foundTag = tag.find((tagItem) => tagItem.eng === englishTag);

  if (foundTag) {
    return foundTag.kor;
  } else {
    return 'X';
  }
}
