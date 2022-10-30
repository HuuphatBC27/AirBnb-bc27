import React from "react";

// để đăng kí dữ liệu cần các key giống trên sever Data : id, name, email ,password,phone, birthday , gender, role
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birtday: "",
      gender: null,
      role: "USER",
    },

    //chế độ kích hoạt validation mặc định là onSubmit
    mode: "onTouched",
  });

  // đăng kí đúng
  const onSubmit = (values) => {
    console.log(values);
  };

  // khi đăng kí nhưng sai validation nó sẽ chạy vào hàm :
  // nhưng hàm này chỉ lấy được trong function
  const onError = (error) => {
    console.log(error);
  };

  // muốn lấy ở ngoài để hiển thị ra giao diện phải lấy từ hook useForm : formState

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
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input
            type="text"
            placeholder="Account"
            {...register("name", {
              required: {
                value: true,
                message: "tài khoản không được để trống",
              },
              minLength: {
                value: 5,
                message: " tài khoản phải từ 5 đến 20 kí tự",
              },
              maxLength: {
                value: 20,
                message: "tài khoản phải từ  5 đến 20 kí tự",
              },
            })}
          />

          {errors.name && <p> {errors.name.message}</p>}
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email không được để trống" },
            })}
          />
        </div>
        <input
          type="text"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <input
          type="text"
          placeholder="Phone"
          {...register("phone", { required: true })}
        />
        <input
          type="text"
          placeholder="Birthday"
          {...register("birtday", { required: true })}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
