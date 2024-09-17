export const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <a href="/home">{t("home")}</a>
        </li>
        <li>
          <a href="/contacts">{t("my-contracts")}</a>
        </li>
        <li>
          <a href="/profile">{t("my-profile")}</a>
        </li>
      </ul>
    </nav>
  );
};
