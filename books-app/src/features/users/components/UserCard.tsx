import { User } from "../actions";

export interface UserCardProps {
  data: User;
}

export const UserCard = (props: UserCardProps) => {
  const { data } = props;

  return (
    <div>
      <span>
        {data.nickname} - {data.email}
      </span>
    </div>
  );
};
