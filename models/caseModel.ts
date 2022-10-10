import { caseData } from "../interfaces/caseData";
import { zohoCaseData } from "../interfaces/zohoCaseData";

export class caseModel {
  setData(body: caseData) {
    return {
      data: [
        {
          Subject: "Asistencia ColXonial",
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
  }

  getData(zohoData: zohoCaseData) {
    return {
      code: zohoData.id,
      policy_number: zohoData.P_liza,
      vehicle_year: zohoData.A_o,
      chassis: zohoData.Chasis,
      vehicle_color: zohoData.Color,
      vehicle_make: zohoData.Marca,
      vehicle_model: zohoData.Modelo,
      site_a: zohoData.Punto_A,
      site_b: zohoData.Punto_B,
      client_name: zohoData.Solicitante,
      phone: zohoData.Phone,
      policy_plan: zohoData.Plan,
      plate: zohoData.Placa,
      description: zohoData.Description,
      location_url: zohoData.Ubicaci_n,
      call_center_user: zohoData.Operador,
      estimated_time: zohoData.Tiempo_estimado,
      supplier: zohoData.Suplidor,
      status: zohoData.Status,
      driver: zohoData.Asistido_por,
    };
  }
}
