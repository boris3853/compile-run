import { compileCpp } from './compile-file';
import { compileCppSource } from './compile-source';
import { runCppFile } from './run-file';
import { runCppSource } from './run-source';


const cpp = {
    compileFile: compileCpp,
    compileSource: compileCppSource,
    runFile: runCppFile,
    runSource: runCppSource
};

export default cpp;
