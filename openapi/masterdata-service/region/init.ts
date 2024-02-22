import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/行政区控制器/initUsingPOST
export function fetchMethod() {
    return post({
      url: "/masterdata-service/region/init",
    });
}
