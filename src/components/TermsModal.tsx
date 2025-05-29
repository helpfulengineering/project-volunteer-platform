import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasScrolledToBottom: boolean;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  onAccept: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  hasScrolledToBottom,
  onScroll,
  onAccept,
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      aria-labelledby="terms-and-conditions"
      size="lg"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="terms-and-conditions">
          Terms and Conditions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        onScroll={onScroll}
        style={{ maxHeight: "60vh", overflowY: "auto" }}
      >
        <div style={{ height: "1000px" }}>
          <p>
            By using this website, you agree to the following terms and conditions:
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            onClose();
            onAccept();
          }}
          disabled={!hasScrolledToBottom}
          variant="primary"
        >
          Close Terms
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TermsModal;
