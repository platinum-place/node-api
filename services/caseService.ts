import { caseData } from "../interfaces/caseData";
import { zohoCreate, zohoGet } from "./zohoService";

export const createCase = async (body: caseData) => {
  const caseData = {
    data: [
      {
        Subject: "Asistencia Colonial",
        A_o: body.vehicle_year,
        Chasis: body.chassis,
        Color: body.vehicle_color,
        Marca: body.vehicle_make,
        Modelo: body.vehicle_model,
        Placa: body.plate,
        Account_Name: "3222373000013452591",
        Related_To: "3222373000031472977",
        Case_Origin: "API",
        Punto_A: body.site_a,
        Punto_B: body.site_b,
        P_liza: body.policy_number,
        Solicitante: body.client_name,
        Phone: body.phone,
        Zona: "Santo Domingo",
        Status: "Recibido",
        Tipo_de_asistencia: "Grúa por avería",
        Aseguradora: "LA COLONIAL, S.A",
        Asegurado: body.client_name,
        Plan: body.policy_plan,
        Description: body.description,
        Ubicaci_n: body.location_url,
      },
    ],
    trigger: ["approval", "workflow", "blueprint"],
  };
  const data = await zohoCreate("Cases", caseData);

  return { id: data[0].details.id };
};

export const getCase = async (id: string | string[]) => {
  try {
    const data = await zohoGet("Cases", id);

    var location_id: string;
    if (data.data[0].Product_Name) {
      location_id = data.data[0].Product_Name.id;
    }

    return {
      id: data.data[0].id,
      policy_number: data.data[0].P_liza,
      vehicle_year: data.data[0].A_o,
      chassis: data.data[0].Chasis,
      vehicle_color: data.data[0].Color,
      vehicle_make: data.data[0].Marca,
      vehicle_model: data.data[0].Modelo,
      site_a: data.data[0].Punto_A,
      site_b: data.data[0].Punto_B,
      client_name: data.data[0].Solicitante,
      phone: data.data[0].Phone,
      policy_plan: data.data[0].Plan,
      plate: data.Placa,
      description: data.data[0].Description,
      location_url: data.data[0].Ubicaci_n,
      call_center_user: data.data[0].Operador,
      estimated_time: data.data[0].Tiempo_estimado,
      supplier: data.data[0].Suplidor,
      status: data.data[0].Status,
      driver: data.data[0].Asistido_por,
      location_id: location_id,
    };
  } catch (error) {
    return null;
  }
};

export const getServiceCase = async (id: string) => {
  try {
    const data = await zohoGet("Products", id);
    return {
      code: data.data[0].id,
      platform: data.data[0].Plataforma_API,
      token: data.data[0].Clave_API,
    };
  } catch (error) {
    return null;
  }
};
