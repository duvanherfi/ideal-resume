import { WorkExperience } from "../../../../api/types";
import FormAddedItem, { FormAddedItemGenericProps } from "../../../ui/form/items/FormAddedItem";

const ExperienceItem = (props: FormAddedItemGenericProps<WorkExperience>) => {
  const { item } = props;
  return (
    <FormAddedItem {...props}>
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
    </FormAddedItem>
  );
}

export default ExperienceItem;