import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import Table from './Table';

function Pet() {
    const [open3, setOpen3] = useState(false);
    const [view, setView] = useState("dogs");
  return (
    // <div isOpen={open3} onRequestClose={() => setOpen3(false)}>
    //             <div className="closebutton">
    //               <AiOutlineClose onClick={() => setOpen3(false)} size={20} />
    //             </div>
                <div className="fromfield">
                  <h2 className="headtitle" >What all pets do we have ?</h2>
                  <br />
                  <div className="hidetable">
                    <h6
                      onClick={() => setView("dogs")}
                      style={{ color: view === "dogs" ? "blue" : "" }}
                    >
                      DOGS |{" "}
                    </h6>

                    <h6
                      onClick={() => setView("cats")}
                      style={{ color: view === "cats" ? "blue" : "" }}
                    >
                      CATS
                    </h6>
                  </div>
                  {view === "dogs" ? <Table/> : <Table />}
                </div>
            //   </div>
  )
}

export default Pet