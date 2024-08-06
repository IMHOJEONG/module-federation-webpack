import { ApiItemType } from '@/store/playground/api-validate.store';
import ApiPlaygroundRequestSubtitle from '../request.subtitle';
import ApiPlaygroundRequestKeyPair from '../request.keypair';
import { useState } from 'react';

interface ApiPlaygroundRequestPathVariablesProps {
  selectedItem: ApiItemType;
  setSelectedItem: (item?: ApiItemType) => void;
}

export default function ApiPlaygroundRequestPathVariablesItem(
  props: ApiPlaygroundRequestPathVariablesProps
) {
  // input props
  const { selectedItem, setSelectedItem } = props;

  // const
  const title = 'PATH VARIABLES';

  return (
    <div className="min-h-28">
      <ApiPlaygroundRequestSubtitle title={title} onAdd={() => {}} />
      {Object.entries(selectedItem.config.params ?? {}).map(([key, value]) => {
        return (
          <ApiPlaygroundRequestKeyPair
            key={key}
            keyValue={key}
            value={String(value)}
            onValueChange={(input) => {
              setSelectedItem({
                ...selectedItem,
                config: {
                  ...selectedItem.config,
                  params: {
                    ...selectedItem.config.params,
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
