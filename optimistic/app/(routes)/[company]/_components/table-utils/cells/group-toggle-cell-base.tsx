import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { FC } from "react";
import { Cell } from "../../cell";

type Props = {
  width: number;
  label: string;
  subItemCount: number;
  disabled?: boolean;
  expanded: boolean;
  onClick: () => any;
};

export const GroupToggleCellBase: FC<Props> = (props) => {
  return (
    <Cell width={props.width} padding={false}>
      <button className="flex items-center gap-2 !bg-gray-200 w-full h-full px-3" disabled={props.disabled} onClick={props.onClick}>
        <span className="mr-auto font-medium">{props.label}</span>
        <span className="text-xs text-muted-foreground">{props.subItemCount}</span>
        {props.expanded ? <ChevronsDownUp size="16" /> : <ChevronsUpDown size="16" />}
      </button>
    </Cell>
  );
};