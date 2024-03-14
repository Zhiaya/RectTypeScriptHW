import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import CardComponent from "./components/CardComponent";
import FormCardProduct from "./components/FormCardProduct";
import MyFooter from "./components/MyFooter";
import MyNavBar from "./components/MyNavBar";

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
  const [dataForm, setDataForm] = useState({});
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

  function getDataform(prodcut: any) {
    console.log(prodcut);
  }

  function getDataForm(product: any) {
    setDataForm(product);
  }

  const createProduct = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Create Product Success");
        
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      setOpenModal(false);
  };
  return (
    <>
    <MyNavBar/>
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
      <MyFooter/>

      {/* Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Product</Modal.Header>
        <Modal.Body>
          <FormCardProduct getDataForm={getDataform} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => createProduct()}>create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            cencel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
