import SpinnerImage from "../assets/spinner.gif";

const Spinner = () => {
    return (
        <img src={SpinnerImage} alt="loading..." style={{ width: "100px", margin: "auto", display: "block" }} />
    )
}

export default Spinner