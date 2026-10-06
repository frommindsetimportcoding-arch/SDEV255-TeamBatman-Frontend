import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <section className="hero">

                <div className="hero-content">

                    <p className="eyebrow">
                        COURSEHUB
                        {/* -- display Student or Teacher based on login -- */}
                    </p>

                    <h1>
                        Welcome to CourseHub
                        {/* -- change this to display user's name -- */}
                    </h1>

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