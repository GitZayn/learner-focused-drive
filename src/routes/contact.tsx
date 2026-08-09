import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ActionLink, PageHero, Section } from "../components/ui-kit";
import { business } from "../lib/site";

const title = "Contact Jason | Behind The Wheel Driving School, Stoke-on-Trent";
const description =
  "Enquire about automatic driving lessons in Stoke-on-Trent and Newcastle-under-Lyme. Call, text or send an enquiry — answered 8.00am to 8.00pm, seven days a week.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const field =
  "mt-2 w-full rounded-md border border-border-strong bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40";
const label = "block text-sm font-semibold";

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Postcode: ${get("postcode")}`,
      `Enquiry type: ${get("enquiry")}`,
      `Experience: ${get("experience")}`,
      `Theory test passed: ${get("theory")}`,
      `Practical test booked: ${get("testDate") || "No / not known"}`,
      `Preferred times: ${get("times")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `${business.emailHref}?subject=${encodeURIComponent(
      `Lesson enquiry — ${get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Jason"
        intro={`Calls, texts and messages are answered ${business.responseHours.toLowerCase()}.`}
        crumbs={[{ label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl">Lesson enquiry</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              The more you can tell Jason, the more useful his reply will be. Fields marked with an
              asterisk are required.
            </p>

            <form className="mt-8 grid gap-6" onSubmit={onSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="name">
                    Your name *
                  </label>
                  <input id="name" name="name" required autoComplete="name" className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="phone">
                    Phone number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="postcode">
                    Your postcode area *
                  </label>
                  <input
                    id="postcode"
                    name="postcode"
                    required
                    placeholder="e.g. ST5"
                    className={field}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="enquiry">
                    What are you enquiring about? *
                  </label>
                  <select id="enquiry" name="enquiry" required className={field} defaultValue="">
                    <option value="" disabled>
                      Please choose
                    </option>
                    <option>Weekly automatic lessons</option>
                    <option>Semi-intensive course</option>
                    <option>Refresher lessons</option>
                    <option>Theory test support</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="experience">
                    Driving experience so far
                  </label>
                  <select id="experience" name="experience" className={field} defaultValue="">
                    <option value="" disabled>
                      Please choose
                    </option>
                    <option>Complete beginner</option>
                    <option>Some lessons already taken</option>
                    <option>Changing instructor</option>
                    <option>Returning after a break</option>
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="theory">
                    Have you passed your theory test?
                  </label>
                  <select id="theory" name="theory" className={field} defaultValue="">
                    <option value="" disabled>
                      Please choose
                    </option>
                    <option>Yes</option>
                    <option>No, not yet</option>
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="testDate">
                    Practical test date (if booked)
                  </label>
                  <input id="testDate" name="testDate" type="date" className={field} />
                </div>
              </div>

              <div>
                <label className={label} htmlFor="times">
                  Days and times that usually suit you
                </label>
                <input
                  id="times"
                  name="times"
                  placeholder="e.g. weekday evenings after 5pm"
                  className={field}
                />
              </div>

              <div>
                <label className={label} htmlFor="message">
                  Anything else Jason should know? *
                </label>
                <textarea id="message" name="message" required rows={5} className={field} />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Send enquiry
                </button>
                {sent && (
                  <p role="status" className="text-sm text-go">
                    Your email app should now be open with your enquiry ready to send.
                  </p>
                )}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your details are used only to reply to your enquiry about driving lessons.
              </p>
            </form>
          </div>

          <aside className="grid gap-6 md:col-span-5 md:content-start">
            <div className="panel p-7">
              <h2 className="text-xl">Call or text</h2>
              <a
                href={business.phoneHref}
                className="mt-2 block font-display text-3xl font-semibold text-primary hover:underline"
              >
                {business.phone}
              </a>
              <a
                href={business.emailHref}
                className="mt-4 block text-sm font-semibold text-primary hover:underline"
              >
                {business.email}
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Answered {business.responseHours.toLowerCase()}.
              </p>
            </div>
            <div className="panel p-7">
              <h2 className="text-xl">Areas covered</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {business.areas.join(", ")}, plus {business.partialAreas.join(" and ").toLowerCase()},
                across Stoke-on-Trent and Newcastle-under-Lyme.
              </p>
              <div className="mt-5">
                <ActionLink to="/areas-we-cover" tone="outline" arrow>
                  Check your area
                </ActionLink>
              </div>
            </div>
            <div className="panel p-7">
              <h2 className="text-xl">Follow along</h2>
              <ul className="mt-4 grid gap-2">
                {business.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
