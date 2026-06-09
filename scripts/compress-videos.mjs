#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

const mediaDir = new URL('../public/media', import.meta.url).pathname

const movFiles = readdirSync(mediaDir).filter((name) => name.endsWith('.mov'))

if (movFiles.length === 0) {
  console.log('No .mov files found in public/media')
  process.exit(0)
}

for (const mov of movFiles) {
  const input = join(mediaDir, mov)
  const output = join(mediaDir, mov.replace(/\.mov$/i, '.mp4'))

  console.log(`Compressing ${mov} → ${output.split('/').pop()}`)

  execFileSync(
    'ffmpeg',
    [
      '-y',
      '-i',
      input,
      '-an',
      '-vf',
      "scale='min(720,iw)':-2",
      '-c:v',
      'libx264',
      '-crf',
      '28',
      '-preset',
      'medium',
      '-movflags',
      '+faststart',
      output,
    ],
    { stdio: 'inherit' },
  )
}

console.log('Done.')
