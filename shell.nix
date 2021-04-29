{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  name="visr-dev-environment";
  buildInputs = [
    pkgs.clojure
    pkgs.nodejs
  ];
  shellHook = ''
    npm ci
  '';
}
