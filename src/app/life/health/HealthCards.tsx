"use client";

import { useState } from "react";
import type { Post } from "@/lib/posts";
import PostBody from "../../today/PostBody";

export default function HealthCards({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState<string | null>(posts[0]?.slug ?? null);

  return (
    <div className="space-y-3">
      {posts.map((p) => {
        const isOpen = open === p.slug;
        return (
          <div key={p.slug} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : p.slug)}
              className="w-full text-left p-5 flex items-start gap-3"
            >
              <span className="text-3xl leading-none">{p.emoji}</span>
              <span className="flex-1 min-w-0">
                <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                  {p.topic}
                </span>
                <span className="mt-1.5 block text-base font-bold text-gray-900 leading-snug">
                  {p.title}
                </span>
              </span>
              <span
                className={`shrink-0 mt-1 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 border-t border-gray-100 pt-3">
                <PostBody body={p.body} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
