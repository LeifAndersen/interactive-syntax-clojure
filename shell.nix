{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  name="visr-dev-environment";
  buildImputs = [
    pkgs.nodejs
    pkgs.clojure
  ];
  shellHook = ''
    npm ci
  '';
}
