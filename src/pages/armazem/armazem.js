import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import SideBar from "../../SideBar";
import ArmazemAdd from "./add";

const Armazem = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Armazem</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Armazem</li>
                        </ol>
                    </nav>
                </div>

                <div class="col-xl">
                    <div class="card">
                        <div class="card-body pt-3">
                            <ul class="nav nav-tabs nav-tabs-bordered">
                                <li class="nav-item">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#armazen-overview">Overview</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#armazem-add">Add</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#armazem-settings">Settings</button>
                                </li>
                            </ul>
                            <div class="tab-content pt-2">
                                <ArmazemAdd />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Armazem