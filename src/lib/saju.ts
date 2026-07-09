import KoreanLunarCalendar from "korean-lunar-calendar";

const CHEONGAN = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const JIJI = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];

const OHENG_GAN: Record<string, string> = {
  갑: "목", 을: "목", 병: "화", 정: "화", 무: "토",
  기: "토", 경: "금", 신: "금", 임: "수", 계: "수",
};
const OHENG_JI: Record<string, string> = {
  자: "수", 축: "토", 인: "목", 묘: "목", 진: "토", 사: "화",
  오: "화", 미: "토", 신: "금", 유: "금", 술: "토", 해: "수",
};

const SIDU: Record<string, number> = {
  갑: 0, 기: 0, 을: 2, 경: 2, 병: 4, 신: 4, 정: 6, 임: 6, 무: 8, 계: 8,
};

export const SI_LABELS = [
  { ji: "자", range: "23:00~00:59", name: "자시" },
  { ji: "축", range: "01:00~02:59", name: "축시" },
  { ji: "인", range: "03:00~04:59", name: "인시" },
  { ji: "묘", range: "05:00~06:59", name: "묘시" },
  { ji: "진", range: "07:00~08:59", name: "진시" },
  { ji: "사", range: "09:00~10:59", name: "사시" },
  { ji: "오", range: "11:00~12:59", name: "오시" },
  { ji: "미", range: "13:00~14:59", name: "미시" },
  { ji: "신", range: "15:00~16:59", name: "신시" },
  { ji: "유", range: "17:00~18:59", name: "유시" },
  { ji: "술", range: "19:00~20:59", name: "술시" },
  { ji: "해", range: "21:00~22:59", name: "해시" },
];

const TTI: Record<string, string> = {
  자: "쥐", 축: "소", 인: "범", 묘: "토끼", 진: "용", 사: "뱀",
  오: "말", 미: "양", 신: "원숭이", 유: "닭", 술: "개", 해: "돼지",
};

type IlganInfo = {
  elem: string;
  nature: string;
  keywords: string[];
  strength: string;
  caution: string;
  advice: string;
};

