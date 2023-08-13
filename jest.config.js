const ignorePaths = [
  "<rootDir>/node_modules",
  "<rootDir>/dist",
  "<rootDir>/src/setup-jest.ts",
  "<rootDir>/src/jest.config.js",
];

module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  moduleNameMapper: {
    "@env/(.*)": ["<rootDir>/src/environments/$1"],
    "@core/(.*)": ["<rootDir>/src/core/$1"],
    "@shared/(.*)": ["<rootDir>/src/app/shared/$1"],
  },
  testPathIgnorePatterns: ignorePaths,
  transformIgnorePatterns: ["node_modules/(?!.*.mjs$)"],
  coveragePathIgnorePatterns: ignorePaths,
  modulePathIgnorePatterns: ignorePaths,
  resetModules: false,
};
