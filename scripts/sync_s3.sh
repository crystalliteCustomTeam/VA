#!/bin/bash
echo "Starting post-build phase: syncing files to S3..."
aws s3 sync /home/ubuntu/VA/.next s3://codepipeline-us-west-1-209605742217/VA-CAL-PIPELINe --delete
echo "Files successfully synced to S3."
