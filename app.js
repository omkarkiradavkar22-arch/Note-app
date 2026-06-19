let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function addNote() {
  const input =
    document.getElementById("noteInput");

  const note = input.value.trim();

  if (note === "") return;

  notes.push(note);

  localStorage.setItem("notes",JSON.stringify(notes));

  input.value = "";

  displayNotes();
}

function displayNotes() {
  const list = document.getElementById("noteList");
  list.innerHTML = "";
    notes.forEach((note, index) => {
    list.innerHTML += `
      <li>
        <span class="note-text">
          ${note}
        </span>

        <div class="actions">
          <button
            class="edit-btn"
            onclick="editNote(${index})"
          >
            Edit
          </button>

          <button
            class="delete-btn"
            onclick="deleteNote(${index})"
          >
            Delete
          </button>
        </div>
      </li>
    `;
  });
}
function deleteNote(index) {
  notes.splice(index, 1);

  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );

  displayNotes();
}

function editNote(index) {
  const updated =
    prompt("Edit Note", notes[index]);

  if (updated !== null) {
    notes[index] = updated;

    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );

    displayNotes();
  }
}