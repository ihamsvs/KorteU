export default function MainInfo(){
    return(
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            KorteU
          </h1>
          <p className="text-xl text-gray-600">
            Tu guía para la admisión a la universidad
          </p>
        </header>

        {/* Intro Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex bg-blue-100 p-3 rounded-full shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-lg text-gray-700">
              ¿Estás preparándote para dar la PAES y entrar a la universidad?
              Aquí podrás consultar los puntajes de corte de los procesos de 
              admisión para tomar una decisión informada sobre tu futuro académico.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* How to Use Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">
                Cómo usar la página
              </h2>
            </div>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  1
                </span>
                <p className="text-gray-700 pt-1">
                  Ingresa el nombre de la carrera que te interesa en el buscador
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  2
                </span>
                <p className="text-gray-700 pt-1">
                  Revisa el puntaje de corte del último proceso de admisión
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  3
                </span>
                <p className="text-gray-700 pt-1">
                  Explora las diferentes universidades que ofrecen la carrera
                </p>
              </li>
            </ol>
          </div>

          {/* Important Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">
                Importante
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <p className="text-gray-700">
                  Los puntajes mostrados corresponden a la última persona seleccionada en la carrera
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <p className="text-gray-700">
                  Te recomendamos postular aunque estés cerca del puntaje de corte, ya que estos pueden variar cada año
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                <p className="text-gray-700">
                  Usa esta información como referencia para orientar tu postulación
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    )
}