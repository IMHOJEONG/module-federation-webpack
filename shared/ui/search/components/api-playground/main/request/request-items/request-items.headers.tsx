import { useApiAddModalStore } from '@/store/playground/api-add-modal.store';
import { ApiItemType } from '@/store/playground/api-validate.store';
import ApiPlaygroundRequestSubtitle from '../request.subtitle';
import ApiPlaygroundRequestKeyPair from '../request.keypair';
import { useMemo } from 'react';

interface ApiPlaygroundRequestMainProps {
  selectedItem: ApiItemType;
  setSelectedItem: (item?: ApiItemType) => void;
}

export default function ApiPlaygroundRequestHeadersItem(
  props: ApiPlaygroundRequestMainProps
) {
  // input props
  const { selectedItem, setSelectedItem } = props;

  // global props
  const { openModal } = useApiAddModalStore();

  // const
  const title = 'HEADERS';
  const headers = selectedItem.config.headers;

  // pipeline
  let headerValues: [string, unknown][] = [];

  if (headers) {
    headerValues = Object.entries(headers).filter(([key]) => {
      const keyUpper = key.toUpperCase();
      return keyUpper !== 'CONTENT-TYPE' && keyUpper !== 'AUTHORIZATION';
    });
  }

  return (
    <div className="min-h-28">
      <ApiPlaygroundRequestSubtitle
        title={title}
        onAdd={() => {
          openModal(title, (item) => {
            console.log(item);
          });
        }}
      />
      {headerValues.map(([key, value]) => {
        return (
          <ApiPlaygroundRequestKeyPair
            key={key}
            keyValue={key}
            value={value as string}
            onValueChange={(input) => {
              setSelectedItem({
                ...selectedItem,
                config: {
                  ...selectedItem.config,
                  headers: {
                    ...selectedItem.config.headers,
                    [key]: input,
                  },
                },
              });
            }}
          />
        );
      })}
    </div>
  );
}
