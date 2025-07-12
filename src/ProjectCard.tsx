export type ProjectCardProps = {
    title?: string;
    description?: string;
    githubUrl?: string;
    key: number;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h2>{props.title ? props.title : "Project"}</h2>
      <p>{props.description ? props.description : "Description"}</p>
      <input type="button" value="Github Url"/>
    </div>
  );
}