import React, { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getApps } from "firebase/app";

// ✅ Debug: Check if Firebase is initialized
console.log("Firebase apps:", getApps());

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 Log form data before sending
    console.log("Form data:", { name, email, message });

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      // ✅ Log document ID if added successfully
      console.log("Document written with ID: ", docRef.id);

      alert("Thank you! Your message has been received.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <br /><br />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <br /><br />

        <label>Message:</label><br />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <br /><br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
