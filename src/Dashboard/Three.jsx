import { DndContext } from "@dnd-kit/core";
import Done from "./Done";
import Progress from "./Progress";
import TodoCard from "./TodoCard";

const Three = () => {
    return (
        <div className="flex justify-center items-center gap-10">
        <TodoCard></TodoCard>
        <Progress></Progress>
        <Done></Done>
        <DndContext></DndContext>
      </div>
    );
};

export default Three;