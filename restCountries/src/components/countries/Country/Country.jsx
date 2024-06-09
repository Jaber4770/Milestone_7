import "./Country.css"
const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    return (
        <div className="countryBox">
                <h1>Name: {name?.common}</h1>
                <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;