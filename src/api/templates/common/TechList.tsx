import { SimpleItemProps } from "../../common/TemplateProps";
import { Project, WorkExperience } from "../../types";
import Badge from "../common/Badge";
import ViewEmptySafe from "../common/ViewEmptySafe";

const TechList = ({ styles, item }: SimpleItemProps<WorkExperience | Project>) => (
    <ViewEmptySafe style={styles.common.techContainer} condition={item.technologies}>
        {item.technologies?.split(",").map(tech => <Badge key={tech} styles={styles.common.badge}>{tech}</Badge>)}
    </ViewEmptySafe>
);

export default TechList;