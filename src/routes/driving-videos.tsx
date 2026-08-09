import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, Section } from "../components/ui-kit";
import { VideoCard } from "../components/VideoCard";
import { videos } from "../lib/site";

const title = "Newcastle Test Route & Roundabout Videos | Behind The Wheel";
const description =
  "Free narrated videos of Newcastle-under-Lyme driving test routes and local roundabouts, filmed and talked through by instructor Jason.";

export const Route = createFileRoute("/driving-videos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/driving-videos" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/driving-videos" }],
  }),
  component: Videos,
});

function Videos() {
  const roundabouts = videos.filter((v) => v.category === "roundabouts");
  const routes = videos.filter((v) => v.category === "test-routes");

  return (
    <>
      <PageHero
        eyebrow="Driving videos"
        title="Test routes & roundabouts, talked through"
        intro="Jason films and narrates local routes and junctions so you can see what is coming before you drive it. Free to watch, whether or not you take lessons."
        crumbs={[{ label: "Driving Videos" }]}
      />

      <Section>
        <h2 className="text-3xl sm:text-4xl">Roundabouts &amp; junctions</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roundabouts.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="text-3xl sm:text-4xl">Newcastle-under-Lyme test routes</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
        <div className="mt-12">
          <ActionLink to="/contact" arrow>
            Book a lesson on these roads
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
