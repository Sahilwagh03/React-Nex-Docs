import React from 'react';

export function Table({ children }) {
  return (
    <table className="w-full border-collapse text-sm dark:text-gray-300">
      {children}
    </table>
  );
}

export function TableCaption({ children }) {
  return (
    <caption className="mt-4 mb-2 text-sm text-gray-500 dark:text-gray-400">{children}</caption>
  );
}

export function TableHeader({ children }) {
  return (
    <thead className="border-b dark:border-gray-600">
      {children}
    </thead>
  );
}

export function TableHead({ children, className }) {
  return (
    <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 ${className}`}>
      {children}
    </th>
  );
}

export function TableBody({ children }) {
  return (
    <tbody className="dark:bg-gray-800">
      {children}
    </tbody>
  );
}

export function TableRow({ children }) {
  return (
    <tr className="border-b hover:bg-gray-100 dark:border-gray-600 dark:bg-black dark:hover:bg-[#27272a80]">
      {children}
    </tr>
  );
}

export function TableCell({ children, className="", colSpan="0"}) {
  return (
    <td colSpan={colSpan} className={`p-4 align-middle font-medium ${className}`}>
      {children}
    </td>
  );
}

export function TableFooter({ children }) {
  return (
    <tfoot className="border-t bg-gray-100 dark:bg-[#27272a80] font-medium">
      {children}
    </tfoot>
  );
}
