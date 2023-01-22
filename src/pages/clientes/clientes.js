import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import SideBar from "../../SideBar";
import CliOverview from "./CliOverview";

const Clientes = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Clientes</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Clientes</li>
                        </ol>
                    </nav>
                </div>



                <div className="col-xl">
                    <div className="card">
                        <div className="card-body pt-3">
                            <ul className="nav nav-tabs nav-tabs-bordered">
                                <li className="nav-item">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#clientes-overview">Overview</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#clientes-settings">Settings</button>
                                </li>
                            </ul>
                            <div className="tab-content pt-2">
                                <CliOverview />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Clientes