import { colorSchema } from '../color-scheme';
import { FetchType } from '@/types/fetch';
import cn from '@utils/class-names';

interface ApiPlaygroundMainTagProps {
  type: FetchType;
  title: string;
}

export default function ApiPlaygroundMainTag(props: ApiPlaygroundMainTagProps) {
  return (
    <div className="flex gap-2 items-center">
      <span
        className={cn(
          'text-base inline-block font-bold tracking-tighter',
          props.type && colorSchema[props.type].text
        )}
        style={{
          textShadow: '0 0 1px rgba(0, 0, 0, 0.3)',
        }}
      >
        {props.type}
      </span>
      <span className="line-clamp-1 text-sm">{props.title}</span>
    </div>
  );
}
