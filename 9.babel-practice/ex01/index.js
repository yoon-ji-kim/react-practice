const babel = require('@babel/core');

//transfiling 할 소스 코드
const source = 'const fn = () => 1;';
                                    //규칙
const result = babel.transform(source, {});
console.log(result);
