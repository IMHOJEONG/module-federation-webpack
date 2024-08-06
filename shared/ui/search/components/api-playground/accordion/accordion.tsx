import { Accordion } from "rizzui";
import { ReactNode } from "react";

export interface ApiPlaygroundAccordionProps {
  title: ReactNode;
  children: ReactNode;
  description?: ReactNode;
}

export default function ApiPlaygroundAccordion({
  title,
  children,
  description,
}: ApiPlaygroundAccordionProps) {
  return (
    <Accordion defaultOpen={true} className="flex flex-col flex-1 min-h-0">
      <Accordion.Header className="bg-gray-300 px-4 flex-shrink-0 border-b border-gray-100 border-solid h-12 cursor-default">
        <div className="flex w-full items-center justify-between text-base">
          {title}
        </div>
      </Accordion.Header>
      <Accordion.Body className="flex-1 !flex flex-col min-h-0">
        {description && (
          <div className="text-gray-500 px-4 py-2 bg-gray-100">
            {description}
          </div>
        )}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </Accordion.Body>
    </Accordion>
  );
}
