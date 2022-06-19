import React, { useState } from "react";
import Link from "next/link";
import TextInput from "../TextInput";
import Button from "../Button";
import { useRouter } from "next/router";
import { postData } from "../../utils/fetchData";

export default function FormSignup() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await postData("api/v1/participants/auth/signup");
    } catch (err) {}
  };
  return (
    <form action="" className="form-login d-flex flex-column mt-4 mt-md-0">
      <TextInput
        label={"First Name"}
        type={"text"}
        value={form.firstName}
        placeholder="first name here"
        onChange={handleChange}
      />
      <TextInput
        label={"Last Name"}
        type={"text"}
        value={form.lastName}
        placeholder="last name here"
        onChange={handleChange}
      />
      <TextInput
        label={"Email"}
        type={"email"}
        value={form.email}
        placeholder={"semina@bwa.com"}
        onChange={handleChange}
      />

      <TextInput
        label={"Password (6 characters)"}
        type={"password"}
        value={form.password}
        placeholder="Type your Password"
        onChange={handleChange}
      />
      <TextInput
        label={"Role"}
        type={"text"}
        value={form.role}
        placeholder="ex: Produk Designer"
        onChange={handleChange}
      />

      <div className="d-grid mt-2">
        <Button variant={"btn-green"} action={handleSubmit}>
          Sign Up
        </Button>
      </div>
    </form>
  );
}
