import { useState } from 'react';
import Input from '../atomos/Input';
import Boton from '../atomos/Boton';
import Titulo from '../atomos/Titulo';

export default function FormularioHabito({ onCreate }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('salud');
  const [icon, setIcon] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    const newHabit = {
      id: Date.now(),
      name: name.trim(),
      category,
      icon: icon || '',
      history: [],
    };
    onCreate(newHabit);
    setName('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit} className="form-habit">
      <Titulo level={3}>Nuevo hábito</Titulo>
      <label>
        Nombre
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Beber 2L de agua" />
      </label>
      <label>
        Categoría
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="salud">Salud</option>
          <option value="ejercicio">Ejercicio</option>
          <option value="alimentacion">Alimentación</option>
        </select>
      </label>
      <label>
        Icon URL
        <Input value={icon} onChange={(e) => setIcon(e.target.value)} placeholder="https://.../icon.png" />
      </label>
      <Boton type="submit">Crear hábito</Boton>
    </form>
  );
}
