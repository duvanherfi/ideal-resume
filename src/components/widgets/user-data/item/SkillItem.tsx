import { Skill } from "@resume-api/types";
import ItemForm, { AddedItemGenericProps } from "./common/ItemForm";
import ItemTitle from "./common/ItemTitle";

const SkillItem: React.FC<AddedItemGenericProps<Skill>> = (props) => {
  const { item } = props;
  return (
    <ItemForm key={item.id} {...props}>
      <ItemTitle>{item.name}</ItemTitle>
      <div className="flex items-center space-x-1 mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={item.name + index}
            className={`w-2 h-2 rounded-full ${index < item.level ? "bg-accent-600" : "bg-secondary-300"}`}
          />
        ))}
      </div>
    </ItemForm>
  );
}
export default SkillItem;