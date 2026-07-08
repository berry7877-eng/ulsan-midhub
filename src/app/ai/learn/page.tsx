import Link from "next/link";

export const metadata = {
  title: "AI 기본지식 배우기 — 울산 미드허브",
  description:
    "중장년을 위한 AI 첫걸음. AI란 무엇인지, 검색과의 차이, 좋은 질문법, 개인정보 원칙, ChatGPT 시작법까지 쉽게.",
};

const MOIM_URL =
  "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";

function Card({
  no,
  icon,
  title,
  children,
}: {
  no: number;
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
          {no}
        </span>
        <h2 className="text-lg font-extrabold text-gray-900">
          {icon} {title}
        </h2>
      </div>
      <div className="mt-3 text-[15px] leading-relaxed text-gray-700 space-y-2">
        {children}
      </div>
    </section>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-900">
      💡 {children}
    </p>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl bg-gray-900 px-4 py-3 font-medium text-gray-100 whitespace-pre-wrap">
      {children}
    </p>
  );
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-indigo-700 shadow-md hover:bg-indigo-50 transition-colors"
          >
            ← AI 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">📚 AI 기본지식 배우기</h1>
          <p className="mt-1 text-sm text-indigo-100">
            처음이어도 괜찮아요. 딱 필요한 것만 쉽게 정리했습니다.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <Card no={1} icon="🤖" title="AI란 무엇인가요?">
          <p>
            AI는 사람처럼 배우고 판단하는 컴퓨터 기술이에요. 그중 우리가 쓰는 건
            글·그림·영상을 <b>만들어내는</b> <b>생성형 AI</b>(ChatGPT 같은 것)입니다.
          </p>
          <Key>AI는 사람을 대신하는 게 아니라, 반복되는 일을 대신하는 도구입니다.</Key>
          <p className="text-sm text-gray-500">
            비유: AI는 아주 똑똑하지만 우리 사정은 모르는 <b>신입사원</b>이에요.
            일을 잘 시키려면 설명을 잘 해줘야 합니다.
          </p>
        </Card>

        <Card no={2} icon="🔍" title="네이버 검색과 뭐가 다른가요?">
          <p>
            <b>검색</b>은 남이 써놓은 문서를 <b>찾아주는</b> 것(도서관 사서),
            <br />
            <b>AI</b>는 나를 위한 답을 <b>새로 만들어주는</b> 것(개인 비서)이에요.
          </p>
          <p className="text-sm text-gray-500">
            예) &quot;부모님 모시고 부산 여행&quot; → 검색은 블로그 100개를 보여주고,
            AI는 <b>우리 가족 상황에 맞춘 일정표</b>를 바로 만들어줍니다.
          </p>
        </Card>

        <Card no={3} icon="✍️" title="좋은 질문 만드는 법 (제일 중요!)">
          <p>AI는 독심술사가 아니에요. 내가 준 정보만큼만 똑똑해집니다.</p>
          <Key>좋은 질문 = 상황 + 원하는 것 + 조건(형식)</Key>
          <p className="text-sm text-gray-500">❌ 나쁜 질문</p>
          <Prompt>여행 추천해줘</Prompt>
          <p className="text-sm text-gray-500">✅ 좋은 질문</p>
          <Prompt>{`부모님과 2박 3일 부산 여행을 갑니다.
이동은 적게, 걷기는 최소로, 맛집을 포함해서
일정표를 표로 만들어 주세요.`}</Prompt>
        </Card>

        <Card no={4} icon="💬" title="한 번에 끝내지 마세요">
          <p>
            AI는 대화하면서 다듬는 도구예요. 결과가 마음에 안 들면 지우지 말고
            이어서 말해보세요.
          </p>
          <Prompt>더 짧게 해줘 / 더 정중하게 해줘 / 표로 정리해줘</Prompt>
        </Card>

        <Card no={5} icon="⚠️" title="AI도 틀릴 수 있어요 (할루시네이션)">
          <p>
            AI는 그럴듯하게 <b>틀린 답</b>을 말할 때가 있어요. 특히 사실·숫자·법률은
            꼭 확인이 필요합니다.
          </p>
          <Key>중요한 내용은 &quot;출처를 알려줘&quot;라고 요청하고, 원문을 직접 확인하세요.</Key>
        </Card>

        <Card no={6} icon="🔒" title="개인정보는 넣지 마세요">
          <p>
            주민번호·계좌번호·회사 기밀은 <b>넣지 않는 것</b>이 원칙이에요. 이름도
            &quot;김OO&quot;처럼 가려서 넣는 습관을 들이세요.
          </p>
        </Card>

        <Card no={7} icon="📱" title="ChatGPT 시작하기">
          <p>
            컴퓨터는 <b>chatgpt.com</b> 접속, 스마트폰은 앱스토어에서 &quot;ChatGPT&quot;
            검색 → 제작사가 <b>OpenAI</b>인지 확인(유사 앱 주의) → 설치.
          </p>
          <p>
            가입은 <b>&quot;Google로 계속하기&quot;</b>가 편해요(비밀번호 안 외워도 됨).
          </p>
          <Key>메뉴가 많아 보여도 오늘 쓸 건 딱 하나, 아래 입력창. 카톡 보내듯 말을 걸면 됩니다.</Key>
        </Card>

        <Card no={8} icon="🧰" title="AI로 이런 걸 할 수 있어요">
          <p>
            글쓰기 · 이메일 · 번역 · 요약 · 이미지 만들기 · 엑셀 함수/표 · 보고서 초안
            · 여행 일정 · 아이디어 회의 상대까지.
          </p>
        </Card>

        <Card no={9} icon="🎯" title="지금 바로 따라 해보기">
          <p className="text-sm text-gray-500">① 나를 소개시키기 (나이·직업만 바꿔서)</p>
          <Prompt>{`나는 49세입니다. 건설업에서 일합니다.
AI를 배우는 이유는 업무를 줄이고 싶어서입니다.
나를 소개하는 글을 작성해 주세요.`}</Prompt>
          <p className="text-sm text-gray-500">② 회사 메일 부탁하기</p>
          <Prompt>{`거래처에 납품 일정이 3일 늦어진다는
정중한 사과 메일을 존댓말로 써줘.`}</Prompt>
        </Card>

        {/* 마무리 CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-6 text-white shadow-lg text-center">
          <p className="text-lg font-extrabold">혼자 하기 어려우면 함께 해요 🙂</p>
          <p className="mt-1 text-[15px] text-indigo-100">
            같은 나이대끼리 천천히 배우는 무료 AI 모임이 있어요.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2">
            <a
              href={MOIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"
            >
              🤝 무료 AI 모임 참여하기 →
            </a>
            <Link
              href="/ai/diagnosis"
              className="flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50"
            >
              📝 내 AI 수준 진단해보기 →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
