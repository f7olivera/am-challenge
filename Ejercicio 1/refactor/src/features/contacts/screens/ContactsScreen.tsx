export interface ContactsScreenProps {
  contacts: Contact[];
  cities: City[];
  states: State[];
}

export const ContactsScreen = (props: ContactsScreenProps) => {
  const { contacts, cities, states } = props;

  const { contactsToDisplay } = useContactsData({ contacts, cities, states });

  const { t } = useTranslation();

  return (
    <Container title={`${t("contacts")} 👥`}>
      {contactsToDisplay.map((contact) => (
        <ContactCard data={contact} />
      ))}
    </Container>
  );
};
