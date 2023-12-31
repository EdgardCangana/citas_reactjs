import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    /* useEffect(() => {
        if (pacientes.length > 0) {
            console.log("nuevo paciente");
        }
    }, [pacientes]) */

    return (

        <div className="lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-lg mt-5 font-bold mb-10 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>

                    {pacientes.map((paciente, index) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-lg mt-5 font-bold mb-10 text-center">
                        Comienza agregando pacientes {""}
                        <span className="text-indigo-600 font-bold">
                            y se verán debajo
                        </span>
                    </p>
                </>
            )
            }
        </div>
    )
}

export default ListadoPacientes
