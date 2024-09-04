package com.rskn.capacitor.networkinfo;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.DhcpInfo;
import android.net.LinkAddress;
import android.net.LinkProperties;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.wifi.WifiManager;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.net.Inet4Address;
import java.net.InetAddress;
import java.util.List;

@CapacitorPlugin(name = "CapacitorNetworkInfo")
public class CapacitorNetworkInfoPlugin extends Plugin {

    @RequiresApi(api = Build.VERSION_CODES.M)
    @PluginMethod
    public void getInfo(PluginCall call) {
        Context context = getContext();

        // Get connectivity manager
        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        Network activeNetwork = cm.getActiveNetwork();
        NetworkCapabilities capabilities = cm.getNetworkCapabilities(activeNetwork);
        LinkProperties linkProperties = cm.getLinkProperties(activeNetwork);

        if (capabilities != null && linkProperties != null) {
            String interfaceName = linkProperties.getInterfaceName();
            String ipAddress = null;
            String subnetMask = null;
            String dnsServers = null;
            String connectionMode = null;

            // Retrieve IP address and subnet mask
            for (LinkAddress linkAddress : linkProperties.getLinkAddresses()) {
                InetAddress address = linkAddress.getAddress();
                if (address instanceof Inet4Address) {
                    ipAddress = address.getHostAddress();
                    subnetMask = calculateSubnetMask(linkAddress.getPrefixLength());
                }
            }

            // Retrieve DNS servers
            List<InetAddress> dnsList = linkProperties.getDnsServers();
            StringBuilder dnsStringBuilder = new StringBuilder();
            for (InetAddress dns : dnsList) {
                dnsStringBuilder.append(dns.getHostAddress()).append(" ");
            }
            dnsServers = dnsStringBuilder.toString().trim();

            // Determine the connection mode (using WifiManager for DHCP check)
            if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) {
                WifiManager wifiManager = (WifiManager) context.getApplicationContext().getSystemService(Context.WIFI_SERVICE);
                DhcpInfo dhcpInfo = wifiManager.getDhcpInfo();

                if (dhcpInfo != null && dhcpInfo.gateway != 0) {
                    connectionMode = "DHCP";
                } else {
                    connectionMode = "Static";
                }
            } else {
                connectionMode = "Unknown"; // For other types of networks
            }

            // Return the gathered information
            JSObject ret = new JSObject();
            ret.put("interfaceName", interfaceName);
            ret.put("ipAddress", ipAddress);
            ret.put("subnetMask", subnetMask);
            ret.put("dnsServers", dnsServers);
            ret.put("connectionMode", connectionMode);
            call.resolve(ret);
        } else {
            call.reject("No active network connection.");
        }
    }

    private String calculateSubnetMask(int prefixLength) {
        int mask = 0xffffffff << (32 - prefixLength);
        return String.format("%d.%d.%d.%d",
                (mask >> 24 & 0xff),
                (mask >> 16 & 0xff),
                (mask >> 8 & 0xff),
                (mask & 0xff));
    }
}
