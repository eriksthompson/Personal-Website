import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function dataminingProject1() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Head>
        <title>Data Mining Project 1 | Erik Thompson</title>
        <link rel="icon" href="/Ohio-State-Logo-1987-2012.jpg" />
        <meta
          name="description"
          content="Multiple data mining jupyter notebook pages with varying topics"
        />
      </Head>


      <div className="description-section bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Data Mining Jupyter Notebooks
          </h1>
          <p className="text-lg mb-4">
            Various data mining and data science techniques used include 
            CRISP-DM data processsing model, clustering algorithms and association analysis.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">CRISP-DM Techniques:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Exploratory Data Analysis and gain an understanding of the contents and usefulness of the dataset.</li>
                <li>
                  Clean up the data and save it for future use.
                </li>
                <li>Solve a business problem by creating, evaluating, and comparing three classification models, and produce the outputs needed to provide business value for your stakeholders.</li>
                <li>Experiment with built-in classification models in scikit-learn.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Python libraries- Numpy for easy array storage and dynamic array functions</li>
                <li>Pandas for accessing dataframes efficiently</li>
                <li>Seaborn and Matplotlib for graphing and statistical queries.</li>
                <li> Anaconda and Jupyter Notebook for organization 
                  and execution of seperate blocks of python code.
                </li>
                <li>sklearn for clustering analysis and mlxtend frequent_patterns library.</li>{" "}
                {/* Added Android Studio */}
                <li>Incremental testing and debugging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full p-4 pt-8">
        <div className="max-w-7xl mx-auto bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden mt-6">
          {/* New Technology Overview Section */}
          <div className="flex mb-8">
            {/* Right Text Section */}
            <div className="w-2/3 pl-8">
              <h2 className="text-xl font-semibold mb-2">
                Technology Overview:
              </h2>
              <p className="text-lg mb-4">
                The four jupyter notebook entries feature different data mining
                and data science techniques such as:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
  
                  <strong>Juptyer Notebook Organization:</strong> Each notebook has sections 1-Business Understanding, 2-Data Understanding, 3-Data Preparation,
                  4-Modeling, 5-Evaluation, 6-Deployment<li>
                  <strong>Anaconda Technology:</strong> Each block of code can be run independently and comment blocks are allowed for factual analysis.
                </li>
                <li>
                  <strong>Data Understanding:</strong> Examining Metadata, 
                  basic statistics for each attribute, visualizations of interesting attributes,
                  and verify quality and relationships.
                </li>
                <li>
                  <strong>Data Preparation:</strong> Cleaning data, selecting attributes, 
                  creating attributes, transforming attributes, and selecting records.
                </li>
                <li>
                  <strong>Modeling: </strong> Evaluation of Off-the-shelf KNN Classifier
                  meaning configuring, evaluating and running the classifier with graphs.
                  RandomForest classifier was also used in contrast to KNN and confusion matrix
                  shows the accuracy and precision. 
                </li>
                
                <li>
                  <strong>Evaluation:</strong> Random Forest was slowest but had 4% higher
                  accuracy than KNN. KNN was easy to set up but slow in run time. Naive Bayes is also
                  strong classifier but professor stated assumption that all features are independent is not 
                  guaranteed.
                </li>
                <li>
                  <strong>Clustering Algorithms:</strong> KMeans, Agglommerative Clustering,
                Spectral Clustering, and DBScan. Each one has tradeoffs for different types of plots.
                DBScan was particularly useful for tracing OSU letters in a plot.</li>
                <li>
                  <strong>Association Algorithms:</strong> Assocation Rules, Apriori, and FPgrowth. Theses algorithms
                  were used on Grocery Store Items list to create a discount for items that will produce a net increase in 
                 profit. Professor Bihari helped with code on how to make one hot encoding and adding parameters to apriori. 
                </li>
              </ul>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/datamining1charts.PNG"
                alt="Appendicitis Initial Discoveries"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>

            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/hw2OptimalEstimators.PNG"
                alt="Optimal Estimators for Random Forest Estimator"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="relative w-full mb-8" style={{ height: "300px" }}>
            <Image
              src="/kmeansChart.PNG"
              alt="KMeans Algorithm Results for K =3 best"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-md"
            />
          </div>
          <div className="relative w-full mb-8" style={{ height: "300px" }}>
            <Image
              src="/netProfitHW5.PNG"
              alt="Net Profit for Grocery Store"
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
