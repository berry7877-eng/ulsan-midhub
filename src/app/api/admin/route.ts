import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

function authed(req: Request) {
  const pass =
    req.headers.get("x-admin-pass") ??
    new URL(req.url).searchParams.get("pass") ??
    "";
  const expected = process.env.ADMIN_PASSCODE;
  return Boolean(expected) && pass === expected;
}

// 대기중(pending) 글 목록
export async function GET(req: Request) {
  if (!authed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const admin = getSupabaseAdmin();
  if (!admin) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }
  const { data, error } = await admin
    .from("job_posts")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ posts: data });
}

// 승인 / 거절
export async function POST(req: Request) {
  if (!authed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const admin = getSupabaseAdmin();
  if (!admin) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }
  const { id, action } = await req.json();
  if (!id || (action !== "approve" && action !== "reject")) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  const status = action === "approve" ? "approved" : "rejected";
  const { error } = await admin.from("job_posts").update({ status }).eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
