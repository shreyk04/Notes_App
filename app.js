let addBtn=document.getElementById("add-btn");
addBtn.addEventListener("click",function(e){
    let text=document.getElementById("text");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(text.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    text.value="";
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
        
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div id="mycard" class="card   mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-secondary" onclick="deleteNote(${index})">Delete Note</button>
        </div>
    </div>`;
    });
    let notesEle=document.getElementById("cards");
    if(notes.length!=0){
        notesEle.innerHTML=html;
    }
    
}

//Function for deleting note

function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    console.log("Delete Index no",index);
    notesObj.splice(index,1);

    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();


}




