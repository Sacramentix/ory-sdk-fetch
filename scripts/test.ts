

async function exec(cmd:string) {
    console.log("no spread :", cmd);
    console.log("spread :", ...cmd);
    // await Deno.run({cmd: [...cmd]})
    //     .status()
    //     .then(s=>{if(!s.success) throw `command '${cmd}' fails`});
}


await exec(`testing`);

await exec(`testing a b c d e f g`);
  