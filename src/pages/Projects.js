import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';


const useStyles = makeStyles({
    projectDisplay: {
        textAlign: "center",
    },
  });
 
const Projects = () => {
    const classes = useStyles();

    return (
       <div>
          <h1>Projects</h1>
           <p>Projects page body content</p>

            <div className={classes.projectDisplay}>
                {projects.map((value, index) => {
                    return (
                        <ProjectCard 
                            id={value.id}
                            image={value.image} 
                            name={value.name} 
                            description={value.description}/>
                    );
                })}
            </div>
       </div>
    );
}
 
export default Projects;