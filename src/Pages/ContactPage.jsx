import "../styles/ContactPage.css";

function ContactPage() {
    return (
        <div>
            <section className="contact">
                <div className="container" id="contact">
                    <form className="form">
                        <h1 className="title-form">Contact Me</h1>
                        <hr />

                        <div className="form-container">
                            <label for="name" className="form-label">
                                Nama
                            </label>
                            <br />
                            <input type="text" className="form-input" name="name" id="name" placeholder="Masukkan Nama" />
                        </div>

                        <div className="form-container">
                            <label for="email" className="form-label">
                                Email
                            </label>
                            <br />
                            <input type="email" className="form-input" name="email" id="email" placeholder="Masukkan Email" />
                        </div>

                        <div className="form-container">
                            <label for="pesan" className="form-label">
                                Pesan
                            </label>
                            <br />
                            <textarea className="form-input textarea" name="pesan" id="pesan" placeholder="Masukkan Pesan"></textarea>
                        </div>

                        <button type="submit">Kirim</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
