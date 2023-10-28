
import Footer from "./Footer";
import Navbar from "./Navbar";


const AddService = () => {



    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const type = form.type.value;
        const details = form.details.value;
      

        const newProduct = {name,  type, price,  details, image, }
        console.log(newProduct)

   
            fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
              })
      

            }


    return (
        <div>
<Navbar></Navbar>
<div className="  p-1">
            <div className=" mx-2 md:mx-10 lg:mx-24 mt-5 mb-10">

                <div className="bg-[url(https://i.ibb.co/4Nf3XQQ/4.jpg)] px-10 py-28 bg-no-repeat bg-center">
                   <h1 className=" my-3 text-4xl font-medium text-white font-rancho"> Add New Service</h1>
                   <button className=" text-white px-2 py-2 bg-[#FF3811]">Home/Service</button>
                </div>

                {/* Form */}
                <div className=" py-10 px-14  bg-[#F3F3F3] rounded-md">

                    <form onSubmit={handleAddProduct} className="">


                            <div className="flex gap-2">
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    // value={coffeeData.name}
                                    // onChange={handleInputChange}
                                    placeholder="Service Name"
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>

                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="taste text-gray-200">
                                    Price:
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    // value={coffeeData.taste}
                                    // onChange={handleInputChange}
                                    placeholder="Service Price"
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>

                            </div>


                            <div className="flex gap-2">
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="supplier">
                                    Type:
                                </label>
                                <input
                                    type="text"
                                    name="type"
                                    // value={coffeeData.supplier}
                                    // onChange={handleInputChange}
                                    placeholder="Service Type"
                                    className="w-full border rounded px-3 py-2 "
                                />
                                </div>

                                
                            <div className="mb-4">
                            <label className="block font-semibold text-gray-200" htmlFor="photo">
                                Image:
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter Photo URL"
                                // onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            />
                            </div>

                            </div>

                            <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="details">
                                    Details:
                                </label>
                                <textarea
                                    name="details"
                                    // value={coffeeData.details}
                                    // onChange={handleInputChange}
                                    placeholder="Enter Details"
                                    className="w-full h-[42px] border rounded px-3 py-2"
                                />
                                </div>


                          <center>  <button
                            type="submit"
                            className="bg-[#FF3811] text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                            >
                            Add Product
                            </button></center>
      </form>
                </div>

            </div>
            <Footer></Footer>
        </div>


        </div>
    );
};

export default AddService;