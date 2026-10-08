export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={align === "center" ? "section-heading section-heading--center" : "section-heading"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
