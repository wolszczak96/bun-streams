#!/usr/bin/env bun

import { createWriteStream } from "fs";
import archiver from "archiver";

const dest = "node_modules.zip";
const src = "./node_modules";

const output = createWriteStream(dest);
const archive = archiver("zip", { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(src, false);
archive.finalize();
