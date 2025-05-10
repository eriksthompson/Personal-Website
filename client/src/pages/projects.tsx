import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
      <section id="projects" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Data Mining Project 1,2,4 and 5"
              description="Data mining for Appendicitis hospital stay patient data, Unnamed charts, and Instacart Grocery Marketbasket. With instruction from Professor Bihari SP2024"
              image="/kmeansChart.PNG"
              link="https://github.com/eriksthompson/dataMiningProject1"
              projectUrl="/dataminingProject1"
              tags={["Data Mining", "Anaconda Jupyter Notebook", "Python"]}
            />
            <ProjectCard
              title="Custom Language made with Java"
              description="A custom language with Parser and Executor and records for memory."
              image="/mainCustomLanguage.PNG"
              link="https://github.com/eriksthompson/CSELanguageParser"
              projectUrl="/javaCustomLanguage"
              tags={["Computer Science & Engineering", "Languages", "Java"]}
            />
            <ProjectCard
              title="Wikipedia AI Chatbot"
              description="A wikipedia powered AI Chatbot that answers questions with top three answers."
              image="/chatBot.PNG"
              link="https://github.com/eriksthompson/question-answer-chatbot/tree/main"
              projectUrl="/wikipediaAI"
              tags={["Natural Language Processing", "AI", "Python"]}
            />
              <ProjectCard
              title="Pirate Ship Target Practice"
              description="A Pirate Ship cannon firing game made in Unity."
              image="/PirateShipMap.PNG"
              link="https://github.com/eriksthompson/unityPirates"
              projectUrl="/unityPirate"
              tags={["Ray Casting", "C#", "Unity", "3rd Person Camera"]}
            />
          </div>
        </div>
      </section>
    );
  }
