export default function UserTable({ name, gender, location, email, dob }) {
  return (
    <tr>
      <td>{name.title + " " + name.first + " " + name.last}</td>
      <td>{gender}</td>
      <td>{location.city}</td>
      <td>{dob.age}</td>
      <td>{email}</td>
    </tr>
  );
}
