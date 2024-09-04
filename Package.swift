// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorNetworkInfo",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorNetworkInfo",
            targets: ["CapacitorNetworkInfoPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorNetworkInfoPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorNetworkInfoPlugin"),
        .testTarget(
            name: "CapacitorNetworkInfoPluginTests",
            dependencies: ["CapacitorNetworkInfoPlugin"],
            path: "ios/Tests/CapacitorNetworkInfoPluginTests")
    ]
)