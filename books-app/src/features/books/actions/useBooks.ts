import { useQuery } from "@tanstack/react-query";
import { booksKeys } from "./queryKeyFactory";
import { axiosInstance } from "../../../api/axios";

export interface Author {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  author: Author;
}

export type GetBooksResponse = Book[];

const queryFn = async () => {
  const response = await axiosInstance.get<GetBooksResponse>("/default/books");

  return response.data;
};

export const useBooks = () => {
  return useQuery({
    queryKey: booksKeys.books(),
    queryFn,
  });
};
