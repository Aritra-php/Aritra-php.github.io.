var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}

document.getElementById('btn').addEventListener('click',function(){
    const hiddenProjets=document.querySelectorAll('.work.hidden');

    hiddenProjets.forEach(work=>{
        work.classList.remove('hidden');
    });
    this.style.display='none';
})

var sidemenu= document.getElementById("showmenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px"
}

