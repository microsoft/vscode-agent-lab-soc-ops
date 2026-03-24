#!/usr/bin/env bash
# Stop hook for TDD Green agent: enforces all tests must pass before stopping.
# Reads JSON input from stdin; outputs JSON to stdout.

set -euo pipefail

HOOK_INPUT=$(cat)

# Prevent infinite loops: if the agent is already retrying from a previous stop hook, let it stop.
STOP_HOOK_ACTIVE=$(echo "$HOOK_INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('stop_hook_active', False))" 2>/dev/null || echo "False")
if [ "$STOP_HOOK_ACTIVE" = "True" ]; then
  echo '{"hookSpecificOutput":{"hookEventName":"Stop"}}'
  exit 0
fi

# Run the test suite (redirect all output to stderr so stdout stays clean for JSON)
if npm test >/dev/null 2>&1; then
  # Tests passed — allow the agent to stop
  echo '{"hookSpecificOutput":{"hookEventName":"Stop"}}'
  exit 0
else
  # Tests failed — block the agent from stopping
  echo '{"hookSpecificOutput":{"hookEventName":"Stop","decision":"block","reason":"Tests are failing. Fix the implementation until all tests pass before finishing."}}'
  exit 0
fi
