import { Language } from "@resume-api/types";
import ItemForm, { AddedItemGenericProps } from "./common/ItemForm";
import ItemTitle from "./common/ItemTitle";

const LanguageItem: React.FC<AddedItemGenericProps<Language>> = (props) => {
  const { item } = props;

  return (
    <ItemForm {...props}>
      <div className="flex space-x-4 items-center">
        <ItemTitle>{item.name}</ItemTitle>
        <span className="text-sm text-secondary-600 dark:text-secondary-200">({item.proficiency})</span>
      </div>
    </ItemForm>
  );
}

export default LanguageItem;