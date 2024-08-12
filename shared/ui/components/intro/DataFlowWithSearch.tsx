// // @FIXME: this is a demo component, not used in the project
// // @ts-nocheck
// import {
//   ReactFlow,
//   Background,
//   BaseEdge,
//   Controls,
//   Edge,
//   EdgeLabelRenderer,
//   EdgeProps,
//   getBezierPath,
//   getStraightPath,
//   Handle,
//   MarkerType,
//   NodeProps,
//   Panel,
//   Position,
//   XYPosition,
// } from "@xyflow/react";

// import React, {
//   createContext,
//   CSSProperties,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// import {
//   Box,
//   Input,
//   MenuItem,
//   ToggleButton,
//   ToggleButtonGroup,
// } from "@mui/material";

// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

// import {
//   Notifications as AlarmIcon,
//   Dvr as EntityIcon,
//   Error as ErrorIcon,
//   MonitorHeart as HealthIcon,
//   NorthEast as NorthEastIcon,
//   AccountTree as RelationshipIcon,
//   Search as SearchIcon,
//   ShowChart as ShowChartIcon,
//   Speed as SpeedIcon,
//   TrendingDown as TrendingDownIcon,
//   TrendingFlat as TrendingFlatIcon,
//   TrendingUp as TrendingUpIcon,
// } from "@mui/icons-material";

// import { customToast, hotToast, toastify } from "@/util/Toast";

// import LinearProgress from "@mui/material/LinearProgress";

// import DrawerHeader from "@/layouts/drawer-header";

// import { useDrawer } from "@/components/drawer-views/use-drawer";

// // import "reactflow/dist/style.css";

// const LAYOUT_DEF_WIDTH = 540;
// const LAYOUT_DEF_HEIGHT = 200;

// const PageContext = createContext<{
//   nodeType: "normal" | "icon";
//   setNodeType: (type: "normal" | "icon") => void;
// }>({
//   nodeType: "normal",
//   setNodeType: (type: "normal" | "icon") => {
//     console.log("default setNodeType cb, type:", type);
//   },
// });

// import {
//   DATA1,
//   IBaseUnit,
//   IDataMetricSummary,
//   IMetricUnit,
//   IProgressGoalUnit,
//   IProgressIssueUnit,
// } from "./data";

// interface IBaseUnitEx extends IBaseUnit {
//   mode?: "normal" | "icon";
//   position: XYPosition;
// }

// const sourceHandleStyleA: CSSProperties = { left: 50 };
// const sourceHandleStyleB: CSSProperties = {
//   right: 50,
//   left: "auto",
// };

