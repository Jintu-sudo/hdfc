import { useState } from "react";
import "../styles/profile.css";

const initialProfile = {
  fullName: "Jintu Sharma",
  email: "jintu@example.com",
  phone: "+91 98765 43210",
  address: "123 Comic Lane, Guwahati, Assam, India",
};

const orders = [
  { name: "Batman: Arkham Knight Edition", price: "$34.99", status: "Delivered" },
  { name: "Naruto Uzumaki: Sage Mode Figure", price: "$24.99", status: "Shipped" },
  { name: "Darth Vader: Dark Lord Edition", price: "$42.99", status: "Processing" },
];

export default function Profile() {
  const [saved, setSaved] = useState(initialProfile); // shown in the header
  const [form, setForm] = useState(initialProfile);   // what's being edited
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(form);
    setMessage("Changes saved!");
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src="/assets/profile.png" alt="Profile Picture" className="profile-avatar" />
        <div>
          <h1>{saved.fullName}</h1>
          <p className="profile-email">{saved.email}</p>
        </div>
      </div>

      <div className="profile-section">
        <h2>Account Details</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />

          <label htmlFor="address">Shipping Address</label>
          <textarea id="address" name="address" rows="3" value={form.address} onChange={handleChange} />

          <button type="submit" className="save-btn">Save Changes</button>
          {message && <p className="save-message">{message}</p>}
        </form>
      </div>

      <div className="profile-section">
        <h2>Order History</h2>
        <ul className="order-list">
          {orders.map((o) => (
            <li key={o.name}>
              <span>{o.name}</span>
              <span>{o.price}</span>
              <span className="order-status">{o.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
