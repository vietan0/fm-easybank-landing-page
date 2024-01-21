import iconOnline from "./assets/images/icon-online.svg";
import iconBudgeting from "./assets/images/icon-budgeting.svg";
import iconOnboarding from "./assets/images/icon-onboarding.svg";
import iconApi from "./assets/images/icon-api.svg";

type Feature = {
  img: string;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    img: iconOnline,
    title: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    img: iconBudgeting,
    title: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    img: iconOnboarding,
    title: "Fast Onboarding",
    desc: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    img: iconApi,
    title: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
type Props = {
  img: string;
  title: string;
  desc: string;
};

function FeatureCard({ img, title, desc }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
      <img src={img} alt="" className="mb-5 max-w-20" />
      <p className="text-2xl">{title}</p>
      <p className="text-grey-blue">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="bg-grey-blue-light px-4 py-24 xs:px-10 lg:px-20"
    >
      <div className="wrapper">
        <div id="why" className="mb-20 text-center sm:text-left">
          <h2 className="mb-6 text-4xl">Why choose Easybank?</h2>
          <p className="text-grey-blue">
            <span>
              We leverage Open Banking to turn your bank account into your
              financial hub.
            </span>
            <br />
            <span>Control your finances like never before.</span>
          </p>
        </div>
        <div
          id="feature-cards"
          className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-x-8 gap-y-12"
        >
          {features.map((f) => (
            <FeatureCard
              img={f.img}
              title={f.title}
              desc={f.desc}
              key={f.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
