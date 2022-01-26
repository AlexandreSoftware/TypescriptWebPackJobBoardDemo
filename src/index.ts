import "./index.scss"
import * as $ from 'jquery';
import axios from "axios";
//     console.log()
console.log()
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
    });
}
setcontent($("[link-to]#home").attr("link-to"))