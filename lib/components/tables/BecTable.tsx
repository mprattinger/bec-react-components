import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table";
import BecTableHeader from "./BecTableHeader";
import { BecTableRow } from "./BecTableRow";
import { BecTableHeaderCell } from "./BecTableHeaderCell";
import { BecTableBody } from "./BecTableBody";
import { BecTableCell } from "./BecTableCell";

interface BecTableProps<TData extends RowData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRendered?: () => void;
}

export function BecTable<TData, TValue>(props: BecTableProps<TData, TValue>) {
  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  table.options.onStateChange = () => {
    props.onRendered?.();
  };

  return (
    <table>
      <BecTableHeader>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <BecTableRow
              key={headerGroup.id}
              isHeader={true}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <BecTableHeaderCell key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </BecTableHeaderCell>
                );
              })}
            </BecTableRow>
          );
        })}
      </BecTableHeader>

      <BecTableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row, idx) => (
            <BecTableRow
              key={row.id}
              index={idx}
              isHeader={false}
            >
              {row.getVisibleCells().map((cell) => (
                <BecTableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </BecTableCell>
              ))}
            </BecTableRow>
          ))
        ) : (
          <BecTableRow isHeader={false}>
            <BecTableCell>No data</BecTableCell>
          </BecTableRow>
        )}
      </BecTableBody>
    </table>
  );
}
