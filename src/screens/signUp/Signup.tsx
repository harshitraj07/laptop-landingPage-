import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

type FormData = {
  fullName: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

const Signup: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const password = watch('password');

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };
  const navigate = useNavigate();

  return (
    <div className={styles.appContainer}>
      {/* Left Side */}
      <div className={styles.leftContainer}>
        <div className={styles.overlay}></div>
        <img
          src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Tech Setup"
          className={styles.backgroundImage}
        />
        <div className={styles.content}>
          <h1>Build Your Digital Future</h1>
          <p>
            Join thousands of professionals who trust our platform to find their perfect tech match.
            Create your account and unlock exclusive benefits today.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={styles.rightContainer}>
        <div className={styles.formWrapper}>
          <h2>Create Your Account</h2>
          <p className={styles.subtitle}>Join us and take the first step towards your tech journey</p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Full Name"
                className={`${styles.input} ${errors.fullName ? styles.errorInput : ''}`}
                {...register('fullName', { required: 'Full name is required' })}
              />
              {errors.fullName && <p className={styles.errorMessage}>{errors.fullName.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="tel"
                placeholder="Phone Number"
                className={`${styles.input} ${errors.contact ? styles.errorInput : ''}`}
                {...register('contact', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be 10 digits',
                  },
                })}
              />
              {errors.contact && <p className={styles.errorMessage}>{errors.contact.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`${styles.input} ${errors.password ? styles.errorInput : ''}`}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                      message: 'Password must contain uppercase, lowercase, and number',
                    },
                  })}
                />
                <button 
                  type="button" 
                  className={styles.showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={`${styles.input} ${errors.confirmPassword ? styles.errorInput : ''}`}
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword.message}</p>}
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="agreeTerms"
                className={styles.checkbox}
                {...register('agreeTerms', {
                  required: 'You must agree to the terms and conditions',
                })}
              />
              <label htmlFor="agreeTerms" className={styles.checkboxLabel}>
                I agree to the <a href="#" className={styles.termsLink}>Terms and Conditions</a> and <a href="#" className={styles.termsLink}>Privacy Policy</a>
              </label>
            </div>
            {errors.agreeTerms && <p className={styles.errorMessage}>{errors.agreeTerms.message}</p>}

            <button type="submit" className={styles.submitButton}>Create Account</button>

            <p className={styles.loginText}>
              Already have an account? <a href="/login" className={styles.loginLink}>Log in</a>
            </p>

            {submitted && (
              <div className={styles.successMessage}>
                <svg className={styles.successIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Account created successfully!
              </div>
            )}
          </form>
        </div>
        <img
          src="https://i.postimg.cc/d1TtgGLw/steptodown-com909185.png"
          alt="Tech Setup"
          className={styles.rightContainerImage}
        />
      </div>
    </div>
  );
};

export default Signup;