import { Project } from "../../../../../../api/types";
import ItemDescription from "../common/ItemDescription";
import ItemTitle from "../common/ItemTitle";
import FormAddedItem, { FormAddedItemGenericProps } from "../FormAddedItem";

const ProjectItem = (props: FormAddedItemGenericProps<Project>) => {
  const { item } = props;
  return (
    <FormAddedItem {...props}>
      <div>
        <ItemTitle>{item.name}</ItemTitle>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-blue-600 dark:text-blue-400 hover:underline break-all"
          >
            {item.link}
          </a>
        )}
        <ItemDescription>{item.description}</ItemDescription>
      </div>
    </FormAddedItem>
  );
}

export default ProjectItem;