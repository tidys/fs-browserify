function tip() {
    console.log(`Don't call me, I'm just an empty shell`);
}
module.exports = {
    ensureDirSync: tip,
    emptyDirSync: tip,
    copySync: tip,
    copyFileSync: tip,
    readdirSync: tip,
    stat: tip,
    statSync: tip,
    unlinkSync: tip,
    createWriteStream: tip,
    existsSync: tip,
    readFileSync: tip,
    writeFileSync: tip,
}