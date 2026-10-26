import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alex', role: 'Barista' },
    { id: 2, name: 'Sam', role: 'Waiter' },
  ]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  function addEmployee(event) {
    event.preventDefault();
    if (!name.trim() || !role.trim()) return;

    const employee = { id: Date.now(), name: name.trim(), role: role.trim() };
    setEmployees([...employees, employee]);
    setName('');
    setRole('');
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter((employee) => employee.id !== id));
  }

  return (
    <main className="container">
      <header>
        <h1>ShiftPilot</h1>
        <p>A simple place to manage your team.</p>
      </header>

      <section className="panel">
        <h2>Add an employee</h2>
        <form onSubmit={addEmployee}>
          <input
            placeholder="Employee name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Role (e.g. Barista)"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <button type="submit">Add employee</button>
        </form>
      </section>

      <section className="panel">
        <h2>Employees ({employees.length})</h2>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <span>{employee.name}</span>
              <small>{employee.role}</small>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
