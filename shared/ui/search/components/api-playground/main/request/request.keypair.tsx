import ApiPlaygroundRequestTextArea from './request.textarea';

interface ApiPlaygroundRequestKeyPairProps {
  keyValue: string;
  value: string;
  onValueChange: (newValue: string) => void;
}

export default function ApiPlaygroundRequestKeyPair(
  props: ApiPlaygroundRequestKeyPairProps
) {
  // input props
  const { keyValue, value, onValueChange } = props;

  return (
    <div className="flex gap-">
      <label className="flex-1 pt-1 cursor-text" htmlFor={keyValue}>
        <span className="break-all font-semibold text-gray-600 text-[0.81rem] pl-2">
          {keyValue}
        </span>
      </label>
      <div className="flex-[2]">
        <ApiPlaygroundRequestTextArea
          value={value}
          onChange={(e) => onValueChange(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
