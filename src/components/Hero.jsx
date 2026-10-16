import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <section className="hero">

                <div className="hero-content">

                    <p className="eyebrow">
                        COURSEHUB
                    </p>

                    <h1>
                        Welcome to CourseHub
                    </h1>

                    <h2 style={{ fontSize: "2.5rem", margin:"0", color:"var(--gold)" }}>
                        {localStorage.getItem("firstName")} {localStorage.getItem("lastName")}
                    </h2>

                    <p>
                        Navigate your course schedule smoothly
                        and make your learning journey a breeze.
                    </p>
                    {/* The path will change but I wanted to code it so the button took you
                        to a page that we have built currently */ }
                    <Link to="/courses" className="btn">
                        Explore Courses
                    </Link>

                </div>

            </section>

        </>
    )
}

export default Hero