import { Language } from "../../../../../../api/types";
import ItemTitle from "../common/ItemTitle";
import FormAddedItem, { FormAddedItemGenericProps } from "../FormAddedItem";

const LanguageItem = (props: FormAddedItemGenericProps<Language>) => {
  const { item } = props;
  return (
    <FormAddedItem {...props}>
      <div className="flex space-x-4 items-center">
        <ItemTitle>{item.name}</ItemTitle>
        <span className="text-sm text-secondary-600 dark:text-secondary-200">({item.proficiency})</span>
      </div>
    </FormAddedItem>
  );
}

export default LanguageItem;