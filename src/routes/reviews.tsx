import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Section } from "../components/ui-kit";
import { business } from "../lib/site";

const title = "Reviews | Behind The Wheel Driving School, Stoke-on-Trent";
const description =
  "Read reviews of Behind The Wheel Driving School from learner drivers in Stoke-on-Trent and Newcastle-under-Lyme on Facebook and Google.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What learners say"
        intro="Reviews are published on Facebook and Google, where they can be read in full and verified independently."
        crumbs={[{ label: "Reviews" }]}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="panel p-8">
            <h2 className="text-2xl">Facebook reviews</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Recommendations from learners who have passed with Behind The Wheel, posted on the
              school's Facebook page.
            </p>
            <div className="mt-6">
              <ActionLink href={business.reviewLinks.facebook} arrow>
                Read Facebook reviews
              </ActionLink>
            </div>
          </article>
          <article className="panel p-8">
            <h2 className="text-2xl">Google reviews</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Ratings and written reviews left on Google by pupils across Stoke-on-Trent and
              Newcastle-under-Lyme.
            </p>
            <div className="mt-6">
              <ActionLink href={business.reviewLinks.google} arrow>
                Read Google reviews
              </ActionLink>
            </div>
          </article>
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Passed with Jason? Leaving a short review helps other learners in the area work out
          whether his way of teaching would suit them.
        </p>
      </Section>
    </>
  );
}
