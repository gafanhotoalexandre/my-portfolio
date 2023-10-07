import { GithubLogo, LinkedinLogo, FileText } from "@phosphor-icons/react"

import curriculo from '../assets/curriculo.pdf'
import { SocialLinkData } from "../types/SocialLinkData"

export const socialLinksData: SocialLinkData[] = [
  {
    href: 'https://github.com/gafanhotoalexandre',
    icon: <GithubLogo size={32} />,
  },
  {
    href: 'https://www.linkedin.com/in/alemartins-lima/',
    icon: <LinkedinLogo size={32} />,
  },
  {
    href: curriculo,
    icon: <FileText size={32} />,
    download: true,
  },
]