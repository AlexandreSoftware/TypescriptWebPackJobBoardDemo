import axios from "axios";

function GetApplicants(){
    axios.get("https://localhost:7149/Applicant")
}
export default GetApplicants();