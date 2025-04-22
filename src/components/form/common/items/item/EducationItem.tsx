import { Education } from "../../../../../types";
import FormAddedItem, { FormAddedItemGenericProps } from "../FormAddedItem";

const EducationItem = (props: FormAddedItemGenericProps<Education>) => {
  const { item } = props;
  return (
    <FormAddedItem {...props}>
      <div>
        <h4 className="font-medium text-secondary-900 dark:text-secondary-100">{item.degree}</h4>
        <p className="text-xs md:text-sm text-secondary-600 dark:text-secondary-200">{item.institution}</p>
        <p className="text-xs md:text-sm text-secondary-500 dark:text-secondary-300">
          {new Date(item.startDate).toLocaleDateString()} -
          {item.endDate
            ? new Date(item.endDate).toLocaleDateString()
            : " Present"}
        </p>
      </div>
    </FormAddedItem>
  );
}

export default EducationItem;