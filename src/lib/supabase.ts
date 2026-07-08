import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 환경변수가 설정돼 있을 때만 클라이언트 생성 (없으면 null → 폴백)
export const supabaseConfigured = Boolean(url && anon);
export const supabase = supabaseConfigured ? createClient(url!, anon!) : null;

export type JobPost = {
  id: string;
  kind: "구인" | "구직";
  title: string;
  region: string;
  contact: string;
  body: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};
