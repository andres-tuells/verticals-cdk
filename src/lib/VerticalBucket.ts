import { Bucket, BucketProps } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";


export interface VerticalBucketProps extends BucketProps {
    bucketName: string,
}


export class VerticalBucket extends Bucket {
    constructor(scope: Construct, id: string, props?: VerticalBucketProps) {
        const superProps: BucketProps = {...props}
        super(scope, id, superProps);
    }
}