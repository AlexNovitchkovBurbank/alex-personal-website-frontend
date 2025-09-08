import './App.css'
import Nav from './nav/Nav.tsx'
import { ProjectCard, type ProjectCardProps } from './ProjectCard.tsx'

function App() {
  const items: ProjectCardProps[] = [
    {
      title: 'Project 1',
      description: 'This is the first project',
      githubUrl: '',
      key: 1
    },
    {
      title: 'Project 2',
      description: 'This is the second project',
      githubUrl: '',
      key: 2
    },
    {
      title: 'Project 3',
      description: 'This is the third project',
      githubUrl: '',
      key: 3
    }];


  return (
    <>
      <Nav numPages={5}/>
      <div className="card">
        {items.map((item: ProjectCardProps) => (
          <ProjectCard key={item.key} description={item.description} githubUrl={item.githubUrl} title={item.title} />
        ))}
      </div>
    </>
  )
}

export default App
