import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import CityList from "../../components/CityList/CityList";
import HotelStyles from "../../components/HotelStyles/HotelStyles";
import HotelList from "../../components/HotelList/HotelList";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <CityList />
            <HotelStyles />
            <HotelList />
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default Home;
