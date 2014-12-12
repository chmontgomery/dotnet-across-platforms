# SMPDomain

Simple project showing the ability to compile and run tests across platforms

## Build and run

## Windows with msbuild

1. restore NuGet packages

 ```
 tools/NuGet.exe restore
 ```

1. compile

 ```
 msbuild
 ```

1. run tests

 ```
 packages/NUnit.Runners.2.6.3/tools/nunit-console.exe SMPDomain/bin/Debug/SMPDomain.dll
 ```

## Mac OS and Linux with mono

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

## Mac OS and Linux with kpm

1. install [kvm](https://github.com/aspnet/Home#install-the-k-version-manager-kvm)
1. restore NuGet packages

 ```
 kpm restore
 ```

1. compile

 ```
 kpm build
 ```

1. run tests

 ```
 mono ~/.kpm/packages/NUnit.Runners/2.6.3/tools/nunit-console.exe bin/Debug/net453/SMPDomain.dll
 ```
