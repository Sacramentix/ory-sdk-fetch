

async function exec(cmd:string) {
    console.log("Command : ", cmd);
    const [command, ...args] = cmd.split(" ");
    new Deno.Command(command, { args, stdout: "inherit", stderr: "inherit" }).outputSync();

}

console.log("Generating typescript-fetch...");

const PROJECT = "client";
const GENERATOR_TYPE = "typescript-axios";
// const GENERATOR_PLATFORM = "deno";
const GENERATOR_VERSION = "6.6.0";

const outDir = `./clients/${PROJECT}/${GENERATOR_TYPE}`;
// const outDir = `./clients/${PROJECT}/${GENERATOR_TYPE}-${GENERATOR_PLATFORM}`;

console.log(`Cleaning ${outDir}...`);

await Deno.remove(outDir, { recursive: true }).catch(e=>{});

console.log(`Creating ${outDir}...`);

Deno.mkdirSync(outDir, { recursive: true });

console.log(`${outDir} Created.`);

const latestTag = Deno.readTextFileSync(`./spec/${PROJECT}/latest`).match(/(.+)/)?.[0];

const SPEC_FILE = `./spec/${PROJECT}/${latestTag}.json`;

console.log(`Last version spec : ${SPEC_FILE}`);

const generatorConfig = Object.entries({
    npmName: "@sacramentix/ory-client-fetch",
    npmVersion: latestTag,
    modelPropertyNaming: "original",
    disallowAdditionalPropertiesIfNotPresent: false,
    // platform: GENERATOR_PLATFORM,
    ensureUniqueParams: true,
    supportsES6: true,
}).map(([k,v])=>`${k}=${v}`).join(",");

// new Deno.Command("openapi-generator-cli").outputSync();

// await exec(`echo ah!`);
await exec(`openapi-generator-cli version-manager set ${GENERATOR_VERSION}`);

await exec(`openapi-generator-cli generate -i "${SPEC_FILE}" \
    -g ${GENERATOR_TYPE} \
    -o "${outDir}" \
    --git-user-id ory \
    --git-repo-id sdk \
    --git-host github.com \
    --additional-properties=${generatorConfig}
`);
  