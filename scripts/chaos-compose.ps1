# Chaos for Docker Compose on Windows (PowerShell)
# Run from repo root: .\scripts\chaos-compose.ps1

$ErrorActionPreference = "Stop"
$services = @("backend", "frontend", "ml-service")
$target = $services | Get-Random
Write-Host "Chaos: restarting $target ..."
docker compose restart $target
Start-Sleep -Seconds 4
try {
  Invoke-WebRequest -Uri "http://localhost:5000/health" -UseBasicParsing | Out-Null
  Write-Host "Backend recovered."
} catch {
  Write-Host "Backend may still be down — run: docker compose up -d"
}
