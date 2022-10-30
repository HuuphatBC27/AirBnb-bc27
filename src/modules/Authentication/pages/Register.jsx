import React from "react";

// để đăng kí dữ liệu cần các key giống trên sever Data : id, name, email ,password,phone, birthday , gender, role
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm({
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

  const onSubmit = (values) => {
    console.log(values);
  };

  // const onSubmit = async (values) => {
  //   const newValue = {...values,birthday:pickDate}
  //   try {
  //     await handleRegister(newValue);
  //     navigate("/login");
  //     notification.success({
  //       message: "Đăng ký thành công",
  //     });
  //     console.log(newValue);
  //   } catch (error) {
  //     notification.error({
  //       message: "Đăng ký thất bại",
  //       description: error,
  //     });
  //   }
  // };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Account" {...register("name")} />
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="Password" {...register("password")} />
        <input type="text" placeholder="Phone" {...register("phone")} />
        <input type="text" placeholder="Birthday" {...register("birtday")} />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
