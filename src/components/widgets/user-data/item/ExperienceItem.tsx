import type { WorkExperience } from "@resume-api/types/items/WorkExperience";
import ItemForm, { type AddedItemGenericProps } from "./common/ItemForm";

const ExperienceItem: React.FC<AddedItemGenericProps<WorkExperience>> = (props) => {
  const { item } = props;
  return (
    <ItemForm {...props}>
      <h4 className="font-medium text-secondary-900 dark:text-secondary-100 truncate">
        {item.role} at {item.company}
      </h4>
      <p className="text-xs md:text-sm text-secondary-600 dark:text-secondary-300">
        {new Date(item.startDate).toLocaleDateString()} -
        {item.endDate
          ? new Date(item.endDate).toLocaleDateString()
          : " Present"}
      </p>
      <p className="text-xs md:text-sm mt-1 text-secondary-500 dark:text-secondary-400 break-words">
        {item.description}
      </p>
    </ItemForm>
  );
}

export default ExperienceItem;