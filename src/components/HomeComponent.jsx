import '../css/home.css';
import { Link } from "react-router-dom";

const HomeComponent = () => {
    return(
        <div className="homepage">
            {/*navbar*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container">
                    <Link className="navbar-brand " to={"/"}>Masomo School</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#cbc">CBC curriculum</a></li>
                            <li className="nav-item"><a className="nav-link" href="#why-masomo">Why Us</a></li>
                            <li className="nav-item"><Link className="nav-link" to={'/login'}>Login</Link></li>
                            
                        </ul>
                    </div>                        

                </div>

            </nav>

            {/*hero section*/}
            <section className="hero position-relative text-white">
                <img src="/images/banner1.avif" alt="banner" className="w-100 img-fluid" style={{maxHeight:'500px',objectFit:'cover'}}/>

                <div className="hero-text position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded">
                    <h1>Empowering Minds Through Competence</h1>
                    <p>Welcome to Masomo School- nurturing Future Leaders in Kenya</p>
                    <a href="#cbc" className="btn btn-light">Learn more about CBC</a>

                </div>
            </section>

            {/*about section*/}
            <section>
                <div className="container">
                    <h2 className="text-success">About Masomo School</h2>
                    <p>
                        Masomo school is a leading institution dedicated to providing quality education in Kenya. Our mission is to nurture young minds and equip them with the skills they need to thrive in a rapidly changing world. We offer a comprehensive curriculum that emphasizes critical thinking, creativity, and character development.
                    </p>

                    <p>
                        We focus on holistic development, creativity and real world skills for tommorow's leaders.
                    </p>

                </div>
            </section>

            {/*cbc section*/}
            <section id="cbc" className="py-5 "> 
                <div className="container">
                    <h2 className="text-success">Understanding CBC in Kenya</h2>
                    <p>
                        The Competency-Based Curriculum (CBC) is an innovative educational framework designed to equip learners with practical skills and knowledge. It emphasizes hands-on learning, critical thinking, and real-world applications. At Masomo School, we are committed to implementing CBC effectively, ensuring that our students are well-prepared for the challenges of the future.
                    </p>
                    <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item">Focus on skills and Talents</li>
                        <li className="list-group-item">Learner-Centered Approach</li>
                        <li className="list-group-item">Holistic development of learners</li>
                        <li className="list-group-item">Preparation for future challenges</li>

                    </ul>
                </div>

            </section>

            {/*Why us section */}
            <section id="why-masomo" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-success text-center mb-4">
                        Why Choose Masomo School?
                    </h2>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Experienced Teachers</h3>
                                    <p className="card-text">Our educators are trained in CBC and committed to student growth</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Modern Facilities</h3>
                                    <p className="card-text">We provide state of the art labs,libraries and learning spaces</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Co -curricular activities</h3>
                                    <p className="card-text">Students explore sports, arts, tech and leadership beyond books</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* conatact section */}
            <section id="contact" className="py-5 bg-success text-white">
                <div className="container">
                    <h2 className="text-light">Join masomo School Today</h2>
                    <p>Enroll your child  in a school that builds future ready citizens</p>
                    <a href="" className="btn btn-light">Apply now</a>
                </div>

            </section>

            {/* footer section */}
            <footer className="bg-dark text-light text-center py-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} Masomo School.All Rights Reserved</p>
            </footer>
    
            
        </div>
    )
}

export default HomeComponent;