import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../api/axios";
import { useAuth } from "../../../hooks/useAuth";
import { ErrorType } from "../../../api/types";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export interface PostSignInRequest {
  email: string;
  password: string;
}

export interface PostSignInResponse {
  token: string;
}

const mutationFn = (request: PostSignInRequest) => {
  return axiosInstance.postForm<
    PostSignInRequest,
    AxiosResponse<PostSignInResponse>
  >("/default/login", request);
};

export const useSignIn = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  return useMutation<
    AxiosResponse<PostSignInResponse>,
    AxiosError<ErrorType>,
    PostSignInRequest
  >({
    mutationFn,
    onSuccess: (response) => {
      signIn(response.data);
      navigate("/home", { replace: true });
    },
  });
};
