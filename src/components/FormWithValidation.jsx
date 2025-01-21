import React, { useState } from "react";

const FormWithValidation = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        // Validate Username
        if (!formData.username.trim()) {
            newErrors.name = "Name is required.";
        }

        // Validate Password
        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Form submitted successfully:", formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md p-5 mx-auto mt-10 bg-white rounded-md shadow-md"
        >
            <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`mt-1 block w-full p-2 border rounded-md ${errors.username ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.username && (
                    <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`mt-1 block w-full p-2 border rounded-md ${errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
            </div>

            <button
                type="submit"
                className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default FormWithValidation;
