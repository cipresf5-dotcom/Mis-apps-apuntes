# Sincroniza los archivos web de "App Finanzas Publicas" (carpeta de escritorio,
# fuente real) hacia mis-apps\finanzas-publicas (carpeta que se publica en Render),
# y deja el cambio listo con "git commit" (el "git push" queda a mano, porque
# pide iniciar sesión en GitHub).
$ErrorActionPreference = 'Stop'

$src = "C:\Users\franc\OneDrive\Escritorio\3ro\Finanzas Publicas\App Finanzas Publicas"
$dst = Join-Path $PSScriptRoot "..\finanzas-publicas"
$repoRoot = Join-Path $PSScriptRoot ".."

function Copy-If-Exists($relPath) {
  $from = Join-Path $src $relPath
  $to = Join-Path $dst $relPath
  if (Test-Path $from) {
    Copy-Item $from $to -Force
  }
}

Copy-If-Exists "index.html"
Copy-If-Exists "sw.js"
Copy-If-Exists "manifest.webmanifest"
Copy-If-Exists "assets\app.js"
Copy-If-Exists "assets\styles.css"
Copy-If-Exists "assets\icon.png"

Get-ChildItem (Join-Path $src "data") -Filter "*.js" | ForEach-Object {
  Copy-Item $_.FullName (Join-Path $dst "data\$($_.Name)") -Force
}

Write-Host "Archivos sincronizados." -ForegroundColor Green

Push-Location $repoRoot
git add -A
$status = git status --porcelain
if ($status) {
  git commit -m "sync: actualizar finanzas-publicas"
  Write-Host "Commit creado. Ahora corré 'git push' para subirlo." -ForegroundColor Yellow
} else {
  Write-Host "No hay cambios nuevos para commitear." -ForegroundColor Cyan
}
Pop-Location
