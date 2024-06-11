import './Home.css';
import billboard from '../../assets/billboard-logo.png'

function Home() {
    return (
        <>
            <header className="header--home outer-content-container">
                <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            </header>
            <section className="introduction-section--home outer-content-container">
                <div className="introduction-section--home__container">
                    <figure>
                        <img src={billboard} alt="Een schreeuwerig billboard"/>
                        <figcaption>*En in billboards. Die zijn niet te missen namelijk.</figcaption>
                    </figure>
                    <div className="introduction-section--home__text-wrapper">
                        <p>We geloven dat iedereen een verhaal te vertellen heeft, avonturen te delen en kennis te
                            verspreiden.
                            Daarom hebben we een platform gecreëerd waar creativiteit, passie en ontdekking samenkomen.</p>
                        <p>Of je nu een doorgewinterde schrijver bent of gewoon je gedachten wilt delen, Blogventure is de
                            plek waar jouw stem wordt gehoord. Duik in een wereld van verhalen, reizen, koken, en nog veel
                            meer. Ontdek nieuwe perspectieven en maak deel uit van een gemeenschap van gepassioneerde
                            bloggers.</p>
                        <p>Dus waar wacht je nog op? Stap aan boord van deze spannende reis en laat jouw avontuur beginnen
                            op Blogventure!</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;