// const MetricUnit = ({ data }: { data: IMetricUnit }) => {
//   return (
//     <div className="flex flex-row justify-between">
//       {data.segments.map((m, idx) => {
//         return (
//           <div key={m.current} className="flex flex-col">
//             <p className="text-gray-500 text-xs mb-1">{m.title}</p>
//             <div>
//               <h5>{m.current}</h5>
//               <div
//                 className={
//                   "flex flex-row " +
//                   `${m.variance === 0 ? "text-[#888]" : m.variance > 0 ? "text-[#44ee44]" : "text-[#dd4444]"}`
//                 }
//               >
//                 <p className="text-sm">{m.variance + "%"}</p>
//                 {m.variance === 0 ? (
//                   <TrendingFlatIcon fontSize="small" />
//                 ) : m.variance > 0 ? (
//                   <TrendingUpIcon fontSize="small" />
//                 ) : (
//                   <TrendingDownIcon fontSize="small" />
//                 )}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const ProgressGoalUnit = ({ data }: { data: IProgressGoalUnit }) => {
//   return (
//     <div className="py-1">
//       <div className="flex flex-row mb-2 items-end">
//         <p className="text-md font-bold">{"Goal"}</p>
//         <p className="text-gray-500 text-sm mt-1 ml-2">
//           {" • " + data.progressed + ` ${data.title} • `}
//         </p>
//         <p className="text-md font-bold ml-1">
//           {Math.round((data.progressed / data.total) * 100) + "% complete"}
//         </p>
//       </div>
//       <div>
//         <LinearProgress
//           color="inherit"
//           variant="determinate"
//           value={(data.progressed / data.total) * 100}
//           style={{
//             height: 10,
//             borderRadius: 5,
//             color: data.color || "blue",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const ProgressIssueUnit = ({ data }: { data: IProgressIssueUnit }) => {
//   return (
//     <div className="py-1">
//       <div className="flex flex-col mb-2">
//         <div className="flex flex-row justify-between text-md text-gray-500 font-medium">
//           <p>{data.title}</p>
//           <div className="flex flex-row">
//             {"Details"}
//             <NorthEastIcon fontSize="small" />
//           </div>
//         </div>
//       </div>
//       <div>
//         <LinearProgress
//           color="inherit"
//           variant={"determinate"}
//           value={(data.progressed / data.total) * 100}
//           onAnimationStart={() => console.log(">>>>> onAnimationStart")}
//           style={{
//             color: data.color || "blue",
//             height: 10,
//             borderRadius: 5,
//           }}
//         />
//       </div>
//       <div className="flex flex-row justify-between items-center mt-2">
//         <div className="flex flex-row">
//           <p className="text-gray-500 text-sm">{`${data.total} issues • `}</p>
//           <p className="text-gray-500 text-sm font-bold ml-1">
//             {`${Math.round((data.progressed / data.total) * 100)} % done`}
//           </p>
//         </div>
//         <div
//           className={" px-2 py-1 text-white font-medium rounded"}
//           style={{
//             background: data.color || "blue",
//           }}
//         >
//           {data.status || "Done"}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CustomGauge = ({ data, bg }: { data: IBaseUnitEx; bg?: string }) => {
//   const metric = data.dataMetric || ({} as IDataMetricSummary);
//   return (
//     <div className="flex justify-center items-center">
//       <Gauge
//         width={200}
//         height={200}
//         value={metric.usage}
//         valueMax={100}
//         innerRadius="90%"
//         cornerRadius="50%"
//         sx={(theme) => ({
//           [`& .${gaugeClasses.valueArc}`]: {
//             fill: "#ff4444",
//           },
//           [`& .${gaugeClasses.referenceArc}`]: {
//             fill: "#52b202",
//           },
//         })}
//       ></Gauge>
//       <div
//         className={`absolute flex flex-col ${bg ? bg : "bg-white"} w-[160px] h-[160px] justify-center items-center rounded-full`}
//       >
//         <h1>{metric.instanceName}</h1>
//         <p className="font-semibold mt-[-4px] mb-[4px]">{"instance"}</p>
//         <div className="flex flex-row items-center">
//           <AlarmIcon sx={{ color: "red" }} fontSize="small" />
//           <p className="ml-[1px] mr-[4px] font-semibold">{metric.numAlarms}</p>
//           <ErrorIcon sx={{ color: "red" }} fontSize="small" />
//           <p className="ml-[1px] font-semibold">{metric.usage + "%"}</p>
//         </div>
//         <p className="ml-[1px] mr-[4px] font-semibold">
//           {metric.responseTime + "ms"}
//         </p>
//         <p className="ml-[1px] mr-[4px] font-medium">
//           {metric.numCalls + "calls"}
//         </p>
//       </div>
//     </div>
//   );
// };

// const CustomNode = ({
//   data,

//   // xPos, yPos
// }: NodeProps<IBaseUnitEx>) => {
//   const { openDrawer, closeDrawer, isOpen } = useDrawer();
//   const [selected, setSelected] = useState(false);

//   useEffect(() => {
//     if (!isOpen) setSelected(false);
//   }, [isOpen]);

//   const onClick = useMemo(
//     () => () =>
//       openDrawer({
//         view: (
//           <>
//             <DrawerHeader onClose={closeDrawer} title={"Details"} />
//             {/* <RightInfoDrawer data={data.detail} /> */}
//           </>
//         ),
//         placement: "right",
//         customSize: "420px",
//       }),
//     [closeDrawer, data.detail, openDrawer]
//   );

