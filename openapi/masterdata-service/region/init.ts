import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/行政区控制器/initUsingPOST
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<any>(
        {
            url: "/masterdata-service/region/init",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
