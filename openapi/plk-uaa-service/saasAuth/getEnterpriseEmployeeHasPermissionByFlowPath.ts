import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:18100/doc.html#/default/Saas授权相关/getEnterpriseEmployeeHasPermissionByFlowPathUsingGET
*/
export default function fetchMethod(options: { params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/plk-uaa-service/saasAuth/getEnterpriseEmployeeHasPermissionByFlowPath",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
