{ pkgs ? import (fetchTarball "github.com/nixos/nixpkgs/archive/d90df566caff6ef84f7bfccc2a2c95496f221d62.tar.gz") {}}:
# Pinned to the latest (as of this writing) release of NixOS 20.09

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
