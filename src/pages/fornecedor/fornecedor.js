import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import SideBar from "../../SideBar";

const Fornecedor = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Fornecedor</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Fornecedor</li>
                        </ol>
                    </nav>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Fornecedor