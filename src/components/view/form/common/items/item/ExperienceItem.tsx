import { WorkExperience } from "../../../../../../api/types";
import FormAddedItem, { FormAddedItemGenericProps } from "../FormAddedItem";

const ExperienceItem = (props: FormAddedItemGenericProps<WorkExperience>) => {
  const { item } = props;
  return (
    <FormAddedItem {...props}>
      <div>
        <h4 className="font-medium text-secondary-900 dark:text-secondary-100">
          {item.role} at {item.company}
        </h4>
        <p className="text-xs md:text-sm text-justify text-secondary-600 dark:text-secondary-200">
          {new Date(item.startDate).toLocaleDateString()} -
          {item.endDate
            ? new Date(item.endDate).toLocaleDateString()
            : " Present"}
        </p>
        <p className="text-xs md:text-sm text-justify mt-1 text-secondary-500 dark:text-secondary-300">{item.description}</p>
      </div>
    </FormAddedItem>
  );
}

export default ExperienceItem;