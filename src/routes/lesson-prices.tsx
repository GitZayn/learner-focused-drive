import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Section } from "../components/ui-kit";
import { business } from "../lib/site";

const title = "Lesson Prices & Terms | Behind The Wheel Driving School";
const description =
  "Automatic driving lessons at £40 per hour in Stoke-on-Trent and Newcastle-under-Lyme. Pay by cash, card or bank transfer. Full terms and conditions.";

export const Route = createFileRoute("/lesson-prices")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/lesson-prices" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/lesson-prices" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Automatic driving lesson",
          provider: { "@type": "DrivingSchool", name: business.name },
          areaServed: "Stoke-on-Trent and Newcastle-under-Lyme",
          offers: {
            "@type": "Offer",
            price: "40",
            priceCurrency: "GBP",
            description: "One hour automatic driving lesson",
          },
        }),
      },
    ],
  }),
  component: LessonPrices,
});

function LessonPrices() {
  return (
    <>
      <PageHero
        eyebrow="Prices &amp; terms"
        title="Lesson prices"
        intro="Straightforward hourly pricing with no packages to decode. Payment can be made by cash, card or bank transfer."
        crumbs={[{ label: "Lesson Prices" }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="panel overflow-hidden">
              <div className="lane-rule" aria-hidden="true" />
              <div className="p-8">
                <p className="rule-label text-muted-foreground">Automatic driving lesson</p>
                <p className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-7xl leading-none font-semibold text-primary">
                    {business.hourlyRate}
                  </span>
                  <span className="text-lg text-muted-foreground">per hour</span>
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "One-hour or two-hour lessons",
                    "One-to-one tuition",
                    "Early morning to late evening",
                    "Flexible start and finish points",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-4 shrink-0 rounded-full bg-go" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionLink to="/contact" arrow>
                    Enquire about lessons
                  </ActionLink>
                  <ActionLink href={business.phoneHref} tone="outline">
                    Call / text {business.phone}
                  </ActionLink>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-6 md:col-span-5">
            <div className="panel p-6">
              <h2 className="text-xl">Payment methods</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {business.paymentMethods.map((m) => (
                  <li
                    key={m}
                    className="rounded-md border border-border-strong px-4 py-2 text-sm font-medium"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-6">
              <h2 className="text-xl">Semi-intensive courses</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Longer lessons over fewer weeks for learners who have already passed their theory
                test and have a practical test booked. Pricing and arrangements are discussed
                directly with Jason, as they depend on how much time you have and how much driving
                you need.
              </p>
              <div className="mt-5">
                <ActionLink to="/semi-intensive-courses" tone="outline" arrow>
                  Ask about semi-intensive lessons
                </ActionLink>
              </div>
            </div>
            <div className="panel p-6">
              <h2 className="text-xl">Quality over cheapest</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Jason takes pride in his lessons and does not attempt to compete with the cheap
                driving lessons in Stoke-on-Trent. The price reflects the level of dedication,
                preparation and commitment behind each hour.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl">Getting started</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Two short admin steps before your first lesson.
            </p>
          </div>
          <ol className="grid gap-6 md:col-span-7">
            <li className="panel p-6">
              <span className="rule-label text-amber">Step one</span>
              <h3 className="mt-2 text-xl">Apply for your provisional licence</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                You cannot drive on the road until you hold a provisional driving licence.
              </p>
              <a
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                href="https://www.gov.uk/apply-first-provisional-driving-licence"
                target="_blank"
                rel="noreferrer noopener"
              >
                Apply for a first provisional driving licence on GOV.UK
              </a>
            </li>
            <li className="panel p-6">
              <span className="rule-label text-amber">Step two</span>
              <h3 className="mt-2 text-xl">Create a licence check code</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Once you have your licence you may be asked to create a check code on the GOV.UK
                website. Give the code to your instructor along with the last eight digits of your
                licence number, so he can confirm you have no points and are not banned from
                driving.
              </p>
              <a
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                href="https://www.gov.uk/view-driving-licence"
                target="_blank"
                rel="noreferrer noopener"
              >
                Create a check code on GOV.UK
              </a>
            </li>
          </ol>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">Terms and conditions</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            These are the terms that apply to lessons and tests with Behind The Wheel Driving
            School.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            {
              h: "Lesson cancellations",
              b: "Lessons cancelled at short notice or missed for whatever reason (24 hours before the lesson start time) will require payment in full. Frequent changes to pre-arranged times could lead to a refusal to book future lessons. It is your responsibility to check the times and dates of your lessons.",
            },
            {
              h: "Pick up and finish location",
              b: "You should agree where lessons start and finish at the time of booking where possible. If you request a different meeting or finishing place, your lesson may be shortened to cover any additional travelling time, to avoid disrupting other lessons or tests.",
            },
            {
              h: "Practical test",
              b: "Consult and agree dates and times with your instructor before booking any practical test. Hire of the driving school car for use during the practical test will be charged at the normal lesson rate. Your driving instructor reserves the right to withhold the use of the driving school car for a practical test if, in their opinion, the chances of passing are unrealistic or the pupil seems unfit to drive.",
            },
            {
              h: "Practical test cancellation",
              b: "In the event of the driving school car being unavailable on the day of the practical test because of illness to your driving instructor, or mechanical failure, test fees incurred by you will be refunded in full. In the event of the practical test being cancelled by the Driver and Vehicle Standards Agency, it is normal practice for the test fee to be refunded by them; however, lessons booked on the day will be subject to the 48 hour late notice cancellation and will require payment. Some of these fees can normally be claimed back from the DVSA.",
            },
            {
              h: "Complaints procedure",
              b: "Please inform us of any complaint you may have and we will endeavour to address the situation. In the event that you are not satisfied, you may then make reference to the Registrar of Approved Driving Instructors, who will consider the matter and advise accordingly.",
            },
          ].map((t) => (
            <article key={t.h} className="panel p-6">
              <h3 className="text-xl">{t.h}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.b}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
