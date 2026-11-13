import { CalendarDays, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { container } from "../lib/layout";
import { socialLinks } from "./icons";
import TechStack from "./TechStack";

export default function ProfileHeader() {
  return (
    <header>
      <div className={`${container} pb-4 pt-8 sm:pt-10`}>
        <div className="w-fit shrink-0">
          <img
            src="/avatar.png"
            alt={profile.name}
            width={132}
            height={132}
            className="size-[104px] rounded-full border-4 border-ink object-cover object-center ring-1 ring-line sm:size-[132px]"
          />
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h1 className="text-[22px] font-extrabold leading-7 tracking-[-0.03em] text-ink-text">
              {profile.name}
            </h1>

            <div className="flex items-center">
              {[...socialLinks].reverse().map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid size-8 place-items-center rounded-full text-ink-muted transition-colors duration-200 hover:bg-ink-text/[0.06] hover:text-ink-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <Icon className="size-[17px]" />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-0.5 text-[15px] leading-5 text-ink-muted">
            @{profile.handle}
          </p>

          <p className="mt-3 max-w-[60ch] font-gitlab text-[15px] leading-6 text-ink-text">
            {profile.bio}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] leading-5 text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={17} strokeWidth={1.8} aria-hidden="true" />
              {profile.location}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={17} strokeWidth={1.8} aria-hidden="true" />
              {profile.joined}
            </span>
          </div>

          <TechStack />
        </div>
      </div>
    </header>
  );
}
