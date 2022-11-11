import "../styles/Card.css";

function Card({ imgProject, altImg, titleProject, linkWebsite, linkGithub }) {
    return (
        <div>
            <div className="card">
                <img src={imgProject} alt={altImg} />
                <div className="card-text">
                    <h3>{titleProject}</h3>
                    <a className="card-link" href={linkWebsite} target="_blank">
                        Website
                    </a>
                    <a className="card-link" href={linkGithub} target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
