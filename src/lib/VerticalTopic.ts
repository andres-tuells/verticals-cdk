import { Topic, TopicProps } from "aws-cdk-lib/aws-sns";
import { Construct } from "constructs";


export interface VerticalTopicProps extends TopicProps {
    tableName: string,
}


export class VerticalTopic extends Topic {
    constructor(scope: Construct, id: string, props?: VerticalTopicProps) {
        const superProps: TopicProps = {...props}
        super(scope, id, superProps);
    }
}