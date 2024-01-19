import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";


const WorkoutAccordion = ({ workouts }) => {
    return (
    <Accordion variant="splitted">
      {workouts.map((workout) => (
        <AccordionItem key={workout.id} aria-label={`Workout ${workout.id}`} title={`Workout ${workout.id}`}>
          <p>Workout Name: {workout.name}</p>

        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default WorkoutAccordion