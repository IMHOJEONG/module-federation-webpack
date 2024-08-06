import { uniqueId } from 'lodash';
import { useState } from 'react';

type ButtonRecord = {
  id: string;
};

export function useRequestItems() {
  // state props
  const [addCount, setAddCount] = useState<ButtonRecord[]>([]);

  // handlers
  const handleAdd = () => {
    setAddCount([...addCount, { id: uniqueId() }]);
  };

  const handleRemove = (id: string) => {
    setAddCount(addCount.filter((item) => item.id !== id));
  };

  return { addCount, handleAdd, handleRemove };
}
