import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";
import { AuthState } from "../../context/AuthContext";
import api from "../../api";
import styles from "./Profile.module.css";

export default function Profile() {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    state: { isLoading },
    authDispatch,
  } = AuthState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await api.findUser();
        if (res.data.error) {
          toast.error(res.data.errorMsg);
        } else {
          setFname(res.data.fname);
          setLname(res.data.lname);
          setEmail(res.data.email);
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.errorMsg || "Something went wrong!");
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      authDispatch({ type: "SET_LOADING", payload: { status: true } });
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await api.logout({ data: { refreshToken } });
      if (!res.data.error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        toast.success(res.data.msg);
        authDispatch({ type: "LOGOUT" });
        navigate("/");
      }
      authDispatch({ type: "SET_LOADING", payload: { status: false } });
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.error || "Something went wrong!");
      authDispatch({ type: "SET_LOADING", payload: { status: false } });
    }
  };

  const handleProfileUpdate = async (event) => {
    event.preventDefault();

    try {
      authDispatch({ type: "SET_LOADING", payload: { status: true } });
      const profileData = { fname, lname };
      const res = await api.updateProfile(profileData);
      if (res.data.error) {
        toast.error(res.data.errorMsg);
      } else {
        authDispatch({ type: "SET_LOADING", payload: { status: false } });
        toast.success(res.data.msg);
        setSubmitted(true);
      }
      authDispatch({ type: "SET_LOADING", payload: { status: false } });
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.error || "Something went wrong!");
      authDispatch({ type: "SET_LOADING", payload: { status: false } });
    }
  };

  return (
    <section className={styles.profile}>
      {isLoading ? (
        <Skeleton width={"80vw"} height={300} />
      ) : (
        <>
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
          <form
            className={styles.details}
            onSubmit={submitted ? () => {} : handleProfileUpdate}
          >
            <label htmlFor="fname">First Name:</label>
            <input
              id="fname"
              name="fname"
              type="text"
              autoComplete="off"
              required
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label htmlFor="lname">Last Name:</label>
            <input
              id="lname"
              name="lname"
              type="text"
              autoComplete="off"
              required
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              required
              disabled
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              style={{
                backgroundColor: `${submitted && "#65B741"}`,
                cursor: `${submitted && "not-allowed"}`,
              }}
              disabled={submitted ? true : false}
            >
              {submitted ? "✔ Profile Updated!" : "Update Profile"}
            </button>
          </form>
        </>
      )}
    </section>
  );
}
