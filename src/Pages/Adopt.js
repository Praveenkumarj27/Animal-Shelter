import React  from "react";

function Adopt() {
  return (
    <div
      className="formContainer"
      style={{ margin: "20px", fontSize: "small" }}
    >
      <p className="caption">Adopt a pet</p>
      <p className="Question">What pet do you want to adopt ?</p>
      <div className="flex flex-col justify-center items-start">
        <form>
          <div className="col-lg-3">
            <h6>Pet type </h6>
            <select class="form-select form-select-lg mb-3">
              <option selected value="dog">
                Dog
              </option>
              <option value="cat">Cat</option>
            </select>
            <h6>Breed</h6>
            <select class="form-select form-select-lg mb-3">
              <option selected value="lab">
                Lab
              </option>
              <option value="germanShepard">German Shepard</option>
              <option value="bullDog">Bull dog</option>
              <option value="beegle">Beegle</option>
            </select>
            <p className="Question">Please fill in your details</p>
            <div class="mb-3">
              <h6>Fullname </h6>
              <input
                style={{ padding: "10px" }}
                type="text"
                class="form-control"
                id="name"
              />
            </div>
            <div class="mb-3">
              <h6>Email </h6>
              <input
                style={{ padding: "10px" }}
                type="email"
                class="form-control"
                id="email"
              />
            </div>
            <div class="mb-3">
              <h6>Phone </h6>
              <input
                style={{ padding: "10px" }}
                type="number"
                class="form-control"
                id="phone"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <button
              class="btn btn-inline-primary"
              type="button"
              style={{
                background: "#ff6584",
                outline: "#ff6584",
                padding: "10px",
                marginLeft: "450px",
              }}
            >
             REQUEST FOR ADOPTION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adopt;
