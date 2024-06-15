#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StaticSite } from "../lib/static-site";

class MyStaticSiteStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new StaticSite(this, "StaticWebsite");
  }
}

const app = new cdk.App();
new MyStaticSiteStack(app, "MyStaticWebsite");

app.synth();
