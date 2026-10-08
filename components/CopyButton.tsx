"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

/** Copies supplied text for event organisers; the text stays visible and selectable either way. */
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <span className="copy-control">
      <button type="button" className="btn btn--secondary btn--small" onClick={copy}>
        <Icon name={status === "copied" ? "check" : "copy"} /> {label}
      </button>
      <span className="copy-status" role="status">
        {status === "copied" && "Copied to clipboard"}
        {status === "failed" && "Copy failed; select the text instead"}
      </span>
    </span>
  );
}