const ILGAN: Record<string, IlganInfo> = {
  갑: {
    elem: "목(木)", nature: "큰 나무", keywords: ["리더십", "추진력", "정직"],
    strength: "한번 마음먹으면 끝까지 밀고 나가는 뚝심이 있어요. 사람들이 믿고 따르는 기둥 같은 사람입니다.",
    caution: "다만 고집이 세져 주변과 부딪힐 때가 있어요. 가끔은 남의 말에 귀를 열면 더 크게 뻗어갑니다.",
    advice: "당신의 우직함은 이미 큰 자산이에요. 조급해하지 말고 한 걸음씩 가면 됩니다.",
  },
  을: {
    elem: "목(木)", nature: "화초·덩굴", keywords: ["유연함", "친화력", "끈기"],
    strength: "어디서든 잘 적응하고 사람을 편하게 만드는 힘이 있어요. 부드럽지만 쉽게 꺾이지 않습니다.",
    caution: "남을 지나치게 신경 쓰다 정작 내 마음이 지칠 수 있어요. 거절도 연습이 필요합니다.",
    advice: "당신의 부드러움은 약함이 아니라 강함이에요. 자신을 조금 더 믿어보세요.",
  },
  병: {
    elem: "화(火)", nature: "태양", keywords: ["열정", "긍정", "표현력"],
    strength: "있는 것만으로 주변이 밝아지는 사람이에요. 넘치는 에너지로 분위기를 살립니다.",
    caution: "달아오르는 만큼 금세 지칠 수 있어요. 급한 마음이 실수를 부르기도 합니다.",
    advice: "그 빛을 오래 태우려면 쉼도 챙기세요. 당신의 활기는 사람들에게 큰 선물입니다.",
  },
  정: {
    elem: "화(火)", nature: "촛불·달빛", keywords: ["따뜻함", "섬세함", "배려"],
    strength: "남의 마음을 잘 헤아리는 섬세함으로 깊은 신뢰를 얻어요. 은은한 온기를 주는 사람입니다.",
    caution: "속이 여려 상처를 오래 담아둘 수 있어요. 마음을 털어놓는 사람 하나쯤 두세요.",
    advice: "남을 챙기는 만큼 자신도 챙기세요. 당신의 따뜻함이 곁을 밝힙니다.",
  },
  무: {
    elem: "토(土)", nature: "큰 산", keywords: ["든든함", "포용", "신뢰"],
    strength: "흔들리지 않는 안정감으로 사람들의 기둥이 돼요. 믿고 맡길 수 있는 사람입니다.",
    caution: "속을 잘 안 드러내 답답하게 보일 때가 있어요. 완고함이 기회를 놓치게도 합니다.",
    advice: "가끔 마음의 문을 열고 나누면 더 편안해져요. 당신은 이미 충분히 단단합니다.",
  },
  기: {
    elem: "토(土)", nature: "기름진 밭", keywords: ["포용", "현실감", "헌신"],
    strength: "묵묵히 실속을 챙기며 주변을 넉넉히 품어요. 조용히 결실을 만드는 사람입니다.",
    caution: "혼자 짊어지다 지칠 수 있어요. 도와달라 말하는 것도 지혜입니다.",
    advice: "티 안 나도 가장 큰 역할을 하고 있어요. 당신의 헌신을 스스로 인정해주세요.",
  },
  경: {
    elem: "금(金)", nature: "강철·도끼", keywords: ["결단력", "의리", "정의"],
    strength: "빠른 결단과 강한 의리로 어려울 때 진가를 발휘해요. 시원시원한 사람입니다.",
    caution: "직설적인 말이 상대에게 세게 박힐 수 있어요. 한 박자 쉬고 말하면 좋습니다.",
    advice: "강함에 부드러운 말 한마디를 더하면 사람이 모여요. 당신의 뚝심은 큰 힘입니다.",
  },
  신: {
    elem: "금(金)", nature: "보석·칼", keywords: ["예리함", "품격", "완벽"],
    strength: "남다른 안목과 세밀함으로 수준 높은 결과를 만들어요. 품격이 느껴지는 사람입니다.",
    caution: "완벽을 좇다 스스로를 몰아세울 수 있어요. 자존심이 관계에 벽을 만들기도 합니다.",
    advice: "완벽하지 않아도 괜찮아요. 당신은 존재만으로 이미 빛납니다.",
  },
  임: {
    elem: "수(水)", nature: "큰 바다", keywords: ["지혜", "포용", "융통성"],
    strength: "상황을 크게 보는 지혜와 융통성으로 사람을 넓게 품어요. 그릇이 큰 사람입니다.",
    caution: "마음이 이리저리 흔들려 결정을 미룰 때가 있어요. 방향을 정하면 힘이 실립니다.",
    advice: "흐르되 목표를 정하면 더 멀리 가요. 당신의 포용력은 특별한 재능입니다.",
  },
  계: {
    elem: "수(水)", nature: "이슬·비", keywords: ["총명", "감성", "순수"],
    strength: "뛰어난 직관과 섬세한 감성으로 남이 놓치는 것을 봐요. 맑고 정 깊은 사람입니다.",
    caution: "걱정과 생각이 많아 밤잠을 설칠 수 있어요. 생각을 잠시 내려놓는 연습이 필요합니다.",
    advice: "걱정은 잠시 접어둬도 괜찮아요. 당신의 순수함이 가장 큰 힘입니다.",
  },
};

const STRONG_MSG: Record<string, string> = {
  목: "새싹처럼 뻗어가는 성장의 기운이 강해요. 배우고 새로 시작하는 데 타고난 힘이 있습니다.",
  화: "환하게 타오르는 열정의 기운이 강해요. 사람들 앞에서 빛나는 재능이 있습니다.",
  토: "든든하게 받쳐주는 안정의 기운이 강해요. 믿음을 주고 오래 가는 사람입니다.",
  금: "단단하고 예리한 결단의 기운이 강해요. 맺고 끊는 힘이 뛰어납니다.",
  수: "깊고 유연한 지혜의 기운이 강해요. 상황을 읽고 흐르는 재능이 있습니다.",
};

