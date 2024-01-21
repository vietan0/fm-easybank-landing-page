import CTAButton from "./CTAButton";
import mockups from "./assets/images/image-mockups.png";

export default function Hero() {
  return (
    <>
      <section
        className="bg-white-98 bg-bg-mobile bg-contain bg-[left_top_-160px] bg-no-repeat px-4 pb-8 pt-[calc(100vw_-_200px)] xs:px-10 sm:bg-bg-desktop sm:bg-[length:1000px] sm:bg-[calc(50%_+_500px)] sm:pt-0 lg:px-20"
        id="hero"
      >
        <div className="wrapper flex h-96 justify-center sm:h-[500px] sm:justify-normal">
          <div
            id="text"
            className="flex flex-col gap-3 self-center text-center xs:gap-6 sm:max-w-[400px] sm:text-left"
          >
            <p className="text-4xl sm:text-5xl sm:leading-[1.2]">
              Next generation digital banking
            </p>
            <p className="text-grey-blue">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <CTAButton className="self-center sm:self-start">
              Request Invite
            </CTAButton>
          </div>
        </div>
      </section>
      <img
        src={mockups}
        alt=""
        className="absolute -top-48 left-1/2 w-4/5 -translate-x-1/2 sm:-top-20 sm:left-[calc(50%_+_100px)] sm:w-[600px] sm:translate-x-0"
        // outside of Hero to not get cut off on the bottom
        // but still inside Main to get cut off on the top
      />
    </>
  );
}
