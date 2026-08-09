import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Section } from "../components/ui-kit";
import { business } from "../lib/site";

const title = "Theory Test Support & Theory Test Pro | Behind The Wheel";
const description =
  "Pupils taking lessons with Behind The Wheel can be given access to Theory Test Pro for practice questions, hazard perception and revision.";

export const Route = createFileRoute("/theory-test-support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/theory-test-support" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/theory-test-support" }],
  }),
  component: Theory,
});

function Theory() {
  return (
    <>
      <PageHero
        eyebrow="Theory test support"
        title="Free Theory Test Pro access for pupils"
        intro="Learners who have signed up for lessons can be given access to Theory Test Pro to revise, practise and track their progress between lessons."
        crumbs={[{ label: "Theory Test Support" }]}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl">What you get</h2>
            <ul className="mt-6 grid gap-4">
              {[
                "Official-style multiple choice practice questions",
                "Hazard perception clips to train your reactions",
                "Mock tests under realistic conditions",
                "Progress tracking so you know when you're ready to book",
              ].map((t) => (
                <li key={t} className="panel flex gap-4 p-5 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-5 shrink-0 rounded-full bg-go" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl leading-relaxed text-ink-soft">
              Theory work and practical driving support each other. What you revise for the theory
              test — stopping distances, signs, hazard awareness — comes up again in the car, and
              Jason will link the two together during lessons rather than treating them as separate
              subjects.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="panel p-7">
              <h2 className="text-xl">Ask for your access</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Once you have booked lessons, ask Jason to set you up. Calls and messages are
                answered {business.responseHours.toLowerCase()}.
              </p>
              <div className="mt-6 grid gap-3">
                <ActionLink to="/contact" arrow>
                  Request access
                </ActionLink>
                <ActionLink href={business.phoneHref} tone="outline">
                  Call / text {business.phone}
                </ActionLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
