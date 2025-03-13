"use client"
import { useState } from "react";

function Card({ children, className }) {
  return <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}

function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
    >
      {children}
    </button>
  );
}

export default function InductorCalculator() {
  const [values, setValues] = useState({
    length: "",
    turns: "10",
    variable: "5",
    thickness: "1",
    variableType: "radius",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const calculateInductance = () => {
    const { length, turns, variable, thickness } = values;
    const L = (4 * Math.PI * Math.pow(turns, 2) * Math.pow(variable, 2)) / (length * 1e7);
    setResult(L.toFixed(6));
  };

  const handleClear = () => {
    setValues({
      length: "",
      turns: "",
      variable: "",
      thickness: "",
      variableType: "radius",
    });
    setResult(null);
  };

  return (
    <Card className="p-6 max-w-md mx-auto mb-12">
      <h2 className="text-xl font-bold mb-4">Inductor Calculator</h2>
      <CardContent className="space-y-4">
        <Input name="length" placeholder="Length (mm)" value={values.length} onChange={handleChange} />
        <Input name="turns" placeholder="Total Turns (N)" value={values.turns} onChange={handleChange} />
        <Input name="variable" placeholder="Variable (R/D/S)" value={values.variable} onChange={handleChange} />
        <Input name="thickness" placeholder="Coil Thickness (t)" value={values.thickness} onChange={handleChange} />
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={calculateInductance}>Calculate</Button>
          <Button onClick={handleClear}>Clear</Button>
        </div>
        {result && <p className="text-lg font-semibold">Inductance: {result} H</p>}
      </CardContent>
    </Card>
  );
}