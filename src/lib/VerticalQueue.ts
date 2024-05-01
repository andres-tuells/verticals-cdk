import { Queue, QueueProps } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";


export interface VerticalQueueProps {
    queueName: string,
}


export class VerticalQueue extends Queue {
    constructor(scope: Construct, id: string, props?: VerticalQueueProps) {
        const superProps: QueueProps = {...props}
        super(scope, id, superProps);
    }
}