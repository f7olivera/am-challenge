import { CSSProperties, useCallback } from "react";
import { PostSignInRequest, useSignIn } from "../actions/useSignIn";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../../../components/ErrorMessage";

export const SignInForm = () => {
  const { mutate: signIn, error: apiError } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostSignInRequest>();

  const onSubmit = useCallback<SubmitHandler<PostSignInRequest>>((data) => {
    signIn(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <div style={styles.column}>
        <input
          {...register("email", { required: "This field is required" })}
          placeholder="Email"
          type="email"
          style={styles.input}
        />
        {errors.email?.message && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
      </div>
      <div style={styles.column}>
        <input
          {...register("password", { required: "This field is required" })}
          placeholder="Password"
          type="password"
          style={styles.input}
        />
        {errors.password?.message && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>
      {apiError?.response?.data && (
        <ErrorMessage>{apiError?.response?.data.description}</ErrorMessage>
      )}
      <button type="submit">Sign in</button>
    </form>
  );
};

const styles: Record<string, CSSProperties> = {
  column: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    gap: 20,
    minWidth: 320,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    height: 25,
  },
} as const;
