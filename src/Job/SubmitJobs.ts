import axios from 'axios';
import Job from './Job';
import Status from './Status';
import * as $ from 'jquery';

function submitJobs(e:Event){
    e.preventDefault();
    let formElement = <HTMLFormElement>$("#formJob")[0];
    let formData = new FormData(formElement);
    let checkelements = checkIfIthasAllJobElements(formData);
    if(checkelements==" "){
        let job = new Job;
        job.title = formData.get("title").toString();
        job.subtitle = formData.get("subTitle").toString()
        job.minPay = parseFloat(formData.get("minPay").toString());
        job.maxPay = parseFloat(formData.get("maxPay").toString());
        job.description = formData.get("description").toString();
        job.status = Status.NotViewed;
        $("#error-container").hide();
        $("#sucess-container").hide();
        $("#submit-error-container").hide();
        axios.put("https://localhost:7149/Job/",job).then(
        ()=>{
            $("#sucess-container").removeClass("d-none").show()
        },err=>{
            $("#submit-error-container").removeClass("d-none")
                .show()
            $("#sucess-container").hide();        
        })
    }
    else{
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
export default submitJobs;