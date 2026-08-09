import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Prose, Section } from "../components/ui-kit";
import { business } from "../lib/site";

const title = "Driving Lessons in Stoke-on-Trent & Newcastle-under-Lyme | Areas We Cover";
const description =
  "Automatic driving tuition in ST3, ST4 and ST5, plus some parts of ST2 and ST11, across Stoke-on-Trent and Newcastle-under-Lyme.";

export const Route = createFileRoute("/areas-we-cover")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/areas-we-cover" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/areas-we-cover" }],
  }),
  component: Areas,
});

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Areas we cover"
        title="Driving lessons in Stoke-on-Trent & Newcastle-under-Lyme"
        intro="Behind The Wheel Driving School can provide driving tuition in the ST3, ST4 and ST5 areas, plus some parts of ST2 and ST11."
        crumbs={[{ label: "Areas We Cover" }]}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl">Covered postcodes</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {business.areas.map((a) => (
                <li
                  key={a}
                  className="rounded-md border-2 border-primary bg-card px-6 py-4 font-display text-3xl font-semibold text-primary"
                >
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl">Partly covered</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {business.partialAreas.map((a) => (
                <li
                  key={a}
                  className="rounded-md border border-dashed border-border-strong bg-card px-5 py-3 text-sm font-medium text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
            <Prose>
              <p className="mt-8">
                Between them, these postcodes cover a good part of Stoke-on-Trent and
                Newcastle-under-Lyme — the towns where Jason teaches, films his junction
                walk-throughs and knows the local test routes well. Lessons are taught on the roads
                you will actually be driving on, including the roundabouts and one-way systems that
                come up again and again on test.
              </p>
              <p>
                Because start and finish points can often be different, it is usually possible to
                fit lessons around where you study or work as well as where you live — for example
                starting at university and finishing at home. Locations should be agreed at the time
                of booking.
              </p>
            </Prose>
          </div>

          <aside className="md:col-span-5">
            <div className="panel p-7">
              <h2 className="text-xl">Live outside these areas?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                If you live in another postcode area, just contact Jason to see whether there is
                anything that can be done. It is always worth asking rather than assuming.
              </p>
              <div className="mt-6 grid gap-3">
                <ActionLink to="/contact" arrow>
                  Ask about your postcode
                </ActionLink>
                <ActionLink href={business.phoneHref} tone="outline">
                  Call / text {business.phone}
                </ActionLink>
              </div>
            </div>
            <div className="panel mt-6 p-7">
              <h2 className="text-xl">Know the routes before you drive them</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Jason has filmed and narrated a series of Newcastle-under-Lyme test routes and local
                roundabouts, free to watch.
              </p>
              <div className="mt-5">
                <ActionLink to="/driving-videos" tone="outline" arrow>
                  Watch the videos
                </ActionLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