//   const iconMode = data.mode === "icon";

//   return iconMode ? (
//     <>
//       <div
//         onClick={() => {
//           setSelected(true);
//           onClick();
//         }}
//       >
//         <CustomGauge data={data} bg={selected ? "bg-[#fff0e8]" : "bg-[#fff]"} />
//       </div>

//       <Handle
//         type="target"
//         position={Position.Left}
//         style={{ background: "rgba(0,0,0,0)" }}
//       />
//       <Handle
//         type="source"
//         position={Position.Right}
//         style={{ background: "rgba(0,0,0,0)" }}
//       />
//     </>
//   ) : (
//     <>
//       <div
//         onClick={() => {
//           setSelected(true);
//           onClick();
//         }}
//         className={`border border-gray-300 shadow-xl ${selected ? "bg-[#fff0e8]" : "bg-[#fff]"} rounded-lg min-w-[350px] max-w-[420px] px-5 py-3 `}
//       >
//         <div>
//           <div>
//             <h4>{data.title || ""}</h4>
//           </div>
//           {data.desc ? (
//             <div className="flex flex-row items-center">
//               <SpeedIcon />
//               <p className="ml-1 mr-2">{data.desc}</p>
//               <ShowChartIcon />
//             </div>
//           ) : null}
//         </div>

//         {data.data.map((d, idx) => {
//           return d.type === "metric" ? (
//             <div key={d.type + idx}>
//               <div className="w-full h-[1px] bg-gray-100 my-2"></div>
//               <MetricUnit key={idx} data={d} />
//             </div>
//           ) : d.type === "progress-goal" ? (
//             <div key={d.type + idx}>
//               <div className="w-full h-[1px] bg-gray-100 my-2"></div>
//               <ProgressGoalUnit key={idx} data={d} />
//             </div>
//           ) : d.type === "progress-issue" ? (
//             <div key={d.type + idx}>
//               <div className="w-full h-[1px] bg-gray-100 my-2"></div>
//               <ProgressIssueUnit key={idx} data={d} />
//             </div>
//           ) : null;
//         })}
//       </div>

//       <Handle
//         type="target"
//         position={Position.Left}
//         style={{ background: "rgba(0,0,0,0)" }}
//       />
//       <Handle
//         type="source"
//         position={Position.Right}
//         style={{ background: "rgba(0,0,0,0)" }}
//       />
//     </>
//   );
// };

// // const CustomNodeIcon = ({ data, xPos, yPos }: NodeProps<IBaseUnitEx>) => {
// //   return (
// //     <>
// //       <div></div>
// //     </>
// //   );
// // };

// function CustomEdgeStraight({
//   id,
//   sourceX,
//   sourceY,
//   targetX,
//   targetY,
// }: EdgeProps) {
//   const [edgePath] = getStraightPath({
//     sourceX,
//     sourceY,
//     targetX,
//     targetY,
//   });

//   return (
//     <>
//       <BaseEdge id={id} path={edgePath} />
//     </>
//   );
// }

// const CustomEdgeBezier = ({
//   id,
//   data,
//   markerStart,
//   markerEnd,
//   ...props
// }: EdgeProps<{
//   data: { label?: string; color?: string };
//   id: string;
//   source: string;
//   target: string;
// }>) => {
//   const [edgePath, labelX, labelY] = getBezierPath(props);
//   //console.log(">>>> labelX: ", labelX, " labelY: ", labelY);

//   const color = data?.color || "#44ee44";

//   return (
//     <>
//       <BaseEdge
//         id={id}
//         path={edgePath}
//         markerEnd={markerEnd}
//         style={{ stroke: color }}
//       />
//       {data?.label ? (
//         <EdgeLabelRenderer>
//           <p
//             style={{
//               position: "absolute",
//               transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
//               background: color,
//             }}
//             className="nodrag nopan px-2 py-1 rounded-md text-white text-xs font-bold"
//           >
//             {data?.label}
//           </p>
//         </EdgeLabelRenderer>
//       ) : null}
//     </>
//   );
// };

// const nodeTypes = {
//   custom: CustomNode,
//   metrics: CustomNode,
// };

