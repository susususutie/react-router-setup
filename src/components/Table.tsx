import type React from 'react'
import './table.css'

type Column<Data extends Record<string, unknown> = Record<string, unknown>> = {
  key: React.Key
  title: string
  dataIndex?: string
  render?: (value: Data[string], item: Data, index: number) => React.ReactNode
}
export type TableProps<T extends Record<string, unknown> = Record<string, unknown>> = {
  rowKey: keyof T
  dataSource: T[]
  columns: Column<T>[]
}

export default function Table(props: TableProps) {
  const { dataSource, columns, rowKey = 'key' } = props

  return (
    <table>
      <colgroup>
        <col />
      </colgroup>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item, index) => (
          <tr key={(item[rowKey] as React.Key) ?? index}>
            {columns.map(column => {
              const dataIndex = column.dataIndex
              const value = dataIndex ? item[dataIndex as keyof typeof item] : item

              return (
                <td key={column.key}>
                  {typeof column.render === 'function' ? column.render(value, item, index) : String(value)}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
