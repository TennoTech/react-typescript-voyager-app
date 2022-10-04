const Footer = () => {
    return (
        <div id="footer">
            <div className="row">
                <div className="col-12">

                    <section className="contact">
                        <header>
                            <h3>Contact | Socials</h3>
                        </header>
                        <p>You made it this far, Why not check out some of these...</p>
                        <ul className="icons">
                            <li className="icon">
                                <a href="https://twitter.com/Tenno2270" target="_blank" className="fab fa-twitter"></a>
                            </li>
                            <li className="icon">
                                <a href="https://www.youtube.com/channel/UCRxTms6-o8R9CdrsF-FY2QQ" target="_blank"
                                    className="fab fa-youtube"></a>
                            </li>
                            <li className="icon">
                                <a href="https://github.com/TennoTech" target="_blank" className="fab fa-github"></a>
                            </li>
                            <li className="icon">
                                <a href="#" className="fas fa-envelope"></a>
                            </li>
                            <li className="icon">
                                <a href="https://www.linkedin.com/in/roman-ramsey/" target="_blank" className="fab fa-linkedin"></a>
                            </li>
                        </ul>
                    </section>

                    <div className="copyright">
                        <ul className="menu">
                            <li>&copy; 2022 | Roman Ramsey</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;