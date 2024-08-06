import Breadcrumb from '@ui/breadcrumb';
import cn from '@utils/class-names';
import { ReactNode } from 'react';
import { Title } from 'rizzui';

export type PageHeaderTypes = {
  title: string;
  breadcrumb: { name: string; href?: string }[];
  className?: string;
  titleClassName?: string;
};

export default function PageHeader({
  title,
  breadcrumb,
  children,
  className,
  titleClassName,
}: React.PropsWithChildren<PageHeaderTypes>) {
  return (
    <header className={cn('mb-6 @container xs:-mt-2 lg:mb-7', className)}>
      <div className="flex items-center justify-between">
        <div>
          <Title
            as="h2"
            className={cn(
              'mb-2 text-[22px] lg:text-2xl 4xl:text-[26px] flex-shrink-0 text-nowrap',
              titleClassName
            )}
          >
            {title}
          </Title>

          {!!breadcrumb.length && (
            <Breadcrumb
              separator=""
              separatorVariant="circle"
              className="flex-wrap"
            >
              {breadcrumb.map((item) => (
                <Breadcrumb.Item
                  key={item.name}
                  {...(item?.href && { href: item?.href })}
                >
                  {item.name}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          )}
        </div>
        {children}
      </div>
    </header>
  );
}
