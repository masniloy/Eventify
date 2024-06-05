import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditEvent() {
    const { _id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState({});
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        async function load() {
            const categoriesData = await axios.get("http://localhost:3000/categories");
            if (categoriesData?.status === 200) {
                setCategories(categoriesData?.data);
            }

            const recipeData = await axios.get(`http://localhost:5000/events/${_id}`);
            if (recipeData?.status === 200) {
                setRecipeDetails(recipeData?.data);
            }
        }
        load();
    }, [_id]);

    const handleUpdateRecipe = async () => {
        await axios.patch(`http://localhost:5000/events/${_id}`, formData);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const handleUpdateProductClick = (e) => {
        e.preventDefault();

        const form = e.target.form;
        const title = form.title.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const recipeData = {
            _id,
            title,
            price,
            category,
            description,
        };

        setFormData(recipeData);
        setShowModal(true);
    };

    const confirmUpdateProduct = async () => {
        setShowModal(false);
        await handleUpdateRecipe();
    };
    return (
        <div>
            <div className="sm:flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 w-full rounded-lg shadow-lg sm:w-1/2">
                    <h2 className="text-2xl font-semibold mb-2">Edit Event Details</h2>
                    <form key={recipeDetails._id}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Title *</label>
                            <input name="title" type="text" defaultValue={recipeDetails?.title} className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="">Category *</label>
                            <select name="category" className="input input-bordered w-full">
                                {categories?.map((category) => (
                                    <option
                                        key={category?._id}
                                        selected={category?.title === recipeDetails?.category}
                                        value={category?.title}
                                    >
                                        {category?.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description *</label>
                            <textarea
                                name="description"
                                defaultValue={recipeDetails?.description}
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Price *</label>
                            <input
                                name="price"
                                type="number"
                                defaultValue={recipeDetails?.price}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="flex justify-end">

                            <button onClick={handleUpdateProductClick} type="button" className="btn bg-color text-white">
                                Update Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold">Confirm Update Product</h2>
                        <p>Are you sure you want to update this product?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setShowModal(false)} className="btn btn-ghost mr-2">
                                Cancel
                            </button>
                            <button onClick={confirmUpdateProduct} className="btn bg-color text-white">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showToast && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                    Updated successfully!
                </div>
            )}
        </div>
    )
}
