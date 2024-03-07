import { useEffect, useState } from 'react';

import * as styles from './TOS.styles';
import CloseBtn from '@icons/icon/Icon18/Close.svg';
import Button from '@/components/common/Button';
import Image from 'next/image';

interface TOSProps {
  onAgree: Function;
  closeModal: Function;
  title: string;
}
const TOS = ({ onAgree, closeModal, title }: TOSProps) => {
  const getTOSContent = (title: string) => {
    // TODO : 이용약관 완성되면 연결
    if (title === '다잇슈 이용약관') {
      return (
        <styles.LineHeightBox>
          <b>제1장 총칙</b> <br />
          <b>제1조 (목적)</b>
          <br />
          이 약관은 다잇슈 모바일 커뮤니티(이하 “다잇슈”라 합니다)가 모바일
          기기를 통해 제공하는 서비스의 이용에 대한 다잇슈와 회원의 권리ㆍ의무
          및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          <br />
          <b>제2조 (용어의 정의)</b>
          <br />
          ① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. <br />
          1. “다잇슈”라 함은 애플리케이션을 통해 서비스를 제공하고 운영하는 자를
          의미합니다. <br />
          2. “회원”이란 이 약관에 따라 이용계약을 체결하고, 본항 제3호의
          “서비스”를 이용하는 자를 의미합니다. <br />
          3. “모바일 기기”란 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있는
          기기로서, 휴대폰, 스마트폰, 태블릿 등을 의미합니다. <br />
          4. “애플리케이션”이란 다잇슈가 제공하는 서비스를 이용하기 위하여
          모바일 기기를 통해 다운로드 받거나 설치하여 사용하는 프로그램 일체를
          의미합니다. <br />
          5. “서비스”라 함은 다잇슈가 제공하는 애플리케이션을 통해 회원이 모바일
          기기에서 실행하는 다잇슈 커뮤니티 서비스의 전부 또는 일부를
          의미합니다. <br />② 이 약관에서 사용하는 용어의 정의는 본 조 제1항에서
          정하는 것을 제외하고는 관계법령 및 서비스별 정책에서 정하는 바에
          의하며, 이에 정하지 아니한 것은 일반적인 상 관례에 따릅니다.
          <b>제3조 (약관의 효력 및 변경)</b> <br />
          ① 회원이 제5조의 이용계약을 체결한 때부터 회원에게 약관의 효력이
          발생합니다. 다잇슈는 이 약관의 내용을 회원이 알 수 있도록 서비스 내
          공지사항에 게시합니다. <br />
          ② 다잇슈가 약관을 개정할 경우에는 적용일자 및 개정내용, 개정사유 등을
          명시하여 최소한 그 적용일 7일 이전부터 공지사항으로 회원에게
          공지합니다. 변경된 내용이 회원에게 불리하거나 중대한 사항의 변경인
          경우에는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기
          쉽도록 표시합니다. <br />
          ③ 다잇슈는 회원이 다잇슈와 이 약관의 내용에 관하여 질의 및 응답을 할
          수 있도록 조치를 취합니다. <br />④ 다잇슈는 「약관의 규제에 관한
          법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」 등 관련
          법령에 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. <br />
          <b>제4조 (이용계약의 체결 및 적용)</b> <br />
          ① 이용계약은 회원이 되고자 하는 자가 이 약관의 내용에 대하여 동의를 한
          다음 회원가입을 하고, 다잇슈가 승낙함으로써 체결됩니다. <br />
          ② 다잇슈는 다음 각 호의 어느 하나에 해당하는 경우 그 사유가 해소될
          때까지 승낙을 유보할 수 있습니다. <br />
          1. 다잇슈의 설비에 여유가 없거나, 특정 모바일 기기의 지원이 어렵거나,
          기술적 장애가 있는 경우 <br />
          2. 서비스 상의 장애 또는 서비스 이용요금, 결제수단의 장애가 발생한
          경우 <br />
          3. 그 밖의 각 호에 준하는 사유로서 이용신청의 승낙이 어렵다고 판단되는
          경우 <br />
          <b>제5조 (약관 외 준칙)</b> <br />
          이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 「약관의
          규제에 관한 법률」,「정보통신망이용촉진 및 정보보호 등에 관한 법률」
          등 관련 법령 또는 상 관례에 따릅니다. <br />
          <br />
          <b>제2장 개인정보 관리</b> <br />
          <b>제6조 (개인정보의 보호 및 사용)</b> <br />
          다잇슈는 회원의 동의가 있는 때에 한하여 회원에게서 개인정보를 수집,
          이용, 처리하고 있습니다. 다잇슈는 관련 법령이 정하는 바에 따라 회원의
          개인정보를 보호하기 위해 노력하며, 개인정보의 보호 및 사용에 대해서는
          관련 법령 및 다잇슈의 개인정보 처리방침에 따릅니다. 다잇슈는 회원의
          귀책사유로 개인정보가 유출되어 발생한 피해에 대하여 책임을 지지
          않습니다. <br />
          <br />
          <b>제3장 이용계약 당사자의 의무</b> <br />
          <b>제7조 (다잇슈의 의무)</b> <br />
          ① 다잇슈는 관련 법령, 이 약관에서 정하는 권리의 행사 및 의무의 이행을
          신의에 따라 성실하게 준수합니다. <br />
          ② 다잇슈는 이 약관에서 정한 경우를 제외하고는 회원의 개인정보가
          제3자에게 공개 또는 제공되지 않도록 합니다. <br />
          ③ 다잇슈는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을
          하던 중 설비에 장애가 생기거나 데이터 등이 멸실․훼손된 때에는
          천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 장애나 결함 등
          부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최선의
          노력을 다합니다. <br />
          <b>제8조 (회원의 의무)</b> <br />
          ① 회원은 다잇슈에서 제공하는 서비스의 이용과 관련하여 다음 각 호에
          해당하는 행위를 해서는 안 됩니다. <br />
          1. 다잇슈의 직원이나 운영자를 가장하거나 타인의 명의를 도용하여 글을
          게시하거나 메일을 발송하는 행위, 타인으로 가장하거나 타인과의 관계를
          허위로 명시하는 행위 <br />
          2. 다른 회원의 개인정보를 무단으로 수집⋅저장⋅게시 또는 유포하는 행위{' '}
          <br />
          3. 도박 등 사행행위를 하거나 유도하는 행위, 음란⋅저속한 정보를
          교류⋅게재하거나 음란 사이트를 연결(링크)하는 행위, 수치심⋅혐오감 또는
          공포심을 일으키는 말⋅소리⋅글⋅그림⋅사진 또는 영상을 타인에게 전송 또는
          유포하는 행위 등 서비스를 불건전하게 이용하는 행위 <br />
          4. 서비스를 무단으로 영리, 영업, 광고, 홍보, 정치활동, 선거운동 등
          본래의 용도 이외의 용도로 이용하는 행위 <br />
          5. 다잇슈의 서비스를 이용하여 얻은 정보를 무단으로
          복제․유통․조장하거나 상업적으로 이용하는 행위, 알려지거나 알려지지
          않은 버그를 악용하여 서비스를 이용하는 행위 <br />
          6. 타인을 기망하여 이득을 취하는 행위, 다잇슈의 서비스의 이용과
          관련하여 타인에게 피해를 입히는 행위 <br />
          7. 다잇슈나 타인의 지적재산권 또는 초상권을 침해하는 행위, 타인의
          명예를 훼손하거나 손해를 가하는 행위 <br />
          8. 법령에 의하여 전송 또는 게시가 금지된 정보(컴퓨터 프로그램)나
          컴퓨터 소프트웨어⋅하드웨어 또는 전기통신장비의 정상적인 작동을
          방해⋅파괴할 목적으로 고안된 바이러스⋅컴퓨터 코드⋅파일⋅프로그램 등을
          고의로 전송⋅게시⋅유포 또는 사용하는 행위 <br />
          9. 다잇슈로부터 특별한 권리를 부여 받지 않고 애플리케이션을
          변경하거나, 애플리케이션에 다른 프로그램을 추가⋅삽입하거나, 서버를
          해킹⋅역설계하거나, 소스 코드나 애플리케이션 데이터를 유출⋅변경하거나,
          별도의 서버를 구축하거나, 웹사이트의 일부분을 임의로 변경⋅도용하여
          다잇슈를 사칭하는 행위 <br />
          10. 그 밖에 관련 법령에 위반되거나 선량한 풍속 기타 사회통념에 반하는
          행위 <br />
          ② 회원의 계정 및 모바일 기기에 관한 관리 책임은 회원에게 있으며, 이를
          타인이 이용하도록 하게 하여서는 안 됩니다. 모바일 기기의 관리 부실이나
          타인에게 이용을 승낙함으로 인해 발생하는 손해에 대해서 다잇슈는 책임을
          지지 않습니다. <br />
          ③ 다잇슈는 이용약관 또는 기타 이용 규칙, 공지사항을 통해 구체적인
          내용을 정할 수 있으며, 회원은 이를 따라야 합니다. <br />
          <br />
          <b>제4장 서비스 이용 및 이용제한</b> <br />
          <b>제9조 (서비스의 제공)</b> <br />
          ① 다잇슈는 제5조에 따라 이용계약이 완료된 회원에게 그 즉시 서비스를
          이용할 수 있도록 합니다. <br />② 제1항에도 불구하고 다잇슈는 다음 각
          호의 경우에는 서비스의 전부 또는 일부를 일시 정지할 수 있습니다. 이
          경우 다잇슈는 사전에 그 정지의 사유와 기간을 초기화면이나 공지사항
          등에 공지합니다. 다만, 사전에 공지할 수 없는 부득이한 사정이 있는 경우
          사후에 공지할 수 있습니다. <br />
          1. 시스템 정기점검, 서버의 증설 및 교체, 네트워크의 불안정 등의 시스템
          운영상 필요한 경우 <br />
          2. 정전, 서비스 설비의 장애, 서비스 이용폭주, 기간통신사업자의 설비
          보수 또는 점검 등으로 인하여 정상적인 서비스 제공이 불가능한 경우{' '}
          <br />
          3. 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태 등 다잇슈가
          통제할 수 없는 상황이 발생한 경우 <br />
          ③ 다잇슈는 모바일 기기를 위한 전용 애플리케이션 또는 네트워크를
          이용하여 서비스를 제공합니다. <br />
          ④ 다운로드하여 설치한 애플리케이션 또는 네트워크를 통해 이용하는
          서비스의 경우에는 모바일 기기 또는 이동통신사의 특성에 맞도록
          제공됩니다. 모바일 기기의 변경․번호 변경 또는 해외 로밍의 경우에는
          서비스의 전부 또는 일부의 이용이 불가능할 수 있으며, 이 경우 다잇슈는
          책임을 지지 않습니다. <br />
          <b>제10조 (서비스의 변경 및 중단)</b> <br />
          ① 다잇슈는 원활한 서비스 제공을 위해 운영상 또는 기술상의 필요에 따라
          서비스를 변경할 수 있으며, 변경 전에 해당 내용을 서비스 내에
          공지합니다. 다만, 버그․오류 등의 수정이나 긴급 업데이트 등 부득이하게
          변경할 필요가 있는 경우 또는 중대한 변경에 해당하지 않는 경우에는
          사후에 공지할 수 있습니다. <br />
          ② 다잇슈는 운영상의 중대한 사유로 인해 서비스를 지속하기 어려운
          경우에는 서비스 전부를 중단할 수 있습니다. 이 경우 중단일자 30일
          이전까지 중단일자, 중단사유 등을 애플리케이션 초기화면 또는 그
          연결화면을 통해 공지합니다. <br />
          <b>제11조 (저작권 등의 귀속)</b> <br />
          ① 다잇슈가 제작한 서비스 내의 콘텐츠에 대한 저작권과 기타 지적재산권은
          다잇슈에 귀속합니다. <br />
          ② 회원은 다잇슈가 제공하는 서비스를 이용하여 얻은 정보 중에서 다잇슈에
          지적재산권이 귀속된 정보를 다잇슈의 동의 없이 복제⋅전송 등의
          방법(편집, 공표, 공연, 배포, 방송, 2차적 저작물 작성 등을 포함합니다.
          이하 같습니다)에 의하여 영리목적으로 이용하거나 타인에게 이용하게
          하여서는 안 됩니다. <br />
          ③ 회원이 서비스를 이용하며 만들어진 컨텐츠에 대하여 다잇슈는 회원의
          명시적인 동의 없이 이용하지 않습니다. 회원은 언제든지 이러한 이용자
          콘텐츠를 삭제할 수 있으며, 해당 콘텐츠에서 발생한 저작권과 기타
          지적재산권은 회원에게 귀속됩니다.
          <br />
          ④ 다잇슈는 회원이 게시하거나 등록하는 서비스 내의 게시물에 대해 제10조
          제1항에 따른 금지행위에 해당된다고 판단되는 경우에는 사전 통지 없이
          이를 삭제 또는 이동하거나 그 등록을 거절할 수 있습니다. <br />
          ⑤ 이 조는 다잇슈가 서비스를 운영하는 동안 유효하며, 회원 탈퇴 후에도
          지속적으로 적용됩니다. <br />
          <b>제12조 (회원에 대한 서비스 이용제한)</b> <br />
          ① 회원은 제10조에 따른 회원의 의무를 위반하는 행위를 하여서는 안 되며,
          해당 행위를 하는 경우에 다잇슈는 회원의 서비스 이용제한, 관련 정보(글,
          사진, 영상 등) 삭제 및 기타의 조치를 포함한 이용제한 조치를 할 수
          있습니다. <br />
          ② 다잇슈가 본조 제1항의 이용제한 조치를 하는 경우에는 다음 각 호의
          사항을 회원에게 사전 통지합니다. 다만, 긴급히 조치할 필요가 있는
          경우에는 사후에 통지할 수 있습니다. <br />
          1. 이용제한 조치의 사유 <br />
          2. 이용제한 조치의 유형 및 기간 <br />
          3. 이용제한 조치에 대한 이의신청 방법 <br />
          <b>제13조 (이용제한 조치에 대한 이의신청 절차)</b> <br />
          ① 회원이 다잇슈의 이용제한 조치에 불복하고자 할 때에는 이 조치의
          통지를 받은 날부터 14일 이내에 불복 이유를 기재한 이의 신청서를 서면,
          전자우편 또는 이에 준하는 방법으로 다잇슈에 제출하여야 합니다. <br />
          ② 다잇슈는 제1항의 이의신청서를 접수한 날부터 15일 이내에 불복 이유에
          대하여 서면, 전자우편 또는 이에 준하는 방법으로 답변합니다. 다만,
          다잇슈는 이 기간 내에 답변이 어려운 경우에는 그 사유와 처리일정을
          통지합니다. <br />③ 다잇슈는 불복 이유가 타당한 경우에는 이에 따른
          조치를 취합니다. <br />
          <b>제14조 (계약 해지 등)</b> <br />
          ① 회원은 언제든지 서비스 이용을 원하지 않는 경우 회원 탈퇴를 통해
          이용계약을 해지할 수 있습니다. 회원탈퇴로 인해 회원이 서비스 내에서
          보유한 정보는 모두 삭제되어 복구가 불가능하게 됩니다. <br />
          ② 다잇슈는 회원이 이 약관 및 그에 따른 운영정책, 서비스 정책에서
          금지하는 행위를 하는 등 본 계약을 유지할 수 없는 중대한 사유가 있는
          경우에는 상당한 기간 전에 최고하고 기간을 정하여 서비스 이용을
          중지하거나 이용계약을 해지할 수 있습니다. <br />
          <br />
          <b>제6장 손해배상 및 면책조항 등</b> <br />
          <b>제15조 (손해배상)</b> <br />
          ① 다잇슈 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌
          경우에는 그 손해를 배상할 책임이 있습니다. 다만, 고의 또는 과실이 없는
          경우에는 그러하지 아니 합니다 <br />
          ② 다잇슈가 개별서비스 제공자와 제휴 계약을 맺고 회원에게 개별서비스를
          제공하는 경우에 회원이 이 개별서비스 이용약관에 동의를 한 뒤
          개별서비스 제공자의 고의 또는 과실로 인해 회원에게 손해가 발생한
          경우에 그 손해에 대해서는 개별서비스 제공자가 책임을 집니다. <br />
          <b>제16조 (다잇슈의 면책)</b> <br />① 다잇슈는 천재지변 또는 이에
          준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스
          제공에 관하여 책임을 지지 않습니다. <br />
          ② 다잇슈는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 기타 이에
          준하는 사유로 발생한 손해에 대하여 책임을 지지 않습니다. 다만,
          다잇슈의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다. <br />
          ③ 다잇슈는 회원의 고의 또는 과실로 인한 서비스 이용의 장애에 대하여는
          책임을 지지 않습니다. 다만, 회원에게 부득이하거나 정당한 사유가 있는
          경우에는 그러하지 아니합니다. <br />④ 회원이 서비스와 관련하여 게재한
          정보나 자료 등의 신뢰성, 정확성 등에 대하여 다잇슈는 고의 또는 중대한
          과실이 없는 한 책임을 지지 않습니다. <br />
          ⑤ 다잇슈는 회원이 다른 회원 또는 타인과 서비스를 매개로 발생한 거래나
          분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해에 대해 책임을 지지
          않습니다. <br />
          ⑥ 다잇슈는 무료로 제공되는 서비스 이용과 관련하여 회원에게 발생한
          손해에 대해서는 책임을 지지 않습니다. 그러나 다잇슈의 고의 또는
          중과실에 의한 경우에는 그러하지 아니합니다. <br />
          ⑦ 다잇슈는 회원이 서비스를 이용하여 기대하는 이익을 얻지 못하거나
          상실한 것에 대하여 책임을 지지 않습니다. <br />
          ⑧ 회원이 모바일 기기의 변경, 모바일 기기의 번호 변경, 운영체제(OS)
          버전의 변경, 해외 로밍, 통신사 변경 등으로 인해 서비스 전부나 일부의
          기능을 이용할 수 없는 경우 다잇슈는 이에 대해 책임을 지지 않습니다.
          다만, 다잇슈의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.
          <br />
          ⑨ 회원이 고의나 과실로 다잇슈의 이용약관이나 기타 이용규칙의 전부 또는
          일부를 위반하여 발생한 손해에 대해 다잇슈는 책임을 지지 않습니다.
          <br />
          <b>제17조 (재판권 및 준거법)</b> 이 약관은 대한민국 법률에 따라
          규율되고 해석됩니다. 다잇슈와 회원 간에 발생한 분쟁으로 소송이
          제기되는 경우에는 법령에 정한 절차에 따른 법원을 관할 법원으로 합니다.
          <br />
          <b>제18조 (회원의 고충처리 및 분쟁해결)</b> <br />
          다잇슈는 회원의 편의를 고려하여 회원의 의견이나 불만을 제시하는 방법을
          서비스 내 또는 그 연결화면에 안내합니다. <br /> <br />
          <b>본 약관은 2024년 1월 18부터 시행됩니다.</b> <br />
          서비스와 약관에 관한 문의사항은 cs.daitssu@gmail.com으로 보내주시기를
          바랍니다.
        </styles.LineHeightBox>
      );
    } else if (title === '개인정보 수집 및 이용약관') {
      return (
        <styles.LineHeightBox>
          <b>1. 제목 및 서문</b>
          <p>
            &lt;다잇슈&gt; 회원의 자유와 권리 보호를 위해 「개인정보 보호법」 및
            관계 법령이 정한 바를 준수하여, 회원에게 개인정보 처리에 관한 절차
            및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수
            있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          <b>2. 개인정보의 처리 목적</b>
          <p>
            &lt;다잇슈&gt;는 다음의 목적을 위하여 개인정보를 처리하고 있으며,
            개인정보는 다음의 목적 이외의 용도로는 이용하지 않습니다. 이용목적이
            변경 및 추가될 경우에는 사전에 이용자의 동의를 받은 후 처리 및
            이용합니다.
          </p>
          <styles.ULBox>
            <li>이용계약 체결, 서비스 내 회원 식별 및 회원 관리</li>
            <li>&lt;다잇슈&gt; 커뮤니티</li>
            <li>
              스마트캠퍼스 서비스: 캘린더, 과제 출결 조회, 공지사항 및 펀시스템
              조회, 마이페이지
            </li>
          </styles.ULBox>

          <b>3. 개인정보의 처리 및 보유기간</b>
          <p>
            회원의 동의를 받고 개인정보를 수집한 때로부터 회원의 동의 철회,
            탈퇴, 또는 서비스 종료 등 개인정보 수집 및 이용 목적 달성 시까지
          </p>

          <b>4. 처리하는 개인정보의 항목</b>
          <p>목적에 따른 개인정보 처리 여부 분류</p>
          <styles.ULBox>
            <li>
              이용계약 체결, 서비스 내 회원 식별 및 회원 관리
              <styles.ULBox>
                <li>(필수) 이름, 학부, 학번, 학년 및 학기, 비밀번호</li>
              </styles.ULBox>
            </li>
            <li>
              스마트캠퍼스 서비스 및 마이페이지
              <styles.ULBox>
                <li>(필수) 이름, 학부, 학번, 학년 및 학기, 수강 과목</li>
              </styles.ULBox>
            </li>
          </styles.ULBox>

          <b>5. 개인정보의 제3자 제공에 관한 사항</b>
          <p>
            다잇슈는 정보주체의 동의 없이 회원의 개인정보를 제3자에게 제공하지
            않습니다. 단, 법령에 특별한 규정이 있는 경우는 예외로 합니다.
          </p>
          <b>6. 개인정보 처리업무의 위탁에 관한 사항</b>
          <p>다잇슈는 제3자에게 개인정보 처리업무를 위탁하고 있지 않습니다.</p>

          <b>7. 회원의 권리ㆍ의무 및 행사방법에 관한 사항</b>
          <styles.ULBox>
            <li>
              회원은 언제든지 개인정보 열람ㆍ정정ㆍ삭제ㆍ처리정지 요구 등의
              권리를 행사할 수 있습니다.
            </li>
            <li>
              회원은 언제든지 ‘회원 탈퇴’ 등을 통해 개인 정보의 수집 및 이용
              동의를 철회할 수 있습니다.
            </li>
            <li>
              회원의 권리는 서비스에 안내된 문의 이메일을 통해 행사할 수 있으며,
              다잇슈는 이에 대해 지체 없이 조치하겠습니다.
            </li>
          </styles.ULBox>

          <b>8. 개인정보의 파기 절차 및 방법에 관한 사항</b>
          <p>
            다잇슈는 회원의 동의 철회 및 탈퇴 또는 서비스의 종료와 같이
            개인정보의 수집 및 이용 목적이 달성되면 이용자의 개인정보를 지체
            없이 파기합니다. 개인정보의 파기 절차는 다음과 같습니다.
          </p>
          <styles.ULBox>
            <li>
              다잇슈는 파기 사유가 발생한 개인정보를 선정하고, 다잇슈의 개인정보
              보호책임자의 승인을 받아 개인정보를 파기합니다.
            </li>
            <li>
              종이에 기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
              파기하고, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수
              없도록 기술적 방법을 사용하여 삭제합니다.
            </li>
          </styles.ULBox>

          <b>9. 개인정보의 안전성 확보조치에 관한 사항</b>
          <p>
            다잇슈는 개인정보 안전성 확보 조치를 위해 다음과 같은 조치를 취하고
            있습니다.
          </p>
          <styles.ULBox>
            <li>관리적 조치: 내부관리계획 수립ㆍ시행</li>
            <li>
              기술적 조치: 개인정보처리시스템 등의 접근 권한 관리(계정 공유
              금지, 미이용 시 시스템 자동 접속차단)
            </li>
          </styles.ULBox>

          <b>
            10. 개인정보를 자동으로 수집하는 장치의 설치ㆍ운영 및 그 거부에 관한
            사항
          </b>
          <p>
            (알리기: 추후 로그 수집이 들어가는 경우에는 개인정보 처리방침 한번
            바꿔야 함)
          </p>
          <p>
            다잇슈는 개인정보를 자동으로 수집하는 장치를 설치 또는 운영하고 있지
            않습니다.
          </p>

          <b>11. 개인정보 보호책임자에 관한 사항</b>
          <p>
            다잇슈는 개인정보보호 관련 문의사항 및 불만 사항 등을 원활히
            처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <styles.ULBox>
            <li>심상현</li>
            <li>Email: cs.daitssu@gmail.com</li>
          </styles.ULBox>
          <p>
            기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에
            문의 가능합니다.
          </p>
          <styles.ULBox>
            <li>
              개인정보분쟁조정위원회 : (국번없이) 1833-6972 (
              <a href="http://www.kopico.go.kr/" target="_blank">
                www.kopico.go.kr
              </a>
              )
            </li>
            <li>
              개인정보침해신고센터 : (국번없이) 118 (
              <a href="http://privacy.kisa.or.kr/" target="_blank">
                privacy.kisa.or.kr
              </a>
              )
            </li>
            <li>
              대검찰청 : (국번없이) 1301 (
              <a href="http://www.spo.go.kr/" target="_blank">
                www.spo.go.kr
              </a>
              )
            </li>
            <li>
              경찰청 : (국번없이) 182 (
              <a href="http://ecrm.cyber.go.kr/" target="_blank">
                ecrm.cyber.go.kr
              </a>
              )
            </li>
          </styles.ULBox>

          <b>12. 개인정보 처리방침의 변경에 관한 사항</b>
          <p>
            개인정보 처리방침을 수정, 변경하는 경우 적용일자 및 변경 내용, 사유
            등을 명시하여 최소한 그 적용일 7일 이전부터 공지사항으로 회원에게
            공지합니다.
          </p>
        </styles.LineHeightBox>
      );
    } else if (title === '제3자 정보 제공 동의') {
      return (
        <styles.LineHeightBox>
          <p>
            다잇슈는 「개인정보보호법 제15조 제1항 제4호」에 따라 서비스 제공을
            위한 필수적인 개인정보를 아래와 같이 수집 및 이용하고자 합니다. 아래
            내용을 반드시 확인한 후 다음 절차를 진행하여 주시기를 바랍니다.
          </p>
          <b>개인정보 수집 및 이용 근거 법령</b>
          <br />
          <p>
            개인정보보호법 제15조(개인정보의 수집ㆍ이용) ① 개인정보처리자는 다음
            각 호의 어느 하나에 해당하는 경우에는 개인정보를 수집할 수 있으며 그
            수집 목적의 범위에서 이용할 수 있다.
          </p>
          4. 정보주체와 체결한 계약을 이행하거나 계약을 체결하는 과정에서
          정보주체의 요청에 따른 조치를 이행하기 위하여 필요한 경우
          <br />
          <br />
          <b>개인정보 수집 및 이용 내역</b>
          <br />
          <b>항목</b>
          <styles.ULBox>
            <li>이름, 학부, 학번, 학년 및 학기, 비밀번호</li>
          </styles.ULBox>
          <b>수집 및 이용 목적</b>
          <styles.ULBox>
            <li>
              [다잇슈 서비스 제공]
              <styles.ULBox>
                <li>이용계약 체결, 서비스 내 회원 식별 및 회원 관리</li>
                <li>스마트캠퍼스 서비스 및 마이페이지</li>
              </styles.ULBox>
            </li>
          </styles.ULBox>
          <b>보유 및 이용 기간</b>
          <styles.ULBox>
            <li>
              수집한 때부터 <b>개인정보 수집 및 이용 목적 달성 시</b>까지
            </li>
          </styles.ULBox>
        </styles.LineHeightBox>
      );
    }
    return '';
  };

  return (
    <styles.ModalBackground onClick={() => closeModal()}>
      <styles.ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <styles.TOSStyle>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <styles.TOSHedaer>{title}</styles.TOSHedaer>
            <Image
              style={{ margin: '15px' }}
              src={CloseBtn}
              alt="close-button"
              onClick={() => {
                closeModal();
              }}
            />
          </div>
          <styles.Divider />
          <styles.TOSBody>{getTOSContent(title)}</styles.TOSBody>
          <styles.AgreeBtnDiv>
            <Button
              width={330}
              label="동의하기"
              onClick={() => {
                onAgree();
                closeModal();
              }}
            />
          </styles.AgreeBtnDiv>
        </styles.TOSStyle>
      </styles.ModalContent>
    </styles.ModalBackground>
  );
};
export default TOS;
