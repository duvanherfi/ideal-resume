import type { Project } from "@resume-api/types/user-data/items/Project";
import type { WorkExperience } from "@resume-api/types/user-data/items/WorkExperience";
import type { SimpleItemProps } from "@resume-api/types/template/TemplateProps";
import Badge from "./Badge";
import ViewEmptySafe from "./ViewEmptySafe";

const TechList = ({ styles, item }: SimpleItemProps<WorkExperience | Project>) => (
    <ViewEmptySafe style={styles.common.techContainer} condition={item.tags}>
        {item.tags?.split(",").map(tech => <Badge key={tech} styles={styles.common.badge}>{tech}</Badge>)}
    </ViewEmptySafe>
);

export default TechList;