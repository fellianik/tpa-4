import "../styles/BlogPage.css";

function BlogPage() {
    return (
        <div>
            <section className="blog">
                <div className="container" id="blog">
                    <h1 className="title-blog">My Blog</h1>
                    <div className="blog-content">
                        <h1 className="blog-title">Hai! Saya Felli &#128075;</h1>
                        <p className="blog-text">
                            Halo perkenalkan saya Felliani Kurniawati. Biasanya dipanggil Felli. Anak pertama dari tiga bersaudara. Hobi saya yaitu mendengarkan musik, menonton anime, membaca komik. Saya orangnya pendiam jika berkumpul
                            dengan banyak orang. Akan tetapi, saya orangnya ceria jika bisa berteman dekat.
                            <br />
                            <br />
                            Kelebihan saya yaitu bertanggung jawab atas tugas yang diberikan, bisa diandalkan. Tetapi kekuranganku, malas, pendiam, suka masih bingung untuk mengambil keputusan yang tepat, grogi jika di depan banyak orang.
                        </p>
                        <p className="blog-text">
                            <strong>Riwayat Pendidikan</strong>
                        </p>
                        <div className="blog-table">
                            <table>
                                <tr>
                                    <td>
                                        <dl>
                                            <li>S1 Informatika Universitas Pembangunan Nasional "Veteran" Jawa Timur</li>
                                            <li>SMA Katolik Untung Suropati Sidoarjo</li>
                                        </dl>
                                    </td>
                                    <td>
                                        <dd>2020-2024</dd>
                                        <dd>2017-2020</dd>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <p className="blog-text">
                            <strong>Riwayat Organisasi & Kepanitiaan</strong>
                        </p>
                        <div className="blog-table">
                            <table>
                                <tr>
                                    <td>
                                        <dl>
                                            <li>Wakil Ketua Umum UKM Oni-Giri 2021-2022 UPNVJT</li>
                                            <li>Divisi Edu ILC UPNVJT</li>
                                            <li>Divisi Bahasa UKM Oni-Giri 2020-2021 UPNVJT</li>
                                            <li>Divisi Perlombaan Fasilkom Fest 2021</li>
                                            <li>Divisi Perlengkapan IT-Fest 2021</li>
                                            <li>Divisi Perlengkapan No Plastic Day BEM UPNVJT</li>
                                            <li>Divisi Perlengkapan LANIK 2021</li>
                                            <li>Divisi Acara Diklat UKM Oni-Giri UPNVJT</li>
                                            <li>Divisi Senior Pendamping PEMABA 2021</li>
                                        </dl>
                                    </td>
                                    <td>
                                        <dd>Januari 2022</dd>
                                        <dd>Mei 2021</dd>
                                        <dd>Februari 2021</dd>
                                        <dd>September 2021</dd>
                                        <dd>September 2021</dd>
                                        <dd>Agustus 2021</dd>
                                        <dd>Juli 2021</dd>
                                        <dd>Juni 2021</dd>
                                        <dd>Juni 2021</dd>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogPage;
