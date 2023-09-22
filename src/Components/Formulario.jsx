import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setProp] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setError(false)
      setNombre(paciente.nombre)
      setProp(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return (fecha + random)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return;
    } else {
      setError(false)

      //Obj de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      if (paciente.id) {
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})
      } else {
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])
      }

      //Reiniciar Form
      setNombre('')
      setProp('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
      <p className="text-lg mt-5 font-bold mb-10 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600">Administrarlos</span>
      </p>
      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 mx-5" onSubmit={handleSubmit}>
        {error &&
          (<Error><p>Todos los campos son obligatorios</p></Error>)
        }
        <div className="mb-5">
          <label htmlFor="txt_mascota" className="block font-bold uppercase">Nombre Mascota</label>
          <input id="txt_mascota" className="border-2 w-full p-2 mt-2 rounded-md placeholder-grey-100" type="text" placeholder="nombre mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="txt_propietario" className="block font-bold uppercase">Nombre Propietario</label>
          <input id="txt_propietario" className="border-2 w-full p-2 mt-2 rounded-md placeholder-grey-100" type="text" placeholder="nombre propietario"
            value={propietario}
            onChange={(e) => setProp(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="txt_email" className="block font-bold uppercase">Email</label>
          <input id="txt_email" className="border-2 w-full p-2 mt-2 rounded-md placeholder-grey-100" type="email" placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="txt_alta" className="block font-bold uppercase">Fecha alta</label>
          <input id="txt_alta" className="border-2 w-full p-2 mt-2 rounded-md" type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="txt_sintomas" className="block font-bold uppercase">Síntomas</label>
          <textarea className="border-2 w-full p-2 mt-2 h-20 placeholder-gray-400 rounded-md" name="txt_area" id="txt_sintomas" placeholder="Describe los síntomas" cols="30" rows="10"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>
        <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" type="submit"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
      </form>
    </div>
  )
}

export default Formulario
