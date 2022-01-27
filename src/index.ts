import * as $ from 'jquery';
import "./index.scss"
import axios from "axios";
import Job from './Job';
import Status from './Status';
import { contains, data } from 'jquery';
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
        console.log(link)
        if(link.includes("Jobs")){
            $("#formJobs")[0].onsubmit=submitJobs;
        }
        if(link.includes("Applicants")){
            
        }
    });
}
setcontent($("[link-to]#applicants").attr("link-to"))


function submitJobs(e:Event){
    e.preventDefault();
    let formElement = <HTMLFormElement>$("#formJobs")[0];
    let formData = new FormData(formElement);
    let checkelements = checkIfIthasAllJobElements(formData);
    if(checkelements==" "){
        let job = new Job;
        job.title = formData.get("title").toString();
        job.subtitle = formData.get("subTitle").toString()
        job.minPay = parseFloat(formData.get("minPay").toString());
        job.maxPay = parseFloat(formData.get("maxPay").toString());
        job.description = formData.get("description").toString();
        job.status = Status[formData.get("status").toString()];
        $("#error-container").hide();
    }
    else{

        console.log("passed")
        $("#error-container-text").text(checkelements)
        $("#error-container").show();
        $("#error-container").removeClass("d-none")
    }
    
}

function checkIfIthasAllJobElements(formData:FormData):string{    
    let value = " ";
    if(formData.get("title").toString()=="")
    {
        value += "Title "
    }
    console.log(formData.get("subTitle"))
    if(formData.get("subTitle")==""){
        value += "SubTitle "
    }
    if(formData.get("minPay").toString()==""){
        value += "MinPay "
    }
    if(formData.get("description").toString()==""){
        value += "Description "
    }
    if(formData.get("status").toString()==""){
        value += "Status"
    }
    return value
}