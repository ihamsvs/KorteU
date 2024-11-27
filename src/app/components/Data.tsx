import { puntajes } from "../data/puntajes";

export default function Data() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {puntajes.map((data) => {
        return (
          <div key={data.id} className="rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-xl">
          <div className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-[1px]">
            <div className="bg-white h-full rounded-lg p-4">
              <p className="text-gray-500 text-sm uppercase hover:text-gray-800">{data.carrera}</p>
              <p className="text-4xl font-bold my-2">{data.puntaje}</p>
              <p className="text-sm bg-purple-100 text-purple-800 rounded-full px-3 py-1 inline-block">
                {data.universidad}
              </p>
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
}
