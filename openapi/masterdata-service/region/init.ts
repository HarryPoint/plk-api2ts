import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/行政区控制器/initUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<any>(
        {
            url: "/masterdata-service/region/init",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
