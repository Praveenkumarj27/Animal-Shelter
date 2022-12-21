import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import ReactModal from 'react-modal';
import CatTable from './CatTable';
import Table from './DogTable';
import Modal from "react-modal";

function Pet() {
    const [open3, setOpen3] = useState(false);
    const [view, setView] = useState("dogs");
  return (
   
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
                  {view === "dogs" ? <Table/> : <CatTable />}
                </div>
           
  )
}

export default Pet