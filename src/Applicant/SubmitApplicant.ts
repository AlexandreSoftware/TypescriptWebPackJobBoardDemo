import axios from "axios";
import Applicant from "./Applicant";
import * as $ from "jquery";
function submitApplicant(e:Event){
    e.preventDefault();
    let formElement = <HTMLFormElement>$("#formApplicant")[0];
    let formData = new FormData(formElement);
    let checkelements = checkIfIthasAllApplicantElements(formData);
    if(checkelements==" "){
        let applicant = new Applicant();
        applicant.name = formData.get("name").toString();
        applicant.wageExpectation = parseFloat(formData.get("wageExpectation").toString())        
        applicant.jobs =[];
        $("#error-container").hide();
        $("#sucess-container").hide();
        $("#submit-error-container").hide();        
        axios.put("https://localhost:7149/Applicant",applicant)
        .then(
        ()=>{
            console.log("sucso")
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

function checkIfIthasAllApplicantElements(formData:FormData):string{    
    let value = " ";
    if(formData.get("name").toString()=="")
    {
        value += "Name "
    }
    if(formData.get("wageExpectation")==""){
        value += "WageExpectation "
    }
  
    return value
}
export default submitApplicant;