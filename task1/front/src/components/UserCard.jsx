import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import cross from "../assets/icon.png";

export default function UserCard({ item }) {
  const [itemValue, setItemValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    setItemValue(item);
  }, []);
  const showModal = (item) => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      borderRadius: "16px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "468px",
    },
  };
  const modalContent = (
    <div className="modal">
      <div className="modalHeader">
        <div className="modalName">{item.name}</div>
        <div className="modalClose">
          <img src={cross} alt="closeWindow" onClick={closeModal} />
        </div>
      </div>
      <div className="modalBasicData">
        <div className="modalBasicDataHeaders">
          <p className="modalBasicDataHeaderP">Телефон:</p>
          <p className="modalBasicDataHeaderP">Почта:</p>
          <p className="modalBasicDataHeaderP">Дата приема:</p>
          <p className="modalBasicDataHeaderP">Должность:</p>
          <p className="modalBasicDataHeaderP">Подразделение:</p>
        </div>
        <div className="modalBasicDataData">
          <p className="modalBasicDataD">{item.phone}</p>
          <p className="modalBasicDataD">{item.email}</p>
          <p className="modalBasicDataD">{item.hire_date}</p>
          <p className="modalBasicDataD">{item.position_name}</p>
          <p className="modalBasicDataD">{item.department}</p>
        </div>
      </div>
      <div className="AdditionalData">
        <p className="AdditionalDataHeader">Дополнительная информация:</p>
        <p className="AdditionalDataData">
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="userCard" onClick={showModal}>
        <div className="userCardName">{item.name}</div>
        <div className="cardData">
          <img className="userCardImg" src={phone} alt="phoneImg" />
          {item.phone}
        </div>
        <div className="cardData">
          <img className="userCardImg" src={mail} alt="mailImg" />
          {item.email}
        </div>
      </div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {modalContent}
      </Modal>
    </>
  );
}
