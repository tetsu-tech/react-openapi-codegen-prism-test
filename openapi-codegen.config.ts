import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";

export default defineConfig({
  tetsu: {
    from: {
      relativePath: "./swagger/openapi.yaml",
      source: "file",
    },
    outputDir: "src/tetsu",
    to: async (context) => {
      const filenamePrefix = "tetsu";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
