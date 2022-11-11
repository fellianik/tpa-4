import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
    const navigation = useNavigate();

    const handleButton = () => {
        navigation("/about");
    };

    return (
        <div>
            <section className="home">
                <div className="container" id="home">
                    <h5>Halo, perkenalkan saya</h5>
                    <h1>Felliani Kurniawati</h1>
                    <h3>Mahasiswa Informatika UPN Veteran Jawa Timur</h3>
                    <button className="title-btn" onClick={() => handleButton()}>
                        About me
                    </button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
