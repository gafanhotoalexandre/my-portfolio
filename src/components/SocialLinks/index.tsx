import { socialLinksData } from "../../utils/socialLinksData";
import { SocialLink } from "../SocialLink";

export function SocialLinks() {
  return (
    <section className="flex md:gap-8">
      {socialLinksData.map((link, index) => (
        <SocialLink
          key={index}
          href={link.href}
          download={link.download}
          target="_blank"
        >
          {link.icon}
        </SocialLink>
      ))}
    </section>
  )
}