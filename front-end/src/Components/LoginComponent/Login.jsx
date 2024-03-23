import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessMessage, ErrorMessage } from "../message/Message";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../../redux/Slice/UserSlice";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  console.log(mutation);
  const { data } = mutation;
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (data && data.status === "Success") {
      setShowSuccessMessage(true);
      setTimeout(() => {
        navigate("/");
        localStorage.setItem(
          "access_token",
          JSON.stringify(data?.access_token)
        );
        if (data?.access_token) {
          const decode = jwtDecode(data?.access_token);
          console.log(decode);
          if (decode?.id) {
            handlegetDetailsUser(decode?.id, data?.access_token);
          }
        }
      }, 2000);
    } else if (data && data.status === "ERROR") {
      setShowErrorMessage(true);
    }
  }, [data]);
  const handlegetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(UpdateUser({ ...res?.data, access_token: token }));
  };

  const navigate = useNavigate();
  const hanldeNavigate = () => {
    navigate("/sign-up");
  };
  const handleonChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const hanldeSignIN = (e) => {
    mutation.mutate({
      email,
      password,
    });
    e.preventDefault();
  };
  return (
    <section className="flex items-center justify-center h-screen bg-[#f2f5f7]">
      <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 justify-center bg-white  text-slate-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm  text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form novalidate="" action="" className="space-y-6">
          {data && data.status === "Success" && (
            <SuccessMessage message="Login successful!" />
          )}
          {/* Error message */}
          {data && data.status === "ERROR" && (
            <ErrorMessage message="Login failed! Please try again." />
          )}
          <div className="space-y-2">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                value={email}
                onChange={handleonChange}
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md  border-gray-700     text-slate-900"
              />
            </div>
            <div>
              <label
                for="password"
                className=" mb-2 text-sm relative flex flex-col   "
              >
                Password
              </label>
              <div className="flex flex-row justify-center items-center">
                <input
                  value={password}
                  onChange={handleonChange}
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="****"
                  className="w-full px-4 py-3 border rounded-md   border-gray-700    text-slate-900 focus:border-violet-400"
                />
                <svg
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="absolute left-[910px] hover:cursor-pointer"
                >
                  <path
                    fill="#7a6dd3"
                    d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5m0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"
                  ></path>
                  <path
                    fill="#7a6dd3"
                    d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2s2-.916 2-2s-.916-2-2-2"
                  ></path>
                </svg>
              </div>
              <a
                href="*"
                className="flex text-xs hover:underline  justify-end  mt-4  text-gray-400"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="space-y-2">
            {data?.status === "ERROR" && (
              <span className="text-red-600 ">{data?.message}</span>
            )}

            <div>
              <button
                disabled={!email || !password}
                onClick={hanldeSignIN}
                type="button"
                className="w-full my-2 px-8 py-3 font-semibold rounded-md  bg-violet-400  text-gray-900 disabled:bg-slate-100 disabled:text-black"
              >
                Sign in
              </button>
            </div>

            <p className="px-6 text-sm text-center  text-gray-400">
              Don't have an account yet?
              <div
                onClick={hanldeNavigate}
                className="hover:cursor-pointer text-violet-400"
              >
                Sign up
              </div>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
