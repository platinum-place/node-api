var caseModel = {
  trigger: ["approval", "workflow", "blueprint"],
};

let setData = (data) => {
  return {
    Subject: "Ejemplo Colonial",
    A_o: data.A_o,
    Chasis: data.Chasis,
    Color: data.Color,
    Marca: data.Marca,
    Modelo: data.Modelo,
    Account_Name: "3222373000013452591",
    Related_To: "3222373000031472977",
    Case_Origin: "API",
    Punto_A: data.Punto_A,
    Punto_B: data.Punto_B,
    P_liza: data.P_liza,
    Solicitante: data.Solicitante,
    Phone: data.Phone,
    Zona: data.Zona,
    Status: "Recibido",
    Tipo_de_asistencia: "Grúa por avería",
    Aseguradora: "LA COLONIAL, S.A",
    Asegurado: data.Solicitante,
    Plan: data.Plan,
    Description: data.Description,
    Ubicaci_n: data.Ubicaci_n,
  };
};

export { caseModel, setData };
