import { useState } from "react";
import { contacts } from "../constants";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyMessage(`${label} copied to clipboard.`);
    } catch {
      setCopyMessage(
        `Couldn't copy ${label.toLowerCase()}. Please copy it manually: ${value}`
      );
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#100d25]/80 px-5 py-14 shadow-card sm:px-10 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-3/4 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px]"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#aaa6c3] sm:text-sm">
          Get in touch
        </p>
        <h2 className="text-balance text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
          Let&apos;s create something{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            meaningful
          </span>{" "}
          together.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-secondary sm:text-base sm:leading-8">
          Whether it&apos;s an exciting opportunity, a potential collaboration,
          or simply a conversation about technology, I&apos;d love to hear from
          you!
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {contacts.map(({ title, icon, link }) => {
            const isExternalLink = title === "Github" || title === "LinkedIn";
            const iconElement = (
              <img
                src={icon}
                alt=""
                aria-hidden="true"
                className="h-6 w-6 brightness-0 invert transition-transform duration-300 group-hover:scale-110"
              />
            );
            const buttonClassName =
              "group grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:bg-violet-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 sm:h-16 sm:w-16";

            return (
              <li key={title}>
                {isExternalLink ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${title}`}
                    className={buttonClassName}
                  >
                    {iconElement}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(link, title)}
                    aria-label={`Copy ${title === "WhatsApp" ? "phone number" : title}`}
                    className={buttonClassName}
                  >
                    {iconElement}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-5 min-h-6 text-sm text-violet-200" aria-live="polite">
          {copyMessage}
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
