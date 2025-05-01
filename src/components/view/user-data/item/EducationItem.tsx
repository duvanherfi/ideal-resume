import { Education } from "@resume-api/types";
import ItemTitle from "./common/ItemTitle";
import ItemForm, { AddedItemGenericProps } from "./common/ItemForm";

const EducationItem = (props: AddedItemGenericProps<Education>) => {
  const { item } = props;
  return (
    <ItemForm {...props}>
      <div>
        <ItemTitle>{item.degree}</ItemTitle>
        <p className="text-xs md:text-sm text-secondary-600 dark:text-secondary-200">{item.institution}</p>
        <p className="text-xs md:text-sm text-secondary-500 dark:text-secondary-300">
          {new Date(item.startDate).toLocaleDateString()} -
          {item.endDate
            ? new Date(item.endDate).toLocaleDateString()
            : " Present"}
        </p>
      </div>
    </ItemForm>
  );
}

export default EducationItem;