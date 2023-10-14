import { GithubLogo, LinkedinLogo, FileText } from "@phosphor-icons/react"

import curriculo from '../assets/curriculo.pdf'
import { SocialLinkData } from "../types/SocialLinkData"

export const socialLinksData: SocialLinkData[] = [
  {
    href: 'https://github.com/gafanhotoalexandre',
    icon: <GithubLogo className="text-[24px] md:text-[32px]" />,
  },
  {
    href: 'https://www.linkedin.com/in/alemartins-lima/',
    icon: <LinkedinLogo className="text-[24px] md:text-[32px]" />,
  },
  {
    href: curriculo,
    icon: <FileText className="text-[24px] md:text-[32px]" />,
    download: true,
  },
]