import "./modal.scss";

export default function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <p className="modal-header">Header</p>
        </div>
        {children}
        <div className="modal-button">
          <button className="modal-close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
