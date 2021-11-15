module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
  extends: ['plugin:@next/next/recommended', 'eslint:recommended', 'next']
}