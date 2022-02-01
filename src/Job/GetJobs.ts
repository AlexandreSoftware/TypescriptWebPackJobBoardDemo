import axios from "axios";
import Job from "./Job";
import * as $ from "jquery"
import SearchJob from "./SearchJob";
function GetJobs(){
    axios.get<Job[]>("https://localhost:7149/Job").then(
        item=>{
            let {data} = item;
            data.forEach(element => {

                let elementr = document.createElement("tr")
                let div   = `
                <th scope="row">${element.id}</th>    
                <td>${element.title}</td>
                <td>${element.subtitle}</td>
                <td>${element.minPay}</td>
                <td>${element.maxPay}</td>
                <td>${element.description}</td>
                <td>${element.status}</td>
                <td class="search"><div class="search${element.id} btn btn-primary">search</div></td>
                <td class="delete"><div class="delete${element.id} btn btn-danger">delete</div></td>`
                elementr.innerHTML = div;
                console.log(elementr)
                console.log($("#jobTable"));
                $("#jobTable")[0].appendChild(elementr);
                $(`.search${element.id}`).on("click",(y)=>{
                    SearchJob(element.id)
                  })
                  $(`.delete${element.id}`).on("click",(y)=>{
                    
                  })
            });;
            
        },
        err=>{
            
        }
    )

}
export default GetJobs;