// 解析url
const url = "http://www.domain.com/order?user=admin&id=123&city=南昌&enabled";
console.log(parse(url));
console.log(new URL(url));

function parse(url) {
  const protocolArr = url.split("://");
  const protocol = protocolArr[0];
  const hostName = protocolArr[1].split("/")[0];
  const pathArr = protocolArr[1].split("?");
  const path = pathArr[0].split(hostName)[1];

  const queryArr = pathArr[1].split("&"); // ['user=admin', 'id=123', 'city=南昌', 'enabled']
  const query = {};
  queryArr.forEach((item) => {
    if (!item.includes("=")) {
      query[item] = true;
      return;
    }
    const itemArr = item.split("=");
    const key = itemArr[0];
    const value = decodeURI(itemArr[1]);
    // 判断当前值在query中是否存在
    if (query[key] !== undefined) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  });
  return {
    protocol,
    hostName,
    path,
    query,
  };
}
