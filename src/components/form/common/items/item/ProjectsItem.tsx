import { Project } from "../../../../../types";
import FormAddedItem, { FormAddedItemGenericProps } from "../FormAddedItem";

const ProjectItem = (props: FormAddedItemGenericProps<Project>) => {
  const { item } = props;
  return (
    <FormAddedItem {...props}>
      <div>
        <h4 className="font-medium text-secondary-900 dark:text-secondary-100">{item.name}</h4>
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
        <p className="text-xs md:text-sm mt-1 text-secondary-600 dark:text-secondary-200">{item.description}</p>
      </div>
    </FormAddedItem>
  );
}

export default ProjectItem;