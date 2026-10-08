import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

/**
 * Square MR monogram for the favicon and Apple touch icon (matches the
 * header's .monogram). A typographic treatment, not an official logo.
 */
export function monogramIcon(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: size * 0.22,
          background: "#5d0e8b",
          color: "#ffffff",
          fontSize: size * 0.46,
          fontWeight: 800,
          letterSpacing: -size * 0.02,
        }}
      >
        {profile.initials}
      </div>
    ),
    { width: size, height: size },
  );
}
