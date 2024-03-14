import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";

type ErrorType = {
  title: string;
  price: string;
};
export default function FormCardProduct({getDataForm}:any) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronic");
  const [image, setImage] = useState("https://via.placeholder.com/150");

  const [error, setError] = useState<ErrorType>({
    title: "",
    price: "",
  });
  //   Validation
  useEffect(() => {
    if (title.length < 3) {
      setError((prev) => {
        console.log(prev);
        return { ...prev, title: "Title must be at least 3 characters", };
      });
    }else{
        setError((prev) => {
            console.log(prev);
            return {
                ...prev,
                title: "",
            };
            
        })
    }
    if (price < 0) {
      setError((prev) => {
        console.log(prev);
        
        return {...prev,
             price: "Please must to be greater than 0",};
      });
    }else {
        setError((prev) => {
            console.log(prev);
            return {
                ...prev, price: "",
            };          
        });
    }
  }, [title, price]);

  useEffect(() => {
    getDataForm({title, price, description, category, image})
  }, [title, price, description, category, image])
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Product title" />
        </div>
        <TextInput
          id="title"
          type="text"
          placeholder="Apple Vision Pro"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        {error.title && <p className="text-red-500">{error.title}</p>}
        
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="product Price" />
        </div>
        <TextInput
          id="price"
          type="number"
          required
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        {error.price && <p className="text-red-500">{error.price}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="product Description" />
        </div>
        <Textarea
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </form>
  );
}
