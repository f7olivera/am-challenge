export interface ContainerProps extends PropsWithChildren {
  title: string;
}

export const Container = (props: ContainerProps) => {
  const { children, title } = props;

  return (
    <div>
      <NavigationBar />
      <h1>{title}</h1>
      {children}
    </div>
  );
};
