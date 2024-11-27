"use client";
import { useState } from "react";
//import axios from "axios";
import Lupa from "./icon/Lupa";
import PopUp from "./PopUp";
import { supabase } from "@/app/lib/supabaseClient";

interface PostgresData {
  id: number;
  carrera: string;
  puntaje: number;
  universidad: string;
}

export default function Input() {
  const [carrera, setCarrera] = useState("");
  const [data, setData] = useState<PostgresData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const limit = 10;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    fetchData(1);
    setPage(1);
  };

  const fetchData = async (currentPage: number) => {
    try {
      const offset = (currentPage - 1) * limit;

      const {
        data: results,
        error: error,
        count,
      } = await supabase
        .from("carreras_data")
        .select("*", { count: "exact" })
        .like("carrera", `%${carrera}`)
        .range(offset, offset + limit - 1);

      if (error) {
        throw error;
      }

      setData(results || []);
      setTotalPages(Math.ceil((count || 0) / limit));
      setError(error);
    } catch (error) {
      console.error("Error inesperado:", error);
      setError("Ha ocurrido un error inesperado");
      setData([]);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      fetchData(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      fetchData(page - 1);
    }
  };

  // TODO -> Ocupar la funcion lower para que todos los datos se envien en minusculas
  return (
    <div>
      
      <form onSubmit={handleSubmit} className="py-2">
        <div className="relative mt-6">
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="ingresa el nombre..."
            aria-label="Carrera"
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
            >
              <Lupa />
            </button>
          </div>
        </div>
        {error && (
          <p>Error </p>
        )}
        <article>
          {data.length === 0 ? (
            <span></span>
          ) : (
            <div>
              <h2 className="text-base text-gray-700">
                {" "}
                Página: {page} / {totalPages}
              </h2>
            </div>
          )}
        </article>
      </form>
      <div>
      <PopUp title="Información importante" info="Si no encuentras tu carrera en la lista, asegúrate de escribirla correctamente y el nombre completo, incluyendo tildes. Por ejemplo: Psicología."/>
      </div>
  
      <div className="p-8  flex items-center justify-center w-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
          {data.map((carrera) => (
            <div
              key={carrera.id}
              className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out
                       group-hover:opacity-30 hover:!opacity-100 hover:scale-105 hover:z-10"
            >
              <div className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-[2px] transition-all duration-300 ease-in-out hover:p-[3px]">
                <div className="bg-white h-full rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl">
                  <p className="text-gray-500 text-sm uppercase">
                    {carrera.carrera}
                  </p>
                  <p className="text-4xl font-bold my-2">{carrera.puntaje}</p>
                  <p className="text-sm bg-purple-100 text-purple-800 rounded-full px-3 py-1 inline-block">
                    {carrera.universidad}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data.length === 0 ? (
        <span></span>
      ) : (
        <div className="flex justify-center items-center space-x-4">
          <div className="inline-block relative mb-5">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg blur opacity-75 transition duration-300 group-hover:opacity-100"></div>
            <button
              className="relative px-5 py-2.5 bg-white rounded-lg leading-none flex items-center"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <span className="text-gray-800 group-hover:text-gray-900 transition duration-300">
                Anterior
              </span>
            </button>
          </div>

          <div className="inline-block relative mb-5">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg blur opacity-75 transition duration-300 group-hover:opacity-100"></div>
            <button
              className="relative px-5 py-2.5 bg-white rounded-lg leading-none flex items-center"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              <span className="text-gray-800 group-hover:text-gray-900 transition duration-300">
                Siguiente
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
