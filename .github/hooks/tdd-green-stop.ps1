# Stop hook for TDD Green agent: enforces all tests must pass before stopping.
# Reads JSON input from stdin; outputs JSON to stdout.

$ErrorActionPreference = "Stop"
$HookInput = [Console]::In.ReadToEnd() | ConvertFrom-Json

# Prevent infinite loops: if the agent is already retrying from a previous stop hook, let it stop.
if ($HookInput.stop_hook_active -eq $true) {
    Write-Output '{"hookSpecificOutput":{"hookEventName":"Stop"}}'
    exit 0
}

# Run the test suite
try {
    npm test 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "tests failed" }
    Write-Output '{"hookSpecificOutput":{"hookEventName":"Stop"}}'
    exit 0
} catch {
    Write-Output '{"hookSpecificOutput":{"hookEventName":"Stop","decision":"block","reason":"Tests are failing. Fix the implementation until all tests pass before finishing."}}'
    exit 0
}
