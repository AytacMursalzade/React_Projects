import React, { useState } from "react";

function Notepad() {

  const [note , setNote] = useState('');
  const [currentNote, setCurrentNote] = useState([]);

  const handleClick = () => {
    setCurrentNote([...currentNote, note]);
    setNote('');
  }

  const handleChange = (e) =>{
    setNote(e.target.value);
  }

  return (
    <div className="h-screen ml-[30%] mt-[10%] ">
      <h2>NotePad</h2>
      <div className="flex flex-row gap-[15px] mt-[120px] ">
        <label htmlFor="note">Note:</label>
        <input
          className="w-[350px] h-[30px] mb-[15px] "
          type="text"
          id="note"
          name="name"
          placeholder="Enter a note here..."
          value={note}
          onChange={handleChange}
        />
        <div>
          <button className="bg-[navy] w-[90px] h-[30px] text-white text-[12px] font-bold" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>

      <div>
        {
          currentNote.length == 0 ? <p>No notes to display</p> : <table>
            <thead className="mr-[20px] flex gap-[12px] ">
              <th >Note</th>
              <tbody >
                {
                 currentNote.map((n) => (
                    <tr>
                      <td>{n}</td>
                    </tr>
                  )) 
                }
              </tbody>
            </thead>
          </table>
        }
      </div>
    </div>
  );
}

export default Notepad;
