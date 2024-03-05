import React, { useState} from "react";

function DrapDrop() {
  const [file, setFile] = useState([
     "Coding",
     "Communication",
     "Analytical abilities",
     "Creativity",
     "Project managment",
     "Operating System",
     "Managment",
     "Software development",
     "Organization",
     "Problem solving",
     "Data analysis",
     "Mobile development",
     "Security",
     "Networking",
     "Resourcefulness"
  ]);

  const [dragItem , setDragItem] = useState();
  const [dragOverItem , setDragOverItem] = useState();

  function handleDragStart(index) {
    setDragItem(index);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
  
  function handleDrop(){
    const _file = [...file];
    const dragItems = _file.splice(dragItem, 1);
    _file.splice(dragOverItem,0,dragItems);
    setFile(_file);
  }

  function handleDragEnter(index){
    setDragOverItem(index);
  }

  function handleDragLeave(e){
    setDragOverItem(undefined)
  }

  function handleDragEnd (e) {
    setDragItem(undefined);
    setDragOverItem(undefined);
  }

  return (
    <div className=" flex flex-col items-center gap-[7px] mt-[70px] ">
      <h1 className="font-semibold">Drap Drop App</h1>
      {file.map((file, index) => (
        <div
          className="border border-[#CA8723] bg-[#8CB8D3] rounded-[8px] shadow  hover:shadow-[22px_13px_21px_7px_rgba(164,132,95,0.27)] px-[8px] py-[8px] font-semibold "
          key={file.id}
          draggable
          onDragStart={(e) => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={()=> handleDrop(index)}
          onDragEnter={()=> handleDragEnter(index)}
          onDragLeave={handleDragLeave}
          onDragEnd={handleDragEnd}
          
        >
         
          <h2>{file}</h2>
        </div>
      ))}
    </div>
  );
}

export default DrapDrop;
