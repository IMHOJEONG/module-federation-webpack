import { ApiItemType } from '@/store/playground/api-validate.store';
import ApiPlaygroundRequestSubtitle from '../request.subtitle';
import ApiPlaygroundRequestKeyPair from '../request.keypair';

interface ApiPlaygroundRequestMainProps {
  selectedItem: ApiItemType;
  setSelectedItem: (item?: ApiItemType) => void;
}

export default function ApiPlaygroundRequestAuthorizationItem(
  props: ApiPlaygroundRequestMainProps
) {
  // input props
  const { selectedItem, setSelectedItem } = props;

  // const
  const title = 'AUTHORIZATION';
  const key = 'Bearer';
  const authorization = selectedItem.config.headers?.Authorization;
  const authString = authorization ? String(authorization) : '';
  const value =
    authString.indexOf('Bearer') !== -1 ? authString.split(' ')[1] : '';

  // handler
  const handleValueChange = (newValue: string) => {
    setSelectedItem({
      ...selectedItem,
      config: {
        ...selectedItem.config,
        headers: {
          ...selectedItem.config.headers,
          Authorization: newValue.length ? key + ' ' + newValue : undefined,
        },
      },
    });
  };

  return (
    <div className="min-h-28">
      <ApiPlaygroundRequestSubtitle title={title} subInfo={key} />
      {key && (
        <ApiPlaygroundRequestKeyPair
          keyValue={key}
          value={value ?? ''}
          onValueChange={handleValueChange}
        />
      )}
    </div>
  );
}
