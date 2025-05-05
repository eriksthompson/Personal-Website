import Head from "next/head";
import Intro from "@/components/Intro";
import React from "react";

export default function Index() {
  return (
    <div style={{ overflowX: "hidden" }} className="min-h-[125vh]">
      <Head>
        <title>Erik Thompson</title>
        <link rel="icon" href="/Ohio-State-Logo-1987-2012.jpg" />
      </Head>
      <Intro />
    </div>
  );
}
