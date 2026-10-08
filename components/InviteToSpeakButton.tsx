import { Icon } from "@/components/Icon";
import { emailFor, speakingInviteMessage, whatsappFor } from "@/content/portfolio";

/**
 * Speaking invitation: opens a WhatsApp chat with a prefilled message when a
 * confirmed WhatsApp number exists, otherwise falls back to a speaking email.
 */
export function InviteToSpeakButton({
  label = "Invite Mahesh to Speak",
  className = "btn btn--primary",
}: {
  label?: string;
  className?: string;
}) {
  const whatsapp = whatsappFor(speakingInviteMessage);

  if (!whatsapp) {
    return (
      <a className={className} href={emailFor("Speaking enquiry")}>
        {label} <Icon name="mic" />
      </a>
    );
  }

  return (
    <a className={className} href={whatsapp} target="_blank" rel="noopener noreferrer">
      {label} <Icon name="chat" />
      <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
    </a>
  );
}
