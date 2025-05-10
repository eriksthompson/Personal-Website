import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function unityPirate() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Head>
        <title>Unity Pirate Ship Target Practice | Erik Thompson</title>
        <link rel="icon" href="/Ohio-State-Logo-1987-2012.jpg" />
        <meta
          name="description"
          content="3rd person control of a pirate ship with targets to shoot cannon at."
        />
      </Head>

    
      <div className="description-section bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Pirate Ship Target Practice Game
          </h1>
          <p className="text-lg mb-4">
            Custom game made with C# and Unity in Game Animation class project. (Professor Naeem Shareef)
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li> Space bar to shoot a straight line arc cannon ball.</li>
                <li>Red targets floating and spinning </li>
                <li>Score counter keeps track of how many targets hit.</li>
                <li>WASD to move and rotate</li>
                <li>Blue ocean waves to move ship on.</li>
                <li>Auto respawn if moved outside of map. R to respawn in center.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>C# Unity scripts power the gameplay. </li>
                <li>
                3D Ray Casting to check if target is in range of cannon.
                </li>
                <li>Camera lock on Unity pirate ship object made up of colored shapes.</li>
                <li>
                  Classes and objects.
                </li>
                <li>Script adding to Z rotation of target to make it spin.</li>
                <li>Sin and cosine X and Y height functions power live wave movement in the ocean.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-grow w-full p-4 pt-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/PirateShipMap.PNG"
                alt="Gameplay of Pirate game."
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>

            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/PirateShipMap2.PNG"
                alt="Full map view."
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>
          </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative w-full mb-8" style={{ height: "500px" }}>
            <Image
              src="/PirateCode.PNG"
              alt="Function behind the scenes."
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-md"
            />
          </div>
          <div className="relative w-full mb-8" style={{ height: "500px" }}>
            <Image
              src="/PirateCode2.PNG"
              alt="Ray casting with fire function"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-md"
            />
          </div>
        </div>
    </main>  
       
    </div>
  );
}
