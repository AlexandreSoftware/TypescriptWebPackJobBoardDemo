import axios from "axios";
import Applicant from "./Applicant";
import * as $ from "jquery"
import SearchApplicant from "./SearchApplicant";
function GetApplicants(){
    axios.get<Applicant[]>("https://localhost:7149/Applicant").then(
        item=>{
            let {data} = item;
            console.log(data)
            data.forEach(element => {

                let elementdiv = document.createElement("tr")
                let div   = `
                <th scope="row" id=element>${element.id}</th>    
                <td>${element.name}</td>
                <td>${element.wageExpectation}</td>
                <td>${element.jobs.length}</td>
                <td class="search"><div class="search${element.id} btn btn-primary">search</div></td>
                <td class="delete"><div class="delete${element.id} btn btn-danger">delete</div></td>`
                elementdiv.innerHTML = div;
                $("#applicantTable")[0].appendChild(elementdiv);
                $(`.search${element.id}`).on("click",(y)=>{
                  SearchApplicant(element.id)
                })
                $(`.delete${element.id}`).on("click",(y)=>{
                  
                })
            });;
            
        },
        err=>{
            
        }
    )

}
export default GetApplicants;