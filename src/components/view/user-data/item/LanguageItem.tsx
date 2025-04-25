import { Language } from "../../../../api/types";
import ItemTitle from "../../common/form/items/common/ItemTitle";
import AddedItem, { AddedItemGenericProps } from "../../common/form/items/AddedItem";

const LanguageItem = (props: AddedItemGenericProps<Language>) => {
  const { item } = props;

  return (
    <AddedItem {...props}>
      <div className="flex space-x-4 items-center">
        <ItemTitle>{item.name}</ItemTitle>
        <span className="text-sm text-secondary-600 dark:text-secondary-200">({item.proficiency})</span>
      </div>
    </AddedItem>
  );
}

export default LanguageItem;