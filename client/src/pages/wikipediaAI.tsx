import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function wikipediaAI() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Head>
        <title>Wikipedia AI Chatbot | Erik Thompson</title>
        <link rel="icon" href="/Ohio-State-Logo-1987-2012.jpg" />
        <meta
          name="description"
          content="Wikipedia Chatbot AI that answers questions with top three one sentence answers."
        />
      </Head>

    
      <div className="description-section bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Wikipedia AI Chatbot
          </h1>
          <p className="text-lg mb-4">
            Powered by MSMarco and Spacy Natural Language Processing.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li> Ask a question bot responds with three answers with percent accuracy judgement.</li>
                <li> Send button allows to enter the text into the program. </li>
                <li>Starts with yes or no for logging the chat history to text file.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li> TKinter gui allows for a seperate tab to chat in.</li>
                <li> MSMarco assymmetric search searches multiple wikipedia pages
                  for an answer to your question. </li>
                <li>Uses wikipedia API to search using wikipedia's search bar.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-grow w-full p-4 pt-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/chatBot.PNG"
                alt="Main class with Parser and Executor."
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