// const edgeTypes = {
//   straight: CustomEdgeStraight,
//   bezierEdge: CustomEdgeBezier,
// };

// const defaultEdgeOptions = {
//   animated: true,
//   type: "smoothstep",
// };

// function InputWithIcon() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         background: "#eee",
//         borderRadius: 2,
//         width: 280,
//       }}
//     >
//       <SearchIcon
//         sx={{
//           color: "action.active",
//           mr: 1,
//           ml: 1,
//           my: 0.5,
//           width: 25,
//           height: 25,
//         }}
//       />
//       <Input
//         disableUnderline={true}
//         placeholder="Search for a specific entity"
//         required
//         color="info"
//         fullWidth
//         margin="dense"
//       />
//     </Box>
//   );
// }

// function SelectHealth() {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     if (value) {
//       if (value === "all") {
//         toastify.info("not implemented yet");
//       } else if (value === "weak") {
//         toastify.warn("not implemented yet");
//       } else if (value === "medium") {
//         toastify.error("not implemented yet");
//       } else {
//         toastify.success("not implemented yet");
//       }
//     }
//   }, [value]);
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         background: "#eee",
//         borderRadius: 2,
//         width: 200,
//       }}
//     >
//       <HealthIcon
//         sx={{
//           color: "action.active",
//           mr: 1,
//           ml: 1,
//           my: 0.5,
//           width: 25,
//           height: 25,
//         }}
//       />
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         fullWidth
//         defaultValue=""
//         displayEmpty
//         renderValue={(v: string) => {
//           return v || "Health Status";
//         }}
//         sx={{
//           height: 22,
//           "& fieldset": {
//             border: "none",
//           },
//           color: !value ? "#a0a0a0" : "#202020",
//         }}
//         onChange={(e: SelectChangeEvent) => {
//           setValue(e.target.value);
//         }}
//       >
//         <MenuItem value={"all"}>all</MenuItem>
//         <MenuItem value={"weak"}>weak</MenuItem>
//         <MenuItem value={"medium"}>medium</MenuItem>
//         <MenuItem value={"strong"}>strong</MenuItem>
//       </Select>
//     </Box>
//   );
// }

// function SelectEntity() {
//   const [value, setValue] = useState("");

//   const handleChange = (e: SelectChangeEvent) => {
//     setValue(e.target.value);
//   };

//   useEffect(() => {
//     if (value) {
//       if (value === "all") {
//         hotToast("not implemented yet");
//       } else if (value === "entity1") {
//         hotToast.loading("not implemented yet");
//       } else if (value === "entity2") {
//         hotToast.error("not implemented yet");
//       } else {
//         hotToast.success("not implemented yet");
//       }
//     }
//   }, [value]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         background: "#eee",
//         borderRadius: 2,
//         width: 180,
//       }}
//     >
//       <EntityIcon
//         sx={{
//           color: "action.active",
//           mr: 1,
//           ml: 1,
//           my: 0.5,
//           width: 25,
//           height: 25,
//         }}
//       />
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         fullWidth
//         defaultValue=""
//         displayEmpty
//         renderValue={(v: string) => {
//           return v || "Entity Types";
//         }}
//         sx={{
//           height: 22,
//           "& fieldset": {
//             border: "none",
//           },
//           color: !value ? "#a0a0a0" : "#202020",
//         }}
//         onChange={handleChange}
//       >
//         <MenuItem value={"all"}>all</MenuItem>
//         <MenuItem value={"entity1"}>entity1</MenuItem>
//         <MenuItem value={"entity2"}>entity2</MenuItem>
//         <MenuItem value={"entity3"}>entity3</MenuItem>
//       </Select>
//     </Box>
//   );
// }

