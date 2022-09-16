const Employee = ({ data }) => {
  return (
    <div style={{ border: "2px solid white" }}>
      <h2>{data.name}</h2>
      <h2>{data.address.city}</h2>
      <h2>{data.email}</h2>
    </div>
  );
};

export default Employee;
