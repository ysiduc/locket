
function FindProxyForURL(url, host) {
  host = host.toLowerCase();

  if (
    dnsDomainIs(host, "mitm.it") ||
    dnsDomainIs(host, "api.revenuecat.com")
  ) {
    return "PROXY 13.214.189.79:8080";
  }

  return "DIRECT";
}
