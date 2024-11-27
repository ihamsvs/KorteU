import { supabase } from "@/app/lib/supabaseClient";

const testSupabaseConnection = async () => {
  const { data, error } = await supabase.from("carreras").select("*").limit(5);

  if (error) {
    console.error("Error al conectar con Supabase:", error);
  } else {
    console.log("Datos de prueba desde Supabase:", data);
  }
};

testSupabaseConnection();
