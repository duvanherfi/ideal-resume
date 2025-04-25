import { Education } from "../../../../api/types";
import ItemTitle from "../../../ui/form/items/common/ItemTitle";
import AddedItem, { AddedItemGenericProps } from "../../../ui/form/items/AddedItem";

const EducationItem = (props: AddedItemGenericProps<Education>) => {
  const { item } = props;
  return (
    <AddedItem {...props}>
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
    </AddedItem>
  );
}

export default EducationItem;