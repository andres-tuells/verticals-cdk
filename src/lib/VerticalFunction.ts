import { FunctionProps, Function } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";


export interface VerticalFunctionProps extends FunctionProps{
    functionName: string,
}


export class VerticalFunction extends Function {
    constructor(scope: Construct, id: string, props?: VerticalFunctionProps) {
        const superProps: FunctionProps = {...props}
        super(scope, id, superProps);
    }
}