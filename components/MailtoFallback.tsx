"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

/**
 * Email links depend on the visitor having an email app set up. When a
 * mailto: click leaves the page in focus (nothing opened), show the address
 * with a copy button and a WhatsApp alternative. Works for every email link
 * on the site without changing them; when an email app does open, the window
 * loses focus and nothing is shown.
 */
const WAIT_MS = 1600;
const VISIBLE_MS = 15000;

export function MailtoFallback({ whatsapp }: { whatsapp: string | null }) {
  const [address, setAddress] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      const link = event.target instanceof Element ? event.target.closest('a[href^="mailto:"]') : null;
      if (!link) return;
      const target = decodeURIComponent((link.getAttribute("href") ?? "").slice("mailto:".length).split("?")[0]);

      let left = false;
      const markLeft = () => {
        left = true;
      };
      window.addEventListener("blur", markLeft, { once: true });
      document.addEventListener("visibilitychange", markLeft, { once: true });

      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        window.removeEventListener("blur", markLeft);
        document.removeEventListener("visibilitychange", markLeft);
        if (!left && document.hasFocus()) {
          setCopied(false);
          setAddress(target);
        }
      }, WAIT_MS);
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(timer);
    };
  }, []);

  // Auto-dismiss, and close on Escape.
  useEffect(() => {
    if (!address) return;
    const hide = window.setTimeout(() => setAddress(null), VISIBLE_MS);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setAddress(null);
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(hide);
      document.removeEventListener("keydown", onKey);
    };
  }, [address]);

  async function copy() {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  // The live region stays mounted so screen readers announce the message.
  return (
    <div className="mail-toast-region" role="status" aria-live="polite">
      {address && (
        <div className="mail-toast">
          <span className="mail-toast-icon" aria-hidden="true">
            <Icon name="mail" />
          </span>
          <div className="mail-toast-body">
            <p className="mail-toast-title">Couldn&apos;t open an email app</p>
            <p className="mail-toast-text">
              Email Mahesh at{" "}
              <strong>
                {/* Prefer wrapping after "@" on narrow screens. */}
                {address.split("@")[0]}@<wbr />
                {address.split("@")[1]}
              </strong>
            </p>
            <div className="mail-toast-actions">
              <button type="button" className="btn btn--primary btn--small" onClick={copy}>
                <Icon name={copied ? "check" : "copy"} /> {copied ? "Address copied" : "Copy address"}
              </button>
              {whatsapp && (
                <a className="btn btn--secondary btn--small" href={whatsapp} target="_blank" rel="noopener noreferrer">
                  <Icon name="chat" /> WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
          <button type="button" className="mail-toast-close" onClick={() => setAddress(null)}>
            <Icon name="close" />
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      )}
    </div>
  );
}
