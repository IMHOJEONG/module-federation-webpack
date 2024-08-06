import React, { PropsWithChildren, useCallback } from "react";
import {
  addEdge,
  MiniMap,
  Controls,
  Background,
  ReactFlow,
  useEdgesState,
  useNodesState,
  ReactFlowProvider,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

type ComponentProps = PropsWithChildren<{}>;

const initialNodes = [
  { id: "0", position: { x: 500, y: 250 }, data: { label: "app" } },

  { id: "1", position: { x: 100, y: 0 }, data: { label: "Header" } },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "Sidebar" } },
  { id: "3", position: { x: 100, y: 200 }, data: { label: "Pages" } },
  {
    id: "4",
    position: { x: 100, y: 300 },
    data: { label: "StyleGuide-Components" },
  },
  {
    id: "5",
    position: { x: 100, y: 400 },
    data: { label: "Data Fetching Logic" },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Component(props: ComponentProps) {
  const { children, ...others } = props;

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </ReactFlowProvider>
  );
}
