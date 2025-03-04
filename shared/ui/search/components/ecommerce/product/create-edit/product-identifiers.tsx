import CustomFields from '@/components/ecommerce/product/create-edit/custom-fields';
import { useFormContext } from 'react-hook-form';
import FormGroup from '@/components/form-group';
import cn from '@utils/class-names';
import { Input } from 'rizzui';

interface ProductIdentifiersProps {
  className?: string;
}

export default function ProductIdentifiers({
  className,
}: ProductIdentifiersProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Product Identifiers"
      description="Edit your product identifiers here"
      className={cn(className)}
    >
      <Input
        label="Global Trade Item Number"
        placeholder="12345"
        {...register('tradeNumber')}
        error={errors.tradeNumber?.message as string}
      />
      <Input
        label="Manufacturer Part Number"
        placeholder="145782"
        {...register('manufacturerNumber')}
        error={errors.manufacturerNumber?.message as string}
      />
      <Input
        label="Brand Name"
        placeholder="brand name"
        {...register('brand')}
        error={errors.brand?.message as string}
      />
      <Input
        label="Product UPC/EAN "
        placeholder="145782"
        {...register('upcEan')}
        error={errors.upcEan?.message as string}
      />
      <CustomFields />
    </FormGroup>
  );
}
