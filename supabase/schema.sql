-- 울산 미드허브: 이웃 구인구직 (운영자 승인제)
-- Supabase 프로젝트 > SQL Editor 에 붙여넣고 실행하세요.

create table if not exists public.job_posts (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('구인', '구직')),
  title text not null,
  region text not null,
  contact text not null,
  body text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.job_posts enable row level security;

-- 누구나(익명) 글 등록 가능. 단, status 는 pending 만 허용(승인은 운영자만).
create policy "anon insert pending"
  on public.job_posts for insert to anon
  with check (status = 'pending');

-- 승인된 글만 공개 조회.
create policy "public read approved"
  on public.job_posts for select to anon
  using (status = 'approved');

-- 승인/거절(update)과 대기목록 조회는 서비스 롤 키로만 (서버 API에서 처리, RLS 우회).
