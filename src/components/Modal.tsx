interface iProps {
  button: any;
  title: string;
  children: any;
}
export const Modal = ({ button, title, children }: iProps) => {
  const random =
    Math.floor(
      Math.random() *
        10000000000000000000000000000000000000000000000000000000000
    ) + 1;
  return (
    <div>
      <div data-bs-toggle="modal" data-bs-target={`#exampleModal_${random}`}>
        {button}
      </div>

      <div
        className="modal fade"
        id={`exampleModal_${random}`}
        tabIndex={-1}
        aria-labelledby={`exampleModalLabel_${random}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xxl">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id={`exampleModalLabel_${random}`}
              >
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
