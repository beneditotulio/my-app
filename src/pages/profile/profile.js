import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import SideBar from "../../SideBar";
import Edit from "./edit";
import Overview from "./overview";
import Password from "./password";
import Settings from "./settings";

const Profile = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Perfil</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Perfil</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card">
                                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" />
                                    <h2>Kevin Anderson</h2>
                                    <h3>Web Designer</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="card">
                                <div class="card-body pt-3">
                                    <ul class="nav nav-tabs nav-tabs-bordered">
                                        <li class="nav-item">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>
                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>
                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                                        </li>
                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                        </li>

                                    </ul>
                                    <div class="tab-content pt-2">
                                        <Overview />
                                        <Edit/>
                                        <Settings />
                                        <Password />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Profile