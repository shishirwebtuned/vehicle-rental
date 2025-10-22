import { paddingX } from "@/constant/constant";
import { footerData } from "@/data/data";

const Footer = () => {
    return (
        <footer
            className={`bg-[#103951] text-gray-80 ${paddingX}`}
        >
            <div className="lg:py-10 md:py-8 py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-6 lg:gap-10">
                <div className="sm:text-left text-center">
                    <h3 className="lg:text-xl md:text-lg text-base font-merriweather text-white font-bold sm:mb-3 mb-2 md:mb-4">{footerData.about.title}</h3>
                    <p className="md:text-sm text-xs lg:text-base text-white font-nunito font-semibold sm:mb-3 mb-2 md:mb-4">
                        {footerData.about.description}
                    </p>
                    <div className="flex space-x-4 text-white lg:text-2xl md:text-xl text-lg sm:justify-start justify-center">
                        {footerData.about.socials.map((social, index) => (
                            <a
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={social.link}
                                className="hover:text-sky-800 transition"
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="lg:text-xl md:text-lg text-base font-merriweather text-white font-bold sm:mb-3 mb-1">{footerData.quickLinks.title}</h3>
                    <ul className="md:space-y-[6px] sm:space-y-[2px] space-y-[1px]">
                        {footerData.quickLinks.links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="md:text-sm text-xs lg:text-base text-white font-nunito font-semibold hover:text-primary transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="lg:text-xl md:text-lg text-base font-merriweather text-white font-bold sm:mb-3 mb-1">{footerData.explore.title}</h3>
                    <ul className="md:space-y-[6px] sm:space-y-[2px] space-y-[1px]">
                        {footerData.explore.links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="md:text-sm text-xs lg:text-base text-white font-nunito font-semibold hover:text-primary transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center md:items-end flex-col">
                    <h3 className="lg:text-xl md:text-lg text-base font-merriweather text-white font-bold sm:mb-3 mb-2 md:mb-4">{footerData.contact.title}</h3>
                    <ul className="lg:space-y-3 md:space-y-2 space-y-[6px]">
                        {footerData.contact.details.map((item, index) => (
                            <li key={index} className="flex items-start justify-center md:justify-end space-x-2 md:text-sm text-xs font-semibold lg:text-base text-white font-nunito ">
                                <span className="text-sky-600 lg:text-lg md:text-base text-sm"><item.icon /></span>
                                <a
                                    href={item.link}
                                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {item.text}
                                </a>                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t text-white border-gray-200 md:py-4 py-3 text-center md:text-sm text-xs lg:text-base font-nunito flex flex-col gap-2">
                <div className="flex flex-wrap flex-row items-center sm:justify-between gap-2 justify-center">
                    <p className="font-semibold">
                        © 2025 Grateful Tours & Transportation Pvt. Ltd || All Rights Reserved.
                    </p>
                    <a
                        href="/terms-and-conditions"
                        className="text-primary font-semibold hover:underline"
                    >
                        Terms & Conditions
                    </a>
                </div>
                <p>
                    <span>Developed By </span>
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://webtunedstudio.com.np"
                        className="font-semibold text-primary hover:underline"
                    >
                        Web Tuned Studio
                    </a>
                </p>

            </div>
        </footer>
    );
}

export default Footer;