import React from "react";

// để đăng kí dữ liệu cần các key giống trên sever Data : id, name, email ,password,phone, birthday , gender, role
import { useForm } from "react-hook-form";

const Register = () => {
  useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birtday: "",
      gender: null,
      role: "USER",
    },
  });

  return <div>Register</div>;
};

export default Register;
