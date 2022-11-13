{ pkgs }: {
  deps = [
    pkgs.    --volume /var/run/docker.sock:/var/run/docker.sock ,
    pkgs.docker-client
    pkgs.docker
    pkgs.    --volume /var/run/docker.sock:/var/run/docker.sock ,
    pkgs.    --volume //var/run/docker.sock:/var/run/docker.sock ^
    pkgs.    --volume //var/run/docker.sock:/var/run/docker.sock ^
    pkgs.    --volume //var/run/docker.sock:/var/run/docker.sock ^
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}