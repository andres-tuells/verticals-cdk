import { TablePropsV2, TableV2 } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";


export interface VerticalTableProps extends TablePropsV2 {
    tableName: string,
}


export class VerticalTable extends TableV2 {
    constructor(scope: Construct, id: string, props?: VerticalTableProps) {
        const superProps: TablePropsV2 = {...props}
        super(scope, id, superProps);
    }
}