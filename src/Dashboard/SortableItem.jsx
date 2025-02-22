import { useDroppable } from "@dnd-kit/core";

const SortableItem = () => {
    const {setNodeRef: setFirstDroppableRef} = useDroppable({
        id: 'droppable-1',
      });
      const {setNodeRef: setsecondDroppableRef} = useDroppable({
        id: 'droppable-2',
      });
      
      return (
        <section>
          <div ref={setFirstDroppableRef}>
            /* Render whatever you like within */
          </div>
          <div ref={setsecondDroppableRef}>
            /* Render whatever you like within */
          </div>
        </section>
      );
};

export default SortableItem;