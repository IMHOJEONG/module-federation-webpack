export interface IDataUnit {
  type: "metric" | "progress-goal" | "progress-issue" | "progress-";
}

export interface IMetricSegmentUnit {
  title: string;
  current: string;
  variance: number;
}

export interface IMetricUnit extends IDataUnit {
  type: "metric";
  segments: IMetricSegmentUnit[];
}

export interface IProgressGoalUnit extends IDataUnit {
  type: "progress-goal";
  title: string;
  color?: string;
  total: number;
  progressed: number;
}

export interface IProgressIssueUnit extends IDataUnit {
  type: "progress-issue";
  title: string;
  color?: string;
  total: number;
  progressed: number;
  status?: string;
}

export interface IDataMetricSummary {
  instanceName: string;
  numAlarms: number;
  usage: number;
  responseTime: number;
  numCalls: number;
}

export interface IEdge {
  target: string;
  label?: string;
  color?: string;
}

export interface IBaseUnit {
  id: string;
  instanceName: string;
  to?: IEdge[];
  type?: string;
  title: string;
  desc?: string;
  detail?: unknown;
  data: (IMetricUnit | IProgressGoalUnit | IProgressIssueUnit)[];
  dataMetric?: IDataMetricSummary;
}

export const DATA1: IBaseUnit[] = [
  {
    id: "0-1",
    instanceName: "1",
    to: [{ target: "1-1", color: "gray" }],
    title: "Social Notification",
    data: [
      {
        type: "progress-issue",
        title: "Jira (Epic)",
        color: "#ffcc00",
        total: 4,
        progressed: 2,
        status: "To do",
      },
    ],
    dataMetric: {
      instanceName: "1",
      numAlarms: 1407,
      usage: 2,
      responseTime: 99.8,
      numCalls: 552,
    },
  },
  {
    id: "0-2",
    instanceName: "2",
    to: [{ target: "1-1", color: "gray" }],
    title: "Time-based Notification",
    data: [
      {
        type: "progress-issue",
        title: "Jira (Epic)",
        color: "#44aaff",
        total: 1,
        progressed: 1,
        status: "Done",
      },
    ],
    dataMetric: {
      instanceName: "2",
      numAlarms: 1407,
      usage: 5.2,
      responseTime: 226.5,
      numCalls: 237,
    },
  },
  {
    id: "0-3",
    instanceName: "3",
    to: [{ target: "1-2.2", color: "gray" }],
    title: "AI model for song recommendations",
    data: [
      {
        type: "progress-issue",
        title: "Jira (Epic)",
        color: "#00aa00",
        total: 4,
        progressed: 1,
        status: "In progress",
      },
    ],
    dataMetric: {
      instanceName: "3",
      numAlarms: 1407,
      usage: 2,
      responseTime: 99.8,
      numCalls: 552,
    },
  },
  {
    id: "1-1",
    instanceName: "4",
    to: [
      { target: "2-1", label: "label1", color: "red" },
      { target: "2-2.5", label: "label2", color: "green" },
    ],
    title: "Metrics for each instance",
    desc: "Past 7 days • Average",
    data: [
      {
        type: "metric",
        segments: [
          {
            title: "CPU",
            current: "10%",
            variance: 5,
          },
          {
            title: "memory",
            current: "30GB",
            variance: 10,
          },
          {
            title: "disk",
            current: "10GB",
            variance: -5,
          },
        ],
      },
    ],
    dataMetric: {
      instanceName: "4",
      numAlarms: 1407,
      usage: 60,
      responseTime: 215.6,
      numCalls: 244,
    },
  },
  {
    id: "1-2.2",
    instanceName: "5",
    to: [{ target: "2-2.5", label: "label3", color: "green" }],
    title: "Time spent listening to music by subscribers",
    desc: "Metric(North Star) • Sum",
    data: [
      {
        type: "metric",
        segments: [
          {
            title: "Past 7 days",
            current: "4.41K mins",
            variance: 0.43,
          },
          {
            title: "Past 6 weeks",
            current: "26.15K mins",
            variance: 2.57,
          },
          {
            title: "Past 12 months",
            current: "198.31K mins",
            variance: 38.59,
          },
        ],
      },
    ],
    dataMetric: {
      instanceName: "5",
      numAlarms: 1407,
      usage: 29,
      responseTime: 99.8,
      numCalls: 552,
    },
  },
  {
    id: "1-3.4",
    instanceName: "6",
    to: [{ target: "2-2.5", label: "label4", color: "orange" }],
    title: "Total search queries by customers",
    desc: "All queries • Sum",
    data: [
      {
        type: "metric",
        segments: [
          {
            title: "Past 7 days",
            current: "15.12K",
            variance: 0.53,
          },
          {
            title: "Past 6 weeks",
            current: "338.23K",
            variance: -2.57,
          },
          {
            title: "Past 12 months",
            current: "198.31M",
            variance: 2.59,
          },
        ],
      },
    ],
    dataMetric: {
      instanceName: "6",
      numAlarms: 1407,
      usage: 39,
      responseTime: 99.8,
      numCalls: 446,
    },
  },
  {
    id: "2-1",
    instanceName: "7",
    title: "Metrics for each instance",
    desc: "Past 30 days • Average",
    data: [
      {
        type: "progress-goal",
        title: "for 2024",
        color: "blue",
        total: 50000,
        progressed: 20000,
      },
      {
        type: "metric",
        segments: [
          {
            title: "CPU",
            current: "30%",
            variance: 15,
          },
          {
            title: "memory",
            current: "70GB",
            variance: -10,
          },
          {
            title: "disk",
            current: "30GB",
            variance: 30,
          },
        ],
      },
    ],
    dataMetric: {
      instanceName: "7",
      numAlarms: 1407,
      usage: 55,
      responseTime: 99.8,
      numCalls: 762,
    },
  },
  {
    id: "2-2.5",
    instanceName: "8",
    title: "Metrics for each instance",
    desc: "Past 180 days • Average",
    data: [
      {
        type: "progress-goal",
        title: "for 2024",
        color: "red",
        total: 50000,
        progressed: 20000,
      },
      {
        type: "progress-issue",
        title: "Jira (Epic)",
        color: "#00aa00",
        total: 4,
        progressed: 1,
        status: "In progress",
      },
      {
        type: "metric",
        segments: [
          {
            title: "CPU",
            current: "30%",
            variance: 15,
          },
          {
            title: "memory",
            current: "70GB",
            variance: -10,
          },
          {
            title: "disk",
            current: "30GB",
            variance: 30,
          },
        ],
      },
    ],
    dataMetric: {
      instanceName: "8",
      numAlarms: 1407,
      usage: 88,
      responseTime: 99.8,
      numCalls: 762,
    },
  },
];
