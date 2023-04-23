{ pkgs ? import <nixpkgs> {} }:
# { pkgs ? import (fetchTarball "github.com/NixOS/nixpkgs/archive/7e9b0dff974c89e070da1ad85713ff3c20b0ca97.tar.gz") {}}:
# Pinned to the latest (as of this writing) release of NixOS 21.05

pkgs.mkShell {
  name="visr-dev-environment";
  buildInputs = with pkgs; [
    clojure
    nodejs
  ];
  shellHook = ''
    npm ci
  '';
}
