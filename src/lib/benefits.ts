export type Status = "yes" | "maybe" | "no";
export type Answers = { age?: string; insured?: string; goal?: string };

export type Benefit = {
  id: string;
  icon: string;
  title: string;
  tag?: string;
  desc: string;
  track: "job" | "learn";
  link: { label: string; url: string };
  elig: (a: Answers) => Status;
};

// 검증된 공식 링크만 사용
const WORK24 = "https://www.work24.go.kr/";
const KUA = "https://www.kua.go.kr/";
const HRD = "https://www.hrd.go.kr";
const POLYTECH = "https://www.kopo.ac.kr/ulsan/index.do";
const ELIFE = "https://www.elifeplan.or.kr/";

export const BENEFITS: Benefit[] = [
  // ── 재취업 · 생계 중심 ──
  {
    id: "unemployment",
    icon: "💵",
    title: "실업급여 (구직급여)",
    desc: "고용보험 가입 이력이 있는 실업자에게 지급됩니다. 신청·수급은 고용24(워크넷)에서 진행해요.",
    track: "job",
    link: { label: "고용24에서 신청", url: WORK24 },
    elig: (a) => (a.insured === "yes" ? "yes" : "no"),
  },
  {
    id: "gukchwi",
    icon: "🤝",
    title: "국민취업지원제도",
    tag: "구직촉진수당(생계지원)",
    desc: "저소득·취업취약 계층에 취업지원서비스와 구직촉진수당을 함께 줍니다. Ⅰ·Ⅱ유형별 소득·재산 기준을 확인하세요.",
    track: "job",
    link: { label: "국민취업지원제도 안내", url: KUA },
    elig: (a) => (a.goal === "income" ? "yes" : "maybe"),
  },
  {
    id: "card",
    icon: "💳",
    title: "내일배움카드 (국비훈련)",
    tag: "훈련비 지원",
    desc: "훈련비를 지원받아 교육 비용 부담을 크게 줄일 수 있어요. 재취업 준비와 자격증 취득에 함께 쓰기 좋습니다.",
    track: "job",
    link: { label: "HRD-Net에서 확인", url: HRD },
    elig: (a) => (a.goal === "learn" ? "yes" : "maybe"),
  },

  // ── 배움 중심 ──
  {
    id: "polytech",
    icon: "🛠️",
    title: "폴리텍 울산캠퍼스",
    tag: "국가기술자격 취득에 유리",
    desc: "실습 중심 국비 기능·기술 교육으로 자격증 취득과 취업 연계에 강합니다. IT·기계·전기 등 실무 과정을 무료·저비용으로 배울 수 있어요.",
    track: "learn",
    link: { label: "폴리텍 울산캠퍼스 홈페이지", url: POLYTECH },
    elig: (a) => (a.goal === "learn" ? "yes" : "maybe"),
  },
  {
    id: "elife",
    icon: "📚",
    title: "울산인재평생교육진흥원",
    tag: "저렴·무료 · 폭넓은 강좌",
    desc: "다양한 분야의 평생학습 강좌를 저렴하거나 무료로 제공합니다. 온·오프라인을 함께 운영하고 생활밀착형 과정이 많아 부담 없이 새로 배우기 좋아요.",
    track: "learn",
    link: { label: "평생교육진흥원 홈페이지", url: ELIFE },
    elig: (a) => (a.goal === "learn" ? "yes" : "maybe"),
  },
];

export const QUESTIONS = [
  {
    key: "age" as const,
    label: "1. 나이대는 어떻게 되세요?",
    options: [
      { v: "u40", label: "40대 미만" },
      { v: "40_64", label: "40~64세" },
      { v: "o65", label: "65세 이상" },
    ],
  },
  {
    key: "insured" as const,
    label: "2. 실직 전 직장에서 고용보험에 가입돼 있었나요?",
    options: [
      { v: "yes", label: "네, 있었어요" },
      { v: "no", label: "아니요 · 잘 모름" },
    ],
  },
  {
    key: "goal" as const,
    label: "3. 지금 가장 필요한 게 뭐예요?",
    options: [
      { v: "rehire", label: "빨리 재취업" },
      { v: "learn", label: "배움 · 자격증" },
      { v: "income", label: "당장 생계지원" },
    ],
  },
];
