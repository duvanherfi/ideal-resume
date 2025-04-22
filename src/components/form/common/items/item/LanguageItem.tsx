import { Language } from "../../../../../api/types";
import FormAddedItem, { FormAddedItemGenericProps } from "../FormAddedItem";

const LanguageItem = (props: FormAddedItemGenericProps<Language>) => {
  const { item } = props;
  return (
    <FormAddedItem {...props}>
      <div className="flex space-x-4 items-center">
        <span className="font-medium text-secondary-900 dark:text-secondary-100">{item.name}</span>
        <span className="text-sm text-secondary-600 dark:text-secondary-200">({item.proficiency})</span>
      </div>
    </FormAddedItem>
  );
}

export default LanguageItem;