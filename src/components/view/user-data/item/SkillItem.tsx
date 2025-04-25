import { Skill } from "../../../../api/types";
import ItemTitle from "../../../ui/form/items/common/ItemTitle";
import AddedItem, { AddedItemGenericProps } from "../../../ui/form/items/AddedItem";

const SkillItem = (props: AddedItemGenericProps<Skill>) => {
  const { item } = props;
  return (
    <AddedItem key={item.id} {...props}>
      <ItemTitle>{item.name}</ItemTitle>
      <div className="flex items-center space-x-1 mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={item.name + index}
            className={`w-2 h-2 rounded-full ${index < item.level ? "bg-accent-600" : "bg-secondary-300"}`}
          />
        ))}
      </div>
    </AddedItem>
  );
}
export default SkillItem;