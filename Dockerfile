FROM mono:3.10.0
COPY . /
RUN mono tools/NuGet.exe restore
RUN xbuild
RUN mono packages/NUnit.Runners.2.6.3/tools/nunit-console.exe SMPDomain/bin/Debug/SMPDomain.dll
