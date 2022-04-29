console.log("Welcome to magic notes");
shownotes();

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  console.log(notesobj);
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
         <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Your Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>
    `;
  });

  let notesElm = document.getElementById("notes");
  if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to Show`;
  }
}

// delete note

function deleteNote(index) {
  console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();

}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function(){
    // console.log("Hello world");
    let inputVal = searchTxt.value
    // console.log(inputVal);

    let notecard = document.getElementsByClassName('noteCard');
    Array.from(notecard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0];
        console.log(cardTxt);
    })
})