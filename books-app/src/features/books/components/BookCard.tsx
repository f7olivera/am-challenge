import { Book } from "../actions";

export interface BookCardProps {
  data: Book;
}

export const BookCard = (props: BookCardProps) => {
  const { data } = props;

  return (
    <div>
      <span>
        {data.title} - {data.author.name}
      </span>
    </div>
  );
};
