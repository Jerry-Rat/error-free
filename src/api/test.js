import request from "@/utils/request";

export function test() {
  return request({
    url: "/user/test",
    method: "get",
  });
}
