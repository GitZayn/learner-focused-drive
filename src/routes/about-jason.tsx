import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Prose, Section } from "../components/ui-kit";
import { business } from "../lib/site";

const title = "About Jason — Driving Instructor in Stoke-on-Trent | Behind The Wheel";
const description =
  "Meet Jason, a fully qualified Approved Driving Instructor and former secondary school science teacher of over 20 years, 14 as Head of Department.";

export const Route = createFileRoute("/about-jason")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about-jason" },
      { property: "og:type", content: "profile" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about-jason" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jason Rothwell",
          jobTitle: "Approved Driving Instructor (ADI)",
          worksFor: { "@type": "DrivingSchool", name: "Behind The Wheel Driving School" },
          telephone: "+447761163520",
          email: "enquiries@btwdriving-school.co.uk",
        }),
      },
    ],
  }),
  component: AboutJason,
});

const timeline = [
  {
    stage: "Teaching career",
    body: "Over twenty years teaching science in a secondary school — long enough to have taught every kind of learner there is, from the quietly anxious to the quick and overconfident.",
  },
  {
    stage: "Head of Department",
    body: "Fourteen of those years were spent as Head of Department: planning schemes of work, coaching other teachers and being accountable for how well people actually learned.",
  },
  {
    stage: "Driving instruction",
    body: "Behind The Wheel Driving School was set up out of a genuine passion for teaching people to drive safely, with the same standards of preparation and feedback as the classroom.",
  },
  {
    stage: "Client-centred approach",
    body: "Today every lesson is built around the learner: their pace, their preferred way of learning, and their responsibility for their own progress.",
  },
];

function AboutJason() {
  return (
    <>
      <PageHero
        eyebrow="About your instructor"
        title="Meet Jason — your driving instructor"
        intro="Fully qualified Approved Driving Instructor, former Head of Department, and the person who will be sitting beside you for every lesson."
        crumbs={[{ label: "About Jason" }]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <Prose>
              <p>
                “Hi, I am Jason. I am a fully qualified Approved Driving Instructor (ADI) and I have
                set up Behind The Wheel Driving School because I am passionate about teaching people
                to be able to drive in a safe manner.”
              </p>
              <p>
                “I was previously a science teacher at a secondary school for over twenty years,
                fourteen of them as Head of Department. Due to my previous background I am fully
                aware of how people learn, and that different people learn at different rates and in
                different ways.”
              </p>
              <p>
                “It is my aim to provide you with one of the best driving lesson experiences around.
                Lessons are available from early morning to late evening, and at Behind The Wheel we
                can start and finish lessons from different locations if you wish. Maybe you want to
                begin the lesson from university and finish at home — that is not a problem. You want
                a one hour lesson or a two hour lesson? That is fine too.”
              </p>
              <p>
                Jason keeps up to date with new teaching and learning strategies, rules and
                regulations, and is committed to continuing professional development. He does not
                try to compete with the cheapest driving lessons in Stoke-on-Trent; he competes on
                quality and value.
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/contact" arrow>
                Enquire about lessons
              </ActionLink>
              <ActionLink to="/client-centred-learning" tone="outline">
                How Jason teaches
              </ActionLink>
            </div>
          </div>

          <aside className="md:col-span-5">
            <img
              src="/images/car-rear.webp"
              alt="Rear view of the Behind The Wheel automatic tuition car showing the school's contact details"
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-border object-cover"
            />
            <dl className="panel mt-6 divide-y divide-border">
              {[
                ["Qualification", business.qualification],
                ["Tuition vehicle", "Automatic"],
                ["Lesson lengths", "One hour or two hours"],
                ["Availability", "Early morning to late evening"],
                ["Calls answered", business.responseHours],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 p-5">
                  <dt className="rule-label text-muted-foreground">{k}</dt>
                  <dd className="text-sm font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="text-3xl sm:text-4xl">From the classroom to the passenger seat</h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {timeline.map((t, i) => (
            <li key={t.stage} className="bg-card p-6">
              <span className="rule-label text-amber">Stage {i + 1}</span>
              <h3 className="mt-3 text-xl leading-snug">{t.stage}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="ink">
        <h2 className="text-3xl sm:text-4xl">Our mission statement</h2>
        <p className="mt-4 max-w-2xl text-ink-foreground/80">
          What you can expect from Behind The Wheel, in both service and the quality of tuition.
          Behind The Wheel Driving School will endeavour to:
        </p>
        <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {[
            "Distinguish ourselves from competitors by providing excellent and unrivalled driving tuition and customer service.",
            "Respond to all customer calls between 8.00am and 8.00pm, Monday to Sunday.",
            "Arrive at the driving lesson on time. Where this is not possible the lesson can be extended or offered at a reduced price.",
            "Offer the learner a two-way interactive recap of any previous driving, maintaining a client-centred approach that encourages responsibility throughout.",
            "Use that recap to help the learner identify their needs and set agreed goals for the lesson, so the purpose of the lesson and how it makes them safer is fully understood.",
            "Teach in a respectful and non-confrontational manner.",
            "Give regular feedback and encouragement linked to specific areas of development.",
            "Summarise interactively during and at the end of each session, so the learner knows their areas for development and whether the lesson goal was achieved.",
            "Reply to texts and calls as soon as possible, and at the very least the same day.",
            "Keep the tuition vehicle in a reasonably clean and tidy condition that reflects the professional image of the school.",
            "Ensure that personal hygiene is of the highest order.",
          ].map((item) => (
            <li key={item} className="flex gap-3 border-t border-white/15 pt-4 text-sm leading-relaxed text-ink-foreground/85">
              <span aria-hidden="true" className="mt-2 h-1.5 w-6 shrink-0 rounded-full bg-amber" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
