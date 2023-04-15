import { sortableContainer } from "react-sortable-hoc";

export const SortableContainer = sortableContainer(({ children }) => {
    return <ul>{children}</ul>;
});
