import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
      <section id="projects" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Data Mining Project 1,2,4 and 5"
              description="Data mining for Appendicitis hospital stay patient data, Unnamed charts, and Instacart Grocery Marketbasket. With instruction from Professor Bihari SP2024"
              image="/gantt-chart.png"
              link="https://github.com/eriksthompson/dataMiningProject1"
              projectUrl="/datamining1"
              tags={["Data Mining", "Anaconda Jupyter Notebook", "Python"]}
            />
            <ProjectCard
              title="Matrix Reduction Practicer"
              description="A web app to help students practice row reduction of matrices, a fundamental skill in linear algebra."
              image="/matrixss.png"
              link="https://github.com/conthom/Matrix-reduction-practice-platform"
              projectUrl="/matrixpracticer"
              tags={["Next.js", "Linear Algebra", "Education"]}
            />
            <ProjectCard
              title="Community Grocery List App"
              description="A grocery list Android app featuring seven screens for efficient list management and sharing."
              image="/grocerylistss.png"
              link="https://github.com/conthom/App-dev/tree/main/Grocery%20List%20App"
              projectUrl="/groceryapp"
              tags={["Android", "Kotlin", "Community"]}
            />
          </div>
        </div>
      </section>
    );
  }
