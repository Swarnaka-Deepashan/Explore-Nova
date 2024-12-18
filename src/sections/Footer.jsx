import { footer } from "../constants";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";
import { sms } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-row-reverse flex-wrap items-start justify-between gap-20 max-lg:flex-col">

        <div className="flex-col">

        <div className="flex flex-col items-start gap-4">
          <p className="text-white text-xl font-semibold">News Letter</p>
          <p className="text-base leading-7 text-slate-gray sm:max-w-sm">
            {footer.newsLetter}
          </p>
        </div>

        <div className="flex flex-col items-end  mt-6 mr-4">
          <div>
            <div className="w-full flex items-center  gap-5 px-2.5 py-2 border border-slate-gray rounded-full">
              <div className="flex items-center gap-4">
                <img src={sms} alt="" className="w-4 h-4" />
                <p className="text-slate-gray max-sm:text-[10px]">Enter Your Email</p>
              </div>
              <div className="flex items-center max-sm:justify-end max-sm:w-full">
                <button className="px-8 py-2 bg-slate-gray text-white rounded-3xl hover:bg-gray-800 transition duration-300">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-6 pr-4">
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        </div>
        

        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-base leading-normal cursor-pointer text-slate-gray hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex  mt-24 items-center justify-center flex-1 gap-2 cursor-pointer ">
        <img
          src={copyrightSign}
          alt="copyright sogn"
          width={20}
          height={20}
          className="m-0 rounded-full"
        />
        <p className="text-slate-gray">Copyright. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
