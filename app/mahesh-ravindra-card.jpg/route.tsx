import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { profile } from "@/content/portfolio";

/**
 * "Save contact card": a business-card image (JPG) built only from details
 * already published on the site, plus the portrait when one exists. Rendered
 * at 2× (2100 × 1200) so it stays sharp on phones; Inter (OFL) is read from
 * assets/fonts at module scope.
 */
const W = 2100;
const H = 1200;

const fontFile = (weight: number) => readFile(join(process.cwd(), `assets/fonts/inter-latin-${weight}-normal.woff`));
const fonts = Promise.all([fontFile(400), fontFile(600), fontFile(800)]).then(([regular, semibold, extrabold]) => [
  { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
  { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
  { name: "Inter", data: extrabold, weight: 800 as const, style: "normal" as const },
]);

const PHOTO = 380;

/** The site portrait, downscaled to its on-card size and inlined for Satori. */
const portrait = profile.portrait
  ? sharp(join(process.cwd(), "public", profile.portrait))
      .resize(PHOTO * 2, PHOTO * 2, { fit: "cover", position: "top" })
      .jpeg({ quality: 88 })
      .toBuffer()
      .then((buffer) => `data:image/jpeg;base64,${buffer.toString("base64")}`)
  : Promise.resolve(null);

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 38 }}>
      <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: 4, color: "#d8b4fe" }}>{label}</div>
      <div style={{ marginTop: 8, fontSize: 38, fontWeight: 600, color: "#ffffff" }}>{value}</div>
    </div>
  );
}

/**
 * Async font reads and image encoding would otherwise stop prerendering;
 * caching the bytes keeps the card a static file built once at deploy time.
 */
async function renderCard() {
  "use cache";
  cacheLife("max");
  const [primary, secondary] = profile.phones;
  const photo = await portrait;

  const png = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "Inter",
          color: "#ffffff",
          background:
            "radial-gradient(ellipse at 88% 30%, rgba(88, 0, 136, 0.6), transparent 55%), linear-gradient(135deg, #050208, #0d0614)",
        }}
      >
        {/* Identity */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "56%", padding: "120px 0 110px 130px" }}>
          {photo ? (
            // Purple ring around the portrait, echoing the hero frame.
            <div
              style={{
                display: "flex",
                width: PHOTO + 20,
                height: PHOTO + 20,
                padding: 7,
                borderRadius: 64,
                background: "linear-gradient(145deg, #a855f7, #5d0e8b 55%, #1b0c27)",
                boxShadow: "0 40px 80px -30px rgba(88, 0, 136, 0.8)",
              }}
            >
              {/* Satori renders plain <img>; next/image does not apply inside ImageResponse. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt=""
                width={PHOTO + 6}
                height={PHOTO + 6}
                style={{ borderRadius: 58, border: "3px solid #0d0614", objectFit: "cover" }}
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 168,
                height: 168,
                borderRadius: 40,
                border: "3px solid rgba(255, 255, 255, 0.18)",
                background: "linear-gradient(145deg, #1b0c27, #5d0e8b)",
                fontSize: 76,
                fontWeight: 800,
                letterSpacing: -4,
              }}
            >
              {profile.initials}
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 112, fontWeight: 800, letterSpacing: -5, lineHeight: 1 }}>{profile.name}</div>
            <div style={{ marginTop: 30, fontSize: 44, fontWeight: 600, color: "#e9d5ff" }}>{profile.title}</div>
            {/* Two deliberate lines: the full positioning is wider than the column. */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: 22, fontSize: 30, lineHeight: 1.45, color: "#cccccc" }}>
              <div>{profile.positioning.slice(0, 2).join(" · ")}</div>
              <div>{profile.positioning.slice(2).join(" · ")}</div>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "44%",
            margin: "110px 110px 110px 0",
            padding: "30px 0 68px 80px",
            borderLeft: "3px solid rgba(255, 255, 255, 0.14)",
          }}
        >
          <Row label="PHONE" value={`${primary.label}  ·  ${secondary.label}`} />
          {profile.whatsappNumber && <Row label="WHATSAPP" value={profile.whatsappNumber} />}
          <Row label="EMAIL" value={profile.email} />
          <Row label="WEB" value={profile.companyUrlLabel} />
          <Row label="LOCATION" value={profile.location} />
        </div>

        {/* Brand accent along the bottom edge */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 18, background: "linear-gradient(90deg, #5d0e8b, #a855f7)" }} />
      </div>
    ),
    { width: W, height: H, fonts: await fonts },
  );

  const jpg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 92, mozjpeg: true }).toBuffer();
  return new Uint8Array(jpg);
}

export async function GET() {
  return new Response(await renderCard(), {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Disposition": 'attachment; filename="mahesh-ravindra-contact-card.jpg"',
    },
  });
}