// 부족한 기운 = 채우면 좋은 것 (현실적·건설적으로)
const WEAK_MSG: Record<string, string> = {
  목: "새로운 도전·성장의 기운은 조금 약한 편. 초록색, 아침 산책, 배움 하나가 균형을 채워줍니다.",
  화: "표현·활력의 기운은 조금 약한 편. 붉은색, 햇볕, 사람들과의 만남이 힘을 더해줍니다.",
  토: "안정·끈기의 기운은 조금 약한 편. 규칙적인 생활과 흙 밟는 산책이 중심을 잡아줍니다.",
  금: "결단·정리의 기운은 조금 약한 편. 정돈된 공간과 '오늘 하나 끝내기'가 도움이 됩니다.",
  수: "지혜·여유의 기운은 조금 약한 편. 충분한 물과 쉼, 혼자만의 시간이 채워줍니다.",
};

const CLOSING = [
  "타고난 것도 중요하지만, 결국 오늘 내가 어떻게 사느냐가 인생을 만듭니다. 지금 이 나이가 가장 지혜로운 때예요. 🌿",
  "강점은 살리고 약한 곳은 천천히 채우면 됩니다. 조급할 것 없어요, 당신은 잘 살아왔습니다. ✨",
  "사주는 정해진 운명이 아니라 나를 이해하는 지도예요. 방향을 알았으니, 한 걸음이면 충분합니다. 💪",
];

export type Pillar = { label: string; gan: string; ji: string; ganElem: string; jiElem: string };
export type SajuResult = {
  pillars: Pillar[];
  ilgan: string;
  ttiName: string;
  oheng: { name: string; count: number }[];
  strong: string;
  weak: string;
  ilgan_info: IlganInfo;
  strongMsg: string;
  weakMsg: string;
  closing: string;
  hasHour: boolean;
  solar: { year: number; month: number; day: number };
  isLunar: boolean;
};

function pillar(label: string, ganji: string): Pillar {
  const gan = ganji[0];
  const ji = ganji[1];
  return { label, gan, ji, ganElem: OHENG_GAN[gan], jiElem: OHENG_JI[ji] };
}

export function computeSaju(
  year: number,
  month: number,
  day: number,
  siIndex: number,
  isLunar = false
): SajuResult | null {
  const cal = new KoreanLunarCalendar();
  const ok = isLunar
    ? cal.setLunarDate(year, month, day, false)
    : cal.setSolarDate(year, month, day);
  if (!ok) return null;

  const g = cal.getGapja();
  const yearGanji = g.year.replace(/년$/, "");
  const monthGanji = g.month.replace(/월$/, "");
  const dayGanji = g.day.replace(/일$/, "");
  const solar = cal.getSolarCalendar();

  const pillars: Pillar[] = [
    pillar("년주", yearGanji),
    pillar("월주", monthGanji),
    pillar("일주", dayGanji),
  ];
  const ilgan = dayGanji[0];

  const hasHour = siIndex >= 0 && siIndex <= 11;
  if (hasHour) {
    const siGanIdx = (SIDU[ilgan] + siIndex) % 10;
    pillars.push(pillar("시주", CHEONGAN[siGanIdx] + JIJI[siIndex]));
  }

  const counts: Record<string, number> = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 };
  for (const p of pillars) {
    counts[p.ganElem]++;
    counts[p.jiElem]++;
  }
  const oheng = ["목", "화", "토", "금", "수"].map((name) => ({ name, count: counts[name] }));
  const strong = [...oheng].sort((a, b) => b.count - a.count)[0].name;
  const weak = [...oheng].sort((a, b) => a.count - b.count)[0].name;
  const closingIdx = (solar.year + solar.month + solar.day) % CLOSING.length;

  return {
    pillars,
    ilgan,
    ttiName: TTI[pillars[0].ji],
    oheng,
    strong,
    weak,
    ilgan_info: ILGAN[ilgan],
    strongMsg: STRONG_MSG[strong],
    weakMsg: WEAK_MSG[weak],
    closing: CLOSING[closingIdx],
    hasHour,
    solar,
    isLunar,
  };
}
