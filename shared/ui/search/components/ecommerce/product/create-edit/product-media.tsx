import UploadZone from '@ui/file-upload/upload-zone';
import { useFormContext } from 'react-hook-form';
import FormGroup from '@/components/form-group';
import cn from '@utils/class-names';

interface ProductMediaProps {
  className?: string;
}

export default function ProductMedia({ className }: ProductMediaProps) {
  const { getValues, setValue } = useFormContext();

  return (
    <FormGroup
      title="Upload new product images"
      description="Upload your product image gallery here"
      className={cn(className)}
    >
      <UploadZone
        className="col-span-full"
        name="productImages"
        getValues={getValues}
        setValue={setValue}
      />
    </FormGroup>
  );
}
