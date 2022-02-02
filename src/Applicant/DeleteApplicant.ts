import axios from "axios"
import * as $ from "jquery"
import ClearApplicants from "./ClearApplicants"
import GetApplicants from "./GetApplicants"

export default function DeleteApplicant(id:number){
    axios.delete(`https://localhost:7149/Applicant?id=${id}`).then(
        ()=>{
            ClearApplicants();
            GetApplicants();
        },
        err=>{
            
        }
    )
}