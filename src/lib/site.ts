/**
 * Single source of truth for business facts.
 * Every figure here comes from the existing btwdriving-school.co.uk website
 * or was supplied directly by the business. Nothing here is invented.
 */

export const business = {
  name: "Behind The Wheel Driving School",
  shortName: "Behind The Wheel",
  instructor: "Jason Rothwell",
  instructorFirstName: "Jason",
  qualification: "Fully Qualified Approved Driving Instructor (ADI)",
  phone: "07761 163520",
  phoneHref: "tel:+447761163520",
  email: "enquiries@btwdriving-school.co.uk",
  emailHref: "mailto:enquiries@btwdriving-school.co.uk",
  // Hourly rate for automatic tuition. Change this one value to update the site.
  hourlyRate: "£40",
  paymentMethods: ["Cash", "Card", "Bank transfer"],
  responseHours: "8.00am to 8.00pm, Monday to Sunday",
  areas: ["ST3", "ST4", "ST5"],
  partialAreas: ["Parts of ST2", "Parts of ST11"],
  towns: ["Stoke-on-Trent", "Newcastle-under-Lyme"],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/BehindTheWheelStokeonTrent" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UC5hldQlACWkoI7zU4czN1nw" },
  ],
  reviewLinks: {
    facebook: "https://www.facebook.com/BehindTheWheelStokeonTrent/reviews",
    google:
      "https://www.google.com/search?q=Behind+the+Wheel+Driving+School+Reviews",
  },
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Jason", to: "/about-jason" },
  { label: "Driving Lessons", to: "/driving-lessons" },
  { label: "Prices", to: "/lesson-prices" },
  { label: "Client-Centred Learning", to: "/client-centred-learning" },
  { label: "Areas We Cover", to: "/areas-we-cover" },
  { label: "Videos", to: "/driving-videos" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export type Video = {
  id: string;
  title: string;
  description: string;
  category: "roundabouts" | "test-routes";
};

/** Videos published on the school's own YouTube channel. */
export const videos: Video[] = [
  {
    id: "GoizI8IUp-4",
    title: "Basford Roundabout (MFI / Pure Gym Roundabout)",
    description:
      "A talk-through of lane choice, observations and positioning on one of Newcastle's busiest roundabouts.",
    category: "roundabouts",
  },
  {
    id: "fvs0W2DH6fk",
    title: "Porthill Roundabout — right turn, 4th exit onto the A500",
    description:
      "Approaching, positioning and committing to a fourth exit that joins a fast dual carriageway.",
    category: "roundabouts",
  },
  {
    id: "_IxxO33GAgI",
    title: "Hanford Roundabout — right turn, 3rd exit onto Newcastle Road",
    description:
      "Reading the road markings early and holding the correct lane all the way round.",
    category: "roundabouts",
  },
  {
    id: "1cS00ythONA",
    title: "Knutton Lane Roundabout — 1st exit left and Pool Dam ahead",
    description:
      "Two common routes from the same approach, with the observations needed for each.",
    category: "roundabouts",
  },
  {
    id: "7ni3e7__rew",
    title: "Barracks Road Roundabout — right, 4th exit from two approaches",
    description:
      "The same exit tackled from two different approach roads so you can compare the decisions.",
    category: "roundabouts",
  },
  {
    id: "msQKScG4z-8",
    title: "Test route through Penkhull and Stoke",
    description: "A full Newcastle-under-Lyme test route driven and talked through.",
    category: "test-routes",
  },
  {
    id: "mXaNHxSPpfA",
    title: "A34, Milehouse Lane, Knutton mini roundabouts, Silverdale crossroads",
    description:
      "Mini roundabouts and an unmarked crossroads on a frequently used test route.",
    category: "test-routes",
  },
  {
    id: "fJDLjU8lhB4",
    title: "Penkhull and Stoke route — alternative ending",
    description: "The same route with a different finish back towards the test centre.",
    category: "test-routes",
  },
  {
    id: "bjllsy14P18",
    title: "Westlands, Newcastle, Hartshill and Penkhull",
    description: "Residential streets, hill starts and busier main-road sections.",
    category: "test-routes",
  },
  {
    id: "s28qiDNr3qA",
    title: "The Bramptons, Basford and Westlands",
    description:
      "A real lesson where the learner takes the wrong exit at Basford — and how it is put right.",
    category: "test-routes",
  },
  {
    id: "hZZ7G3I9Hew",
    title: "The Bramptons, Marina Drive, Milehouse Lane and Knutton roundabouts",
    description: "A longer route linking several roundabouts commonly used on test.",
    category: "test-routes",
  },
  {
    id: "9R8BNpTOE8U",
    title: "Clayton and Westlands into Newcastle, King Street and The Avenue",
    description: "Town-centre traffic systems and busy junctions.",
    category: "test-routes",
  },
  {
    id: "u4hNp-33ivI",
    title: "Barracks Road, Milehouse Lane and Knutton mini roundabouts",
    description: "Lane discipline through a run of closely spaced roundabouts.",
    category: "test-routes",
  },
  {
    id: "MVxLJzSOmuI",
    title: "London Road, Stoke one-way system, A500 and Basford",
    description: "One-way systems and joining and leaving the A500.",
    category: "test-routes",
  },
];

export const faqs = [
  {
    q: "How much are driving lessons?",
    a: `Automatic driving lessons are ${business.hourlyRate} per hour. You can pay by cash, card or bank transfer.`,
  },
  {
    q: "Do you offer automatic driving lessons?",
    a: "Yes. All tuition with Behind The Wheel is in an automatic car.",
  },
  {
    q: "Where do you provide lessons?",
    a: "Tuition is available in ST3, ST4 and ST5, plus some parts of ST2 and ST11, covering Stoke-on-Trent and Newcastle-under-Lyme. If you live in another postcode area, get in touch and ask — there may still be something we can do.",
  },
  {
    q: "Do you offer two-hour lessons?",
    a: "Yes. You can book one-hour or two-hour lessons, whichever suits you and the stage you are at.",
  },
  {
    q: "Can lessons start and finish at different locations?",
    a: "Often, yes. You might want to start at university and finish at home, for example. Locations should be agreed at the time of booking; if you ask for a different meeting or finishing place later, the lesson may be shortened to cover the extra travelling time.",
  },
  {
    q: "What times are lessons available?",
    a: "Lessons are available from early morning to late evening. Calls and messages are answered between 8.00am and 8.00pm, Monday to Sunday.",
  },
  {
    q: "Do you offer semi-intensive courses?",
    a: "Yes — longer lessons over fewer weeks. You must already have passed your theory test and have a practical test booked. Message Jason to check availability.",
  },
  {
    q: "Can I get help preparing for my theory test?",
    a: "Learners who have signed up for lessons can be given access to Theory Test Pro for practice questions, hazard perception and revision.",
  },
  {
    q: "Do I need to be a complete beginner?",
    a: "No. Complete beginners are very welcome, and so are people returning to driving after a break, learners moving from another instructor, and those preparing for a test that is already booked. Lessons start from where you actually are.",
  },
  {
    q: "How do I get started?",
    a: "Apply for your provisional driving licence first. You may then be asked to create a licence check code on GOV.UK and share it, along with the last eight digits of your licence number, before your first lesson.",
  },
] as const;
