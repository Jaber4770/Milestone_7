import "./Header.css"
import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between p-4 border-b-2 border-dashed mb-5">
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;