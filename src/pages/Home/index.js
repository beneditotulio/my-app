import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import SideBar from "../../SideBar";
// import NavigationBar from "../../NavigationBar";

const Home = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">/</a></li>
                        </ol>
                    </nav>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Home