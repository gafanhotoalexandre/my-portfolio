interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export function SocialLink(props: SocialLinkProps) {
  return (
    <a
      className="hover:scale-150 transition-all p-2 md:p-3"
      {...props}
    >
      {props.children}
    </a>
  )
}