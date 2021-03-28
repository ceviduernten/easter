import React, {Component} from "react";
import {Table} from "semantic-ui-react";
import {IDataTableProps} from "../../interfaces/interfaces";

class DataTable extends Component<IDataTableProps, any> {
    constructor(props: IDataTableProps) {
        super(props);
        this.renderDataRow.bind(this);
        this.renderHeadingCell.bind(this);
    }

    renderHeadingCell = (_cell : any, cellIndex : number) => {
        return <Table.HeaderCell className="cell-header" key={`heading-${cellIndex}`}>{_cell.name}</Table.HeaderCell>;
    };

    renderDataRow = (_row : [], rowIndex : number) => {
        let keys = this.props.headings.map((element : any) => {
            return element.sortkey;
        });
        return [
            <Table.Row key={rowIndex}>
                {keys.map((key : any, index : number) => {
                    return (
                        <Table.Cell className={key} key={`${index}-${rowIndex}`}>{_row[key]}</Table.Cell>
                    )
                })}
            </Table.Row>
        ]
    };

    render() {
        const {headings, rows} = this.props;
        const theadMarkup = headings.map(this.renderHeadingCell);
        if (rows === undefined || rows === null || rows.length === 0) return <div className="datatable-wrapper"><br/><div className="noresult">Keine Resulate</div></div>;
        const tBodyMarkup = rows.map(this.renderDataRow);
        return (
            <div className="datatable-wrapper" key="datatable">
                <Table basic='very' className="datatable">
                    <Table.Header>
                        <Table.Row>
                            {theadMarkup}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tBodyMarkup}
                    </Table.Body>
                </Table>
            </div>
        );
    };
}

export default DataTable;