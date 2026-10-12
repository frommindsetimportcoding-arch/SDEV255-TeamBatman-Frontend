import Hero from "../components/Hero";
import CoursePreview from "../components/CoursePreview";


function Home() {
    return (
        <>
            <main>
                
                {/* -- Hero Section -- */}
                <Hero />

                {/* -- Course Preview -- */}
                <CoursePreview /> 

            </main>
        </>
    );
}

export default Home;