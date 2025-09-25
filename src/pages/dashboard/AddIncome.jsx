import { React, useState } from "react";

export default function AddIncome() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !amount || !category || !description || !date) {
            alert("Fill out the out fields!");
            return;
        }

        console.log("Tranaction Added.");

        setTitle("");
        setAmount("");
        setCategory("");
        setDescription("");
        setDate("");
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-w">
                Add New Income
            </h2>

            <form onSumbit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Title</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark-text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={title}
                            placeholder = "e.g Freelance Project"
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </div>
                
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Amount</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark-text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={amount}
                            placeholder = "e.g ₦2,000"
                            onChange={(e) => setAmount(e.target.value)} 
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</label>
                        <select 
                            value={category} 
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus-ring-2 focus:ring-blue-500"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">-- Select Category --</option>
                            <option value="salary">Salary</option>
                            <option value="freelance">Freelance</option>
                            <option value="bonus">Bonus</option>
                            <option value="business">Business</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Date</label>
                        <input 
                            type="date" 
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark-text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={date}
                            onChange={(e) => setDate(e.target.value)} 
                        />
                    </div>

                    <div class="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Description</label>
                        <textarea 
                            cols="30" 
                            rows="5"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark-text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} 
                        ></textarea>
                    </div>

                    <div class="col-span-1 flex justify-end">
                        <button 
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration"
                            type="submit"
                            >
                            Save Income
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}