import clsx from "clsx";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./SocialIcons";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <div>
      <SocialLink href="#" icon={TwitterIcon}>
        Follow on Twitter
      </SocialLink>
      <SocialLink href="#" icon={InstagramIcon} className="mt-4">
        Follow on Instagram
      </SocialLink>
      <SocialLink href="#" icon={GitHubIcon} className="mt-4">
        Follow on GitHub
      </SocialLink>
      <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
        Follow on LinkedIn
      </SocialLink>
      <SocialLink
        href="mailto:mwangindaba@gmail.com"
        icon={MailIcon}
        className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
      >
        mwangindaba@gmail.com
      </SocialLink>
    </div>
  );
}
