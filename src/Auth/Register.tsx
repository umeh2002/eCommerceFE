import { BsFacebook, BsTwitter, BsGoogle, BsCamera } from "react-icons/bs";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const Register = () => {
  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[700px] h-[500px] border rounded-md flex justify-between">
        <div className="w-[40%] h-full px-7 flex flex-col items-center justify-center bg-[#737171] py-[20px]">
          {/* logo */}

          {/* text  */}
          <div className="text-[15px] font-bold text-white mt-8 mb-3">
            Login using social media to get quick access
          </div>
          {/* social Buttons */}
          <div className=" flex items-center justify-center px-2 w-[100%] h-[36px] bg-gray-600 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
            <div className="mr-2">
              <BsFacebook />
            </div>
            Signin with facebook
          </div>

          <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-green-700 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
            <div className="mr-2">
              <BsTwitter />
            </div>
            Signin with twitter
          </div>

          <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-rose-600 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
            <div className="mr-2">
              <BsGoogle />
            </div>
            Signin with google
          </div>
        </div>
        <form className="w-[60%] h-full flex flex-col bg-white justify-center p-7">
          {/* title */}
          <div className="font-bold text-[25px] text-rose-600 mb-5">
            Sign Up for Free!
          </div>

          {/* image */}

          {/* inputs */}
          {/* full name */}
          <div className="border-b-2 h-[40px] w-full">
            <input
              className=" outline-none w-full placeholder: text-[13px]"
              placeholder="Full Name"
              {...register("name")}
            />
            {errors.name?.message && (
              <div className="text-[10px] text-rose-600 text-end">
                error please input name!
              </div>
            )}
          </div>
          {/* email */}
          <div className="border-b-2 h-[40px] w-full mt-6">
            <input
              className=" w-full outline-none placeholder: text-[13px]"
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-[10px] text-rose-600 text-end">
                error please input email!
              </div>
            )}
          </div>
          {/* password */}
          <div className="border-b-2 h-[43px] w-full mt-6">
            {/* actual inputs */}
            <div className="flex">
              <input
                className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
                placeholder="password"
                {...register("password")}
              />
              <BsCamera className="text-rose-600 cursor-pointer" />
            </div>
            {/* error */}
            {errors.password?.message && (
              <div className="text-[10px] text-rose-600 text-end mb-3">
                error please input password!
              </div>
            )}
          </div>
          {/* confirm password */}
          <div className="border-b-2 h-[43px] w-full mt-6">
            {/* actual inputs */}
            <div className="flex">
              <input
                className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
                placeholder="confirm password"
                {...register("confirm")}
              />
              <BsCamera className="text-rose-600 cursor-pointer" />
            </div>
            {/* error */}
            {errors.confirm?.message && (
              <div className="text-[10px] text-rose-600 text-end mb-3">
                error please confirm password!
              </div>
            )}
          </div>

          {/* Button */}
          <button
            className="w-full bg-rose-700 h-[40px] rounded-md text-white text-[14px] cursor-pointer mt-4 "
            type="submit"
          >
            {" "}
            Sign Up with email
          </button>

          {/* to Signin */}
          <Link to="/sign-in">
            <div className=" text-rose-700 text-[13px] cursor-pointer mt-4 ">
              Already have an account?
              <span className="font-bold text-[20px]"> Sign In</span>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
