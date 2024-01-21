import imgCurrency from "./assets/images/image-currency.jpg";
import imgRestaurant from "./assets/images/image-restaurant.jpg";
import imgPlane from "./assets/images/image-plane.jpg";
import imgConfetti from "./assets/images/image-confetti.jpg";

type Article = {
  img: string;
  author: string;
  title: string;
  desc: string;
};

const articles: Article[] = [
  {
    img: imgCurrency,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single source?",
  },
  {
    img: imgRestaurant,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you have to buy our products!",
  },
  {
    img: imgPlane,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    desc: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you how to buy your products!",
  },
  {
    img: imgConfetti,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    desc: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site.",
  },
];

type Props = {
  img: string;
  author: string;
  title: string;
  desc: string;
};

function ArticleCard({ img, author, title, desc }: Props) {
  return (
    <div className="bg-white">
      <img src={img} alt="" className="h-52 w-full object-cover" />
      <div className="p-8">
        <p className="mb-2 text-grey-blue">By {author}</p>
        <p className="mb-4 text-xl font-bold leading-6">{title}</p>
        <p className="line-clamp-3 text-grey-blue">{desc}</p>
      </div>
    </div>
  );
}

export default function Articles() {
  return (
    <section className="bg-white-98 px-4 py-24 xs:px-10 lg:px-20" id="articles">
      <div className="wrapper">
        <h2 className="mb-14 text-4xl">Latest Articles</h2>
        <div
          id="article-cards"
          className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-x-8 gap-y-12"
        >
          {articles.map((a) => (
            <ArticleCard
              img={a.img}
              author={a.author}
              title={a.title}
              desc={a.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
