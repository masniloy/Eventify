import axios from "axios";
import { useEffect, useState } from "react";

export default function AddEvents() {
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({});
    const [formResetKey, setFormResetKey] = useState(Date.now());

    useEffect(() => {
        async function load() {
            const data = await axios.get("http://localhost:3000/categories");
            if (data?.status === 200) {
                setCategories(data?.data);
            }
        }
        load();
    }, []);

    const handleCreateRecipe = async () => {
        await axios.post("http://localhost:3000/events", formData);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
        setFormResetKey(Date.now());
    };

    const handleAddProductClick = (e) => {
        e.preventDefault();

        const form = e.target.form;
        const id = form.id.value;
        const title = form.title.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const recipeData = {
            id,
            title,
            price,
            category,
            description,
        };

        setFormData(recipeData);
        setShowModal(true);
    };

    const confirmAddProduct = async () => {
        setShowModal(false);
        await handleCreateRecipe();
    };



    return (
        <div>
            <div className="sm:flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 w-full rounded-lg shadow-lg sm:w-1/2">
                    <h2 className="text-2xl font-semibold mb-2">Add new item</h2>
                    <form key={formResetKey}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Id *</label>
                            <input required name="id" type="text" placeholder="Id for your product" className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Title *</label>
                            <input required name="title" type="text" placeholder="Title for your product" className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="">Category *</label>
                            <select required name="category" id="" className="input input-bordered w-full">
                                {categories?.map((category) => (
                                    <option key={category?.id} value={category?.title}>
                                        {category?.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description *</label>
                            <textarea required name="description" placeholder="Describe your product" className="textarea textarea-bordered w-full"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Price *</label>
                            <input required name="price" type="number" placeholder="Enter amount" className="input input-bordered w-full" />
                        </div>
                        <div className="flex justify-end">

                            <button onClick={handleAddProductClick} type="button" className="btn bg-color text-white">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold">Confirm Add Product</h2>
                        <p>Are you sure you want to add this product?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setShowModal(false)} className="btn btn-ghost mr-2">Cancel</button>
                            <button onClick={confirmAddProduct} className="btn bg-color text-white">Confirm</button>
                        </div>
                    </div>
                </div>
            )}

            {showToast && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                    Added successfully!
                </div>
            )}
        </div>
    )
}
