import "./Header.css"
import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between p-4 mx-5 border-b-2 border-dashed">
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;