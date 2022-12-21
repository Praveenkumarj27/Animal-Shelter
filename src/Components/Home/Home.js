import React from "react";
import { Link } from "react-router-dom";
import { SvgCatandLady, SvgDogsAndCats } from "../../Assets/Assets";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="main mt-5 p-5" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 welcomeContent">
              <h2 className="title">Welcome to the Animal Shelter !</h2>
              <br />
              <p className="content">
                Glad that you care for the animals so much.We make sure that
                you'll not repent your decision of adopting your favorite pet !!{" "}
              </p>

              <div className="button">
                <Link to={"/adopt"} type="button" className="btn">
                  Adopt
                </Link>
                <Link to={"/pets"} type="button" className="btn bg-secondary ">
                  What all pets do we have ?
                </Link>
              </div>
            </div>
            <div className="col ">
              <SvgDogsAndCats />
            </div>
          </div>
        </div>
        <div className="main mt-5 p-5">
          <div className="container">
            <div className="row">
              <div className="col ">
                <h2 className="head">
                  We do take in pets if you can't take care of them !
                </h2>
                <br />
                <p className="content1">
                  Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef
                  wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe
                  bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu
                  efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf
                  kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb
                  efkjebf kjbejk fbwekjsf bkewb{" "}
                </p>
                <div className="b">
                  <Link
                    to={"/giveaway"}
                    type="button"
                    className="btn bg-secondary "
                  >
                    Give Away
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main mt-5 p-5">
          <div className="container">
            <div className="row">
              <div className="col  ">
                <SvgCatandLady />
              </div>
              <div className="col ">
                <p className="contents">
                  Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef
                  wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe
                  bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu
                  efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf
                  kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb
                  efkjebf kjbejk fbwekjsf bkewb{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
