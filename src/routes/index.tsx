import { createFileRoute, Link } from "@tanstack/react-router";
import { business, videos } from "../lib/site";
import { ActionLink, Eyebrow, Section } from "../components/ui-kit";
import { VideoCard } from "../components/VideoCard";
import {
  IconBook,
  IconChat,
  IconClock,
  IconPin,
  IconRoute,
  IconShield,
  IconWheel,
} from "../components/brand/Icons";

const title = "Automatic Driving Lessons in Stoke-on-Trent | Behind The Wheel";
const description =
  "Client-centred automatic driving lessons across Stoke-on-Trent and Newcastle-under-Lyme with Jason, a fully qualified ADI and former head of department. £40 per hour.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trust = [
  { label: "Fully qualified ADI", icon: IconShield },
  { label: "Client-centred learning", icon: IconChat },
  { label: "Automatic lessons", icon: IconWheel },
  { label: "Stoke-on-Trent & Newcastle", icon: IconPin },
];

const reasons = [
  {
    title: "Qualified instruction",
    body: "Every lesson is taught by a fully qualified Approved Driving Instructor who is committed to ongoing professional development.",
  },
  {
    title: "Two decades in the classroom",
    body: "Jason taught science in a secondary school for over twenty years, fourteen of them as Head of Department. Explaining difficult ideas clearly is the job he has always done.",
  },
  {
    title: "Lessons built around you",
    body: "People learn at different speeds and in different ways. Lessons are adapted to the learner rather than pushed through a fixed syllabus.",
  },
  {
    title: "Early morning to late evening",
    body: "Lesson times are flexible, so tuition can fit around college, university, shifts and work.",
  },
  {
    title: "Flexible start and finish points",
    body: "Start at university and finish at home if that suits you. Locations are agreed in advance wherever it is practical.",
  },
  {
    title: "Safe, independent driving",
    body: "The aim is not only a pass. It is being able to drive skilfully and independently in real road and traffic conditions.",
  },
];

