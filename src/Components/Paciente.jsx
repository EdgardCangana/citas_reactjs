const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente
    const handleEliminar = () =>{
        const respuesta = confirm('Desea eliminar al paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="lg:3/5">
            <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                    <span className="font-normal normal-case">
                        {nombre}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
                    <span className="font-normal normal-case">
                        {propietario}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                    <span className="font-normal normal-case">
                        {email}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {""}
                    <span className="font-normal normal-case">
                        {fecha}
                    </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
                    <span className="font-normal normal-case">
                        {sintomas}
                    </span>
                </p>
                <div className="flex justify-between mt-10">
                    <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-lg"
                        onClick={() => setPaciente(paciente)}
                    >
                        EDITAR
                    </button>
                    <button type="button" className="py-2 px-10 bg-red-400 hover:bg-red-600 text-white font-bold rounded-lg"
                        onClick={handleEliminar}>
                        ELMINAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Paciente
