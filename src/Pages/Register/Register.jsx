import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { emailSignUp, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Succesfully account created");
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };

  const handleSubmit = (event) => {
    // default reload disable
    event.preventDefault();

    // get value from the input field
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    // validate the password
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      toast.error(
        "Minimum eight characters, at least one letter, one number and one special character"
      );
      return;
    }

    // create user with email and password
    emailSignUp(email, password)
      .then((result) => {
        updateProfile(result.user, { displayName: name, photoURL: photo });
        toast.success("Succesfully account created");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div data-aos="fade-left" className="hero-content mx-auto">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div>
          <h2 className="mt-6 text-3xl mx-auto w-40 font-extrabold text-neutral-600">
            Register .
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-neutral-600">
                Have An Account?
              </span>
            </div>
          </div>
          <div>
            <Link to={"/login"}>
              <button
                type="submit"
                className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Log In
              </button>
            </Link>
          </div>
        </form>
        {/* Log in with google */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-neutral-600">
              Or continue with
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={handleGoogle}
            type="submit"
            className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4"> Log in with Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
