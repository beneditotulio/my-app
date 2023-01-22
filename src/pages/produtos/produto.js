import Footer from "../../Footer"
import Header from "../../Header"
import SideBar from "../../SideBar"

const Produto = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Produto</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Produto</li>
                        </ol>
                    </nav>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Produto