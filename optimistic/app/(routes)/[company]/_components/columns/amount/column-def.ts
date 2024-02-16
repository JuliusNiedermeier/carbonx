import { AccessorFnColumnDef } from "@tanstack/react-table";
import { Activity } from "../../../_hooks/use-activities";
import { AmountHeader } from "./header";
import { AmountCell } from "./cell";
import { AmountFooter } from "./footer";
import { AggregatedCell } from "../../table-utils/cells/aggregated-cell";
import { BaseColumnMetaData } from "../../../_columns";

const ID = "amount";

export const amountColumnDef = {
  accessorFn: ({ amount }) => amount,
  id: ID,
  header: AmountHeader,
  cell: AmountCell,
  footer: AmountFooter,
  aggregatedCell: AggregatedCell,
  aggregationFn: "sum",
} as const satisfies AccessorFnColumnDef<Activity, number | null>;

export const amountColumnMeta = {
  ID,
  name: "Amount",
  description: "Amount of the activity",
  dataUpdateKey: "amount",
  lockable: true,
} as const satisfies BaseColumnMetaData;