function Home() {
  const previewVideos = videos.filter((v) => ["GoizI8IUp-4", "msQKScG4z-8", "fvs0W2DH6fk"].includes(v.id));

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pt-12 pb-0 sm:px-8 md:grid-cols-12 md:pt-16">
          <div className="md:col-span-6 md:pb-20">
            <Eyebrow>Automatic tuition · Stoke-on-Trent &amp; Newcastle-under-Lyme</Eyebrow>
            <h1 className="mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl md:text-[4rem]">
              Learn to drive with confidence
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Professional, client-centred automatic driving lessons across Stoke-on-Trent and
              Newcastle-under-Lyme, taught by Jason — a fully qualified ADI with more than twenty
              years of teaching behind him.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/contact" arrow>
                Book / enquire about lessons
              </ActionLink>
              <ActionLink to="/lesson-prices" tone="outline">
                View lesson prices
              </ActionLink>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Prefer to talk?{" "}
              <a href={business.phoneHref} className="font-semibold text-primary hover:underline">
                Call or text {business.phone}
              </a>
            </p>
          </div>

          <div className="md:col-span-6 md:self-end">
            <div className="overflow-hidden rounded-t-2xl border border-b-0 border-border bg-card">
              <img
                src="/images/car-side.webp"
                alt="The Behind The Wheel automatic tuition car, a blue SEAT Arona, parked on a residential street in Stoke-on-Trent"
                width={1600}
                height={921}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-background">
          <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
            {trust.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 py-4 text-sm font-medium lg:justify-center"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Meet Jason */}
      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <img
              src="/images/car-front.webp"
              alt="Front view of the Behind The Wheel automatic driving school car"
              width={1201}
              height={1600}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Meet Jason</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              A driving instructor who spent his career teaching
            </h2>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-[1.75] text-ink-soft">
              <p>
                “Hi, I'm Jason. I'm a fully qualified Approved Driving Instructor and I set up Behind
                The Wheel because I'm passionate about teaching people to drive in a safe manner.”
              </p>
              <p>
                Before becoming an instructor, Jason was a science teacher in a secondary school for
                over twenty years — fourteen of them as Head of Department. That background means he
                is well aware that different people learn at different rates and in different ways,
                and that a good explanation is worth far more than a rushed one.
              </p>
            </div>
            <blockquote className="mt-7 border-l-4 border-amber bg-paper py-4 pl-5 font-display text-xl leading-snug">
              “We aim to ensure that you will understand what you are doing — and, most importantly,
              why.”
            </blockquote>
            <div className="mt-7">
              <ActionLink to="/about-jason" tone="outline" arrow>
                Meet your instructor
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Why learn here */}
      <Section tone="paper">
        <div className="max-w-2xl">
          <Eyebrow>Why learn with Behind The Wheel</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl">Six reasons learners choose Jason</h2>
        </div>
        <ol className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li key={r.title} className="border-t border-border-strong pt-5">
              <span className="rule-label text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Lessons + price */}
      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Driving lessons</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">Automatic lessons, one to one</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              All tuition is in an automatic car, so you can put your attention into road position,
              observation and decision making rather than clutch control. Every lesson starts with a
              two-way recap of your last drive and an agreed goal, so you always know what you are
              working on and why it makes you a safer driver.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { icon: IconClock, t: "One-hour or two-hour lessons" },
                { icon: IconRoute, t: "Flexible start and finish points" },
                { icon: IconWheel, t: "Automatic tuition car" },
                { icon: IconBook, t: "Feedback you can act on" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium">
                  <Icon className="h-5 w-5 shrink-0 text-go" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/driving-lessons" arrow>
                About the lessons
              </ActionLink>
              <ActionLink to="/lesson-prices" tone="outline">
                View lesson prices
              </ActionLink>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="panel overflow-hidden">
              <div className="lane-rule" aria-hidden="true" />
              <div className="p-7">
                <p className="rule-label text-muted-foreground">Automatic driving lesson</p>
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-6xl font-semibold text-primary">
                    {business.hourlyRate}
                  </span>
                  <span className="text-muted-foreground">per hour</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Book one hour or two hours at a time. Payment by cash, card or bank transfer.
                </p>
                <hr className="my-6 border-border" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  Jason doesn't compete with the cheapest lessons in Stoke-on-Trent. He competes on
                  quality and value — the price reflects the preparation that goes into every
                  lesson.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Semi-intensive */}
      <Section tone="ink">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="rule-label text-amber">Semi-intensive courses</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Need to prepare for a test?</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-foreground/80">
              Already have a practical test booked later in the year but no instructor? Ask Jason
              about a semi-intensive course — longer lessons over fewer weeks, focused on the drive
              you're preparing for. You must have passed your theory test and have a practical test
              already booked.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <ActionLink to="/semi-intensive-courses" tone="onDark" arrow>
              Ask about semi-intensive courses
            </ActionLink>
          </div>
        </div>
      </Section>

      {/* Theory support */}
      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow>Theory test support</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">The written half of learning to drive</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Learners who have signed up for lessons can be given access to Theory Test Pro to
              revise alongside their practical tuition — practice questions, hazard perception
              clips and the theory knowledge behind what you do on the road.
            </p>
            <div className="mt-7">
              <ActionLink to="/theory-test-support" tone="outline" arrow>
                Learn about theory support
              </ActionLink>
            </div>
          </div>
          <ul className="grid gap-3 md:col-span-6 md:grid-cols-2">
            {[
              "Theory knowledge",
              "Practice questions",
              "Hazard perception practice",
              "Preparing for the test",
            ].map((t) => (
              <li key={t} className="panel flex items-center gap-3 p-5 text-sm font-medium">
                <IconBook className="h-5 w-5 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">What local learners say</h2>
          </div>
          <div className="md:col-span-7">
            <p className="leading-relaxed text-ink-soft">
              Reviews for Behind The Wheel are published in the two places learners actually leave
              them: the school's Facebook page and Google. Rather than reprinting selected quotes
              here, we'd rather you read them at source, in full, and in the reviewer's own words.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink to="/reviews" arrow>
                Read more reviews
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Videos */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Driving videos</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">Roundabouts and test routes, talked through</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Jason films and narrates local junctions and Newcastle-under-Lyme test routes so you
              can see the decisions before you have to make them.
            </p>
          </div>
          <ActionLink to="/driving-videos" tone="outline" arrow>
            View driving videos
          </ActionLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {previewVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </Section>

      {/* Areas */}
      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Areas we cover</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Driving lessons across Stoke-on-Trent &amp; Newcastle-under-Lyme
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              Behind The Wheel Driving School can provide driving tuition in the ST3, ST4 and ST5
              postcode areas, plus some parts of ST2 and ST11.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              Not sure whether your postcode is covered? Get in touch and ask — if you live in
              another postcode area, there may still be something we can do.
            </p>
            <div className="mt-7">
              <ActionLink to="/areas-we-cover" arrow>
                Check your area
              </ActionLink>
            </div>
          </div>
          <div className="md:col-span-5">
            <ul className="flex flex-wrap gap-3">
              {business.areas.map((a) => (
                <li
                  key={a}
                  className="rounded-md border-2 border-primary bg-card px-5 py-3 font-display text-2xl font-semibold text-primary"
                >
                  {a}
                </li>
              ))}
              {business.partialAreas.map((a) => (
                <li
                  key={a}
                  className="rounded-md border border-dashed border-border-strong bg-card px-5 py-3 text-sm font-medium text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="ink">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-5xl">Ready to get behind the wheel?</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-foreground/80">
              Get in touch with Jason to discuss your lessons, the times that suit you and where
              you'd like to start learning.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center rounded-md bg-amber px-6 font-semibold text-amber-foreground hover:brightness-95"
            >
              Contact Jason
            </Link>
            <ActionLink href={business.phoneHref} tone="onDark">
              Call / text {business.phone}
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
