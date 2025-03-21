"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-center text-surface/75 bg-black text-white/75 lg:text-left overflow-hidden border-t-2 border-neutral-400">
      <div className="mx-10 md:mx-24 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <a
              href="/"
              className="flex justify-center items-center md:justify-start md:items-start"
            >
              <Image
                src="/images/getfund-logo.png"
                alt="getfunds-logo"
                height={238}
                width={153}
                className="ml-0 mb-3" // Add this class for left alignment
              />
            </a>
            <p className="hidden md:block">
              Get Funds is a specialist consulting firm partnered with best in
              class funders to offer a range of funding options. We use our
              economies of scale to get you the best pricing, terms and service
              for your business.
            </p>
          </div>

          <div>
            <h3 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h3>
            <p className="mb-4 ">
              <a
                className="cursor-pointer"
                href="https://apply.getfunds.co.za/?broker=getfunds"
              >
                Apply
              </a>
            </p>
            <p className="mb-4">
              <a href="/faqs">FAQ&apos;s</a>
            </p>
            <p className="mb-4">
              <a href="/services">Funding</a>
            </p>
            <p className=" uppercase">line open MON - FRI 08:00 - 17:00</p>
            <p className="mb-4">
              <a href="tel:0658676087" className="text-[#07d159] uppercase">
                Call: 065 867 6087
              </a>
              <br />
              <a
                href="mailto:info@getfunds.co.za"
                className="text-[#07d159] uppercase"
              >
                info@getfunds.co.za
              </a>
            </p>
          </div>
          <div>
            <h3 className="mb-4 ">Branches</h3>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <p className="">
                3 Riley Rd, Bedfordview, 2008,
                <br />
                <span className="text-[#07d159] font-semibold">
                  Johannesburg
                </span>
              </p>
            </div>

            <div className="mb-4 flex flex-row items-center justify-center md:justify-start">
              <p className="">
                The Estuaries, Oxbow Crescent, Century City, 1st Floor,{" "}
                <span className="text-[#07d159] font-semibold">Cape town</span>
              </p>
            </div>

            <div className="mb-4 flex items-center justify-center md:justify-start">
              <p>
                25 Sandra road, 18 Ballito Business centre, Ballito,{" "}
                <span className="text-[#07d159] font-semibold">KZN</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 ">
        <div className="flex justify-center items-center">
          <div>
            <span>© 2024 Copyright: All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
