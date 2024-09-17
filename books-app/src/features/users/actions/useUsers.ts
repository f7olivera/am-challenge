import { useQuery } from "@tanstack/react-query";
import { usersKeys } from "./queryKeyFactory";
import { Book } from "../../books/actions";
import { axiosInstance } from "../../../api/axios";

export interface RawUser {
  id: number;
  email: string;
  nickname: string;
  favorite_books: Book[];
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  favorite_books_ids: number[];
}

export type GetUsersResponse = RawUser[];

const queryFn = async () => {
  const response = await axiosInstance.get<GetUsersResponse>("/default/users");

  const normalizedData = response.data.map((user) => {
    const { favorite_books, ...rest } = user;

    return {
      favorite_books_ids: [...user.favorite_books.map((book) => book.id)],
      ...rest,
    } as User;
  });

  return normalizedData;
};

export const useUsers = () => {
  return useQuery({
    queryKey: usersKeys.users(),
    queryFn,
  });
};
