export interface UseContactsDataProps {
  contacts: Contact[];
  cities: City[];
  states: State[];
}

export const useContactsData = (props: UseContactsDataProps) => {
  const { contacts, cities, states } = props;

  const contactsToDisplay = useMemo(
    () =>
      contacts.map((contact) => ({
        id: contact.id,

        avatar_url: contact.avatar_url,

        full_name: `${contact.first_name} ${contact.last_name}`,

        company: contact.company,

        details: truncate(contact.details, 100),
        email: contact.email,
        phone_number: `(${contact.phone.area_code}) ${contact.phone_number}`,
        addresses: contact.addresses.map((address) => ({
          line_1: address.line_1,
          line_2: address.line_2,
          zip_code: address.zip_code,
          city: findById(cities, address.city_id),
          state: findById(states, address.state_id),
        })),
      })),
    []
  );

  return { contactsToDisplay };
};
