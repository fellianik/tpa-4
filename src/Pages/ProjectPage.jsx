import Card from "../components/Card";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.jpeg";
import project5 from "../images/project5.jpeg";
import "../styles/ProjectPage.css";

function ProjectPage() {
    const project = [
        {
            imgProject: project3,
            altImg: "Project 1",
            titleProject: "Portofolio",
            linkWebsite: "https://fellianik.github.io/",
            linkGithub: "https://github.com/fellianik/fellianik.github.io",
        },
        {
            imgProject: project1,
            altImg: "Project 2",
            titleProject: "Landing Page Menantea",
            linkWebsite: "https://fellianik.github.io/menantea-landing-page/",
            linkGithub: "https://fellianik.github.io/menantea-landing-page/",
        },
        {
            imgProject: project2,
            altImg: "Project 3",
            titleProject: "Website BEM Fasilkom UPN Veteran Jawa Timur",
            linkWebsite: "#",
            linkGithub: "#",
        },
        {
            imgProject: project4,
            altImg: "Project 4",
            titleProject: "BMI Calculator",
            linkWebsite: "https://fellianik-bmicalculator.netlify.app/",
            linkGithub: "https://github.com/fellianik/tpa-2",
        },
        {
            imgProject: project5,
            altImg: "Project 4",
            titleProject: "Movie App with TMDB API",
            linkWebsite: "https://fellianik-movieapp.netlify.app/",
            linkGithub: "https://github.com/fellianik/tpa-3",
        },
    ];
    return (
        <div>
            <section class="project">
                <div class="container" id="project">
                    <h1>PROJECT</h1>
                    <hr />
                    <div class="card-container">
                        {project.map((el) => {
                            return <Card imgProject={el.imgProject} altImg={el.altImg} titleProject={el.titleProject} linkWebsite={el.linkWebsite} linkGithub={el.linkGithub} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectPage;
