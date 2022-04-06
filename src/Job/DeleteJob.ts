import axios from "axios"
import ClearJobs from "./clearJobs";
import GetJobs from "./GetJobs";

export default function DeleteJob(id:number){
    axios.delete(`https://localhost:7149/Job?id=${id}`).then(
        ()=>{
            ClearJobs();
            GetJobs();
        },
        err=>{
            
        }
    )
}