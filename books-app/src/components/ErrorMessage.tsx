import { PropsWithChildren } from "react";

export const ErrorMessage = (props: PropsWithChildren) => {
  const { children } = props;

  return <span style={styles.error}>{children}</span>;
};

const styles = {
  error: { color: "#FF474C" },
};
