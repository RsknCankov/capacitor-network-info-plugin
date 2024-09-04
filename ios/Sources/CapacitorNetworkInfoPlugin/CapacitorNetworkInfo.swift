import Foundation

@objc public class CapacitorNetworkInfo: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
