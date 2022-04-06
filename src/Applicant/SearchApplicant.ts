import axios from "axios";
import Applicant from "./Applicant";
import * as $ from "jquery"
export default function SearchApplicant(id){
    axios.get<Applicant>(`https://localhost:7149/Applicant/${id}`).then(
        response =>{
            let {data} = response;
            let element = applicantWidget(data);
            $("body").append(element);
            
            $(element).children("div.close").on("click",(y)=>{
                $(element).remove();
            })
        },
        err=>{

        }
    )
    
}
function applicantWidget(applicant:Applicant):HTMLElement{
    let element = document.createElement("div")
    element.className="widget-container";
    element.innerHTML = `
        <div class="dark close dark-bg"></div>
        <div class="widget">
            <div class="id">Id: ${applicant.id}</div>
            <div class="Name">Name: ${applicant.name}</div>
            <div class="WageExectation">WageExpectation: ${applicant.wageExpectation}</div>
            <div class="Jobs-wrapper dropdown-menu">Jobs:
            ${
                `
                ${
                    applicant.jobs.reduce<String>((prev,current)=>{
                        return `${prev}
                            <div class="dropdown-item-menu">
                                <div class="dropdown-item">
                                Id: ${current.id}
                                </div>
                                <div class="dropdown-item">
                                Title: ${current.title}
                                </div>
                                <div class="dropdown-item">
                                    SubTitle: ${current.subtitle}
                                </div>
                                <div class="dropdown-item">
                                    MaxPay: ${current.maxPay}
                                </div>
                                <div class="dropdown-item">
                                    MinPay: ${current.minPay}
                                </div>
                                <div class="dropdown-item">
                                    Status: ${current.status}
                                </div>
                            </div>
                    `
                    },"")
            }
            `
        }
        </div>
        `
    return element;
}