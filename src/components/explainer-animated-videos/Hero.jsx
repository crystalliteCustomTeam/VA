"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "media/explainer-animated-videos/right-arrow.svg";
import space from "media/explainer-animated-videos/space.webp";
import spaceback from "media/explainer-animated-videos/space-back.webp";
import CTA from "./CTA";

export const Hero = ({
  title = "Let's explore the <br />Art of STORYTELLING",
  desc = 'Get the best <span class="tw-font-semibold">2D, 3D video animation service </span> for your <span class="font-semibold">custom animated video</span>  production by professional video animation company.',
}) => {
  //========== Form
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("Claim");
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  //========== Fetch IP data from the API
  const getIPData = async () => {
    try {
      const res = await Axios.get("https://ipwho.is/");
      setIP(res.data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };
  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const router = usePathname();
  const currentRoute = router;

  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formValidateHandle = () => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required";
    }
    const phoneRegex = /^[0-9]+$/;
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone number is required";
    }
    return errors;
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Processing...");
    setIsDisabled(true);

    const errors = formValidateHandle();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const currentdate = new Date().toLocaleString();
      const dataToSend = {
        ...data,
        pageUrl: pagenewurl,
        IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
        currentdate: currentdate,
      };
      const JSONdata = JSON.stringify(dataToSend);

      try {
        //========== First API call to your server
        await fetch("/api/email/", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSONdata,
        });

        //========== Second API call to SheetDB
        let headersList = {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json",
        };
        let bodyContent = JSON.stringify({
          IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
          Brand: "Explainer Videos LLC",
          Page: `${currentRoute}`,
          Date: currentdate,
          Time: currentdate,
          JSON: JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        });

        setFormStatus("Success...");
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2000);
      } catch (error) {
        console.error("Error during form submission:", error);
        setFormStatus("Failed...");
        setIsDisabled(false);
      }
    } else {
      setFormStatus("Failed...");
      setIsDisabled(false);
    }
  };

  return (
    <section>
      <div className="xl:tw-pt-[150px] tw-pt-[200px] xl:tw-pb-[200px] tw-pb-[50px] tw-relative ">
        <div className="tw-container">
          <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-gap-10 tw-font-rubik  tw-items-center">
            <div className="tw-basis-6/12">
              <h1
                className="xl:tw-text-[45px] lg:tw-text-[38px] md:tw-text-[28px] tw-text-[26px] tw-font-semibold tw-uppercase  tw-leading-tight tw-tracking-wider"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="xl:tw-text-[20px] tw-text-white md:tw-text-[14px] tw-text-[14px] tw-leading-normal tw-font-light xl:tw-w-[90%] tw-w-full tw-mt-2 tw-mb-8 tw-tracking-wider"
                dangerouslySetInnerHTML={{ __html: desc }}
              />

              <div className="tw-flex md:tw-flex-row tw-flex-col md:tw-items-center tw-items-start tw-justify-start tw-gap-5 tw-mb-5 md:tw-w-max">
                <CTA icon={true} text="Live Chat" css="tw-bg-gradient-custom" />
                <CTA icon={true} css="hover:!tw-bg-gradient-custom" />
              </div>

              {[
                "Animated Explainer Video Production",
                "Educational & Training Animated Videos",
                "Marketing Animated Video Production",
                "Whiteboard Explainer Video Production",
                "Product Demo Animated Videos",
                "Promotional Animated Videos",
              ].map((text, i) => (
                <ul
                  key={i}
                  className="tw-list-disc tw-pl-3 tw-tracking-wider tw-font-rubik"
                >
                  <li className="tw-mb-[3px]">
                    <h4 className="xl:tw-text-[20px] lg:tw-text-[18px] md:tw-text-[14px] tw-text-[14px] tw-leading-tight tw-font-semibold">
                      {text}
                    </h4>
                  </li>
                </ul>
              ))}
            </div>
            <div className="tw-basis-6/12">
              <form action="javascript:;" method="post">
                <div className="tw-text-white tw-bg-[#0009] xl:tw-p-10 tw-p-7 xl:tw-w-[70%] tw-w-full tw-float-right tw-rounded-[25px] tw-shadow-md tw-border-solid tw-border-2 tw-border-[#d605a4] tw-relative">
                  <h3 className="tw-text-white xl:tw-text-[30px] md:tw-text-[20px] tw-text-[28px] tw-font-semibold tw-font-rubik">
                    We are here to help!
                  </h3>
                  <p className="tw-text-white xl:tw-text-[20px] md:tw-text-[15px] tw-text-[16px] tw-pt-[10px] tw-pb-[20px] tw-font-medium">
                    Sign up Now To Avail <strong className="blink">70%</strong>{" "}
                    Discount
                  </p>
                  <div className="name tw-relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      className="tw-bg-[rgba(255,255,255,0.03)] tw-border-solid tw-border-[1px] tw-rounded-full tw-w-full xl:tw-p-4 tw-p-2 tw-mb-5"
                      onChange={handleDataChange}
                      required
                    />
                    {errors.name && (
                      <span className="tw-text-[10px] tw-block tw-p-2 tw-font-semibold poppins tw-text-black tw-absolute tw-left-0 tw-bottom-[-60%] tw-z-50">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="email tw-relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="tw-bg-[rgba(255,255,255,0.03)] tw-border-solid tw-border-[1px] tw-rounded-full tw-w-full xl:tw-p-4 tw-p-2 tw-mb-5"
                      onChange={handleDataChange}
                      required
                    />
                    {errors.email && (
                      <span className="tw-text-[10px] tw-block tw-p-2 tw-font-semibold poppins tw-text-black tw-absolute tw-left-0 tw-bottom-[-60%] tw-z-50">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="phone tw-relative">
                    <input
                      placeholder="Phone*"
                      type="tel"
                      name="phone"
                      minLength="10"
                      maxLength="13"
                      pattern="[0-9]*"
                      onChange={handleDataChange}
                      className="tw-bg-[rgba(255,255,255,0.03)] tw-border-solid tw-border-[1px] tw-rounded-full tw-w-full xl:tw-p-4 tw-p-2 tw-mb-5"
                      required
                    />
                    {errors.phone && (
                      <span className="tw-text-[10px] tw-block tw-p-2 tw-font-semibold poppins tw-text-black tw-absolute tw-left-0 tw-bottom-[-60%] tw-z-50">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <textarea
                    type="text"
                    name="message"
                    placeholder="Project Description"
                    className="tw-bg-[rgba(255,255,255,0.03)] tw-border-solid tw-border-[1px] tw-rounded-3xl tw-w-full xl:tw-p-4 tw-p-2 tw-mb-5 tw-h-[100px]"
                  />
                  <button
                    type="submit"
                    className="tw-bg-gradient-custom tw-uppercase xl:tw-py-[18px] tw-py-[10px] xl:tw-px-[28px] tw-px-[20px] tw-rounded-full xl:tw-text-[15px] tw-text-[12px] tw-leading-tight tw-font-semibold tw-border-solid tw-border-[2px] tw-border-[#d605a4] tw-mb-5"
                  >
                    submit
                  </button>
                  <span onClick={handleFormSubmit} disabled={isDisabled}></span>
                  <p className="xl:tw-text-[14px] tw-text-[11px] tw-leading-tight ">
                    Any Confusion?{" "}
                    <Link
                      href=""
                      className="xl:tw-text-[15px] tw-text-[12px] tw-text-[#e195cf]"
                    >
                      Why not discuss your idea?
                    </Link>
                  </p>
                </div>

                <Image
                  src={space}
                  alt=""
                  className="banner-animated tw-absolute tw-left-0 tw-bottom-0 md:-tw-right-[12%] md:tw-block tw-hidden  tw-h-max tw-mx-auto -tw-z-10"
                />
                <Image
                  src={spaceback}
                  alt=""
                  className="taadaa tw-absolute tw-left-0 -tw-bottom-10 md:-tw-right-[9%] md:tw-block tw-hidden tw-h-max tw-mx-auto -tw-z-10"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
