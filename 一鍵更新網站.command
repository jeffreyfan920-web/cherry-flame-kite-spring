#!/bin/bash
cd "$(dirname "$0")"
git pull --rebase
git add .
git commit -m "Quick update $(date '+%Y-%m-%d %H:%M')"
git push
echo "✅ 已經推上 GitHub，Vercel 正在自動更新網站！"
