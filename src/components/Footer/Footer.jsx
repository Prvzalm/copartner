import React from "react";
import { logo, linkedin, instagram } from "../../assets";
import { Link } from "react-router-dom";

const ProductList = [
  { name: "About Us", link: "/about-us" },
  { name: "FAQ's", link: "/faq" },
  { name: "Features", link: "/" },
  { name: "Blog", link: "/blogs" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of Service", link: "/terms-of-services" },
];

const CommunityList = [
  { name: "Subscription", link: "experts-explore" },
  // { name: "Courses", link: "/courses" },
  { name: "Experts", link: "experts-explore" },
  // { name: "Webinar", link: "/webinar" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-section w-full md:h-[260px] h-[506px] md:pt-[6rem] pt-[1rem] mt-[1rem] justify-around border-t border-solid border-white border-opacity-10 flex md:flex-row flex-col items-center">
      <div className="flex flex-col gap-[1rem]">
        <img src={logo} alt="" className="md:w-56 w-40" />
        <span className=" font-normal md:text-[16px] text-[14px] text-dimWhite">
          HAILGRO TECH SOLUTIONS PRIVATE LIMITED
        </span>
        <span className="md:w-[296px] w-[296px] md:h-[80px] h-[66px] font-normal md:text-[16px] text-[14px] md:leading-[28px] leading-[22px] text-dimWhite">
          Our partnerships have delivered great value to our projects and we're
          happy to share some of their feedback below
        </span>
        <div className="flex gap-4 rounded-full">
          <a
            href="https://www.linkedin.com/company/copartnerindia/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkeDin" className="w-8" />
          </a>
          <a
            href="https://www.instagram.com/copartner.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram" className="w-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-[4rem]">
        <div className="flex flex-col justify-around w-full h-[220px]">
          <span className="w-[48px] h-[15px] font-medium text-[12.6px] leading-[14.7px] mb-4 text-white">
            Product
          </span>
          {ProductList.map((product) => (
            <Link
              onClick={scrollToTop}
              to={product.link} // Update href to the link of the AboutUs page ("/about")
              key={product.link}
              className="font-normal text-[0.9rem] text-left leading-[14.7px] text-dimWhite hover:text-white"
            >
              {product.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between w-[117px] h-[90px] mt-[5px]">
          <span className="w-[89px] h-[15px] font-medium text-[12.6px] leading-[14.7px] mb-4 text-white">
            What We Offer
          </span>
          {CommunityList.map((community) => (
            <Link
              onClick={scrollToTop}
              to={community.link}
              key={community.link}
              className="font-normal text-[0.9rem] leading-[14.7px] text-dimWhite text-left hover:text-white"
            >
              {community.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
