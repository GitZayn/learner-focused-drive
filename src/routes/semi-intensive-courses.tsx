import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Prose, Section } from "../components/ui-kit";
import { business } from "../lib/site";

const title = "Semi-Intensive Driving Courses | Behind The Wheel, Stoke-on-Trent";
const description =
  "Semi-intensive automatic driving lessons in Stoke-on-Trent and Newcastle-under-Lyme: longer lessons over fewer weeks for learners with a practical test already booked.";

export const Route = createFileRoute("/semi-intensive-courses")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/semi-intensive-courses" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/semi-intensive-courses" }],
  }),
  component: SemiIntensive,
});

function SemiIntensive() {
  return (
    <>
      <PageHero
        eyebrow="Semi-intensive courses"
        title="Need to prepare for a test?"
        intro="Already booked a practical test but haven't found an instructor? Ask Jason about a semi-intensive course — longer lessons over fewer weeks."
        crumbs={[{ label: "Semi-Intensive Courses" }]}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl">How a semi-intensive course works</h2>
            <Prose>
              <p className="mt-5">
                A semi-intensive course concentrates your tuition: longer lessons, spread over fewer
                weeks, aimed squarely at the test you already have in the diary. It suits learners
                who have a date booked and need focused preparation rather than a weekly slot
                stretching over months.
              </p>
              <p>
                The teaching approach doesn't change. Lessons are still client-centred, still built
                around a two-way recap and an agreed goal, and still focused on you being able to
                drive safely and independently — not simply getting through the hour.
              </p>
              <p>
                Availability depends on Jason's diary and how much time there is before your test,
                so the sooner you ask, the better. Pricing and arrangements are discussed directly
                with him.
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/contact" arrow>
                Contact Jason about availability
              </ActionLink>
              <ActionLink href={business.phoneHref} tone="outline">
                Call / text {business.phone}
              </ActionLink>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="panel border-2 border-amber p-7">
              <h2 className="text-xl">Before you enquire, you must have</h2>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-5 shrink-0 rounded-full bg-go" />
                  Passed your theory test
                </li>
                <li className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-5 shrink-0 rounded-full bg-go" />
                  A practical driving test already booked
                </li>
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                A semi-intensive course is focused preparation, not a guaranteed pass. Whether you
                are ready for your test depends on your driving on the day, and your instructor will
                always be honest with you about that.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
