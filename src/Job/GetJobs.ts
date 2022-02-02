import axios from "axios";
import Job from "./Job";
import * as $ from "jquery"
import SearchJob from "./SearchJob";
import DeleteJob from "./DeleteJob";
function GetJobs(){
    axios.get<Job[]>("https://localhost:7149/Job").then(
        item=>{
            let {data} = item;
            data.forEach(element => {

                let elementdiv = document.createElement("tr")
                elementdiv.className="jorow";
                let div   = `
                <td scope="row">${element.id}</th>    
                <td>${element.title}</td>
                <td>${element.subtitle}</td>
                <td>${element.minPay}</td>
                <td>${element.maxPay}</td>
                <td>${element.description}</td>
                <td>${element.status}</td>
                <td class="search"><div class="search${element.id} btn btn-primary">search</div></td>
                <td class="delete"><div class="delete${element.id} btn btn-danger">delete</div></td>`
                elementdiv.innerHTML = div;
                $("#jobTable")[0].appendChild(elementdiv);
                $(`.search${element.id}`).on("click",(y)=>{
                    SearchJob(element.id)
                  })
                  $(`.delete${element.id}`).on("click",(y)=>{
                    DeleteJob(element.id)
                  })
            });;
            
        },
        err=>{
            
        }
    )

}
export default GetJobs;