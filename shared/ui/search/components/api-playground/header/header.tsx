import PageHeader from '@/components/page-header';
import ApiPlaygroundHeaderButtons from './header.buttons';

const pageHeader = {
  title: 'API 테스트 플레이그라운드',
  breadcrumb: [],
};

export default function ApiPlaygroundHeader() {
  return (
    <div className="flex-shrink-0 bg-gray-100 px-8 py-2">
      <PageHeader
        className="mb-0 xs:mt-0 lg:mb-0"
        titleClassName="mb-0 text-xl lg:text-xl 4xl:text-xl"
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      >
        <ApiPlaygroundHeaderButtons />
      </PageHeader>
    </div>
  );
}
