#!/bin/bash

# Define the test command
TEST_CMD="pnpm test-storybook" # Replace with your actual test command

# Output file
OUTPUT_FILE="test_results.log"

# Clear the output file before starting
> $OUTPUT_FILE

# Counters for passed and failed tests
PASSED_COUNT=0
FAILED_COUNT=0

# Loop to run the test 30 times
for i in $(seq 1 100); do
    echo "Running test $i" >> $OUTPUT_FILE
    # Run the test command and redirect both stdout and stderr to the file
    if $TEST_CMD >> $OUTPUT_FILE 2>&1; then
        # Log to console if passed
        echo "Test $i passed"
        ((PASSED_COUNT++))
    else
        # Log to console if failed
        echo "Test $i failed"
        ((FAILED_COUNT++))
    fi
    echo "-------------------------" >> $OUTPUT_FILE
done

echo "All tests completed. Check $OUTPUT_FILE for detailed results."
echo "Total passed: $PASSED_COUNT"
echo "Total failed: $FAILED_COUNT"
