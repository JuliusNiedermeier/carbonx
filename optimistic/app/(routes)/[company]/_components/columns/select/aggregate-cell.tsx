import { FC } from "react";
import { Cell } from "@/app/(routes)/[company]/_components/cell";
import { ActivityDisplayCellContext } from "@/app/(routes)/[company]/_utils/cell-types";
import { Checkbox } from "@/app/_components/ui/checkbox";

export const SelectAggregateCell: FC<ActivityDisplayCellContext> = (props) => {
  return (
    <Cell width={props.column.getSize()} pinned={props.column.getIsPinned()} start={props.column.getStart("left")}>
      <Checkbox checked={props.row.getIsSelected()} onCheckedChange={(checked) => props.row.toggleSelected(!!checked)} />
    </Cell>
  );
};