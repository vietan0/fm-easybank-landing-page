import logoWhite from "./assets/images/logo-white.svg";
import facebook from "./assets/images/icon-facebook.svg";
import youtube from "./assets/images/icon-youtube.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";
import CTAButton from "./CTAButton";

const navs = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="bg-dark-blue px-4 py-12 text-white xs:px-10 lg:px-20">
      <div className="wrapper flex flex-col items-center gap-4 xs:flex-row xs:items-end sm:justify-between">
        <div
          id="left"
          className="flex flex-grow flex-col items-center gap-x-6 gap-y-10 self-stretch xs:items-stretch sm:flex-row sm:self-auto md:gap-16"
        >
          <div className="flex flex-col items-center xs:items-start">
            <img src={logoWhite} alt="" />
            <div className="mt-10 flex gap-4" id="socials">
              <img src={facebook} alt="" />
              <img src={youtube} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <ul className="flex max-w-96 flex-grow flex-col items-center gap-y-4 xs:max-h-28 xs:flex-wrap xs:items-start">
            {navs.map((text) => (
              <li key={text}>
                <a href="#">{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div id="right" className="text-center xs:text-right">
          <CTAButton>Request Invite</CTAButton>
          <p className="mt-6 text-grey-blue">
            © Easybank. All Rights Reserved
          </p>
          <div className="text-sm" id="attribution">
            Challenge by{" "}
            <a
              target="_blank"
              href="https://www.frontendmentor.io?ref=challenge"
              className="underline"
            >
              Frontend Mentor
            </a>
            .
            <br />
            Coded by{" "}
            <a
              target="_blank"
              href="https://github.com/vietan0"
              className="underline"
            >
              Việt An
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
