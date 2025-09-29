import { socialMedia } from "@/config/social-media";
import { cn } from "@/lib/utils";

export function SocialMediaIcons(props: React.ComponentProps<"ul">) {
  return (
    <ul {...props} className={cn("flex items-center justify-between gap-4", props.className)}>
      {Object.values(socialMedia).map((item, index) => (
        <li key={index}>
          <a href={item.href} className="opacity-50 transition-opacity hover:opacity-100">
            <span className="sr-only">{item.name}</span>
            <item.icon aria-hidden="true" className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
