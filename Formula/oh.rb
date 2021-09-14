class Oh < Formula
  desc "Open Horizon CLI Toolkit"
  homepage "https://github.com/playground/homebrew-hzn-toolkit"
  url "https://github.com/playground/homebrew-hzn-toolkit/releases/download/0.0.1/oh-macos-x64.tar.gz"
  sha256 "f1698ad0cb33df0477d47abe7e0be347c4106961fb2409cfe73ac99da21fa9e2"
  version "0.0.1"
  def install
    bin.install "oh"
  end
end