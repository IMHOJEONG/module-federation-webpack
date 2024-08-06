import { colorSchema } from '../color-scheme';
import { FetchType } from '@/types/fetch';
import cn from '@utils/class-names';

interface ApiPlaygroundTreeViewTagProps {
  type: FetchType;
  title: string;
}

export default function ApiPlaygroundTreeViewTag(
  props: ApiPlaygroundTreeViewTagProps
) {
  return (
    <div className="flex gap-2 items-center">
      <span
        className={cn(
          'text-xs inline-block text-right w-11',
          colorSchema[props.type].text
        )}
      >
        {props.type}
      </span>
      <span className="line-clamp-1 text-sm">{props.title}</span>
    </div>
  );
}
