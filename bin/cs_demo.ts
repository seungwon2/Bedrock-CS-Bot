#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CsDemoStack } from '../lib/cs_demo-stack';

const app = new cdk.App();
new CsDemoStack(app, 'CsDemoStack');
