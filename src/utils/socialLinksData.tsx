import { GithubLogo, LinkedinLogo, FileText } from "@phosphor-icons/react"

import curriculo from '../assets/curriculo.pdf'
import { SocialLinkData } from "../types/SocialLinkData"

export const socialLinksData: SocialLinkData[] = [
  {
    href: 'https://github.com/gafanhotoalexandre',
    icon: <GithubLogo className="text-[1.5rem] md:text-[2rem]" />,
  },
  {
    href: 'https://www.linkedin.com/in/alemartins-lima/',
    icon: <LinkedinLogo className="text-[1.5rem] md:text-[2rem]" />,
  },
  {
    href: curriculo,
    icon: <FileText className="text-[1.5rem] md:text-[2rem]" />,
    download: true,
  },
]