import "../styles/AboutPage.css";
import image from "../images/foto.jpg";

import { useNavigate } from "react-router-dom";

function AboutPage() {
    const navigation = useNavigate();

    const handleButtonProject = () => {
        navigation("/project");
    };

    const handleButtonBlog = () => {
        navigation("/blog");
    };
    return (
        <div>
            <section className="about">
                <div className="container" id="about">
                    <img src={image} alt="foto saya" width={350} height={"auto"} />
                    <div className="about-text">
                        <h1>Tentang Saya</h1>
                        <hr />
                        <h5 style={{ padding: "0" }}>Mahasiswa</h5>
                        <p>
                            Hai! Perkenalkan nama saya Felliani Kurniawati. Biasa di panggil Felli, 20 tahun. Saya mahasiswa jurusan Informatika UPN "Veteran" Jawa Timur. Sekarang saya sedang menjalani perkuliahan semester 5. Saya berfokus
                            pada Front-End Developer.
                        </p>
                        <p>
                            <h4>Skill</h4>
                            <ul className="list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Javascript</li>
                                <li>Notion</li>
                                <li>Google</li>
                                <li>VS Code</li>
                            </ul>
                        </p>
                        <div className="about-btn">
                            <button className="btn-about" onClick={() => handleButtonProject()} style={{ cursor: "pointer" }}>
                                My Project
                            </button>
                            <button className="btn-about" onClick={() => handleButtonBlog()} style={{ cursor: "pointer" }}>
                                My Blog
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
