// import {
//     GitHubLogoIcon,
//     InstagramLogoIcon,
//     LinkedInLogoIcon,
// } from "@radix-ui/react-icons";
// import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { MailIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { button } from "@/components/ui/button";

const Footer = () => {
    return (
        <div
            id="contact"
            className="w-full h-full bg-primary bg-[#0b72ff] text-slate-200 p-4 md:px-16 md:pt-16 lg:"
        >
            <div className="lg:flex w-full justify-between">
                <div className="mb-8 flex flex-col gap-8">
                    <h1 className="font-semibold text-2xl">
                        <span className="">Deed</span>Indeed
                    </h1>
                    <div className="flex items-center gap-1">
                        <MapPin
                            width={20}
                            height={20}
                            className="hover:text-secondary transition-all duration-300"
                        />
                        <p className=" text-sm">
                            903, Ten Square, Jiva Mahalaya Marg, Andheri East,
                            Mumbai - 400069
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-2">
                    <div className="">
                        <h1 className="font-semibold mb-2">Contact Us</h1>
                        <div className="flex flex-col md:flex-row gap-4 text-sm">
                            <Link
                                target="_blank"
                                href={"mailto:vaibhav@flookup.com"}
                                className="flex items-center gap-2"
                            >
                                <MailIcon
                                    width={20}
                                    height={20}
                                    className="hover:text-secondary transition-all duration-300"
                                />
                                <p className="font-medium">
                                    vaibhav@flookup.com
                                </p>
                            </Link>
                            <Link
                                target="_blank"
                                href={"mailto:ankit@flookup.com"}
                                className="flex items-center gap-2"
                            >
                                <MailIcon
                                    width={20}
                                    height={20}
                                    className="hover:text-secondary transition-all duration-300"
                                />
                                <p className="font-medium">ankit@flookup.com</p>
                            </Link>
                            <Link
                                target="_blank"
                                href={"tel:+917059010203"}
                                className="flex items-center gap-2"
                            >
                                <Phone
                                    width={20}
                                    height={20}
                                    className="hover:text-secondary transition-all duration-300"
                                />
                                <p className="font-medium">+91 7059010203</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 flex flex-col lg:flex-row lg:gap-4 items-center mt-2 border-t border-slate-50/20">
                <p className="text-xs py-2 lg:mt-[1px]">
                    Copyright &copy; {new Date().getFullYear()} deedindeed
                </p>
            </div>
        </div>
    );
};

export default Footer;
