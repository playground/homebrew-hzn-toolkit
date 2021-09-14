class Oh < Formula
  desc "Open Horizon CLI Toolkit"
  homepage "https://github.com/playground/homebrew-hzn-toolkit"
  url "https://github.com/playground/homebrew-hzn-toolkit/releases/download/0.0.1/oh-macos-x64.tar.gz"
  sha256 "eecedb4c6778180a528a9d565b29a40ff54e181e6d0745c9a0587d36d3f08e43"
  version "0.0.1"
  def install
    bin.install "oh"
  end
end