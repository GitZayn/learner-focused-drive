import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Prose, Section } from "../components/ui-kit";

const title = "Client-Centred Learning | Behind The Wheel Driving School";
const description =
  "How client-centred driving tuition works: lessons shaped around how you prefer to learn, at your own pace, with you taking ownership of your progress.";

export const Route = createFileRoute("/client-centred-learning")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/client-centred-learning" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/client-centred-learning" }],
  }),
  component: ClientCentredLearning,
});

const principles = [
  {
    t: "Your pace, not a timetable",
    b: "Some learners want time to reflect before moving on. Pushing them forward too quickly slows their overall progress rather than speeding it up.",
  },
  {
    t: "Your way of learning",
    b: "Someone who learns by having a go will get frustrated watching demonstration after demonstration. The lesson adapts to how you take information in.",
  },
  {
    t: "Explanations that land",
    b: "Twenty years of explaining difficult ideas to teenagers is good preparation for explaining a roundabout. If one explanation doesn't work, another one will.",
  },
  {
    t: "Feedback you can use",
    b: "Regular, specific feedback tied to a clear area of development — not a vague verdict at the end of the hour.",
  },
  {
    t: "Ownership of your progress",
    b: "You are encouraged to take responsibility for your learning early on. When the conclusion is yours, it stays with you long after test day.",
  },
  {
    t: "Confidence, then independence",
    b: "The goal is driving skilfully and independently in real traffic — the test is a checkpoint on the way, not the destination.",
  },
];

function ClientCentredLearning() {
  return (
    <>
      <PageHero
        eyebrow="Teaching approach"
        title="Client-centred learning"
        intro="An approach to learning to drive that takes into account how you prefer to learn — because when people learn that way, they are far more likely to retain the information and the skill."
        crumbs={[{ label: "Client-Centred Learning" }]}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Prose>
              <p>
                Client-centred learning (CCL) starts from a simple observation: people learn in very
                different ways and at very different speeds. If someone who likes time to reflect on
                their learning is forced to move on to the next thing too quickly, it can slow down
                their overall progress. If someone who likes to learn by trying things out is made
                to watch too many demonstrations without having a go, they are likely to get
                frustrated and stop enjoying their lessons.
              </p>
              <p>
                The second aim of client-centred learning is ownership. Learners are far more likely
                to keep learning if they are encouraged to take responsibility for that learning at
                an early stage. That way it is theirs — it is their conclusion, and it is therefore
                more likely to stay with them for life, way beyond just passing the driving test.
              </p>
              <p>
                For Behind The Wheel, teaching someone to drive is not just about passing their
                test. You will be properly prepared and you will know everything you need to give
                that first-time pass the best possible chance. Just as importantly, you will be able
                to drive independently, skilfully and efficiently in a variety of road and traffic
                conditions. The aim is that you understand what you are doing and, most importantly,
                why.
              </p>
            </Prose>
          </div>

          <aside className="md:col-span-5">
            <div className="panel p-7">
              <h2 className="text-2xl">Your lesson, your progress</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Every lesson opens with a two-way recap of your previous drive. Together you
                identify what you need next and agree a goal for the session, so you always know
                what you are working on and how it makes you a safer driver. During and at the end
                of the lesson you summarise together, so you leave knowing exactly what improved and
                what comes next.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Lesson plans are not fixed in advance. They flex according to your current skills
                and confidence on the day — because some days go better than others, and that is
                completely normal.
              </p>
              <div className="mt-6">
                <ActionLink to="/driving-lessons" tone="outline" arrow>
                  What lessons involve
                </ActionLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="text-3xl sm:text-4xl">The principles in practice</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.t} className="border-t-2 border-primary pt-5">
              <h3 className="text-xl leading-snug">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <blockquote className="max-w-3xl">
          <p className="font-display text-2xl leading-snug sm:text-3xl">
            “Thank you for visiting our website and taking the time to read through. We hope you've
            taken some value from it and wish you the very best on your quest to achieving your
            licence — whether it be with ourselves or one of the other many local driving schools.”
          </p>
          <footer className="mt-6 text-sm text-amber">
            Jason Rothwell — driving school owner
          </footer>
        </blockquote>
        <div className="mt-10">
          <ActionLink to="/contact" tone="onDark" arrow>
            Enquire about lessons
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
