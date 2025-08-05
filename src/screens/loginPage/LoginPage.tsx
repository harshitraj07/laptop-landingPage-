import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginPage.module.css";

type LoginData = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log("Login Data:", data);
    // Handle login logic here
  };

  return (
    <div className={styles.appContainer}>
      {/* Left Side - Login Form */}
      <div className={styles.leftContainer}>
        <div className={styles.formWrapper}>
          <h2>Welcome Back, Creator!</h2>
          <p className={styles.subtitle}>Your digital workspace is waiting.</p>

          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={`${styles.input} ${
                  errors.email ? styles.errorInput : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`${styles.input} ${
                    errors.password ? styles.errorInput : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className={styles.showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className={styles.errorMessage}>{errors.password.message}</p>
              )}
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="remember"
                className={styles.checkbox}
                {...register("remember")}
              />
              <label htmlFor="remember" className={styles.checkboxLabel}>
                Remember me
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Login
            </button>

            <p className={styles.signupText}>
              Don't have an account?{" "}
              <a href="/signup" className={styles.signupLink}>
                Sign up
              </a>
            </p>
          </form>
          <img
          src="https://i.postimg.cc/wxJqK7K2/steptodown-com440187.png"
          alt="Laptop Workspace"
          className={styles.leftContainerImage}
        />
        </div>
      </div>

      {/* Right Side - Motivational Content */}
      <div className={styles.rightContainer}>
        <div className={styles.overlay}></div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80
"
          alt="Laptop Workspace"
          className={styles.backgroundImage}
        />
        <div className={styles.content}>
          <h1>Step Into Your Digital Playground</h1>
          <p>Your workspace is ready — filled with tools, insights, and opportunities to help you grow, innovate, and lead.</p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
