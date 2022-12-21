import React, { useEffect, useState } from "react";

function Giveaway() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pet_type: "",
    breed: "",
  });

  const options = ["Dog", "Cat"];
  const [petType, setPetType] = useState(options[0]);
  const [petBreed, setPetBreed] = useState("German Shepherd");

  useEffect(() => {
    setPetType(petType);
    setFormData({ ...formData, pet_type: petType });
  }, [petType]);
  const handleChangePet = (e) => {
    setPetType(e.target.value);
  };
  const handleChangeBreed = (e) => {
    setPetBreed(e.target.value);
  };
  const optionsBreedDog = [
    "Poodle",
    "Labrador",
    "German Shepherd",
    "Golden Retriever",
    "Bulldog",
    "Beagle",
  ];
  const optionsBreedCat = [
    "Persian",
    "Maine Co",
    "Ragdoll",
    "Siamese",
    "Bengal",
    "Sphynx",
   
  ];

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    pet_type: "",
    breed: "",
  });

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let petTypeError = "";
    let breedError = "";
    if (!formData.name) {
      nameError = "Name cannot be blank";
    }
    if (!formData.email.includes("@")) {
      emailError = "Invalid email";
      if (!formData.email.includes(".")) {
        emailError = "Invalid email";
      }
    }
    if (!formData.phone) {
      if (formData.phone.length !== 10) {
        phoneError = "Invalid phone number";
      }
      if (!formData.phone.match(/^[0-9]+$/)) {
        phoneError = "Invalid phone number";
      }
      if (!formData.phone.startsWith("+91")) {
        phoneError = "Invalid phone number";
      }

      phoneError = "Phone cannot be blank";
    }
    if (!formData.pet_type) {
      petTypeError = "Pet type cannot be blank";
    }
    if (!formData.breed) {
      breedError = "Breed cannot be blank";
      if (
        !optionsBreedDog.includes(formData.breed) &&
        !optionsBreedCat.includes(formData.breed)
      ) {
        breedError = "Breed is not valid";
      }
    }
    if (nameError || emailError || phoneError || petTypeError || breedError) {
      setErrors({
        name: nameError,
        email: emailError,
        phone: phoneError,
        pet_type: petTypeError,
        breed: breedError,
      });
      return false;
    }
    return true;
  };

  return (
    <div
      className="formContainer"
      style={{ margin: "20px", fontSize: "small" }}
    >
      <p className="caption">Give Away</p>
      <p className="Question">What pet do you want to give away ?</p>
      <div className="flex flex-col justify-center items-start">
        <form>
          <div className="col-lg-3">
            <h6>Pet type </h6>

            <select
              className="form-select form-select-lg mb-3"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            >
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <h6>Breed</h6>
            <select
              className="form-select form-select-lg mb-3"
              value={petBreed}
              onChange={(e) =>
                setFormData({ ...formData, breed: e.target.value })
              }
            >
              {optionsBreedDog.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <p className="Question">Please fill in your details</p>
            <div class="mb-3">
              <h6>Fullname </h6>
              <input
                style={{ padding: "10px" }}
                type="text"
                class="form-control"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div class="mb-3">
              <h6>Email </h6>
              <input
                style={{ padding: "10px" }}
                type="email"
                class="form-control"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div class="mb-3">
              <h6>Phone </h6>
              <input
                style={{ padding: "10px" }}
                type="number"
                class="form-control"
                id="phone"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
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
              onClick={() => {
                const isValid = validate();
                if (isValid) {
                  console.log(formData);
                  localStorage.setItem(
                    "formData_adopt",
                    JSON.stringify(formData)
                  );
                  alert("Form submitted successfully");
                } else {
                  alert("Form has errors");
                }
              }}
            >
              REQUEST FOR GIVE AWAY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Giveaway;
