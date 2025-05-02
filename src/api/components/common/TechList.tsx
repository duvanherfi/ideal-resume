import { SimpleItemProps } from "../../common/TemplateProps";
import { WorkExperience } from "@resume-api/types/items/WorkExperience";
import { Project } from "@resume-api/types/items/Project";
import Badge from "./Badge";
import ViewEmptySafe from "./ViewEmptySafe";

const TechList = ({ styles, item }: SimpleItemProps<WorkExperience | Project>) => (
    <ViewEmptySafe style={styles.common.techContainer} condition={item.tags}>
        {item.tags?.split(",").map(tech => <Badge key={tech} styles={styles.common.badge}>{tech}</Badge>)}
    </ViewEmptySafe>
);

export default TechList;