// function SelectRelationship() {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     if (value) {
//       customToast("not implemented yet");
//     }
//   }, [value]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         background: "#eee",
//         borderRadius: 2,
//         width: 240,
//       }}
//     >
//       <RelationshipIcon
//         sx={{
//           color: "action.active",
//           mr: 1,
//           ml: 1,
//           my: 0.5,
//           width: 25,
//           height: 25,
//         }}
//       />
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         fullWidth
//         defaultValue=""
//         displayEmpty
//         renderValue={(v: string) => {
//           return v || "Relationship depth";
//         }}
//         sx={{
//           height: 22,
//           "& fieldset": {
//             border: "none",
//           },
//           color: !value ? "#a0a0a0" : "#202020",
//         }}
//         onChange={(e: SelectChangeEvent) => {
//           setValue(e.target.value);
//         }}
//       >
//         <MenuItem value={"all"}>all</MenuItem>
//         <MenuItem value={"depth1"}>depth1</MenuItem>
//         <MenuItem value={"depth2"}>depth2</MenuItem>
//         <MenuItem value={"depth3"}>depth3</MenuItem>
//       </Select>
//     </Box>
//   );
// }

// function FilterMenu() {
//   const { nodeType, setNodeType } = useContext(PageContext);

//   const handleChange = (
//     event: React.MouseEvent<HTMLElement>,
//     newAlignment: string
//   ) => {
//     setNodeType(newAlignment === "icon" ? "icon" : "normal");
//   };

//   return (
//     <div className="flex flex-row justify-between">
//       <div className="flex flex-row">
//         <InputWithIcon />
//         <div className="w-4"></div>
//         <SelectHealth />
//         <div className="w-4"></div>
//         <SelectEntity />
//         <div className="w-4"></div>
//         <SelectRelationship />
//       </div>
//       <div>
//         <ToggleButtonGroup
//           value={nodeType}
//           exclusive
//           onChange={handleChange}
//           size="small"
//           aria-label="text alignment"
//         >
//           <ToggleButton value="normal">Normal</ToggleButton>
//           <ToggleButton value="icon">Icon</ToggleButton>
//         </ToggleButtonGroup>
//       </div>
//     </div>
//   );
// }

// export default function Component() {
//   const [instanceMetrics, setInstanceMetrics] = useState<IBaseUnitEx[]>([]);
//   const [nodeType, setNodeType] = useState<"normal" | "icon">("normal");

//   useEffect(() => {
//     setInstanceMetrics(
//       DATA1.map((d) => ({
//         ...d,
//         mode: nodeType === "icon" ? "icon" : "normal",
//       }))
//     );
//   }, [nodeType]);

//   const initialNodes = useMemo(() => {
//     return instanceMetrics.map((m, idx) => {
//       const [x, y] = m.id.split("-").map((u) => Number(u));
//       return {
//         id: m.id,
//         data: m,
//         position: {
//           x: (x ?? 0) * LAYOUT_DEF_WIDTH,
//           y: (y ?? 0) * LAYOUT_DEF_HEIGHT,
//         },
//         type: "metrics",
//       };
//     });
//   }, [instanceMetrics]);

//   const initialEdges = useMemo(() => {
//     return instanceMetrics.reduce(
//       (acc, m, idx) => {
//         if (!m.to) return acc;

//         const toAdded = m.to.map(({ target, label, color }) => {
//           return {
//             id: `${m.id}->${target}`,
//             source: m.id,
//             target: target,
//             type: "bezierEdge",
//             data: { label, color },
//             markerEnd: {
//               type: MarkerType.ArrowClosed,
//             },
//           };
//         });

//         return acc.concat(toAdded);
//       },
//       [] as Edge<{ label?: string; color?: string }>[]
//     );
//   }, [instanceMetrics]);

//   console.log(">>>>>initialNodes:", initialNodes);
//   console.log(">>>>>initialEdges:", initialEdges);

//   return (
//     <ReactFlow
//       nodes={initialNodes}
//       edges={initialEdges}
//       nodeTypes={nodeTypes}
//       edgeTypes={edgeTypes}
//       defaultEdgeOptions={defaultEdgeOptions}
//       fitView
//     >
//       <Background />
//       <Controls position="bottom-left" showInteractive={false} />
//       {/* <Panel position="top-left">
//         <FilterMenu />
//       </Panel> */}
//     </ReactFlow>
//   );
// }
