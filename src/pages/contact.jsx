import React, { useState } from "react";
import axios from "axios";
import Image from "../assets/image.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    phone: "",
    country: "",
    company: "",
    companyType: "",
    message: "",
    acceptedPrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptedPrivacy) {
      alert("Please agree to the Privacy Policy.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/contacts", formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className=" text-lg font-semibold uppercase mb-2">Contact</h2>
        <h1 className="text-6xl font-bold">Get in touch</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Get in touch with our experts and secure an edge in automation.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="hidden md:block">
          <img
            src={Image}
            alt="Contact illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Business Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            />
            <input
              type="text"
              name="job"
              placeholder="Job Title"
              value={formData.job}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md"
            >
              <option value="">Select Country*</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Belize</option>
              <option>Benin</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>Bosnia and Herzegovina</option>
              <option>Botswana</option>
              <option>Brazil</option>
              <option>Brunei</option>
              <option>Bulgaria</option>
              <option>Burkina Faso</option>
              <option>Burundi</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>Cape Verde</option>
              <option>Central African Republic</option>
              <option>Chad</option>
              <option>Chile</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>Costa Rica</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czech Republic</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>El Salvador</option>
              <option>Equatorial Guinea</option>
              <option>Eritrea</option>
              <option>Estonia</option>
              <option>Eswatini</option>
              <option>Ethiopia</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>Gabon</option>
              <option>Gambia</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Greece</option>
              <option>Grenada</option>
              <option>Guatemala</option>
              <option>Guinea</option>
              <option>Guyana</option>
              <option>Haiti</option>
              <option>Honduras</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kiribati</option>
              <option>Kuwait</option>
              <option>Kyrgyzstan</option>
              <option>Laos</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Lesotho</option>
              <option>Liberia</option>
              <option>Libya</option>
              <option>Liechtenstein</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Mauritania</option>
              <option>Mauritius</option>
              <option>Mexico</option>
              <option>Moldova</option>
              <option>Monaco</option>
              <option>Mongolia</option>
              <option>Montenegro</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar</option>
              <option>Namibia</option>
              <option>Nepal</option>
              <option>Netherlands</option>
              <option>New Zealand</option>
              <option>Nicaragua</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>North Korea</option>
              <option>North Macedonia</option>
              <option>Norway</option>
              <option>Oman</option>
              <option>Pakistan</option>
              <option>Palestine</option>
              <option>Panama</option>
              <option>Papua New Guinea</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Philippines</option>
              <option>Poland</option>
              <option>Portugal</option>
              <option>Qatar</option>
              <option>Romania</option>
              <option>Russia</option>
              <option>Rwanda</option>
              <option>Saint Kitts and Nevis</option>
              <option>Saint Lucia</option>
              <option>Saint Vincent</option>
              <option>Samoa</option>
              <option>San Marino</option>
              <option>Sao Tome and Principe</option>
              <option>Saudi Arabia</option>
              <option>Senegal</option>
              <option>Serbia</option>
              <option>Seychelles</option>
              <option>Sierra Leone</option>
              <option>Singapore</option>
              <option>Slovakia</option>
              <option>Slovenia</option>
              <option>Solomon Islands</option>
              <option>Somalia</option>
              <option>South Africa</option>
              <option>South Korea</option>
              <option>South Sudan</option>
              <option>Spain</option>
              <option>Sri Lanka</option>
              <option>Sudan</option>
              <option>Suriname</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>Syria</option>
              <option>Taiwan</option>
              <option>Tajikistan</option>
              <option>Tanzania</option>
              <option>Thailand</option>
              <option>Togo</option>
              <option>Tonga</option>
              <option>Trinidad and Tobago</option>
              <option>Tunisia</option>
              <option>Turkey</option>
              <option>Turkmenistan</option>
              <option>Tuvalu</option>
              <option>Uganda</option>
              <option>Ukraine</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>Uzbekistan</option>
              <option>Vanuatu</option>
              <option>Vatican City</option>
              <option>Venezuela</option>
              <option>Vietnam</option>
              <option>Yemen</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              placeholder="Company Name*"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            />
            <select
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md"
            >
              <option value="">Company Type*</option>
              <option>Distributor</option>
              <option>OEM</option>
              <option>System Integrator</option>
              <option>End user</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md"
          />

          {/* Checkbox and Button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <label className="flex items-start text-sm text-gray-700">
              <input
                type="checkbox"
                name="acceptedPrivacy"
                checked={formData.acceptedPrivacy}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              I have read and agree to the{" "}
              <a
                href="/privacy-policy"
                className="text-[#5039bf] ml-1 underline"
              >
                Privacy Policy
              </a>
            </label>
            <button
              type="submit"
              className="bg-[#5039bf] text-white px-6 py-3 rounded-md hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
