import {
  useConfirm,
  useCurrentPath,
  useGenerator,
  useDisplayJson,
  usePackageStubsPath,
  usePrompt,
  useSentence,
} from "@henrotaym/scaffolding-utils";

import { camelCase } from "lodash";

const useStubsPath = usePackageStubsPath(
  "@henrotaymcorp/nuxt-module-boilerplate"
);

const useScaffolding = () => {
  useSentence("Hi there 👋");
  useSentence("Let's scaffold a new nuxt module 🎉");

  const folder = usePrompt("Folder location [.]", ".");
  const location = useCurrentPath(folder);
  const lastFolderLocationName = location.split("/").slice(-1)[0];

  const githubOrganizationName = usePrompt(
    "Github organization name [deegitalbe]",
    "deegitalbe"
  );

  const npmOrganizationName = usePrompt(
    "Npm organization name [deegital]",
    "deegital"
  );

  const moduleName = usePrompt(
    `Module name [${lastFolderLocationName}]`,
    lastFolderLocationName
  );

  const camelCaseLastFolderLocationName = camelCase(lastFolderLocationName);
  const moduleConfigKey = usePrompt(
    `Module nuxt config key[${camelCaseLastFolderLocationName}]`,
    camelCaseLastFolderLocationName
  );

  const description = usePrompt(
    `Module description [${lastFolderLocationName}]`,
    lastFolderLocationName
  );

  const authorName = usePrompt(
    "Author full name [Henrotay Mathieu]",
    "Henrotay Mathieu"
  );

  const authorEmail = usePrompt(
    "Author email [mathieu.henrotay@gmail.com]",
    "mathieu.henrotay@gmail.com"
  );

  const playgroundPort = usePrompt(`Playground port [3000]`, "3000");

  const vitePort = usePrompt(`Playground vite port [24678]`, "24678");

  const data = {
    githubOrganizationName,
    npmOrganizationName,
    moduleName,
    moduleConfigKey,
    description,
    authorName,
    authorEmail,
    playgroundPort,
    vitePort,
  };

  useDisplayJson({ location, ...data });

  const isConfirmed = useConfirm("Is it correct ? ");

  if (!isConfirmed) {
    useSentence("Scaffolding was cancelled ❌");
    useSentence("Come back when you're ready 😎");
    return;
  }

  const generator = useGenerator(data);

  generator.copy(useStubsPath(), location);

  useSentence("Successfully scaffolded project ✅");
  useSentence("Happy coding 🤓");
};

export default useScaffolding;
