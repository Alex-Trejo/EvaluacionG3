import React, { useState } from 'react';

function ContactForm() {
    const [formValues, setFormValues] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formValues.fullname) {
            newErrors.fullname = 'Full Name is required';
        }

        if (!formValues.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!formValues.subject) {
            newErrors.subject = 'Subject is required';
        }

        if (!formValues.message) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            alert('Sent Successfully!');
            // Aquí puedes añadir la lógica para enviar el formulario si es necesario
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
            <div className="text-center px-6">
                <h2 className="text-gray-800 text-3xl font-extrabold">Contact Us</h2>
                <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help?</p>
            </div>

            <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
                <div className="bg-[#011c2b] rounded-lg p-6 h-full max-lg:order-1">
                    <h2 className="text-xl text-white">Contact Information</h2>
                    <p className="text-sm text-gray-300 mt-4">Have some big idea or brand to develop and need help?</p>

                    <ul className="mt-16 space-y-8">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 479.058 479.058">
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    data-original="#000000" />
                            </svg>
                            <a href="mailto:cityTH@gmail.com" className="text-white text-sm text-gray-500 ml-4">
                                cityTH@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 482.6 482.6">
                                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 7.9 0 13.5-5.4 17.1-8.9l36-36.1c6.2-6.2 12.5-9.4 18.7-9.4s12.5 3.2 18.7 9.4l60.1 60.1c12.5 12.5 12.5 23.9 0 36.6-4.6 4.8-9.3 9.6-14.2 14.4-7 6.7-13.7 13-19.5 20-11.2 13.6-24.1 19.8-42.8 18.6-33.7-2.2-63.2-15.7-86.5-26.5-63.4-30.2-117.5-72.4-162.4-126.8-37.2-44.4-61.1-84.6-77.8-127.4-10.5-28.6-14.5-50.7-12.8-69.7z"
                                    data-original="#000000" />
                            </svg>
                            <a href="tel:+91-888-555-1212" className="text-white text-sm text-gray-500 ml-4">
                                +91-888-555-1212
                            </a>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 512 512">
                                <path
                                    d="M437.332 0H74.668C33.53 0 0 33.53 0 74.668v362.664C0 478.47 33.53 512 74.668 512h362.664C478.47 512 512 478.47 512 437.332V74.668C512 33.53 478.47 0 437.332 0zM352 53.332c11.76 0 21.332 9.572 21.332 21.336 0 11.76-9.572 21.332-21.332 21.332S330.668 86.428 330.668 74.668c0-11.764 9.572-21.336 21.332-21.336zM256 106.668c82.354 0 149.332 66.978 149.332 149.332s-66.978 149.332-149.332 149.332-149.332-66.978-149.332-149.332 66.978-149.332 149.332-149.332zM53.332 74.668c0-11.764 9.572-21.336 21.336-21.336h37.332c11.76 0 21.332 9.572 21.332 21.336 0 11.76-9.572 21.332-21.332 21.332H74.668c-11.764 0-21.336-9.572-21.336-21.332zm405.336 362.664c0 11.764-9.572 21.336-21.336 21.336H74.668c-11.764 0-21.336-9.572-21.336-21.336V181.332h55.006C100.32 204.258 95.998 226.208 95.998 249.334c0 88.187 71.815 160 160.002 160s160-71.813 160-160c0-23.126-4.322-45.076-12.34-67.997h55.008v256z"
                                    data-original="#000000" />
                            </svg>
                            <a href="https://www.google.com/maps/place/City+of+Thane/@19.2183307,72.9780897,12z/data=!3m1!4b1!4m6!3m5!1s0x3be7b97e06ea6527:0x8741a56ff8dcf03c!8m2!3d19.21833!4d72.9780897!16zL20vMDQ3LTM5MzA">
                                <p className="text-white text-sm text-gray-500 ml-4"> City of Thane, Maharashtra</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="lg:col-span-2 max-lg:order-2 mt-4 p-2 lg:p-6">
                    <form onSubmit={handleSubmit} className="max-lg:grid max-lg:grid-cols-2 gap-4">
                        <div className="mt-4 max-lg:col-span-2">
                            <label htmlFor="fullname" className="text-sm">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                id="fullname"
                                name="fullname"
                                value={formValues.fullname}
                                onChange={handleInputChange}
                                className="mt-2 py-3 px-4 block w-full border border-slate-200 rounded-md text-sm focus:border-[#2d70f1] focus:ring-[#2d70f1]"
                            />
                            {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
                        </div>

                        <div className="mt-4 max-lg:col-span-2">
                            <label htmlFor="email" className="text-sm">Email Address</label>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                className="mt-2 py-3 px-4 block w-full border border-slate-200 rounded-md text-sm focus:border-[#2d70f1] focus:ring-[#2d70f1]"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mt-4 max-lg:col-span-2">
                            <label htmlFor="subject" className="text-sm">Subject</label>
                            <input
                                type="text"
                                placeholder="Subject"
                                id="subject"
                                name="subject"
                                value={formValues.subject}
                                onChange={handleInputChange}
                                className="mt-2 py-3 px-4 block w-full border border-slate-200 rounded-md text-sm focus:border-[#2d70f1] focus:ring-[#2d70f1]"
                            />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                        </div>

                        <div className="mt-4 max-lg:col-span-2">
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea
                                placeholder="Leave your message"
                                id="message"
                                name="message"
                                value={formValues.message}
                                onChange={handleInputChange}
                                className="mt-2 py-3 px-4 block w-full border border-slate-200 rounded-md text-sm focus:border-[#2d70f1] focus:ring-[#2d70f1]"
                                rows="4"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <div className="mt-4 max-lg:col-span-2">
                            <button type="submit" className="w-full inline-flex items-center justify-center py-3 px-6 rounded-md border border-transparent bg-customized-700 text-base font-medium text-white hover:bg-customized-600">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
