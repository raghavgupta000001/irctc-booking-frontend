import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    from_station: "",
    to_station: "",
    journey_date: "",
    train_number: "",
    class_name: "",
    mobile: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted:", form);

    alert("Booking request submitted (backend not connected yet)");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>IRCTC Ticket Booking</h2>

      <input name="username" placeholder="IRCTC Username" onChange={handleChange} />
      <input name="password" type="password" placeholder="IRCTC Password" onChange={handleChange} />

      <input name="from_station" placeholder="From Station" onChange={handleChange} />
      <input name="to_station" placeholder="To Station" onChange={handleChange} />

      <input name="journey_date" type="date" onChange={handleChange} />

      <input name="train_number" placeholder="Train Number" onChange={handleChange} />
      <input name="class_name" placeholder="Class (e.g. 2A)" onChange={handleChange} />

      <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />

      <button type="submit">Start Booking</button>
    </form>
  );
}
