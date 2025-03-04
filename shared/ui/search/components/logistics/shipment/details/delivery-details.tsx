import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import { getRandomArrayElement } from "@utils/get-random-array-element";
import signature from "@public/client-signature.svg";
import { formatDate } from "@utils/format-date";
import { avatarIds } from "@utils/get-avatar";
import { Title, Text, Avatar } from "rizzui";
import cn from "@utils/class-names";

interface DeliveryDetailsProps {
  className?: string;
}

const data = [
  {
    id: 1,
    date: new Date("2023-08-23T10:18:34.191Z"),
    deliveredBy: {
      name: "Estelle Hansen MD",
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.png`,
    },
    receivedBy: {
      name: "Sherry Kulas DVM",
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
        avatarIds
      )}.png`,
    },
    receiversSignature: "Shelia Schmeler PhD",
  },
];

export const getColumns = () => [
  {
    title: <span className="ms-6 block whitespace-nowrap">Date</span>,
    dataIndex: "date",
    key: "date",
    width: 200,
    render: (date: Date) => (
      <span className="ms-6 block">
        <Text className="mb-1 font-medium text-gray-700">
          {formatDate(date, "MMMM D, YYYY")}
        </Text>
        <Text className="text-[13px] text-gray-500">
          {formatDate(date, "h:mm A")}
        </Text>
      </span>
    ),
  },
  {
    title: <span className="block whitespace-nowrap">Delivered By</span>,
    dataIndex: "deliveredBy",
    key: "deliveredBy",
    width: 300,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <div className="flex items-center">
        <Avatar name={name} src={avatar} size="sm" />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Title as="h6" className="mb-0.5 !text-sm font-medium">
            {name}
          </Title>
        </div>
      </div>
    ),
  },
  {
    title: <span className="block whitespace-nowrap">Received By</span>,
    dataIndex: "receivedBy",
    key: "receivedBy",
    width: 300,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <div className="flex items-center">
        <Avatar name={name} src={avatar} size="sm" />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Title as="h6" className="mb-0.5 !text-sm font-medium">
            {name}
          </Title>
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className="block whitespace-nowrap">Receiver&apos;s Signature</span>
    ),
    dataIndex: "receiversSignature",
    key: "receiversSignature",
    width: 300,
    render: (receiversSignature: string) => (
      <img src={signature} alt="clients signature" />
    ),
  },
];

export default function DeliveryDetails({ className }: DeliveryDetailsProps) {
  return (
    <BasicTableWidget
      title="Delivery Details"
      className={cn("pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0")}
      data={data}
      getColumns={getColumns}
      noGutter
      enableSearch={false}
      scroll={{
        x: 900,
      }}
    />
  );
}
