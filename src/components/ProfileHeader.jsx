import { CalendarDays, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import TechStack from "./TechStack";

export default function ProfileHeader() {
  return (
    <header>
      <div className="px-4 pb-5 pt-8 sm:px-8 sm:pt-10 lg:px-12">
        <div className="w-fit shrink-0">
          <img
            src="/avatar.png"
            alt={profile.name}
            className="size-[104px] rounded-full border-4 border-ink object-cover object-center sm:size-[134px]"
          />
        </div>

        <div className="mt-3">
          <h1 className="text-xl font-extrabold leading-6 tracking-[-0.04em] text-ink-text">
            {profile.name}
          </h1>
          <p className="text-[15px] leading-5 text-ink-muted">
            @{profile.handle}
          </p>

          <p className="mt-3 font-gitlab text-[15px] leading-5 text-ink-text">
            {profile.bio}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] leading-5 text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
              {profile.location}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={18} strokeWidth={1.8} aria-hidden="true" />
              {profile.joined}
            </span>
          </div>

          <TechStack />
        </div>
      </div>
    </header>
  );
}
