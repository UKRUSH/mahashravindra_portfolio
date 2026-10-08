import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

// Brief §6 / §12.1: 1200 × 630 card in the purple, black, and white identity.
// The MR mark is a typographic treatment, not an official logo.
export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#ffffff",
          background:
            "radial-gradient(ellipse at 85% 40%, rgba(88, 0, 136, 0.55), transparent 55%), linear-gradient(135deg, #050208, #0d0614)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#e9d5ff",
            }}
          >
            <div style={{ width: 44, height: 3, marginRight: 18, background: "#e9d5ff" }} />
            {profile.heroEyebrow}
          </div>
          <div style={{ marginTop: 28, fontSize: 92, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 34, lineHeight: 1.35, color: "#cccccc" }}>{profile.heroHeadline}</div>
        </div>
        <div
          style={{
            width: 260,
            height: 325,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 28,
            border: "2px solid rgba(255, 255, 255, 0.18)",
            background: "linear-gradient(145deg, #1b0c27, #580088)",
            fontSize: 128,
            fontWeight: 800,
            letterSpacing: -8,
            color: "rgba(255, 255, 255, 0.92)",
          }}
        >
          {profile.initials}
        </div>
      </div>
    ),
    size,
  );
}
