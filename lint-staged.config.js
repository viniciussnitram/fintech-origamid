/** @type {import('lint-staged').Configuration} */
export default {
  '*.{ts,tsx}': [() => 'tsc -b', 'eslint --fix', 'prettier --write'],
  '*.{js,json,md,css,html}': 'prettier --write',
};
