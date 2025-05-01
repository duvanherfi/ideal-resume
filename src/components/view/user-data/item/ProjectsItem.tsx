import { Project } from "@resume-api/types";
import ItemDescription from "./common/ItemDescription";
import ItemTitle from "./common/ItemTitle";
import ItemForm, { AddedItemGenericProps } from "./common/ItemForm";

const ProjectItem = (props: AddedItemGenericProps<Project>) => {
  const { item } = props;
  return (
    <ItemForm {...props}>
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
    </ItemForm>
  );
}

export default ProjectItem;