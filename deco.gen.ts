// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/loader.tsx";
import * as $3 from "./routes/start.tsx";
import * as $$0 from "./islands/Editor.tsx";
import * as $$1 from "./islands/InspectVSCode.tsx";
import * as $$$0 from "./components/GetStarted.tsx";
import * as $$$1 from "./components/Head.tsx";
import * as $$$2 from "./components/Layout.tsx";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/index.tsx": $1,
    "./routes/loader.tsx": $2,
    "./routes/start.tsx": $3,
  },
  islands: { "./islands/Editor.tsx": $$0, "./islands/InspectVSCode.tsx": $$1 },
  components: {
    "./components/GetStarted.tsx": $$$0,
    "./components/Head.tsx": $$$1,
    "./components/Layout.tsx": $$$2,
  },
  schemas: {
    GetStarted: {
      "title": "Get Started",
      "type": "object",
      "properties": {
        "enableInspectVSCode": {
          "title": "Enable InspectVSCode",
          "type": "boolean",
          "default": false,
        },
      },
    },
    Head: null,
    Layout: null,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
