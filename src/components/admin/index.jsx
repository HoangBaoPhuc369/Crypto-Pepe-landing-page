import { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const Admin = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const qGetValue = useQuery("defaultValue", async () => {
    try {
      const response = await axios.get("https://cryptopepe.onrender.com");
      setInputValue(response.data);
      return response.data;
    } catch (error) {
      toast.error("Network response was not ok!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      setInputValue("");
      try {
        const response = await axios.post("https://cryptopepe.onrender.com", {
          name: inputValue,
        });
        toast.success("Edit successful!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/");
        return response.data;
      } catch (error) {
        toast.error("Network response was not ok!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.warning("Please type something!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <form className="edit-form" onSubmit={(e) => handleSubmit(e)}>
        <label className="edit-label">
          Edit Contract:
          <input
            className="edit-input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button className="edit-button" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default Admin;
