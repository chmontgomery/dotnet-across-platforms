# SMPDomain

Simple project showing the ability to compile and run tests across platforms

## Mac OS and Linux

1. install [mono](http://www.mono-project.com/docs/getting-started/install/)
1. restore NuGet packages

 ```
  mono tools/NuGet.exe restore
 ```

1. compile

 ```
 xbuild
 ```

1. run tests

 ```
 mono packages/NUnit.Runners.2.6.3/tools/nunit-console.exe SMPDomain/bin/Debug/SMPDomain.dll
 ```
