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
    "@shared/(.*)": "<rootDir>/src/app/shared/$1",
    "@app/(.*)": "<rootDir>/src/app/$1",
  },
  testPathIgnorePatterns: ignorePaths,
  transformIgnorePatterns: ["node_modules/(?!.*.mjs$)"],
  coveragePathIgnorePatterns: ignorePaths,
  modulePathIgnorePatterns: ignorePaths,
  resetModules: false,
};
