import {
  CONTENT_TYPES,
  ContentType,
  FETCH_TYPES,
  FetchType,
} from "@/types/fetch";
import { Button, Input, Select, Text } from "rizzui";
import FaArrowRight from "react-icons/fa/FaArrowRight";
import GoDotFill from "react-icons/go/GoDotFill";
import { useState } from "react";

const options = FETCH_TYPES.map((fetchType) => ({
  label: fetchType,
  value: fetchType,
}));

const contentOptions = CONTENT_TYPES.map((contentType) => ({
  label: contentType,
  value: contentType,
}));

export default function ApiPlaygroundDirectApiMain() {
  const [option, setOption] = useState(options[0]?.value);
  const [contentOption, setContentOption] = useState(contentOptions[0]?.value);
  const [value, setValue] = useState("");

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Text className="font-semibold tracking-tighter flex-shrink-0 w-28 flex items-center gap-1">
          <GoDotFill className="scale-75" />
          Method
        </Text>
        <Select
          className="flex-1"
          size="sm"
          options={options}
          value={option}
          onChange={(value) => {
            setOption(value as FetchType);
          }}
        />
        <Button className="bg-gray-600 tracking-tighter line-clamp-1" size="sm">
          Add Header (0)
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Text className="font-semibold tracking-tighter flex-shrink-0 w-28 flex items-center gap-1">
          <GoDotFill className="scale-75" />
          Request URL
        </Text>
        <Input
          className="w-full flex-1"
          size="sm"
          value={value}
          placeholder="https://api.example.com/v1/users"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Text className="font-semibold tracking-tighter flex-shrink-0 w-28 flex items-center gap-1 text-nowrap">
          <GoDotFill className="scale-75" />
          Request Body
        </Text>
        <Button className="bg-gray-600 tracking-tighter line-clamp-1" size="sm">
          Add Body Content (0)
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Text className="font-semibold tracking-tighter flex-shrink-0 w-28 flex items-center gap-1 text-nowrap">
          <GoDotFill className="scale-75" />
          Content-Type
        </Text>
        <Select
          className="flex-1"
          size="sm"
          options={contentOptions}
          value={contentOption}
          onChange={(value) => {
            setContentOption(value as ContentType);
          }}
        />
      </div>

      <div className="flex items-center justify-end">
        <Button
          className="tracking-tighter line-clamp-1 bg-blue-500 flex items-center gap-2"
          size="sm"
        >
          Send Request
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
