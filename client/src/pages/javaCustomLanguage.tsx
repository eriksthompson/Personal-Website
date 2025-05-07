import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function javaCustomLanguage() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Head>
        <title>Java Custom Language | Erik Thompson</title>
        <link rel="icon" href="/Ohio-State-Logo-1987-2012.jpg" />
        <meta
          name="description"
          content="Different Language with custom data types, keywords and operations than standard Java or C."
        />
      </Head>

      <div className="description-section bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Custom Language made with Java
          </h1>
          <p className="text-lg mb-4">
            With the help of Professor's debugging/execution scripts I made a custom language that runs based on java. 
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li> parse, print, and check semantics method for the symbol production</li>
                <li>Stmt class has parse and execute method for the Stmt production. 
                  It has six cases to check for in the grammar.
                  It stores a Assign, If, Loop, Out, Decl, and Call instance field for parse tree. </li>
                <li>Custom Parser and Executor</li>
                <li>Made in Java in contrast to C which would have memory issues
                  if malloc is not set and removed correctly.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Memory uses a stack of stack of hashmaps for Local Memory. </li>
                <li>
                  Parser class has a scanner instance and has expectedToken method for syntax checking.
                </li>
                <li>Parse tree is hierarchy of tokens that each have meaning in the custom language.</li>
                <li>
                  Classes and parenting are crucial for each different token and hierarchy of where it belongs.
                </li>
                <li>Records are different from Integers and so are Sequences.</li>
                <li>When running Main enter line by line console commands for custom language to execute.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full p-4 pt-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/mainCustomLanguage.PNG"
                alt="Main class with Parser and Executor."
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>

            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/StmtSeq.PNG"
                alt="Statement Sequence behind the scenes."
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>
          </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative w-full mb-8" style={{ height: "300px" }}>
            <Image
              src="/function.PNG"
              alt="Function behind the scenes."
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-md"
            />
          </div>
          <div className="relative w-full mb-8" style={{ height: "300px" }}>
            <Image
              src="/Scanner.PNG"
              alt="Custom Scanner"
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
