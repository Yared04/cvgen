import { useState } from "react";
import { CompanyDetails } from "./CompanyDetail";

interface SelectionCardProps {
  name: string;
  hasDetails?: boolean;
  detailsOn?: boolean;
}

export const SelectionCard = ({
  name,
  hasDetails,
  detailsOn,
}: SelectionCardProps) => {
  const [detailShown, setDetailShown] = useState(detailsOn);

  const toggleDetails = () => {
    setDetailShown(!detailShown);
  };

  return (
    <div className="flex-col w-[50%] shadow m-4 p-4 rounded-sm h-fit">
      <p
        className="mb-6 text-lg text-primary text-xl font-bold cursor-pointer"
        onClick={toggleDetails}
      >
        {name}
      </p>
      {hasDetails && detailShown ? <hr className="w-auto" /> : null}
      {hasDetails && detailShown ? <CompanyDetails /> : null}
    </div>
  );
};
