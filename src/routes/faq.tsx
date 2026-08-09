import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "../components/ui-kit";
import { faqs } from "../lib/site";

const title = "Driving Lesson FAQs | Behind The Wheel, Stoke-on-Trent";
const description =
  "Answers to common questions about automatic driving lessons, prices, areas covered, semi-intensive courses and getting started with Behind The Wheel.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="The questions learners ask most often before their first lesson."
        crumbs={[{ label: "FAQ" }]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <div key={f.q} className="py-7">
                  <dt className="font-display text-xl font-semibold">{f.q}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="md:col-span-4">
            <div className="panel p-7 md:sticky md:top-28">
              <h2 className="text-xl">Still not sure?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Ask Jason directly — there's no obligation and no sales pitch.
              </p>
              <div className="mt-5">
                <ActionLink to="/contact" arrow>
                  Send an enquiry
                </ActionLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
