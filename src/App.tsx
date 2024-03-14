import { useEffect, useState } from "react";
import { Button, Modal } from 'flowbite-react';
import CardComponent from "./components/CardComponent";

type Status = "idle" | "loading" | "success" | "error";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function App() {
  const [count, setCount] = useState(0);
  const [prodcuts, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setStatus("loading");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
      });
  }, []);

  if (status === "loading") {
    return (
      <div className="grid place-content-center h-screen">
        <h1 className="text-6xl">Loading...</h1>
      </div>
    );
  }
  return (
    <>
    <div className="my-6 flex justify-center">
    <Button onClick={() => setOpenModal(true)}>Create Product</Button>
    </div>
      <hr />
      <div className="container mx-auto grid grid-flow-row grid-cols-5 gap-5">
        {prodcuts.map((prodcut) => (
          <CardComponent
            key={prodcut.id}
            title={prodcut.title}
            image={prodcut.image}
            price={prodcut.price}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
