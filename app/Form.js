"use client";
import Form from "./Form";
import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    return <form onSubmit={(event) => { event.preventDefault(); alert(`Welcome, ${name}!`); }}>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
    </form>;}