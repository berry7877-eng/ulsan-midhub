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

// 시두법(오자둔): 일간 → 자시 천간 index
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

const ILGAN_DESC: Record<string, { elem: string; short: string; desc: string }> = {
  갑: { elem: "목(木)", short: "큰 나무", desc: "곧고 반듯한 리더형이에요. 한번 정하면 밀고 나가는 추진력이 강점이고, 때로 고집으로 보이기도 합니다." },
  을: { elem: "목(木)", short: "화초·덩굴", desc: "부드럽고 유연한 적응력의 소유자예요. 어디서든 잘 어울리고 끈기가 있습니다." },
  병: { elem: "화(火)", short: "태양", desc: "밝고 열정적이며 표현력이 좋아요. 사람을 끌어당기는 힘이 있고, 성격이 급한 면도 있습니다." },
  정: { elem: "화(火)", short: "촛불·달빛", desc: "따뜻하고 섬세해요. 남을 배려하는 마음이 깊고, 속이 여린 편입니다." },
  무: { elem: "토(土)", short: "큰 산", desc: "듬직하고 포용력이 큽니다. 신용을 지키는 든든한 사람이지만, 고집도 산처럼 셉니다." },
  기: { elem: "토(土)", short: "기름진 밭", desc: "온화하고 현실적이에요. 묵묵히 헌신하는 스타일, 속마음은 잘 드러내지 않습니다." },
  경: { elem: "금(金)", short: "큰 쇠·도끼", desc: "강직하고 의리가 있어요. 결단이 빠르고 직설적이라 시원시원합니다." },
  신: { elem: "금(金)", short: "보석·칼", desc: "예리하고 완벽을 추구해요. 자존심이 높고 섬세한 감각을 지녔습니다." },
  임: { elem: "수(水)", short: "큰 바다", desc: "지혜롭고 포용력이 넓어요. 융통성이 좋지만 마음이 변덕스러울 때도 있습니다." },
  계: { elem: "수(水)", short: "이슬·비", desc: "총명하고 순수해요. 감성이 풍부하고, 걱정이 조금 많은 편입니다." },
};

const BALANCE: Record<string, string> = {
  목: "새로운 시작·성장의 기운이 약해요. 초록색, 아침 산책, 화분 하나가 활력을 줍니다.",
  화: "열정·표현의 기운이 아쉬워요. 붉은색, 햇볕 쬐기, 사람들과의 만남이 힘이 됩니다.",
  토: "안정감·끈기의 기운이 부족해요. 노란색, 규칙적인 생활, 흙 밟는 산책이 좋습니다.",
  금: "결단·정리의 기운이 약해요. 흰색, 정돈된 공간, 마무리하는 습관이 도움이 됩니다.",
  수: "지혜·유연함의 기운이 아쉬워요. 검정·파랑, 충분한 물, 여유로운 휴식이 좋습니다.",
};

export type Pillar = { label: string; gan: string; ji: string; ganElem: string; jiElem: string };
export type SajuResult = {
  pillars: Pillar[];
  ilgan: string;
  ttiName: string;
  oheng: { name: string; count: number }[];
  strong: string;
  weak: string;
  ilganDesc: { elem: string; short: string; desc: string };
  balanceMsg: string;
  hasHour: boolean;
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
  siIndex: number // 0~11, -1이면 모름
): SajuResult | null {
  const cal = new KoreanLunarCalendar();
  if (!cal.setSolarDate(year, month, day)) return null;
  const g = cal.getGapja(); // {year:"을묘년", month:"신사월", day:"신유일"}
  const yearGanji = g.year.replace(/년$/, "");
  const monthGanji = g.month.replace(/월$/, "");
  const dayGanji = g.day.replace(/일$/, "");

  const pillars: Pillar[] = [
    pillar("년주", yearGanji),
    pillar("월주", monthGanji),
    pillar("일주", dayGanji),
  ];

  const ilgan = dayGanji[0];

  const hasHour = siIndex >= 0 && siIndex <= 11;
  if (hasHour) {
    const siGanIdx = (SIDU[ilgan] + siIndex) % 10;
    const siGanji = CHEONGAN[siGanIdx] + JIJI[siIndex];
    pillars.push(pillar("시주", siGanji));
  }

  // 오행 집계
  const counts: Record<string, number> = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 };
  for (const p of pillars) {
    counts[p.ganElem]++;
    counts[p.jiElem]++;
  }
  const oheng = ["목", "화", "토", "금", "수"].map((name) => ({ name, count: counts[name] }));
  const strong = [...oheng].sort((a, b) => b.count - a.count)[0].name;
  const weak = [...oheng].sort((a, b) => a.count - b.count)[0].name;

  return {
    pillars,
    ilgan,
    ttiName: TTI[pillars[0].ji],
    oheng,
    strong,
    weak,
    ilganDesc: ILGAN_DESC[ilgan],
    balanceMsg: BALANCE[weak],
    hasHour,
  };
}
