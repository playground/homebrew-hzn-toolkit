class Oh < Formula
  desc "Open Horizon CLI Toolkit"
  homepage "https://github.com/playground/homebrew-hzn-toolkit"
  url "https://github.com/playground/homebrew-hzn-toolkit/releases/download/0.0.1/oh-macos-x64.tar.gz"
  sha256 "7751cf7f20bae1f387546cec218563353f3b3ba1e14a323bf2fa86c021db0dfe"
  version "0.0.1"
  def install
    bin.install "oh"
  end
end