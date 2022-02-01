import * as $ from 'jquery';
import "./index.scss"
import axios from "axios";
import { contains, data } from 'jquery';
import submitJob from "./Job/SubmitJobs"
import submitApplicant from './Applicant/SubmitApplicant';
import GetApplicants from './Applicant/GetApplicants';
import GetJobs from './Job/GetJobs';
$("[link-to]").each((iterator,i)=>{

    $(i).on("click",(y)=>{
        let link = $(y.target).attr("link-to");
        setcontent(link)
    })
}
)
function setcontent(link:string){
    axios(link).then(z=>{
        $("#content").html(k=>z.data);
        if(link.includes("Jobs")){
            $("#formJob")[0].onsubmit=submitJob;
            GetJobs();
        }
        if(link.includes("Applicants")){
            $("#formApplicant")[0].onsubmit=submitApplicant;
            GetApplicants();
        }
    });
}
setcontent($("[link-to]#applicants").attr("link-to"))
