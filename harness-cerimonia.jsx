import { useState } from "react";
import { Button, ConfigProvider } from "antd";
import CerimoniaDrawer from "../components/admin/CerimoniaDrawer";

export function loader() {
  return null;
}

const ETAPAS_FAKE = [
  { id: 1, rotulo: "Início" },
  { id: 2, rotulo: "Planejamento" },
  { id: 3, rotulo: "Execução" },
  { id: 4, rotulo: "Acompanhamento" },
  { id: 5, rotulo: "Fechamento" },
];

const QUADRO_TIPOS_FAKE = [
  { id: 1, rotulo: "Kanban" },
  { id: 2, rotulo: "Business Model Canvas" },
  { id: 3, rotulo: "Análise SWOT" },
  { id: 4, rotulo: "Proposta de valor" },
  { id: 5, rotulo: "Roadmap" },
];

const CERIMONIA_EXEMPLO = {
  nome: "Reunião de Entrada (DoR)",
  etapa_id: 3,
  descricao: "A Reunião de Entrada DoR é a validação de que uma demanda está pronta.",
  recorrencia_intervalo: 3,
:...skipping...
import { useState } from "react";
import { Button, ConfigProvider } from "antd";
import CerimoniaDrawer from "../components/admin/CerimoniaDrawer";

export function loader() {
  return null;
}

const ETAPAS_FAKE = [
  { id: 1, rotulo: "Início" },
  { id: 2, rotulo: "Planejamento" },
  { id: 3, rotulo: "Execução" },
  { id: 4, rotulo: "Acompanhamento" },
  { id: 5, rotulo: "Fechamento" },
];

const QUADRO_TIPOS_FAKE = [
  { id: 1, rotulo: "Kanban" },
  { id: 2, rotulo: "Business Model Canvas" },
  { id: 3, rotulo: "Análise SWOT" },
  { id: 4, rotulo: "Proposta de valor" },
  { id: 5, rotulo: "Roadmap" },
];

const CERIMONIA_EXEMPLO = {
  nome: "Reunião de Entrada (DoR)",
  etapa_id: 3,
  descricao: "A Reunião de Entrada DoR é a validação de que uma demanda está pronta.",
  recorrencia_intervalo: 3,
  recorrencia_unidade: "semana",
  recorrencia_dias_semana: "seg,qua,sex",
  duracao_minutos: 30,
  link_externo: "https://ant.design/components",
  ordem: 0,
  quadro_tipo_ids: [1, 2],
};

export default function HarnessCerimonia() {
  const [open, setOpen] = useState(false);
  const [initialValue, setInitialValue] = useState(null);
  const [ultimo, setUltimo] = useState(null);

  function abrirCriar() {
    setInitialValue(null);
    setOpen(true);
  }

  function abrirEditar() {
    setInitialValue(CERIMONIA_EXEMPLO);
    setOpen(true);
  }

  function handleConfirm(cerimonia) {
    console.log("onConfirm →", cerimonia);
    setUltimo(cerimonia);
    setOpen(false);
  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#9f2897" } }}>
      <div style={{ padding: 24 }}>
        <h2>Harness — CerimoniaDrawer</h2>
        <p>Rota descartável para testar o drawer isolado (dados falsos, sem API).</p>

        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <Button type="primary" onClick={abrirCriar}>
            Abrir (criar)
          </Button>
          <Button onClick={abrirEditar}>Abrir (editar)</Button>
        </div>

        <CerimoniaDrawer
          open={open}
          initialValue={initialValue}
          etapas={ETAPAS_FAKE}
          quadroTipos={QUADRO_TIPOS_FAKE}
          onConfirm={handleConfirm}
          onCancel={() => setOpen(false)}
        />

        <div>
          <strong>Último onConfirm:</strong>
          <pre style={{ background: "#f5f5f5", padding: 12, borderRadius: 4 }}>
            {ultimo ? JSON.stringify(ultimo, null, 2) : "— nada ainda —"}
          </pre>
        </div>
      </div>
    </ConfigProvider>
  );
}


//timmy-app/app/routes/harness-cerimonia.jsx