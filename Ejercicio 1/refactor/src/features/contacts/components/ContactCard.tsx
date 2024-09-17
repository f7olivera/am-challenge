export interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = (props: ContactCardProps) => {
  const { contact } = props;

  const { t } = useTranslation();

  return (
    <div>
      <div>
        <img src={contact.avatar_url} />
        <h3>{contact.full_name}</h3> - <h4>{contact.company}</h4>
      </div>

      <p>{contact.details}</p>
      <ul>
        <li>
          {t("email")}: {contact.email}
        </li>
        <li>
          {t("phone")}: {contact.phone_number}
        </li>
        <li>
          <h4>
            {contact.addresses.length > 1 ? t("addresses") : t("address")}:
          </h4>
          {contact.addresses.map((address) => (
            <ul>
              <li>{address.line_1}</li>
              <li>{address.line_2}</li>
              <li>{address.zip_code}</li>
              <li>{address.city}</li>
              <li>{address.state}</li>
            </ul>
          ))}
        </li>
      </ul>
    </div>
  );
};
