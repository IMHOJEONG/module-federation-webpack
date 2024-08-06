import ApiPlaygroundResponseTextArea from './response.textarea';

interface ApiPlaygroundResponseKeyPairProps {
  keyValue: string;
  value: string;
}

export default function ApiPlaygroundResponseKeyPair(
  props: ApiPlaygroundResponseKeyPairProps
) {
  // input props
  const { keyValue, value } = props;

  return (
    <div className="flex items-center">
      <label className="flex-1 h-full flex items-start" htmlFor={keyValue}>
        <span className="break-all font-semibold text-white text-sm pt-1">
          {keyValue}
        </span>
      </label>
      <div className="flex-1">
        <ApiPlaygroundResponseTextArea value={value} />
      </div>
    </div>
  );
}
