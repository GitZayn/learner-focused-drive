import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Prose, Section } from "../components/ui-kit";
import { business } from "../lib/site";
import { IconClock, IconPin, IconRoute, IconWheel } from "../components/brand/Icons";

const title = "Automatic Driving Lessons in Stoke-on-Trent & Newcastle-under-Lyme";
const description =
  "One-to-one automatic driving lessons at £40 per hour. One-hour or two-hour lessons, early morning to late evening, with flexible start and finish locations.";

export const Route = createFileRoute("/driving-lessons")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/driving-lessons" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/driving-lessons" }],
  }),
  component: DrivingLessons,
});

function DrivingLessons() {
  return (
    <>
      <PageHero
        eyebrow="Driving lessons"
        title="Automatic driving lessons"
        intro={`One-to-one tuition in an automatic car, ${business.hourlyRate} per hour, across Stoke-on-Trent and Newcastle-under-Lyme.`}
        crumbs={[{ label: "Driving Lessons" }]}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl">What a lesson involves</h2>
            <Prose>
              <p className="mt-5">
                Lessons are one to one, in an automatic tuition car. Without a clutch to manage, more
                of your attention goes where it matters most early on: road position, observation,
                anticipation and decision making.
              </p>
              <p>
                Each session begins with a two-way recap of your last drive so you can identify what
                you need to work on, and ends with a summary of what improved. Between the two,
                you'll build practical road experience in a range of conditions — quiet residential
                streets when you're finding your feet, and busier junctions, roundabouts and main
                roads as your confidence grows.
              </p>
              <p>
                Throughout, the teaching stays client-centred: adapted to your pace and your way of
                learning, with explanations repeated differently rather than repeated louder.
              </p>
            </Prose>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "One-to-one instruction",
                "Automatic vehicle",
                "Safe driving skills",
                "Confidence building",
                "Practical road experience",
                "Client-centred teaching",
              ].map((t) => (
                <li key={t} className="panel p-4 text-sm font-medium">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-5">
            <img
              src="/images/car-detail.webp"
              alt="The Behind The Wheel automatic tuition car photographed on a Staffordshire street"
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-border object-cover"
            />
            <div className="panel mt-6 p-6">
              <p className="rule-label text-muted-foreground">Hourly rate</p>
              <p className="mt-2 font-display text-5xl font-semibold text-primary">
                {business.hourlyRate}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                per hour · cash, card or bank transfer
              </p>
              <div className="mt-5 grid gap-3">
                <ActionLink to="/contact" arrow>
                  Enquire about lessons
                </ActionLink>
                <ActionLink to="/lesson-prices" tone="outline">
                  Prices &amp; terms
                </ActionLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="text-3xl sm:text-4xl">Lessons that fit around your life</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <article className="panel p-7">
            <IconClock className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-xl">One or two hours</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Book one-hour lessons or two-hour lessons — whichever suits you. Longer sessions can be
              useful once you're covering more ground or working towards a booked test; shorter ones
              often suit the early stages.
            </p>
          </article>
          <article className="panel p-7">
            <IconRoute className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-xl">Flexible start &amp; finish</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Lessons can start and finish in different places — home, university or another
              suitable location. Please agree locations at the time of booking; a later change of
              meeting or finishing point may shorten the lesson to cover the extra travel.
            </p>
          </article>
          <article className="panel p-7">
            <IconWheel className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-xl">Early until late</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Lessons are available from early morning to late evening, so tuition can fit around
              school, college, university, shifts and work. Calls and messages are answered {business.responseHours.toLowerCase()}.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="text-3xl">Where lessons take place</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Tuition is available in ST3, ST4 and ST5, plus some parts of ST2 and ST11, covering
              Stoke-on-Trent and Newcastle-under-Lyme. If you live in another postcode area, contact
              Jason to see whether anything can be arranged.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <ActionLink to="/areas-we-cover" tone="outline" arrow>
              <IconPin className="h-4 w-4" /> Check your area
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
