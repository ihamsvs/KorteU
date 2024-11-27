import Input from "./Input";


export default function Buscar() {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <article className="w-max grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <h2 className="text-3xl font-semibold text-center col-span-1">
            Busca tu carrera
          </h2>
        </div>
        <div>
        </div>
      </article>

      <Input />
    </div>
  );
}
