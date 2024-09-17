interface Profile {
  avatar: string;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  address: string;
}

export interface ProfileScreenProps {
  data: Profile;
}

export const ProfileScreen = (props: ProfileScreenProps) => {
  const { data } = props;

  const { t } = useTranslation();

  return (
    <Container title={`${t("my-profile")} 👤`}>
      <div style={styles.row}>
        <div style={styles.avatarContainer}>
          <img src={data.avatar} alt="profile avatar" />
        </div>
        <div style={styles.profileInformationContainer}>
          <h2>{`${data.first_name} ${data.last_name}`}</h2>
          <h3>{data.company}</h3>
          <h4>{data.email}</h4>
          <h4>{data.address}</h4>
        </div>
      </div>
    </Container>
  );
};

const styles = {
  row: { display: "flex", flex: 1, flexDirection: "row" },
  avatarContainer: { display: "flex", flex: 1, justifyContent: "center" },
  profileInformationContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
};
