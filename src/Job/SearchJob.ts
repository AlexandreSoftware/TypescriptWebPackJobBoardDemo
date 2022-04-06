import axios from "axios";
import Job from "./Job";
import * as $ from "jquery"
export default function SearchJob(id){
    axios.get<Job>(`https://localhost:7149/Job/${id}`).then(
        response =>{
            let {data} = response;
            let element = JobWidget(data);
            $("body").append(element);
            
            $(element).children("div.close").on("click",(y)=>{
                $(element).remove();
            })
        },
        err=>{

        }
    )
    
}
function JobWidget(Job:Job):HTMLElement{
    let element = document.createElement("div")
    element.className="widget-container";
    element.innerHTML = 
            `
            <div class="dark close dark-bg"></div>
            <div class="widget">
                <div class="dropdown-item-menu">
                    <div class="dropdown-item">
                    Id: ${Job.id}
                    </div>
                    <div class="dropdown-item">
                    Title: ${Job.title}
                    </div>
                    <div class="dropdown-item">
                        SubTitle: ${Job.subtitle}
                    </div>
                    <div class="dropdown-item">
                        MaxPay: ${Job.maxPay}
                    </div>
                    <div class="dropdown-item">
                        MinPay: ${Job.minPay}
                    </div>
                    <div class="dropdown-item">
                        Status: ${Job.status}
                    </div>
                </div>
            </div>
            `
    return element;
}