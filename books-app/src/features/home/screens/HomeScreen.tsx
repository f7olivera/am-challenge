import { useAuth } from "../../../hooks/useAuth";
import { useBooks } from "../../books/actions";
import { BookCard } from "../../books/components/BookCard";
import { useUsers } from "../../users/actions";
import { UserCard } from "../../users/components/UserCard";

export const HomeScreen = () => {
  const { signOut } = useAuth();

  const { data: booksData, isLoading: isLoadingBooks } = useBooks();

  const { data: usersData, isLoading: isLoadingUsers } = useUsers();

  console.log("books", booksData);
  console.log("users", usersData);

  return (
    <div>
      {isLoadingBooks ? (
        <h2>Loading books...</h2>
      ) : (
        <div>
          <h1>Books</h1>
          {booksData?.map((book) => (
            <BookCard key={book.id} data={book} />
          ))}
        </div>
      )}

      {isLoadingUsers ? (
        <h2>Loading users...</h2>
      ) : (
        <div>
          <h1>Users</h1>
          {usersData?.map((user) => (
            <UserCard key={user.id} data={user} />
          ))}
        </div>
      )}

      <button onClick={signOut} style={styles.button}>
        Sign out
      </button>
    </div>
  );
};

const styles = {
  button: {
    marginTop: 20,
  },
};
