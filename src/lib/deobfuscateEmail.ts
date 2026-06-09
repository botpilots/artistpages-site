export function deobfuscateEmail(encoded: string): string {
  return [...encoded].map((char, n) => String.fromCharCode(char.charCodeAt(0) + 5 - n)).join('')
}
