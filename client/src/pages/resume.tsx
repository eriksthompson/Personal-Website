import Head from "next/head";
import React from "react";

export default function Resume() {
  return (
    <div className="text-black h-screen">
      <Head>
        <title>Erik Thompson</title>
        <link rel="icon" href="/Ohio-State-Logo-1987-2012.jpg" />
      </Head>
      <div className="flex justify-center items-center h-full">
        <embed
          src="/ComputerScienceRole2.pdf"
          type="application/pdf"
          width="80%"
          height="90%"
          className="w-full mt-20"
        />
      </div>
    </div>
  );
}
